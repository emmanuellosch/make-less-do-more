import { NavLink } from "react-router-dom";

export default function Kitchen() {
  return (
    <div className="kitchen-wrapper">
      <h2 className="card-title">Kitchen</h2> <br />
      <p className="intro">
        How to Move Towards a Zero-Waste Kitchen For starters, our goal here is
        progress, not perfection. Going completely zero-waste in the kitchen is
        a daunting thought, but with mindfulness it is not such a stretch from
        what we’re already doing.{" "}
      </p>{" "}
      <br />
      <h3 className="disposables">Your Disposables:</h3>
      <p className="subtle_disposable">From Shopping to cooking</p>
      <ol className="avoid">
        <li>Avoid packing products and plastic or paper bags. </li> <br />
        <li>Compost differs from waste</li> <br />
        <li>Plastic wrap</li> <br />
      </ol>
      <h2 className="reusable">Make it reusable:</h2>
      <p className="subtle_substainable">Sustainable Swaps</p>
      <ol className="swaps">
        <li>
          Shop with reusable containers and bags: Glass jars for bulk items like
          flour, seeds, nuts, spices, tea, honey, coconut oil and so on Metal
          containers, such as Lunchbots or tiffins for meat and fish (Life
          Without Plastic sells all sorts of them) Cloth shopping bags and
          homemade cloth produce bags for produce and bulk foods like pasta or
          cat food
        </li>
        <br />
        <li>
          Zero waste means zero trash and zero recycling (because you buy so
          little in packaging). I exempt compost from the category of waste.
          That doesn’t mean I buy more food than I can eat or throw edible food
          on the compost heap. In fact, even my vegetable scraps don’t make it
          to the heap until after I’ve made broth out of them. Occasionally I
          find the odd furry lemon or a puddle of what-had-been-parsley in the
          back of the fridge. The good news is that compost can save the world!
          It sucks carbon out of the air and not only that, a half-inch layer of
          this black gold can still increase yields six years after its
          application
        </li>
        <br />
        <p className="recipe">Bees wax wrap</p>

        <NavLink className="link" to="/homemade">
          <button>Homemade</button>{" "}
        </NavLink>
        <br />
      </ol>
      <NavLink to="/Reusable">&lt; Back</NavLink>
    </div>
  );
}
