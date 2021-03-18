import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reusable from "./pages/Reusable";
import Favorites from "./pages/Favorites";
import Homemade from "./pages/Homemade";
import Profil from "./pages/Profil";
import Navigation from "./components/Navigation";

function App() {
  const recipes = [
    {
      number: "0",
      title: "Beeswax swaps",
      author: "Emmanuel Losch",
      subtle: "Lorem ipsum",
      supplies: ["Need 1", "Need 2", "Need 3"],
      steps: ["Step 9", "Step 8", "Step 19"],
    },
    {
      number: "1",
      title: "Hallo",
      author: "Emmanuel",
      subtle: "Array",
      supplies: ["Need 6", "Need 7", "Need 8"],
      steps: ["Step 5", "Step 6", "Step 7"],
    },
  ];

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  console.log(favoriteRecipes);

  function addRecipeToFavorites(recipe) {
    setFavoriteRecipes([...favoriteRecipes, recipe]);
  }

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/Reusable" component={Reusable} />
          <Route path="/Favorites">
            <Favorites favoriteRecipes={favoriteRecipes} />
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
