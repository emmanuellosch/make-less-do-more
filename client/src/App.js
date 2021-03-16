import React, { useState } from "react";
import "./App.css";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import Reusable from "./pages/Reusable";
import Favorites from "./pages/Favorites";
import Homemade from "./pages/Homemade";
import Profil from "./pages/Profil";
import Modal from "./pages/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faBookmark,
  faHandHoldingHeart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app">
      <div className="menu">
        <Link className="link" to="/">
          <FontAwesomeIcon size="lg" icon={faRetweet} />
        </Link>
        <Link className="link" to="/favorites">
          <FontAwesomeIcon size="lg" icon={faBookmark} />
        </Link>
        <Link className="link" to="/homemade">
          <FontAwesomeIcon size="lg" icon={faHandHoldingHeart} />
        </Link>
        <Link className="link" to="/profil">
          <FontAwesomeIcon size="lg" icon={faUserCircle} />
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Reusable} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/homemade" component={Homemade} />
        <Route exact path="/profil" component={Profil} />
        <div
          style={BUTTON_WRAPPER_STYLES}
          onClick={() => console.log("clicked")}
        >
          <button onClick={() => setIsOpen(true)}>Open Modal</button>

          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
          </Modal>
        </div>
      </Switch>
    </div>
  );
}
