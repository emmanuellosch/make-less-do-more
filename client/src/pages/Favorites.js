import React from "react";
import RecipeCard from "../components/RecipeCard";

export default function Favorites({ favoriteRecipes, deleteFavoriteRecipes }) {
  return (
    <div className="favorites-wrapper">
      <h1>Favorites</h1>
      {favoriteRecipes.map((favoriteRecipe) => (
        <RecipeCard
          recipe={favoriteRecipe}
          toggleRecipeToFavorites={() =>
            deleteFavoriteRecipes(favoriteRecipe.id)
          }
          isFavorite
        />
      ))}
    </div>
  );
}
