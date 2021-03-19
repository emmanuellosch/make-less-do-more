import React, { useState } from "react";

import styled from "styled-components";

export default function RecipeCard({ addRecipeToFavorites, recipe }) {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(!showText);
  const Text = () => (
    <Div>
      <h2>Supplies Needed</h2>
      <ul>
        <p>{recipe.supplies}</p>
      </ul>
      <h2>How to make it!</h2>
      <p>Step One:</p>
      <ul>
        <p>{recipe.steps}</p>
      </ul>
    </Div>
  );

  return (
    <Card class="card-container">
      <div class="card u-clearfix">
        <div class="card-body">
          <span class="card-number card-circle subtle">{recipe.number}</span>
          <span class="card-author subtle">{recipe.author}</span>
          <h2 class="card-title">{recipe.title}</h2>
          <span class="card-description subtle">{recipe.subtle}</span>
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
