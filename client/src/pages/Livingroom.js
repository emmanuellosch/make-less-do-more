import { NavLink } from "react-router-dom";
import { useState } from "react";
import livingroom from "../images/livingroom.jpg";

import styled from "styled-components";

export default function Livingroom() {
  const [showDetails, setShowDetails] = useState(false);
  const onClick = () => setShowDetails(!showDetails);
  const Details = () => (
    <Div3>
      <h3>Your Disposables:</h3>
      <p>From Shopping to relaxing</p>
      <ol>
        <li>
          Avoid non-sustainable products. Especially plastic, like artificial
          plants and the like, which is probably one of the worst types of waste
          as it takes forever to break down. There’s probably a more sustainable
          version of the living decor you’re after.{" "}
        </li>{" "}
        <br />
        <li>
          Buy less stuff. Yes, that’s right. Stop buying stuff that you don’t
          really need or things that you won’t use. Don’t buy into the hype of
          having more than you need. All this in turn just goes to waste and
          ends up needlessly in the landfills.
        </li>{" "}
        <br />
        <li>
          Recycle. This goes without saying, plus it’s not that hard once you
          get in the habit. Teach the kids how to recycle and the importance of
          recycling as well.
        </li>{" "}
        <br />
      </ol>
      <h2>Make it reusable:</h2>
      <p>Sustainable Swaps</p>
      <ol>
        <li>
          Minimise. When it comes to zero waste, prevention is better than cure.
          So before you go out and by that extra coffee table or tv unit, ask
          yourself “Do you really need it?” If you don’t, than you don’t need to
          add potential waste to the room
        </li>
        <br />
        <li>
          Save energy. As always, saving energy doesn’t have to be hard. It
          could be as simple as switching off unused appliances from the
          powerpoint. Before you go to bed, turn off the unused power. This
          could help reduce your carbon footprint.
        </li>
        <br />
        <li>
          Upcycle. I love this. Turning something old into something new of
          value. That old couch, don’t throw it out! You could probably upcycle
          it and get it upholstered. You could probably do the same and upcycle
          the coffee table as well.
        </li>
      </ol>
      <NavLink className="link" to="/homemade">
        <Button>Reuse what you already have in Homemade</Button>{" "}
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
            <span className="card-author subtle">Jerry McGuire</span>
            <h2 className="card-title">Livingroom Hack #1</h2>
            <span className="card-description subtle">
              {" "}
              Honestly, a zero waste living room follows similar guidelines to a
              zero waste bedroom: make conscious furniture purchases! We do our
              best to shop secondhand for furniture, and we only buy what we
              really need. Also, we try to make do with what we already have.
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
