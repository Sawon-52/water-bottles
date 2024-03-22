import "./Cart.css";
export const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="cart">
      {cart?.map((bottle) => (
        <img src={bottle.img} alt="img" />
      ))}
    </div>
  );
};
