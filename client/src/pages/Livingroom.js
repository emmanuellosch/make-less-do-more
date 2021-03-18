import { NavLink } from "react-router-dom";

export default function Livingroom() {
  return (
    <div className="livingroom-wrapper">
      <h2>Livingroom</h2> <br />
      <h3>Your Disposables:</h3>
      <p>From Shopping to relaxing</p>
      <ol>
        <li>lorem</li> <br />
        <li>lorem</li> <br />
        <li>lorem</li> <br />
      </ol>
      <h2>Make it reusable:</h2>
      <p>Sustainable Swaps</p>
      <ol>
        <li>lorem</li>
        <br />
        <li>lorem</li>
        <br />
        <li>Recipe</li>

        <NavLink className="link" to="/homemade">
          <button>Homemade</button>{" "}
        </NavLink>
        <br />
      </ol>
      <NavLink to="/Reusable">&lt; Back</NavLink>
    </div>
  );
}
