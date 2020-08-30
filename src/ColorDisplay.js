import React from "react";
import "./ColorDisplay.css";
import ColorCard from "./ColorCard";

function ColorDisplay(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        {props.cards.map((cardData) => {
          return <ColorCard cardData={cardData}  />;
        })}
      </div>
    </div>
  );
}

export default ColorDisplay;
