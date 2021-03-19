import React from "react";
import styled from "styled-components";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Kitchen from "./Kitchen";
import Bathroom from "./Bathroom";
import Livingroom from "./Livingroom";
import Sleepingroom from "./Sleepingroom";
import Kidsroom from "./Kidsroom";
import kitchenreusable from "../images/kitchenreusable.jpg";

const Reusable = (props) => {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <>
      <Switch>
        <Route path={`${path}/Kitchen`}>
          <Kitchen />
        </Route>
        <Route path={`${path}/Bathroom`}>
          <Bathroom />
        </Route>
        <Route path={`${path}/Livingroom`}>
          <Livingroom />
        </Route>
        <Route path={`${path}/Sleepingroom`}>
          <Sleepingroom />
        </Route>
        <Route path={`${path}/Kidsroom`}>
          <Kidsroom />
        </Route>
        <Route path="/">
          <Div activeClassName="active">
            <Link to={`${url}/Kitchen`}>Kitchen</Link>
            <Link to={`${url}/Bathroom`}>Bathroom</Link>
            <Link to={`${url}/Livingroom`}>Livingroom</Link>
            <Link to={`${url}/Sleepingroom`}>Sleepingroom</Link>
            <Link to={`${url}/Kidsroom`}>Kidsroom</Link>
          </Div>
        </Route>
      </Switch>
    </>
  );
};

export default Reusable;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-around;
  padding: 1rem;
  text-align: center;
  //background-image: url(${kitchenreusable});
  background-image: url("https://images.unsplash.com/photo-1559837957-bab8edc53c85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8emVybyUyMHdhc3RlfGVufDB8fDB8&auto=format&fit=crop&w=900&q=60");

  background-position: "center";
  background-size: "cover";
  background-repeat: "no-repeat";

  a {
    cursor: pointer;
    background-color: #bebebe;
    border: 2px solid #fff;
    border-radius: 20px;
    color: #922c88;
    font-weight: bold;
    padding: 1.2rem;
    opacity: 0.7;
    box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  }

  @media only screen and (min-width: 600px) {
    background-position: center center;
  }

  @media only screen and (min-width: 768px) {
    background-position: center center;
  }

  @media only screen and (max-width: 480px) {
    background-position: center center;
  }
`;
