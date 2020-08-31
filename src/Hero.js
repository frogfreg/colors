import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Store your favorite colors!</h1>
        <p className="lead">
          Start by creating a new color card. Just click 
  <span style={{ fontWeight: "bold" }}> {" "}Add new colors</span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
