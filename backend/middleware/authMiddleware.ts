/*import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../types/auth";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ message: "Токен відсутній або має неправильний формат" });
      return;
    }

    const token = authHeader.split(" ")[1];
    const secretKey = process.env.JWT_SECRET || "default_secret_key";

    const decoded = jwt.verify(token, secretKey) as { id: number; email: string };

    (req as AuthenticatedRequest).user = { id: decoded.id, email: decoded.email };

    next();
  } catch (error) {
    console.error("Помилка перевірки токена:", error);
    res.status(403).json({ message: "Невірний токен або токен закінчився" });
  }
};*/
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../types/auth"; // Інтерфейс імпортовано з types/auth.ts

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ message: "Токен відсутній або має неправильний формат" });
      return;
    }

    const token = authHeader.split(" ")[1];
    const secretKey = process.env.JWT_SECRET || "default_secret_key";

    const decoded = jwt.verify(token, secretKey) as { id: number; email: string };

    (req as AuthenticatedRequest).user = { id: decoded.id, email: decoded.email };

    next();
  } catch (error) {
    console.error("Помилка перевірки токена:", error);
    res.status(403).json({ message: "Невірний токен або токен закінчився" });
  }
};