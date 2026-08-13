import express from "express";
import { recipeController } from "../controllers/recipe.controller.js";



const recipeRoutes = express.Router();

recipeRoutes.post("/generate", recipeController);

export default recipeRoutes;