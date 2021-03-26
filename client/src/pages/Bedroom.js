import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import bedroom from "../images/bedroom.jpg";

import styled from "styled-components";

export default function Bedroom() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(!showText);
  const Text = () => (
    <Div3>
      <h3>Your Disposables:</h3>
      <p>From Shopping to sleeping</p>
      <ol>
        <li>
          Ditch the face wipes. Did you know that 93% of all blocked sewers in
          the UK are a result of wet wipes! Why not switch to reusable cleansing
          wipes to take your makeup off and clean your face.{" "}
        </li>{" "}
        <br />
        <li>
          Most conventional cotton sheets are treated with chemicals (including
          chlorine, formaldehyde, and silicon) to keep them from shrinking,
          losing their shape, and wrinkling. Some are treated with chemicals to
          produce a sheen.{" "}
        </li>{" "}
        <br />
        <li>Plastic wrap</li> <br />
      </ol>
      <h2>Make it reusable:</h2>
      <p>Sustainable Swaps</p>
      <ol>
        <li>
          Zero Waste isn’t all about plastic and when you think about Zero Waste
          in the bedroom you might not automatically think about clothes. But if
          you think about todays fast fashion and how wasteful that is you’ll
          start to understand what Zero Waste really means. Fast fashion is the
          second dirtiest industry in the World next to big oil! If you already
          have a wardrobe full of clothes do you really need to go out and buy
          the latest new style dress?
        </li>
        <br />
        <li>
          if you’re looking for a new bedside cabinet or set of drawers you can
          spruce your old ones up with a bit of paint. If you don’t have any
          then you could scour the charity shops or freecycle papers for some
          cheap buys and upcycle them.
        </li>
        <br />
      </ol>
      <NavLink className="link" to="/homemade">
        <Button>Make your own Reusable Cotton Rounds in Homemade</Button>{" "}
      </NavLink>
      <br />
    </Div3>
  );

  return (
    <div className="kitchen-wrapper">
      <Div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <span className="card-number card-circle subtle">05</span>
            <span className="card-author subtle">Sam Smith</span>
            <h2 className="card-title">Bedroom Hack #5</h2>
            <span className="card-description subtle">
              {" "}
              You want your bedroom to be a calm and relaxing sanctuary where
              you can unwind and relax before drifting off into a restful
              night’s sleep. So, you want it to be free from clutter and nasty
              chemicals. Here are a few tips on how you can start achieving Zero
              Waste in the Bedroom.
            </span>
            <div className="card-read"></div>
            <Button onClick={onClick}>Read more</Button>
            {showText ? <Text /> : null}
            <span className="card-tag card-circle subtle">C</span>
          </div>
          <img src={bedroom} alt="" className="card-media" />
        </div>
        <div className="card-shadow"></div>
      </Div>

      <P className="return_home">
        <NavLink to="/Reusable">&lt; Return to Reusable</NavLink>
      </P>
    </div>
  );
}

const Div = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  .u-clearfix:before,
  .u-clearfix:after {
    content: " ";
    display: table;
  }

  .u-clearfix:after {
    clear: both;
  }

  .u-clearfix {
    *zoom: 1;
  }

  .subtle {
    color: #aaa;
  }

  .card-container {
    margin: 25px auto 0;
    position: relative;
    width: 692px;
    display: block;
  }

  .card {
    background-color: #fff;
    padding: 30px;
    position: relative;
    box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
    z-index: 1;
  }

  .card-body {
    float: left;
    width: 310px;
  }

  .card-number {
    margin-top: 15px;
  }

  .card-circle {
    border: 1px solid #aaa;
    border-radius: 50%;
    display: inline-block;
    line-height: 22px;
    font-size: 12px;
    height: 25px;
    text-align: center;
    width: 25px;
  }

  .card-author {
    display: block;
    font-size: 12px;
    letter-spacing: 0.5px;
    margin: 15px 0 0;
    text-transform: uppercase;
  }

  .card-title {
    font-family: "Cormorant Garamond", serif;
    font-size: 60px;
    font-weight: 300;
    line-height: 60px;
    margin: 10px 0;
  }

  .card-description {
    display: inline-block;
    font-weight: 300;
    line-height: 22px;
    margin: 10px 0;
  }

  .card-read {
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 6px;
    margin: 5px 0 20px;
    position: relative;
    text-align: right;
    text-transform: uppercase;
  }

  .card-read:after {
    background-color: #b8bddd;
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 9px;
    width: 75%;
  }

  .card-tag {
    float: right;
    margin: 5px 0 0;
  }

  .card-media {
    float: right;
    max-width: 100%;
  }

  .card-shadow {
    background-color: #fff;
    box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 1), 0 2px 50px 2px rgba(0, 0, 0, 1),
      0 0 100px 3px rgba(0, 0, 0, 0.25);
    height: 1px;
    margin: -1px auto 0;
    width: 80%;
    z-index: -1;
  }
`;

const Button = styled.button`
  background-color: #bebebe;
  border: 2px solid #fff;
  border-radius: 20px;
  color: #922c88;
  font-weight: bold;
  padding: 1.2rem;
  opacity: 0.7;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  text-transform: uppercase;
`;

const P = styled.p`
  background-color: #bebebe;
  border: 2px solid #fff;
  border-radius: 20px;
  color: #922c88;
  font-weight: bold;
  padding: 1.2rem;
  opacity: 0.7;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  text-transform: uppercase;
  margin-top: 24px;
`;

const Div3 = styled.div`
  display: inline-block;
  font-weight: 300;
  line-height: 22px;
  margin: 10px 0;
  color: #aaa;
  font-weight: bold;

  background-color: #fff;
  padding: 30px;
  position: relative;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  z-index: 1;

  ol {
    margin: 0;
    padding: 0;
    margin-left: 10px;
    column-count: 1;
  }

  li {
    margin-bottom: 5px;
  }

  h2 {
    color: #555;
    margin-bottom: 30px;
  }

  p {
    color: #922c88;
  }
`;
