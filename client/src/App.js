import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reusable from "./pages/Reusable";
import Favorites from "./pages/Favorites";
import Homemade from "./pages/Homemade";
import Profil from "./pages/Profil";
import Navigation from "./components/Navigation";
import saveToLocal from "./lib/saveToLocal";
import loadFromLocal from "./lib/loadFromLocal";
import "./App.css";

function App() {
  const STORAGE_KEY = "favoriteRecipes";

  const recipes = [
    {
      number: "1",
      title: "Zero Waste - Beeswax swaps",
      author: "Emmanuel",
      subtle:
        "Have you used beeswax wraps before? They’re nifty little things. We use them all the time! Beeswax wraps are a sustainable alternative to plastic cling wrap, and a great way to reduce plastic waste in the kitchen. Even better, it’s incredibly easy to make your own homemade beeswax wraps! ",
      supplies: [
        "1) 100% cotton fabric (suggested sizes to follow)",
        "2) Scissors or pinking shears",
        "3) Beeswax pastilles or shaved block beeswax. These organic beeswax pastilles work great!",
        "4) Something to hang the wraps up to dry – such as a clothes hanger or twine and clothespins",
        "4) Parchment paper or tin foil",
        "6) Baking sheet(s) and oven",
        "7) A paint brush. This item is’t totally necessary, but is helpful to spread the wax evenly across the fabric after it melts. That said, keep in mind the brush will get covered in wax and may not be suitable for certain future projects. To clean the brush afterwards, try dipping it in hot/boiling water to remove the wax. ",
      ],
      steps:
        "    If you haven’t already, wash and dry your chosen fabric as needed. Cut the fabric into desired shapes and sizes of your choice. (See recommended sizes below.) For this particular demo, I was working with limited size options since I created these homemade beeswax wraps from an old small shirt. Plus, we already have quite a few larger wraps. If you’re feeling especially crafty, you could hem the cut edges of the fabric with a sewing machine. Another option is to cut the fabric with pinking shears to reduce fraying. The wax itself will also slow fraying. Your homemade beeswax wraps don’t need to be square! They can be rectangular or even cut into circles. ",
    },
    {
      number: "2",
      title: "Zero Waste - Coffee.",
      author: "Thomas",
      subtle:
        "For you over caffeinated coffee addicts out there, time to toss the coffee pods! Turn that vice into a virtue by making zero waste coffee.",
      supplies:
        "Start by buying your coffee in bulk.  You can typically either grind right there at the store (we tried 3 stores before we found one with a grinder so it may take a bit of perseverance) or do it yourself at home for an ultra-fresh brew – guaranteed maximum deliciousness!",
      steps:
        "To make the coffee itself, you can either use a glass / stainless steel french press, or an Italian Bialetti stovetop espresso maker. We personally LOVE the Bialetti, we’ve been using for years and love the routine of making it on the stove, is a special little morning routine! Once you’re finished, just toss the grounds into your compost bin or even directly in soil as a pH neutral fertilizer and natural pesticide. Worms love coffee grounds too!",
    },
    {
      number: "3",
      title: "Zero Waste - Kitchen Cleaning.",
      author: "Rachel",
      subtle:
        "Just because you’ve gone zero waste and avoid plastic bottles with chemical based household cleaners, doesn’t mean you can’t keep your kitchen sparkly clean. ",
      supplies:
        "To wash dishes, ditch the plastic bottle and switch to zero waste dish soap. Alternatively, you can opt for zero waste bulk soap, which you can now find at many grocery stores.",
      steps:
        "Lastly, to keep countertops clean and bacteria free with a simple, all-purpose zero waste cleaner you can make out of just vinegar diluted with water. ",
    },
  ];

  const [favoriteRecipes, setFavoriteRecipes] = useState(
    loadFromLocal(STORAGE_KEY) ?? []
  );

  useEffect(() => {
    saveToLocal(STORAGE_KEY, favoriteRecipes);
  }, [favoriteRecipes]);

  function addRecipeToFavorites(recipe) {
    setFavoriteRecipes([...favoriteRecipes, recipe]);
  }

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/Reusable" component={Reusable} />
          <Route path="/Favorites">
            <Favorites favoriteRecipes={favoriteRecipes} />
          </Route>
          <Route path="/Homemade">
            <Homemade
              addRecipeToFavorites={addRecipeToFavorites}
              recipes={recipes}
            ></Homemade>
          </Route>

          <Route path="/Profil" component={Profil} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
