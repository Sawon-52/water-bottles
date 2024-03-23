import "./Cart.css";
export const Cart = ({ cart }) => {
  // console.log(cart?.img);
  return (
    <div className="cart">
      <h2>My Cart</h2>
      <div>
        {cart?.map((bottle) => (
          <img src={bottle?.img} alt="img" />
        ))}
      </div>
    </div>
  );
};
