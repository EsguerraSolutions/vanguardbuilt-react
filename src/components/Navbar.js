import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <ul id="nav-list">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-link">
          <Link to="/services">Services</Link>
        </li>
        <li className="nav-link">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
        <li class="nav-link">
          <a
            href="http://management.vanguardbuilt.com/index.php"
            target="_blank"
            rel="noreferrer"
          >
            Admin
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
