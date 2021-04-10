import React from "react";

// Components
import Button from "./Button";

const Overlay = ({ fruit, veg }) => {
  return (
    <div className="overlay flex">
      {fruit ? (
        <i className="las la-apple-alt p-b-2"></i>
      ) : (
        <i className="las la-pizza-slice p-b-2"></i>
      )}
      <Button
        name={fruit ? "Veggie" : "Meat"}
        value={fruit ? "vegetarian" : "alcohol-free"}
        className="btn-secondary m-t-2"
        page="/recipes"
        diet={true}
      />
    </div>
  );
};

export default Overlay;
