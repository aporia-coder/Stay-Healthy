import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="flex-row navbar-container">
        <div className="navbar-logo p-l-3">
          <li>
            <Link to="/" className="navbar-name">
              StayHealthy
            </Link>
          </li>
        </div>
        <FaAlignRight className="hamburger" onClick={(e) => setOpen(!open)} />
        <ul className={open ? "side-nav" : "navbar-links"}>
          <li>
            <Link
              to="/"
              className={`${open ? "navbar-side-link" : "navbar-link"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              className={`${open ? "navbar-side-link" : "navbar-link"}`}
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              to="/calculator"
              className={`${open ? "navbar-side-link" : "navbar-link"}`}
            >
              Calorie Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${open ? "navbar-side-link" : "navbar-link"}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
