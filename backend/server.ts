import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./config/data-source";
import authRoutes from "./routes/authRoutes";
import newsRoutes from "./routes/newsRoutes";
import protectedRoutes from "./routes/protectedRoutes";
const app = express();
app.use(express.json());
app.use("/api/protected", protectedRoutes);
AppDataSource.initialize()
  .then(() => {
    console.log("База даних підключена");
    app.use("/api/auth", authRoutes);
    app.use("/api/newsposts", newsRoutes);

    app.listen(8000, () => {
      console.log("Сервер запущено на порту 8000");
    });
  })
  .catch((error) => console.error("Помилка підключення до бази даних:", error));