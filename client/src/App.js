import { BrowserRouter, Switch, Route } from "react-router-dom";

import Reusable from "./pages/Reusable";
import Favorites from "./pages/Favorites";
import Homemade from "./pages/Homemade";
import Profil from "./pages/Profil";
import Navigation from "./components/Navigation";
import { useLocalStorage } from "./hooks/useLocalStorage";
import recipes from "./recipes/recipes";

import "./App.css";

function App() {
  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorage(
    "favoriteRecipes",
    []
  );

  const addRecipeToFavorites = (recipe) => {
    setFavoriteRecipes([...favoriteRecipes, recipe]);
  };

  const deleteFavoriteRecipes = (id) => {
    const updatedList = favoriteRecipes.filter(
      (favoriteRecipes) => favoriteRecipes.id !== id
    );
    setFavoriteRecipes(updatedList);
  };

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/Reusable" component={Reusable} />
          <Route path="/Favorites">
            <Favorites
              favoriteRecipes={favoriteRecipes}
              deleteFavoriteRecipes={deleteFavoriteRecipes}
            />
          </Route>
          <Route path="/Homemade">
            <Homemade
              addRecipeToFavorites={addRecipeToFavorites}
              recipes={recipes}
            ></Homemade>
          </Route>

          <Route path="/Profil" component={Profil} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
