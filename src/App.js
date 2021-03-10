import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import FooterNavigation from "./FooterNavigation";

//Pages
import ReusableMainPage from "./pages";
import FavoritesPage from "./pages/favorites";
import HomemadePage from "./pages/homemade";
import ProfilPage from "./pages/profil";

function App() {
  return (
    <div className="App">
      <FooterNavigation />
      <main>
        <Switch>
          <Route exact path="/" render={ReusableMainPage} />
          <Route exact path="/" component={FavoritesPage} />
          <Route exact path="/" component={HomemadePage} />
          <Route exact path="/" component={ProfilPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
