import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import ColorDisplay from "./ColorDisplay";
import ColorEditor from "./ColorEditor";
import Hero from "./Hero";

// let examples = [
//   {
//     name: "Panthone blue",
//     colors: ["#2B04E8", "#4A40FF", "#5009FF", "#6A12E8", "#8B09FF", "#2B04E8"],
//     id: "0",
//   },
//   {
//     name: "Royal dance",
//     colors: ["#40007F"],
//     id: "1",
//   },
//   {
//     name: "Panthone blue",
//     colors: ["#2B04E8", "#4A40FF", "#5009FF", "#6A12E8", "#8B09FF"],
//     id: "2",
//   },
//   {
//     name: "Royal dance",
//     colors: ["#40007F", "#6000BF", "#8000FF", "#200040", "#7300E5"],
//     id: "3",
//   },
//   {
//     name: "Royal dance",
//     colors: ["#40007F", "#6000BF", "#8000FF", "#200040", "#7300E5"],
//     id: "4",
//   },
// ];

function Container() {
  const [cards, setCards] = useState(
    localStorage.length ? JSON.parse(localStorage.getItem("colorData")) : []
  );
  const [editorIsActive, setEditorIsActive] = useState(false);

  const deleteColor = (cardId, colorIndex) => {
    const cardsCopy = [...cards];
    for (const card of cardsCopy) {
      if (card.id === cardId) {
        card.colors.splice(colorIndex, 1);
      }
    }
    setCards([...cardsCopy]);
  };
  useEffect(() => {
    localStorage.setItem("colorData", JSON.stringify(cards));
  }, [cards]);

  const addNewColor = (cardId, newColor) => {
    const cardsCopy = [...cards];
    for (const card of cardsCopy) {
      if (card.id === cardId) {
        card.colors.push(newColor);
      }
    }
    setCards([...cardsCopy]);
  };

  const addNewCard = (id) => {
    setCards([...cards, { name: "name", colors: [], id }]);
    setEditorIsActive(true);
  };

  const deleteCard = (id) => {
    setCards(
      cards.filter((card) => {
        return card.id !== id;
      })
    );

    console.log("after update locals");
  };

  const updateName = (id, newName) => {
    const cardsCopy = [...cards];
    for (const card of cardsCopy) {
      if (card.id === id) {
        card.name = newName;
        setCards([...cardsCopy]);
      }
    }
  };
  const updateColor = (cardId, colorIndex, newColor) => {
    const cardsCopy = [...cards];
    for (const card of cardsCopy) {
      if (card.id === cardId) {
        card.colors[colorIndex] = newColor;
        setCards([...cardsCopy]);
      }
    }
  };
  return (
    <div>
      <Navbar addNewCard={addNewCard} editorIsActive={editorIsActive} />
      <Switch>
        <Route exact path="/">
          {cards.length !== 0 ? (
            <ColorDisplay
              cards={cards}
              deleteCard={deleteCard}
              setEditorIsActive={setEditorIsActive}
            />
          ) : (
            <Hero />
          )}
        </Route>

        <Route exact path="/editor/:cardId">
          <ColorEditor
            cards={cards}
            updateName={updateName}
            updateColor={updateColor}
            setEditorIsActive={setEditorIsActive}
            addNewColor={addNewColor}
            deleteColor={deleteColor}
          />
        </Route>
        <Route>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
