import React, { useEffect } from "react";
import "./ColorDisplay.css";
import ColorCard from "./ColorCard";

function ColorDisplay(props) {
  useEffect(() => {
    props.setEditorIsActive(false);
  }, []);

  return (
    <div className=" Color-display container-fluid">
      <div className="row">
        {props.cards.map((cardData) => {
          return (
            <ColorCard
              cardData={cardData}
              deleteCard={props.deleteCard}
              key={cardData.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ColorDisplay;
