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
      name: "My recipe",
      supplies: ["honey", "paper"],
      steps: ["Cook the honey", "Cut the paper"],
    },
    {
      name: "Another recipe",
      supplies: ["water", "salt"],
      steps: ["Mix water and salt", "Shake well", "cook"],
    },
  ];

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

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
          <Route path="/Homemade" component={Homemade} />

          <Route path="/Profil" component={Profil} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
