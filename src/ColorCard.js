import React from "react";

function ColorCard(props) {
  return (
    <div className="col-md-3">
      <div className="card">
        <h5 className="card-title">{props.cardData.name}</h5>
        <div className=" card-body container">
          <div className="row">
            {props.cardData.colors.map((color) => {
              return (
                <div
                  className="col"
                  style={{ backgroundColor: color, height: "4rem" }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorCard;
