import React from "react";

export default function Favorites({ favoriteRecipes }) {
  return (
    <div className="favorites-wrapper">
      <h1>Favorites</h1>
      {favoriteRecipes.map((favoriteRecipe) => {
        <h2>{favoriteRecipe.name}</h2>;
      })}
    </div>
  );
}
