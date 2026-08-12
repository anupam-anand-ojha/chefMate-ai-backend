const recipePrompt = (recipeData) => `
You are an expert cooking assistant.

Based on the ingredients provided by the user,
suggest recipes that can be made using those ingredients.

Generate ONLY valid JSON.

Ingredients:
${recipeData.ingredients.join(", ")}

Preferences:
${recipeData.preferences || "No specific preference"}

Return 3 to 5 recipe suggestions.

Return JSON in exactly this format:

{
  "recipes": [
    {
      "name": "",
      "description": "",
      "ingredients": [],
      "steps": [],
      "time": "",
      "difficulty": ""
    }
  ]
}
`;

export default recipePrompt;