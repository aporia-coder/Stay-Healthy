import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

// Components
import Button from "./Button";

const Overlay = ({ fruit, veg }) => {
  const fruitRef = useRef(null);
  const meatRef = useRef(null);

  useEffect(() => {
    gsap.from(fruitRef.current, {
      y: "-20%",
      duration: 0.5,
    });
    gsap.from(meatRef.current, {
      y: "-20%",
      duration: 0.5,
    });
  }, []);

  return (
    <div className="overlay flex">
      {fruit ? (
        <i class="las la-apple-alt" ref={fruitRef}></i>
      ) : (
        <i class="las la-pizza-slice" ref={meatRef}></i>
      )}
      <h5>{fruit ? "veggie" : "meat"}</h5>
      <Button
        name={fruit ? "Veggie" : "Meat"}
        className="btn-secondary"
        page="/recipes"
        diet={"vegan"}
      />
    </div>
  );
};

export default Overlay;