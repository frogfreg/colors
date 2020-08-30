import React from "react";
import "./ColorCard.css";

function ColorCard(props) {
  return (
    <div className="col-md-3">
      <div className="card">
        <h5 className="card-title">
          {props.cardData.name}{" "}
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-pencil"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
            />
          </svg>
        </h5>
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
