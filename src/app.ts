import express, { Application, Request, Response } from "express";
import cors from "cors";
import { BooksRoutes } from "./controllers/books.controllers";
import { BorrowsRouter } from "./controllers/borrow.controller";

const app: Application = express();

app.use(
  cors({
    origin: "https://library-management-system-frontend-gilt.vercel.app",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

// Middleware for JSON parsing
app.use(express.json());

// Routes
app.use("/books", BooksRoutes);
app.use("/borrow", BorrowsRouter);

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library App");
});

export default app;
