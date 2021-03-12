import React from "react";
import styled from "styled-components";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Kitchen from "./Kitchen";

const Reusable = (props) => {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <>
      <Div>
        <Link to={`${url}/Kitchen`}>Kitchen</Link>
        <Link>Bathroom</Link>
        <Link>Livingroom</Link>
        <Link>Sleepingroom</Link>
        <Link>Kidsroom</Link>
      </Div>
      <Switch>
        <Route path={`${path}/Kitchen`}>
          <Kitchen />
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
