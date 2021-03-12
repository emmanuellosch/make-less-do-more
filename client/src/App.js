import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import Reusable from "./pages/Reusable";
import Favorites from "./pages/Favorites";
import Homemade from "./pages/Homemade";
import Profil from "./pages/Profil";
//import Navigation from "./components/Navigation";
import Modal from "./pages/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal =
      location.state &&
      location.state.modal &&
      this.previousLocation !== location;

    return (
      <div className="app">
        <div className="menu">
          <Link className="link" to="/">
            Reusable
          </Link>
          <Link className="link" to="/favorites">
            Favorites
          </Link>
          <Link className="link" to="/homemade">
            Homemade
          </Link>
          <Link className="link" to="/profil">
            Profil
          </Link>
        </div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Reusable} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/homemade" component={Homemade} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/modal/:id">
            <Modal isModal={isModal} />
          </Route>
          <Route>{"no match"}</Route>
        </Switch>
        {isModal ? (
          <Route exact path="/modal/:id">
            <Modal isModal={isModal} />
          </Route>
        ) : null}
      </div>
    );
  }
}

export default withRouter(App);
