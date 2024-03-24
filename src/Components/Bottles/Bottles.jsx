import { useEffect } from "react";
import { useState } from "react";
import { Bottle } from "../Bottle/Bottle";
import "./Bottles.css";
import { Cart } from "../Cart/Cart";
import { addToLS, getLocalStorage } from "../Localstorage/Localstorage";

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
    addToLS(bottle.id);
  }

  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getLocalStorage();

      const saveCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCart.push(bottle);
        }
      }
      setCart(saveCart);
      console.log(saveCart);
    }
  }, [bottles]);

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
