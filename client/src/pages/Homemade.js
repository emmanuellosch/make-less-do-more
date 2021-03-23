import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

export default function Homemade({
  addRecipeToFavorites,
  deleteFavoriteRecipe,
  recipes,
}) {
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

  return (
    <div className="homemade-wrapper">
      <h1>Homemade</h1>
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
