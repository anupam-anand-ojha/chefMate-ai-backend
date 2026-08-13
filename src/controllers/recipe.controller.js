import { generateRecipe } from "../services/ai.service.js";

export const recipeController = async (req, res) => {

    try{
        const recipeData = req.body
        const result = await generateRecipe(recipeData);

        res.status(200).json(result)
    }
    catch(error){
        console.error("Recepi generation error", error);
        
        res.status(500).json({
            message: "Failed to generate recipe "
        })
    }
};