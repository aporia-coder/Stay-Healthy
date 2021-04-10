import React from "react";

// Components
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container grid">
        <div className="flex">
          <h1 className="navbar-logo m-y-2">StayHealthy</h1>
          <p>Copyright &copy; 2021 Zachary Gray</p>
        </div>
        <div className="flex">
          <li>
            <Link to="/" className="footer-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/calculator" className="footer-links">
              Calorie Calculator
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="footer-links">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-links">
              Contact
            </Link>
          </li>
        </div>
        <div className="socials">
          <div>
            <i className="fab fa-github fa-2x"></i>
          </div>
          <div href="#">
            <i className="fab fa-facebook fa-2x"></i>
          </div>
          <div href="#">
            <i className="fab fa-instagram fa-2x"></i>
          </div>
          <div href="#">
            <i className="fab fa-twitter fa-2x"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
