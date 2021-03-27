import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Nav className="navigation">
      <NavLink activeClassName="active" className="link" exact to="/Reusable">
        Reusable
      </NavLink>
      <NavLink activeClassName="active" className="link" exact to="/Favorites">
        Favorites
      </NavLink>
      <NavLink activeClassName="active" className="link" exact to="/Homemade">
        Homemade
      </NavLink>
      <NavLink activeClassName="active" className="link" exact to="/Profil">
        Profil
      </NavLink>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.div`
  border-bottom: solid 1px #ebebeb;
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  .link {
    color: #ffffff;
    text-decoration: none;

    float: left;
    display: block;
  }

  text-align: center;
  padding: 14px 16px;
  font-size: 17px;

  .active {
    color: #922c88;
    text-decoration: none;
  }

  .navigation:hover {
    color: #922c88;
  }
`;
