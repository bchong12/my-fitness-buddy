import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import HeaderDashboard from "../../Components/Header-dashboard/Header-dashboard.component";

import "./WorkoutPage.component.css";

class WorkoutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [],
      toggleBoxOne: false,
      workoutsRemaining: 0,
    };
  }

  componentDidMount() {
    axios
      .get(`/api/workouts/${this.props.intensity}`)
      .then((res) => {
        if (res.data) {
          this.setState({
            workouts: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <HeaderDashboard />
        <div className="workout-page">
          <div className="workout-box">
            <div className="workout-upper">
              <p className="workout-title">
                {this.state.workouts.intensity &&
                  this.state.workouts.intensity.toUpperCase()}
              </p>
            </div>
            {this.state.workouts !== [] ? (
              <div>
                {this.state.workouts.day1 && (
                  <div className="day-box">
                    <button
                      className="workout-button"
                      onClick={() => {
                        const newObj = { ...this.state.workouts };
                        for (const key in newObj) {
                          if (key === "day1") {
                            delete newObj.day1;
                          }
                        }
                        this.setState({
                          workouts: newObj,
                        });
                      }}
                    >
                      x
                    </button>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/dashboard/workouts/exercises"
                    >
                      <p className="workout-number">Workout One</p>
                    </Link>
                  </div>
                )}
                {this.state.workouts.day2 && (
                  <div className="day-box">
                    <button
                      className="workout-button"
                      onClick={() => {
                        const newObj = { ...this.state.workouts };
                        for (const key in newObj) {
                          if (key === "day2") {
                            delete newObj.day2;
                          }
                        }
                        this.setState({
                          workouts: newObj,
                        });
                      }}
                    >
                      x
                    </button>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/dashboard/workouts/exercises"
                    >
                      <p className="workout-number">Workout Two</p>
                    </Link>
                  </div>
                )}
                {this.state.workouts.day3 && (
                  <div className="day-box">
                    <button
                      className="workout-button"
                      onClick={() => {
                        const newObj = { ...this.state.workouts };
                        for (const key in newObj) {
                          if (key === "day3") {
                            delete newObj.day3;
                          }
                        }
                        this.setState({
                          workouts: newObj,
                        });
                      }}
                    >
                      x
                    </button>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/dashboard/workouts/exercises"
                    >
                      <p className="workout-number">Workout Three</p>
                    </Link>
                  </div>
                )}
                {this.state.workouts.day4 && (
                  <div className="day-box">
                    <button
                      className="workout-button"
                      onClick={() => {
                        const newObj = { ...this.state.workouts };
                        for (const key in newObj) {
                          if (key === "day4") {
                            delete newObj.day4;
                          }
                        }
                        this.setState({
                          workouts: newObj,
                        });
                      }}
                    >
                      x
                    </button>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/dashboard/workouts/exercises"
                    >
                      <p className="workout-number">Workout Four</p>
                    </Link>
                  </div>
                )}
                {this.state.workouts.day5 && (
                  <div className="day-box">
                    <button
                      className="workout-button"
                      onClick={() => {
                        const newObj = { ...this.state.workouts };
                        for (const key in newObj) {
                          if (key === "day5") {
                            delete newObj.day5;
                          }
                        }
                        this.setState({
                          workouts: newObj,
                        });
                      }}
                    >
                      x
                    </button>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/dashboard/workouts/exercises"
                    >
                      <p className="workout-number">Workout Five</p>
                    </Link>
                  </div>
                )}
                {this.state.workouts.day6 && (
                  <div className="day-box">
                    <button
                      className="workout-button"
                      onClick={() => {
                        const newObj = { ...this.state.workouts };
                        for (const key in newObj) {
                          if (key === "day6") {
                            delete newObj.day6;
                          }
                        }
                        this.setState({
                          workouts: newObj,
                        });
                      }}
                    >
                      x
                    </button>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/dashboard/workouts/exercises"
                    >
                      <p className="workout-number">Workout Six</p>
                    </Link>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default WorkoutPage;
