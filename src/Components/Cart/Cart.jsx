import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ cart }) => {
  // console.log(cart?.img);
  return (
    <div className="cart">
      <h2>My Cart</h2>
      <div>
        {cart?.map((bottle) => (
          <img key={bottle?.id} src={bottle?.img} alt="img" />
        ))}
      </div>
    </div>
  );
};

Cart.PropTypes = {
  cart: PropTypes.array.isRequired,
};

export { Cart };
