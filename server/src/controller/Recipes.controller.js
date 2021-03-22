import { findById, saveToDb, findAll } from "../lib/databaseHelpers.js";
import Product from "../models/Product.model.js";

async function postRecipe(req, res) {
  const newProduct = new Recipe({
    name: req.body.name,
    category: req.body.category,
    title: req.body.title,
    author: req.body.author,
    subtle: req.body.subtle,
    supplies: req.body.supplies,
    steps: req.body.steps,
  });
  try {
    const recipe = await saveToDb(newRecipe);
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
}

async function getRecipes(_, res) {
  try {
    const recipes = await findAll(Recipes);
    res.json(recipes);
  } catch (error) {
    res.json(error);
  }
}

async function getRecipe(req, res) {
  try {
    const recipeId = req.params.recipeId;
    const recipe = await findById(Recipe, recipeId);
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
}

export { postRecipe, getRecipe, getRecipe };
