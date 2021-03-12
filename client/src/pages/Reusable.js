import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Reusable extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <h2>Your Rooms:</h2>
        <div className="rooms">
          <Link
            className="frontpage"
            to={{ pathname: "/modal/1", state: { modal: true } }}
          >
            Kitchen
          </Link>
          <Link
            className="frontpage"
            to={{ pathname: "/modal/2", state: { modal: true } }}
          >
            Bathroom
          </Link>
          <Link
            className="frontpage"
            to={{ pathname: "/modal/3", state: { modal: true } }}
          >
            Livingroom
          </Link>
          <Link
            className="frontpage"
            to={{ pathname: "/modal/4", state: { modal: true } }}
          >
            Sleepingroom
          </Link>
          <Link
            className="frontpage"
            to={{ pathname: "/modal/5", state: { modal: true } }}
          >
            Kidsroom
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Reusable);
