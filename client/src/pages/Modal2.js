import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

class Modal extends Component {
  constructor() {
    super();
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    const { isModal } = this.props;

    if (isModal) {
      disableBodyScroll(this.modalRef.current);
    }
  }

  componentWillUnmount() {
    enableBodyScroll(this.modalRef.current);
  }

  render() {
    const { id } = this.props.match.params;

    if (this.props.isModal) {
      return (
        <div
          ref={this.modalRef}
          className="modal-wrapper"
          onClick={() => this.props.history.goBack()}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h1>{id}</h1>
            <h2>Your Disposables:</h2>
            <p>From Shopping to cooking</p>
            <ol>
              <li>Avoid packing products and plastic or paper bags. </li> <br />
              <li>Compost differs from waste</li> <br />
              <li>Plastic wrap</li> <br />
            </ol>
            <h2>Make it reusable:</h2>
            <p>Sustainable Swaps</p>
            <ol>
              <li>
                Shop with reusable containers and bags: Glass jars for bulk
                items like flour, seeds, nuts, spices, tea, honey, coconut oil
                and so on Metal containers, such as Lunchbots or tiffins for
                meat and fish (Life Without Plastic sells all sorts of them)
                Cloth shopping bags and homemade cloth produce bags for produce
                and bulk foods like pasta or cat food
              </li>
              <br />
              <li>
                Zero waste means zero trash and zero recycling (because you buy
                so little in packaging). I exempt compost from the category of
                waste. That doesn’t mean I buy more food than I can eat or throw
                edible food on the compost heap. In fact, even my vegetable
                scraps don’t make it to the heap until after I’ve made broth out
                of them. Occasionally I find the odd furry lemon or a puddle of
                what-had-been-parsley in the back of the fridge. The good news
                is that compost can save the world! It sucks carbon out of the
                air and not only that, a half-inch layer of this black gold can
                still increase yields six years after its application
              </li>
              <br />
              <li>Bees wax wrap</li>

              <Link className="link" to="/homemade">
                <button>Homemade</button>{" "}
              </Link>
              <br />
            </ol>
          </div>
        </div>
      );
    } else {
      return (
        <div className="no-modal-wrapper">
          <h1>{id}</h1>
          <p></p>
        </div>
      );
    }
  }
}

export default withRouter(Modal);
