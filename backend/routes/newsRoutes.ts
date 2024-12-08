import express, { Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Newspost } from "../entities/Newspost";
import { authMiddleware} from "../middleware/authMiddleware";
import {AuthenticatedRequest} from "../types/auth"
const router = express.Router();

router.get("/", async (req, res) => {
  const newspostRepository = AppDataSource.getRepository(Newspost);
  const news = await newspostRepository.find({ relations: ["author"] });
  res.json(news);
});

router.post("/", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  const { title, text } = req.body;

  if (!req.user) {
    res.status(401).json({ message: "Неавторизований доступ" });
    return;
  }

  const newspostRepository = AppDataSource.getRepository(Newspost);
  const userRepository = AppDataSource.getRepository("User");

  try {
    const author = await userRepository.findOneBy({ id: req.user.id });
    if (!author) {
      res.status(404).json({ message: "Автор не знайдений" });
      return;
    }

    const newspost = newspostRepository.create({ title, text, author });
    await newspostRepository.save(newspost);

    res.status(201).json(newspost);
  } catch (error) {
    console.error("Помилка при створенні новини:", error);
    res.status(500).json({ message: "Внутрішня помилка сервера" });
  }
});

export default router;

