import { useEffect } from "react";
import { useState } from "react";
import { Bottle } from "../Bottle/Bottle";
import "./Bottles.css";
import { Cart } from "../Cart/Cart";

export const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  // console.log(bottles);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  function handleAddtoCart(bottle) {
    const newCart = [...cart, bottle];
    setCart(newCart);
  }

  return (
    <div className="Bottls">
      <h1>Awosome Bottles Are Available </h1>
      <Cart cart={cart}></Cart>
      <div></div>
      <div className="container">
        {bottles.map((bottle) => (
          <Bottle bottle={bottle} handleAddtoCart={handleAddtoCart} key={bottle.id}></Bottle>
        ))}
      </div>
    </div>
  );
};
