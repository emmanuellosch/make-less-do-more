import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SnackWraps_beeswax from "../images/SnackWraps_beeswax.jpg";

export default function RecipeCard({ toggleRecipeToFavorites, recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  if (!recipe) return null;

  const onClick = () => setShowDetails(!showDetails);
  const Details = () => (
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
    <Card className="card-container">
      <div className="u-clearfix">
        <div className="card-body">
          <span className="card-number card-circle subtle">{recipe.id}</span>
          <span className="card-author subtle">{recipe.author}</span>
          <h2 className="card-title">{recipe.title}</h2>
          <span className="card-description subtle">{recipe.subtle}</span>
          <div className="card-read"></div>
          <Button onClick={onClick}>Explore the Details</Button>
          {showDetails ? <Details /> : null}
          <button onClick={toggleRecipeToFavorites}>
            <FontAwesomeIcon icon={faHeart} size="lg" className="font-upload" />
          </button>

          <span className="card-tag subtle"></span>
        </div>
        <img src={SnackWraps_beeswax} alt="" className="card-media" />
      </div>
      <div className="card-shadow"></div>
    </Card>
  );
}

const Div = styled.div`
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
    font-weight: bold;
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

  .font-upload:hover {
    color: red;
  }

  .font-upload {
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
