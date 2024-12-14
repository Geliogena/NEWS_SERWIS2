import express, { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Newspost } from "../entities/Newspost";
import { authMiddleware } from "../middleware/authMiddleware";
import { AuthenticatedRequest } from "../types/auth";

const router = express.Router();


router.get("/", async (req: Request, res: Response) => {
  try {
    const newspostRepository = AppDataSource.getRepository(Newspost);
    const news = await newspostRepository.find({
      relations: ["author"], 
    });
    res.status(200).json(news);
  } catch (error) {
    console.error("Помилка при отриманні новин:", error);
    res.status(500).json({ message: "Внутрішня помилка сервера" });
  }
});

router.post("/", authMiddleware, async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  
    const { title, text, genre } = req.body;

    if (!req.user) {
      res.status(401).json({ message: "Неавторизований доступ" });
      return;
    }

    if (!title || !text || !genre) {
      res.status(400).json({ message: "Усі поля (title, text, genre) є обов'язковими" });
      return;
    }

    try {
      const newspostRepository = AppDataSource.getRepository(Newspost);

      const newspost = newspostRepository.create({
        title,
        text,
        genre,
        author: req.user, 
      });

      await newspostRepository.save(newspost);

      res.status(201).json(newspost);
    } catch (error) {
      console.error("Помилка при створенні новини:", error);
      res.status(500).json({ message: "Внутрішня помилка сервера" });
    }
  }
);

export default router;



