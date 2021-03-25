# RecipeCard

This is a documentation about the RecipeCard-Component of the app's page: "Homemade". In this the user will find a step-to-step tutorial to make a reusable item out of, what was before - a disposable used item.

```js
const recipe = {
  id: 1,
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
  image: "/images/SnackWraps_beeswax.jpg",
};

<RecipeCard recipe={recipe} />;
```
