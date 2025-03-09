import React, { useState } from "react";
import { Link } from "react-scroll"; // Import from react-scroll
import "./Navbar.css"; // Import styles
import logo from "../assets/logo.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">
        <img src={logo} alt="Logo" />
      </h2>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
