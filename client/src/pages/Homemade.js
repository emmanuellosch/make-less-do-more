import styled from "styled-components";
import RecipeCard from "../components/RecipeCard";

export default function Homemade() {
  return (
    <div className="homemade-wrapper">
      <h1>Homemade</h1>

      {/*add mapp from app.js*/}
      <RecipeCard />
    </div>
  );
}
