import React, { useState } from "react";

import styled from "styled-components";

export default function RecipeCard({ addRecipeToFavorites }) {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(!showText);
  const Text = () => (
    <Div>
      <h2>Supplies Needed</h2>
      <ul>
        <li>100% cotton fabric (suggested sizes to follow)</li>
        <li>Scissors or pinking shears</li>
        <li>
          Beeswax pastilles or shaved block beeswax. These organic beeswax
          pastilles work great!
        </li>
        <li>
          Something to hang the wraps up to dry – such as a clothes hanger or
          twine and clothespins
        </li>
        <li>Parchment paper or tin foil</li>
        <li>Baking sheet(s) and oven </li>
        <li>
          A paint brush. This item is’t totally necessary, but is helpful to
          spread the wax evenly across the fabric after it melts. That said,
          keep in mind the brush will get covered in wax and may not be suitable
          for certain future projects. To clean the brush afterwards, try
          dipping it in hot/boiling water to remove the wax.{" "}
        </li>
      </ul>
      <h2>Make the Beeswax Wraps</h2>
      <p>Step One: Prep the Fabric</p>
      <ul>
        <li>
          If you haven’t already, wash and dry your chosen fabric as needed.
        </li>
        <li>
          Cut the fabric into desired shapes and sizes of your choice. (See
          recommended sizes below.) For this particular demo, I was working with
          limited size options since I created these homemade beeswax wraps from
          an old small shirt. Plus, we already have quite a few larger wraps.{" "}
        </li>
        <li>
          If you’re feeling especially crafty, you could hem the cut edges of
          the fabric with a sewing machine. Another option is to cut the fabric
          with pinking shears to reduce fraying. The wax itself will also slow
          fraying.{" "}
        </li>
        <li>
          Your homemade beeswax wraps don’t need to be square! They can be
          rectangular or even cut into circles.{" "}
        </li>
      </ul>
    </Div>
  );

  return (
    <Card class="card-container">
      <div class="card u-clearfix">
        <div class="card-body">
          <span class="card-number card-circle subtle">01</span>
          <span class="card-author subtle">Emmanuel Losch</span>
          <h2 class="card-title">Beeswax Wraps</h2>
          <span class="card-description subtle">
            Have you used beeswax wraps before? They’re nifty little things. We
            use them all the time! Beeswax wraps are a sustainable alternative
            to plastic cling wrap, and a great way to reduce plastic waste in
            the kitchen.
          </span>
          <div class="card-read"></div>
          <button onClick={onClick}>Supplies and Steps</button>
          {showText ? <Text /> : null}
          <button onClick={addRecipeToFavorites}>Add to Favorites</button>
          <span class="card-tag card-circle subtle"></span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1569600187472-a0d8b8cf606a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVlc3dheHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
          alt=""
          class="card-media"
        />
      </div>
      <div class="card-shadow"></div>
    </Card>
  );
}

const Div = styled.div`
  display: inline-block;
  font-weight: 300;
  line-height: 22px;
  margin: 10px 0;
  color: #aaa;
  background-color: #fff;
  padding: 30px;
  position: relative;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  z-index: 1;
`;

const Card = styled.div`
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
