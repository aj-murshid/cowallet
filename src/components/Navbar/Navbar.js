import React from "react";
import Logo from "../../images/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="Logo" />
        </div>
        <h3 className="company-name">Company Name</h3>
      </div>
      <button>SIGN IN</button>
    </div>
  );
};

export default Navbar;
