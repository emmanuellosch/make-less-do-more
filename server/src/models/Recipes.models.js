import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  subtle: { type: String, required: true },
  supplies: { type: String, required: true },
  steps: { type: String, required: true },
});

const Recipe = mongoose.model("Recipe", RecipesSchema);

export default Recipe;
