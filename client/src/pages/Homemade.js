import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Search from "../components/search";

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

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  return (
    <div className="homemade-wrapper">
      <h1>Homemade</h1>
      <Search />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}></li>
        ))}
      </ul>

      <Switch>
        <Route path={`${path}/:id`}>
          <SingleRecipeCard />
        </Route>
        <Route exact path={`${path}/`}>
          {recipes.map((recipe) => (
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
