import React from "react";
import Header from "../../Components/Header/Header.component";
import { Link } from "react-router-dom";

import "./Goal.component.css";
import LetsGo from "../../Components/Lets-go-button/Lets-go-button.component";

const Goalpage = (props) => {
  return (
    <div>
      <Header />
      <div className="goalpage">
        <div className="upper">
          <p className="hypertext">What is your fitness goal?</p>
        </div>
        <div className="middle">
          <div className="goal-buttons">
            <Link to="/choose/intensity">
              <LetsGo func={props.func1} size="large" text="CUT" />
            </Link>
          </div>
          <div className="goal-buttons">
            <Link to="/choose/intensity">
              <LetsGo func={props.func2} size="large" text="LEAN BULK" />
            </Link>
          </div>
        </div>
        <div className="lower">
          <div className="subtitle-box">
            <div className="subtitle">
              <span className="font title">The CUT program:</span>
              <p className="font">
                -aims to lose weight without sacrificing any muscle loss or
                growth.
              </p>
              <p className="font">
                -To maximize muscle growth at a caloric deficit, eat at a
                caloric maintenance level and do cario thrice a week as the
                programs state.
              </p>
              <p className="font">
                -Please consume 75% of your bodyweight in grams of protein.
              </p>
            </div>
          </div>
          <div className="subtitle-box">
            <div className="subtitle">
              <span className="font title">The LEAN BULK program:</span>
              <p className="font">
                -aims to maximize muscle growth while maintaining a lean
                physique.
              </p>
              <p className="font">
                -To minimize fat gain and maximize muscle growth, eat at a
                caloric surplus of 200-300 calories and do cardio twice a week
                as the programs state.
              </p>
              <p className="font">
                -Please consume 75% of your bodyweight in grams of protein.
              </p>
            </div>
          </div>
        </div>
        <div className="lowest"></div>
      </div>
    </div>
  );
};
export default Goalpage;
