import "./Bottle.css";
export const Bottle = ({ bottle }) => {
  const { name, img, price, seller } = bottle;

  //   console.log(bottle.name);
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={img} alt="Bottle Image" />
      <h3>Price: {price} $</h3>
      <h3 className="seller">Seller: {seller}</h3>
    </div>
  );
};
