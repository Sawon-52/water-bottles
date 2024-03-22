import { useEffect } from "react";
import { useState } from "react";
import { Bottle } from "../Bottle/Bottle";
import "./Bottles.css";

export const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  console.log(bottles[0]);

  return (
    <div className="Bottls">
      <h1>Awosome Bottles Are Available </h1>
      <div className="container">
        {bottles.map((bottle) => (
          <Bottle bottle={bottle}> </Bottle>
        ))}
      </div>
    </div>
  );
};
