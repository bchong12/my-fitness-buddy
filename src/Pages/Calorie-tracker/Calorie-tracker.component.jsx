import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import HeaderDashboard from "../../Components/Header-dashboard/Header-dashboard.component";

import "./Calorie-tracker.component.css";

class CalorieTracker extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <HeaderDashboard />
        <div className="calorie-tracker">
          <Link
            style={{ textDecoration: "none" }}
            to="/dashboard/calories/edit"
          >
            <div onClick={this.props.onClick.onClick1} className="calorie-box">
              <p>Sunday</p>
              <p id="calorie-sun">
                Total Calories:{" "}
                {this.props.week
                  .find((el) => "Sunday" === el.name)
                  .meals.reduce((total, value) => {
                    total = total + value.calories;
                    return total;
                  }, 0)}
              </p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/dashboard/calories/edit"
          >
            <div onClick={this.props.onClick.onClick2} className="calorie-box">
              <p>Monday</p>
              <p>
                Total Calories:{" "}
                {this.props.week
                  .find((el) => "Monday" === el.name)
                  .meals.reduce((total, value) => {
                    total = total + value.calories;
                    return total;
                  }, 0)}
              </p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/dashboard/calories/edit"
          >
            <div onClick={this.props.onClick.onClick3} className="calorie-box">
              <p>Tuesday</p>
              <p>
                Total Calories:{" "}
                {this.props.week
                  .find((el) => "Tuesday" === el.name)
                  .meals.reduce((total, value) => {
                    total = total + value.calories;
                    return total;
                  }, 0)}
              </p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/dashboard/calories/edit"
          >
            <div onClick={this.props.onClick.onClick4} className="calorie-box">
              <p>Wednesday</p>
              <p>
                Total Calories:{" "}
                {this.props.week
                  .find((el) => "Wednesday" === el.name)
                  .meals.reduce((total, value) => {
                    total = total + value.calories;
                    return total;
                  }, 0)}
              </p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/dashboard/calories/edit"
          >
            <div onClick={this.props.onClick.onClick5} className="calorie-box">
              <p>Thursday</p>
              <p>
                Total Calories:{" "}
                {this.props.week
                  .find((el) => "Thursday" === el.name)
                  .meals.reduce((total, value) => {
                    total = total + value.calories;
                    return total;
                  }, 0)}
              </p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/dashboard/calories/edit"
          >
            <div onClick={this.props.onClick.onClick6} className="calorie-box">
              <p>Friday</p>
              <p>
                Total Calories:{" "}
                {this.props.week
                  .find((el) => "Friday" === el.name)
                  .meals.reduce((total, value) => {
                    total = total + value.calories;
                    return total;
                  }, 0)}
              </p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/dashboard/calories/edit"
          >
            <div onClick={this.props.onClick.onClick7} className="calorie-box">
              <p>Saturday</p>
              <p>
                Total Calories:{" "}
                {this.props.week
                  .find((el) => "Saturday" === el.name)
                  .meals.reduce((total, value) => {
                    total = total + value.calories;
                    return total;
                  }, 0)}
              </p>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default CalorieTracker;
