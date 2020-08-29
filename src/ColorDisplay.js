import React from "react";
import "./ColorDisplay.css";
import ColorCard from "./ColorCard";

const cardData = {
  name: "Panthone blue",
  colors: ["#2B04E8", "#4A40FF", "#5009FF", "#6A12E8", "#8B09FF"],
};

function ColorDisplay() {
  return (
    <div className="container-fluid">
      <div className="row">
        <ColorCard cardData={cardData} />
      </div>
    </div>
  );
}

export default ColorDisplay;
