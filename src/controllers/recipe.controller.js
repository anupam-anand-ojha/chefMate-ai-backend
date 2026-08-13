import { generateRecipe } from "../services/ai.service";

const recipeController = async (req, res) => {
    try{
        const recipeData = req.body
        const result = generateRecipe(recipeData);

        res.status(200).json(result)
    }
    catch(error){
        console.error("Recepi generation error", error);
        
        res.status(500).json({
            message: "Failed to generate recipe "
        })
    }
};