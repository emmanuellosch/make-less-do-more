import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecycle,
  faBookmark,
  faHandHoldingHeart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
  {
    route: "/Reusable",
    icon: faRecycle,
    label: "Reusable",
  },
  {
    route: "/Favorites",
    icon: faBookmark,
    label: "Favorites",
  },
  {
    route: "/Homemade",
    icon: faHandHoldingHeart,
    label: "Homemade",
  },
  {
    route: "/Profil",
    icon: faUserCircle,
    label: "Profil",
  },
];

const Navigation = (props) => {
  return (
    <div>
      {/* Top Bar*/}
      <nav
        className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top"
        role="navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/Reusable">
            Reusable
          </a>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink to="/Favorites" className="nav-link">
                Favorites
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Homemade" className="nav-link">
                Homemade
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Profile" className="nav-link">
                Profile
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>

      {/* Bottom Tab Navigator*/}
      <nav
        className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon} />
                    <div className="botton-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Navigation;
