import React, { useState } from "react";

// Components
import Overlay from "./Overlay";

const SplitScreen = () => {
  const [toggleLeft, setToggleLeft] = useState(false);
  const [toggleRight, setToggleRight] = useState(false);
  return (
    <div className="split">
      <div
        className={`split-left${toggleLeft ? " split-left-hover" : ""}`}
        onMouseEnter={() => setToggleLeft(true)}
        onMouseLeave={() => setToggleLeft(false)}
      >
        <h5 className="split-title">veggie</h5>
        {toggleLeft && <Overlay fruit={true} />}
      </div>
      <div
        className={`split-right${toggleRight ? " split-right-hover" : ""}`}
        onMouseEnter={() => setToggleRight(true)}
        onMouseLeave={() => setToggleRight(false)}
      >
        <h5 className="split-title">meat</h5>
        {toggleRight && <Overlay veg={true} />}
      </div>
    </div>
  );
};

export default SplitScreen;
