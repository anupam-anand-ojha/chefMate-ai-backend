import { GoogleGenAI } from "@google/genai";
import recipePrompt from "../prompts/recipe.prompt.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateRecipe = async (recipeData) => {
  const interaction = await ai.interactions.create({
    model: "gemini-3.1-flash-lite",
    input: recipePrompt(recipeData),
    response_format: {
      type: "text",
      mime_type: "application/json",
    },
  });

  return JSON.parse(interaction.output_text);
};