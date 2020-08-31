import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import ColorDisplay from "./ColorDisplay";
import ColorEditor from "./ColorEditor";
const examples = [
  {
    name: "Panthone blue",
    colors: ["#2B04E8", "#4A40FF", "#5009FF", "#6A12E8", "#8B09FF", "#2B04E8"],
    id: 0,
  },
  {
    name: "Royal dance",
    colors: ["#40007F"],
    id: 1,
  },
  {
    name: "Panthone blue",
    colors: ["#2B04E8", "#4A40FF", "#5009FF", "#6A12E8", "#8B09FF"],
    id: 2,
  },
  {
    name: "Royal dance",
    colors: ["#40007F", "#6000BF", "#8000FF", "#200040", "#7300E5"],
    id: 3,
  },
  {
    name: "Royal dance",
    colors: ["#40007F", "#6000BF", "#8000FF", "#200040", "#7300E5"],
    id: 4,
  },
];

function Container() {
  const [cards, setCards] = useState([...examples]);
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
      <Navbar />
      <Switch>
        <Route exact path="/" component={<ColorDisplay />}>
          <ColorDisplay cards={cards} />
        </Route>
        <Route exact path="/editor" component={<ColorDisplay />}>
          <ColorEditor
            colorInfo={cards[0]}
            cardId={0}
            updateName={updateName}
            updateColor={updateColor}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
