import React from "react";
import styled from "styled-components";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Kitchen from "./Kitchen";
import Bathroom from "./Bathroom";
import Livingroom from "./Livingroom";
import Sleepingroom from "./Sleepingroom";
import Kidsroom from "./Kidsroom";

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
          <Div>
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
  height: 80vh;
  justify-content: space-around;
  padding: 1rem;

  text-align: center;
  a {
    background-color: grey;
    border: 2px solid #fff;
    color: #fff;
    padding: 1.2rem;
  }
`;
