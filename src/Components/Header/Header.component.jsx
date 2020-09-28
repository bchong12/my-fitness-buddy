import React from "react";

import { Link } from "react-router-dom";

import "./Header.component.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo-img"
        src="https://www.flaticon.com/svg/static/icons/svg/2563/2563288.svg"
        alt="logo"
      />
      <Link style={{ textDecoration: "none" }} to="/">
        <h1 className="logo">MyFitnessBuddy</h1>
      </Link>
    </div>
  );
};

export default Header;
