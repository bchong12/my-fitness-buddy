import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.component.css";
import LetsGo from "../../Components/Lets-go-button/Lets-go-button.component";
import Header from "../../Components/Header/Header.component";

class Dashboard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="dashboard">
          <div className="upper">
            <p className="hypertext">Welcome to your Dashboard!</p>
          </div>
          <div className="middle">
            <div className="intensity-buttons">
              <Link to="/dashboard/calories">
                <LetsGo size="large" text="Calorie Tracker" />
              </Link>
            </div>
            <div className="intensity-buttons">
              <Link to="/dashboard/workouts">
                <LetsGo size="large" text="Workouts" />
              </Link>
            </div>
          </div>
          <div className="lower">
            <div className="subtitle-box">
              <div className="subtitle">
                <span className="font title" id="Program">
                  Program:{" "}
                  {this.props.goal
                    ? this.props.goal.toUpperCase()
                    : "No Program Selected"}
                </span>
                <span className="font title" id="Calz">
                  Calories consumed: {this.props.totalCalories}
                </span>
              </div>
            </div>
            <div className="subtitle-box">
              <div className="subtitle">
                <span className="font title" id="Programz">
                  Program:{" "}
                  {this.props.intensity
                    ? this.props.intensity.toUpperCase()
                    : "No Program Selected"}
                </span>
                <span className="font title" id="WoR">
                  Workouts Remaining: {this.props.workoutsRemaining}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
