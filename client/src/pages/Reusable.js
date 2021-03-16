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
            to={{ pathname: "/modal/Kitchen", state: { modal: true } }}
          >
            Kitchen
          </Link>
          <Link
            className="frontpage"
            to={{ pathname: "/modal/Bathroom", state: { modal: true } }}
          >
            Bathroom
          </Link>
          <Link
            className="frontpage"
            to={{ pathname: "/modal/Livingroom", state: { modal: true } }}
          >
            Livingroom
          </Link>
          <Link
            className="frontpage"
            to={{ pathname: "/modal/Sleepingroom", state: { modal: true } }}
          >
            Sleepingroom
          </Link>
          <Link
            className="frontpage"
            to={{ pathname: "/modal/Kidsroom", state: { modal: true } }}
          >
            Kidsroom
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Reusable);
