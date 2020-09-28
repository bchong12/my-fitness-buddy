import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../../Components/Header/Header.component";
import LetsGo from "../../Components/Lets-go-button/Lets-go-button.component";

import "./Homepage.component.css";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="overlay" />
      <img
        className="background-img"
        src="https://images.unsplash.com/photo-1526676537331-7747bf8278fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        alt="Background homepage picture"
      />
      <p className="challenge-text">CHALLENGE YOUR LIMITS</p>
      <p className="challenge-text-sub">take your health into your own hands</p>
      <div className="lets-go-button">
        <Link to="/choose/goal">
          <LetsGo text="LET'S GO" />
        </Link>
      </div>
    </>
  );
};

export default Homepage;
