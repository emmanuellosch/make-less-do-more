import React from "react";
import styled from "styled-components";

const Reusable = (props) => {
  return (
    <Div>
      <div className="d-flex flex-column">
        <div className="p-5 column text-left">
          {" "}
          <a href="./components/Kitchenlist">link</a>Kitchen
        </div>
        <div className="p-5 column text-left">Bathroom</div>
        <div className="p-5 column text-left">Livingroom</div>
      </div>
      <div className="d-flex flex-column-reverse">
        <div className="p-5 column text-left">Sleepingroom</div>
        <div className="p-5 column text-left">Kidsroom</div>
      </div>
    </Div>
  );
};

export default Reusable;

const Div = styled.div`
  .d-flex div {
    padding: 1rem;
    background-color: grey;
    border: 2px solid #fff;
    color: #fff;
    text-align: center;
  }
`;
