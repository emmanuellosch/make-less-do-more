import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import kidsroom from "../images/kidsroom.jpg";

import styled from "styled-components";

export default function Kidsroom() {
  const [showDetails, setShowDetails] = useState(false);
  const onClick = () => setShowDetails(!showDetails);
  const Details = () => (
    <Div3>
      <h3>Your Disposables:</h3>
      <p>From Shopping to playing</p>
      <ol>
        <li>
          Back to the classics. In a world where the toys kids play with are
          wrapped, or made out of thick plastic— lets start refusing these types
          of children's gifts. Instead request books from family members or
          heirloom gifts like teddy bears and wooden toys. If your child has a
          birthday party to go to, ask the family not to gift yours with any of
          the party favors (pretty much always made out of plastic). Yes, this
          might be a hard thing for the child to deal with when the other kids
          are getting certain gifts but as long as you're involving the child in
          the learning process of being zero waste, chances are she/he is going
          to feel more empowered in the long run. When giving gifts, be mindful
          if the present is going to be thrown away or if it will be kept for
          years to come.{" "}
        </li>{" "}
        <br />
        <li>
          Babies needs lots of baths and washing which means parents go through
          lots of soap bottles. To eliminate the trash build up from the early
          years of sink baths, use a bar instead of soap in a plastic bottle.
          Not only is the soap going to remain more pure because it has not been
          sitting in plastic but may be made with cleaner ingredients. You can
          easily store the soap in a jar or cloth to keep it from becoming messy
          and there is no trash once it is done. Companies like Wild Carrot and
          Soap and Salve make some great lines of reusable and package-free
          organic baby soaps, balms and salves.{" "}
        </li>{" "}
        <br />
        <li>
          Cloth diapers have come a long way. Convenience is not the name of the
          game with cloth diapers. There is no doubt that using disposable
          diapers is an easier and faster process. However, consider the vast
          amount of waste that comes from constantly changing and throwing away
          diapers.{" "}
        </li>{" "}
        <br />
      </ol>
      <h2>Make it reusable:</h2>
      <p>Sustainable Swaps</p>
      <ol>
        <li>
          This has already been mentioned a lot in these tips for zero-waste
          living with kids but it's one of the most important ways to help in
          reducing our waste. This concept can become a rule, the
          no-plastic-in-the-house rule! Though this can feel extreme, when it is
          implemented creatively, it can become a family activity.
        </li>
        <br />
        <li>
          Shopping secondhand or for wooden toys is a great way to move towards
          plastic-free (and even zero waste) fun, as is shopping for books and
          card games your children will love. Experience gifts, like tickets to
          a concert or membership to the zoo, can be a big hit. And of course,
          get creative! Crafting together using existing craft supplies is a fun
          way to bond and let your imaginations run wild.
        </li>
        <br />
      </ol>
      <NavLink className="link" to="/homemade">
        <Button>Make your own toys wraps in Homemade</Button>{" "}
      </NavLink>
      <br />
    </Div3>
  );

  return (
    <div className="kitchen-wrapper">
      <Div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <span className="card-number card-circle subtle">03</span>
            <span className="card-author subtle">Miriam Tylor</span>
            <h2 className="card-title">Kidsroom Hack #3</h2>
            <span className="card-description subtle">
              {" "}
              Be in nature as often as possible! This is the most long lasting,
              zero-waste method with kids. In a world with so many distractions,
              helping to facilitate the time that young children spend in nature
              can lead to them being an advocate for a more sustainable life
              later on.
            </span>
            <div className="card-read"></div>
            <Button onClick={onClick}>Read more</Button>
            {showDetails ? <Details /> : null}
            <span className="card-tag card-circle subtle">C</span>
          </div>
          <img src={kidsroom} alt="" className="card-media" />
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
