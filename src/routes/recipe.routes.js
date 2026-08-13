import express from "express";
import { recipeController } from "../controllers/recipe.controller.js";



const recipeRoutes = express.Router();

router.post("/generate", recipeController);

export default recipeRoutes;