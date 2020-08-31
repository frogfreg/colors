import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg dark-color background-light">
        <Link className="navbar-brand" to="/">
          Color Storage
        </Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Add new palette <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
