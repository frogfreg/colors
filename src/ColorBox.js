import React, { useState } from "react";

function ColorBox(props) {
  const [colorValue, setColorValue] = useState(props.color);
  return (
    <div className="col-md colors" style={{ backgroundColor: props.color }}>
      <input
        onChange={(event) => {
          setColorValue(event.target.value);
        }}
        type="text"
        className="form-control"
        value={colorValue}
      />
      <button
        onClick={() => {
          props.updateColor(props.cardId, props.index, colorValue);
          console.log(props);
        }}
        class="btn btn-primary mr-3 ml-3"
      >
        Update
      </button>
    </div>
  );
}

export default ColorBox;
