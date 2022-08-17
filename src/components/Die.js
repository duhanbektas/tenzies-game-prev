import React from "react";

export default function Die(props) {

  return (
    // if it's held (isHeld === true), its background color
    // changes to a light green
    <div
      className={props.isHeld ? "die-face isHeld" : "die-face"}
      onClick={props.holdDice}
      style={{
        backgroundImage: `url(${dieFace})`,
        backgroundSize: "cover",
      }}
    >
      {/* <h2 className="die-num">{props.value}</h2> */}
    </div>
  );
}
