import React from "react";

import { Link } from "react-router-dom";

import "./Header-dashboard.component.css";

const HeaderDashboard = () => {
  return (
    <div className="header-dashboard">
      <div className="left">
        <img
          className="logo-img"
          src="https://www.flaticon.com/svg/static/icons/svg/2563/2563288.svg"
          alt="logo"
        />
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 className="logo">MyFitnessBuddy</h1>
        </Link>
      </div>
      <div className="right">
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          <nav className="dashboard-nav-link">Dashboard</nav>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/dashboard/calories">
          <nav className="dashboard-nav-link">Calorie Tracker</nav>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/dashboard/workouts">
          <nav className="dashboard-nav-link">Workouts</nav>
        </Link>
      </div>
    </div>
  );
};

export default HeaderDashboard;
