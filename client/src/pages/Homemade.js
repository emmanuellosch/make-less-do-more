import styled from "styled-components";
import RecipeCard from "../components/RecipeCard";

export default function Homemade({
  addRecipeToFavorites,
  deleteFavoriteRecipe,
  recipes,
}) {
  return (
    <div className="homemade-wrapper">
      <h1>Homemade</h1>
      {recipes.map((recipe) => (
        <RecipeCard
          addRecipeToFavorites={() => addRecipeToFavorites(recipe)}
          recipe={recipe}
        />
      ))}{" "}
    </div>
  );
}
