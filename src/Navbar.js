import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg dark-color background-light">
        <a className="navbar-brand" href="#">
          Color Storage
        </a>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Palettes <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
