import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipe.routes.js";

const app = express();

app.use(cors({
    origin: [
        'http://localhost:8000',
    ],
    credentials: true
}));
app.use(express.json());

app.use("/api/recipe", recipeRoutes);

export default app;