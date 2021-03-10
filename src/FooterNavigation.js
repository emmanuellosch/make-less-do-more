import React from "react";
import { NavLink } from "react-router-dom";

function FooterNavigation() {
  return (
    <footer className="footer">
      <nav className="navigation">
        <NavLink activeClassName="active" className="link" exact to="/">
          Reusable
        </NavLink>
        <NavLink
          activeClassName="active"
          className="link"
          to="./pages/favorites"
        >
          Favorites
        </NavLink>
        <NavLink
          activeClassName="active"
          className="link"
          to="./pages/homemade"
        >
          Homemade
        </NavLink>
        <NavLink activeClassName="active" className="link" to="./pages/profil">
          Profile
        </NavLink>
      </nav>
    </footer>
  );
}

export default FooterNavigation;
