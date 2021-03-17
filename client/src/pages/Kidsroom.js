import { NavLink } from "react-router-dom";

export default function Kidsroom() {
  return (
    <div className="kidsroom-wrapper">
      <h2>Kidsroom</h2> <br />
      <h3>Your Disposables:</h3>
      <p>From Shopping to playing</p>
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