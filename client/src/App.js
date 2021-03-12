import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reusable from "./pages/Reusable";
import Favorites from "./pages/Favorites";
import Homemade from "./pages/Homemade";
import Profil from "./pages/Profil";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/Reusable" component={Reusable} />
          <Route path="/Favorites" component={Favorites} />
          <Route path="/Homemade" component={Homemade} />
          <Route path="/Profil" component={Profil} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
