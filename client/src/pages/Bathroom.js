import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import tooth from "../images/tooth.jpg";

import styled from "styled-components";

export default function Bathroom() {
  const [showDetails, setShowDetails] = useState(false);
  const onClick = () => setShowDetails(!showDetails);
  const Details = () => (
    <Div3>
      <h2>Your Disposables:</h2>
      <p>From Shopping to bodycare</p>
      <ol>
        <li>
          Toothbrushes are not recyclable and their packaging may not be in your
          area either. With how frequently we switch them out, a sustainable
          option is necessary and easy to swap in.{" "}
        </li>{" "}
        <br />
        <li>
          Soft tubes are not accepted for recycling in many areas, making this
          an item that is likely to end up in the trash when it’s empty.
        </li>{" "}
        <br />
        <li>
          Conventional products come in plastic bottles or soft tubes that are
          difficult to recycle, not mention that new bottles must be purchased
          time and again. If you have more than one bottle on the go, you may
          also have yourself some unnecessary shower clutter.
        </li>{" "}
        <br />
      </ol>
      <h2>Make it reusable:</h2>
      <p>Sustainable Swaps</p>
      <ol>
        <li>
          Swap: Bamboo toothbrushes are biodegradable and compostable, with
          bamboo being a sustainable crop. They are even available in children’s
          sizes! Keep in mind that nylon bristles are not biodegradable and must
          be disposed of separately, while natural fibre bristles do not last as
          long.
        </li>
        <br />
        <li>
          Swap: There are a few great DIY recipes for toothpaste and
          toothpowders here, and many bulk shops are now offering refills in
          your own container. Commercial options in glass jars and recyclable
          metal tubes are hitting mainstream stores as well. Be sure to speak to
          your dentist about what sustainable option is best for you!
        </li>
        <br />
        <li>
          Swap: No matter your lifestyle or hair type, there is bound to be a
          sustainable option that works for you. Both shampoo and conditioner
          can be found in bars, with ingredients to suit your needs. Your local
          bulk store may offer refills, or you may choose a subscription service
          that accepts empty bottles in return.
        </li>
      </ol>
      <NavLink className="link" to="/homemade">
        <Button>Make your own soap in Homemade</Button>{" "}
      </NavLink>
      <br />
    </Div3>
  );

  return (
    <div className="kitchen-wrapper">
      <Div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <span className="card-number card-circle subtle">01</span>
            <span className="card-author subtle">John Smith</span>
            <h2 className="card-title">Bathroom Hack #1</h2>
            <span className="card-description subtle">
              {" "}
              Like the kitchen, the bathroom can be a big source of waste. It is
              typically home to a myriad of consumables, disposables, and
              impulse buys. If you have ever done a full bathroom clean out, you
              know just how much stuff can be packed into a little room!
            </span>
            <div className="card-read"></div>
            <Button onClick={onClick}>Read more</Button>
            {showDetails ? <Details /> : null}
            <span className="card-tag card-circle subtle">C</span>
          </div>
          <img src={tooth} alt="" className="card-media" />
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
