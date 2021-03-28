import React from "react";
import RecipeCard from "../components/RecipeCard";

export default function Favorites({ favoriteRecipes, deleteFavoriteRecipes }) {
  return (
    <div className="favorites-wrapper">
      <p className="date">
        <span className="date_span">Zero</span>
      </p>
      <h1>Favorites</h1>
      <p className="waste waste_span">
        <span className="date_span">Waste</span>
      </p>
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
