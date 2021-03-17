import styled from "styled-components";
import RecipeCard from "../components/RecipeCard";

export default function Homemade() {
  return (
    <div className="homemade-wrapper">
      <h1>Homemade</h1>
      <input
        placeholder="Find your Recipe"
        onChange={(e) => console.log(e.target.value)}
        value=""
      />
      <button type="submit">
        <span>Find something reusable</span>
      </button>
      {/*add mapp from app.js*/}
      <RecipeCard />
    </div>
  );
}
