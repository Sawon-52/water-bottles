import "./Bottle.css";
export const Bottle = ({ bottle, handleAddtoCart }) => {
  const { name, img, price, seller } = bottle;

  // console.log(handleAddtoCart);

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={img} alt="Bottle Image" />
      <h3>Price: {price} $</h3>
      <h3 className="seller">Seller: {seller}</h3>
      <button onClick={() => handleAddtoCart(bottle)}>Add to cart</button>
    </div>
  );
};
