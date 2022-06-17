import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1655408480/Ibeji%20Foundation/logo_copy_rwgmt9.png" className="logo-size" alt="" />
      </div>
      <div className="navbar-btn">
        <Link to="/" className="Nlink">
          <a>Home</a>
        </Link>
        <div className="dropdown">
          <Link to="/aboutus" className="Nlink abt-pos">
            <a>About Us</a>
          </Link>
          <div className="dropdown-content">
            <a href="history" className="about-link">
              Our History
            </a>
            <a href="#mission" className="about-link">
              Mission
            </a>
            <a href="#relief" className="about-link">
              Relief Activiies
            </a>
            <a href="#partners" className="about-link">
              Partners
            </a>
            <a href="#sponsor" className="about-link">
              Sponsor
            </a>
          </div>
        </div>
        <Link to="/thefoundation" className="Nlink">
          <a>The Foundation</a>
        </Link>
        <Link to="/project" className="Nlink">
          <a>Project</a>
        </Link>
        <div className="dropdown">
          <Link to="#" className=" dropbtn hamburger">
            <a>
              <GiHamburgerMenu />
            </a>
          </Link>
          <div className="dropdown-content">
            <Link to="/" className="Nlink">
              <a>Home</a>
            </Link>
            <Link to="/aboutus" className="Nlink">
              <a>About Us</a>
            </Link>
            <Link to="/thefoundation" className="Nlink">
              <a>The Foundation</a>
            </Link>
            <Link to="/project" className="Nlink">
              <a>Project</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
