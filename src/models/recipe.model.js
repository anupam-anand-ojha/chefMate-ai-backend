import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    ingredients: {
      type: [String],
      required: true,
    },

    steps: {
      type: [String],
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      required: true,
    },

    preferences: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;