import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faBookmark,
  faHandHoldingHeart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <Nav className="navigation">
      <NavLink activeClassName="active" className="link" exact to="/Reusable">
        {" "}
        <FontAwesomeIcon icon={faRetweet} />
        Reusable
      </NavLink>
      <NavLink activeClassName="active" className="link" exact to="/Favorites">
        <FontAwesomeIcon icon={faBookmark} />
        Favorites
      </NavLink>
      <NavLink activeClassName="active" className="link" exact to="/Homemade">
        <FontAwesomeIcon icon={faHandHoldingHeart} />
        Homemade
      </NavLink>
      <NavLink activeClassName="active" className="link" exact to="/Profil">
        <FontAwesomeIcon icon={faUserCircle} />
        Profil
      </NavLink>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  border-bottom: solid 1px #ebebeb;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 55px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
  z-index: 3;
  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 13px;
    color: #444444;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
  }

  .active {
    color: #922c88;
  }

  link:hover {
    background-color: #eeeeee;
  }
`;
