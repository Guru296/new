import React, { useState } from "react";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top banner for pricing update */}
      <div className="top-banner">
        Pricing Update: Plan prices will increase by <strong>30%</strong> on April 1st. Lock in current rates by March 31st!
      </div>

      {/* Main header */}
      <header className="navbar">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <img src="/logo.png" alt="Vizitor" />
          </div>

          {/* Hamburger menu for mobile */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation Links */}
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#">Product ▼</a>
            <a href="#">Resources ▼</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>

            {/* Move Login & Signup inside menu on small screens */}
            <div className="mobile-auth">
            <Link to="/login" className="login">Login</Link>
            <Link to="/signup" className="signup-btn">Sign up</Link>
            </div>
          </nav>

          {/* Auth buttons (Hidden on small screens) */}
          <div className="auth-buttons">
          <Link to="/login" className="login">Login</Link>
          <Link to="/signup" className="signup-btn">Sign up</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
