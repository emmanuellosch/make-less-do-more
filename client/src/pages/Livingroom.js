import { NavLink } from "react-router-dom";
import { useState } from "react";
import livingroom from "../images/livingroom.jpg";

import styled from "styled-components";

export default function Livingroom() {
  const [showDetails, setShowDetails] = useState(false);
  const onClick = () => setShowDetails(!showDetails);
  const Details = () => (
    <div>
      <h3>Your Disposables:</h3>
      <p>From Shopping to cooking</p>
      <ol>
        <li>Avoid packing products and plastic or paper bags. </li> <br />
        <li>Compost differs from waste</li> <br />
        <li>Plastic wrap</li> <br />
      </ol>
      <h2>Make it reusable:</h2>
      <p>Sustainable Swaps</p>
      <ol>
        <li>
          Shop with reusable containers and bags: Glass jars for bulk items like
          flour, seeds, nuts, spices, tea, honey, coconut oil and so on Metal
          containers, such as Lunchbots or tiffins for meat and fish (Life
          Without Plastic sells all sorts of them) Cloth shopping bags and
          homemade cloth produce bags for produce and bulk foods like pasta or
          cat food
        </li>
        <br />
        <li>
          Zero waste means zero trash and zero recycling (because you buy so
          little in packaging). I exempt compost from the category of waste.
          That doesn’t mean I buy more food than I can eat or throw edible food
          on the compost heap. In fact, even my vegetable scraps don’t make it
          to the heap until after I’ve made broth out of them. Occasionally I
          find the odd furry lemon or a puddle of what-had-been-parsley in the
          back of the fridge. The good news is that compost can save the world!
          It sucks carbon out of the air and not only that, a half-inch layer of
          this black gold can still increase yields six years after its
          application
        </li>
        <br />
      </ol>
      <NavLink className="link" to="/homemade">
        <Button>Reuse what you already have in Homemade</Button>{" "}
      </NavLink>
      <br />
    </div>
  );

  return (
    <div className="kitchen-wrapper">
      <Div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <span className="card-number card-circle subtle">01</span>
            <span className="card-author subtle">John Smith</span>
            <h2 className="card-title">Livingroom Hack #1</h2>
            <span className="card-description subtle">
              {" "}
              How to Move Towards a Zero-Waste Kitchen For starters, our goal
              here is progress, not perfection. Going completely zero-waste in
              the kitchen is a daunting thought, but with mindfulness it is not
              such a stretch from what we’re already doing.
            </span>
            <div className="card-read"></div>
            <Button onClick={onClick}>Read more</Button>
            {showDetails ? <Details /> : null}
            <span className="card-tag card-circle subtle">C</span>
          </div>
          <img src={livingroom} alt="" className="card-media" />
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
    font-size: 53px;
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
