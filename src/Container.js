import React from "react";
import Navbar from "./Navbar";
import ColorDisplay from "./ColorDisplay";
import ColorEditor from "./ColorEditor";
const cardData = [
  {
    name: "Panthone blue",
    colors: ["#2B04E8", "#4A40FF", "#5009FF", "#6A12E8", "#8B09FF"],
  },
  {
    name: "Royal dance",
    colors: ["#40007F"],
  },
  {
    name: "Panthone blue",
    colors: ["#2B04E8", "#4A40FF", "#5009FF", "#6A12E8", "#8B09FF"],
  },
  {
    name: "Royal dance",
    colors: ["#40007F", "#6000BF", "#8000FF", "#200040", "#7300E5"],
  },
  {
    name: "Royal dance",
    colors: ["#40007F", "#6000BF", "#8000FF", "#200040", "#7300E5"],
  },
];

function Container() {
  return (
    <div>
      <Navbar />
      {/* <ColorDisplay /> */}
      <ColorEditor colorInfo={cardData[0]} />
    </div>
  );
}

export default Container;
