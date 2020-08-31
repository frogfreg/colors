import React, { useState } from "react";
import "./ColorEditor.css";
import ColorBox from "./ColorBox";
import { useParams } from "react-router-dom";
function ColorEditor(props) {
  const [newColorInput, setNewColorInput] = useState("");
  const [nameEdit, setNameEdit] = useState(false);
  let { cardId } = useParams();
  cardId = parseInt(cardId);
  const colorInfo = props.cards.find((card) => {
    return card.id === cardId;
  });
  const [newName, setNewName] = useState(colorInfo.name);

  return (
    <div className="container">
      <div className="row">
        {nameEdit ? (
          <form className="form-inline">
            <input
              onChange={(event) => {
                setNewName(event.target.value);
              }}
              type="text"
              className="form-control"
              value={newName}
            />
            <button
              onClick={(event) => {
                event.preventDefault();
                props.updateName(colorInfo.id, newName);
                setNameEdit(false);
              }}
              class="btn btn-primary mr-3 ml-3"
            >
              Update
            </button>
          </form>
        ) : (
          <h2>
            {colorInfo.name}
            <svg
              onClick={() => {
                setNameEdit(true);
              }}
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
          </h2>
        )}
      </div>

      <div className="row color-show">
        {colorInfo.colors.map((color, index) => {
          return (
            <ColorBox
              color={color}
              index={index}
              updateColor={props.updateColor}
              cardId={cardId}
            />
          );
        })}
      </div>
      <div className="row mt-3">
        <form>
          <div className="col">
            <form class="form-inline">
              <label htmlFor="newColorInput">Add a new Color</label>
              <input
                onChange={(event) => {
                  setNewColorInput(event.target.value);
                }}
                type="text"
                class="form-control mb-2 mr-sm-2"
                id="newColorInput"
                placeholder="new hex color"
                value={newColorInput}
              />

              <div
                className="sample"
                style={{ backgroundColor: newColorInput }}
              ></div>

              <button class="btn btn-primary mr-3 ml-3">Add</button>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ColorEditor;
