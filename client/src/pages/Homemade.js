import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import RecipeCard from "../components/recipeCard";
import Search from "../components/search";
import Announcer from "../components/announcer";

export default function Homemade({ addRecipeToFavorites, recipes }) {
  let { path } = useRouteMatch();

  const SingleRecipeCard = () => {
    let { id } = useParams();

    const recipe = id
      ? recipes.find((recipe) => recipe.id === parseInt(id))
      : null;

    return recipe ? (
      <RecipeCard
        recipe={recipe}
        toggleRecipeToFavorites={() => addRecipeToFavorites(recipe)}
      />
    ) : null;
  };

  const filterRecipes = (recipes, query) => {
    if (!query) {
      return recipes;
    }

    return recipes.filter((recipe) => {
      const recipeTitle = recipe.title.toLowerCase();
      return recipeTitle.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredRecipes = filterRecipes(recipes, searchQuery);
  return (
    <div className="homemade-wrapper">
      <h1>Homemade</h1>

      <Announcer message={`${filteredRecipes.length} recipes`} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.key}>{recipe.title}</li>
        ))}
      </Ul>

      <Switch>
        <Route path={`${path}/:id`}>
          <SingleRecipeCard />
        </Route>
        <Route exact path={`${path}/`}>
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              toggleRecipeToFavorites={() => addRecipeToFavorites(recipe)}
              recipe={recipe}
            />
          ))}
        </Route>
      </Switch>
    </div>
  );
}

const Ul = styled.ul`
  border-radius: 20px;
  color: #922c88;
  font-weight: bold;
  padding: 1.2rem;
  opacity: 0.7;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  text-transform: uppercase;
  width: 100%;
`;
