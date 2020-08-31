import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Navbar(props) {
  const newId = uuidv4();
  return (
    <div>
      <nav className="navbar navbar-expand-lg dark-color background-light">
        <Link className="navbar-brand" to="/">
          Color Storage
        </Link>

        <ul className="navbar-nav mr-auto">
          {props.editorIsActive ? null : (
            <li className="nav-item active">
              <Link
                onClick={() => {
                  props.addNewCard(newId);
                }}
                to={`/editor/${newId}`}
                className="nav-link"
              >
                Add new colors <span className="sr-only">(current)</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
