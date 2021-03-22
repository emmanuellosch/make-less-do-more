import express from "express";
import {
  postRecipe,
  getRecipes,
  getRecipe,
} from "../controller/recipe.controller.js";

const router = express.Router();

router.get("/recipe", getRecipes);
router.get("/recipes/:recipeId", getRecipe);

router.post("/recipes", postRecipe);

export default router;
