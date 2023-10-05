import React from "react";
import "./Navbar.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <span>A</span>ttendance <span>T</span>racking <span>S</span>ystem
        </div>
        <ul className="navbar">
          <li className="nav-item">
            <a href="">Login</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
