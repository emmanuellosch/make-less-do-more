import { NavLink } from "react-router-dom";

export default function Bathroom() {
  return (
    <div className="bathroom-wrapper">
      <h1>Bathroom</h1>
      <NavLink to="/Reusable">&lt; Back</NavLink>
    </div>
  );
}
