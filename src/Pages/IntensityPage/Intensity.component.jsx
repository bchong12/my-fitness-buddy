import React from "react";
import Header from "../../Components/Header/Header.component";
import LetsGo from "../../Components/Lets-go-button/Lets-go-button.component";

import "./Intensity.component.css";

import { Link } from "react-router-dom";

const IntensityPage = (props) => {
  return (
    <div>
      <Header />
      <div className="intensitypage">
        <div className="upper">
          <p className="hypertext">What is your fitness experience level?</p>
        </div>
        <div className="middle">
          <div className="intensity-buttons">
            <Link to="/dashboard">
              <LetsGo func={props.func1} size="large" text="BEGINNER" />
            </Link>
          </div>
          <div className="intensity-buttons">
            <Link to="/dashboard">
              <LetsGo func={props.func2} size="large" text="INTERMEDIATE" />
            </Link>
          </div>
          <div className="intensity-buttons">
            <Link to="/dashboard">
              <LetsGo func={props.func3} size="large" text="ADVANCED" />
            </Link>
          </div>
        </div>
        <div className="lower">
          <div className="subtitle-box-intense">
            <div className="subtitle">
              <span className="font title">The BEGINNER program:</span>
              <p className="font">-Two Workouts A Week</p>
              <p className="font">-SPLITS: Both Days Full Body Workouts</p>
              <p className="font">
                -aims to teach the beginner exercises while maximizing early
                gains
              </p>
            </div>
          </div>
          <div className="subtitle-box-intense">
            <div className="subtitle">
              <span className="font title">The INTERMEDIATE program:</span>
              <p className="font">-Four Workouts a week</p>
              <p className="font">
                -SPLITS: Two Cycles of Back, Bicep, Leg & Chest, Shoulder,
                Tricep
              </p>
              <p className="font">
                -aims to expand on experience in lifting with a standard two
                cycle split
              </p>
            </div>
          </div>
          <div className="subtitle-box-intense">
            <div className="subtitle">
              <span className="font title">The ADVANCED program:</span>
              <p className="font">-Four Workouts a week</p>
              <p className="font">
                -SPLITS: Two Cycles of Back, Bicep & Chest, Tricep & Shoulder,
                Leg
              </p>
              <p className="font">
                -aims to increase intensity on compound lifts on a lighter three
                day split
              </p>
            </div>
          </div>
        </div>
        <div className="lowest"></div>
      </div>
    </div>
  );
};

export default IntensityPage;
