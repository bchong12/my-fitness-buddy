import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.component";
import Goalpage from "./Pages/Goalpage/Goal.component";
import IntensityPage from "./Pages/IntensityPage/Intensity.component";
import Dashboard from "./Pages/Dashboard/Dashboard.component";
import CalorieTracker from "./Pages/Calorie-tracker/Calorie-tracker.component";
import WorkoutPage from "./Pages/WorkoutPage/WorkoutPage.component";
import EditPage from "./Pages/EditPage/EditPage.component";
import ExercisePage from "./Pages/Exercise-page/exercise-page.component";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      goal: "",
      intensity: "",
      workoutsRemaining: 0,
      calorieWeek: [],
      day: "",
    };
  }

  getCalories = () => {
    axios
      .get("/api/calories")
      .then((res) => {
        this.setState({
          calorieWeek: res.data.calories,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getCalories();
  }

  onClick1 = () => {
    this.setState({
      day: "Sunday",
    });
  };
  onClick2 = () => {
    this.setState({
      day: "Monday",
    });
  };
  onClick3 = () => {
    this.setState({
      day: "Tuesday",
    });
  };
  onClick4 = () => {
    this.setState({
      day: "Wednesday",
    });
  };
  onClick5 = () => {
    this.setState({
      day: "Thursday",
    });
  };
  onClick6 = () => {
    this.setState({
      day: "Friday",
    });
  };
  onClick7 = () => {
    this.setState({
      day: "Saturday",
    });
  };

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/choose/goal">
              <Goalpage
                func1={() => {
                  this.setState({
                    goal: "cut",
                  });
                }}
                func2={() => {
                  this.setState({
                    goal: "lean bulk",
                  });
                }}
              />
            </Route>
            <Route exact path="/choose/intensity">
              <IntensityPage
                func1={() => {
                  this.setState({
                    intensity: "beginner",
                  });
                }}
                func2={() => {
                  this.setState({
                    intensity: "intermediate",
                  });
                }}
                func3={() => {
                  this.setState({
                    intensity: "advanced",
                  });
                }}
              />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard
                intensity={this.state.intensity}
                goal={this.state.goal}
                workoutsRemaining={this.state.workoutsRemaining}
                weeks={this.state.calorieWeek}
              />
            </Route>
            <Route exact path="/dashboard/calories">
              <CalorieTracker
                onClick={{
                  onClick1: this.onClick1,
                  onClick2: this.onClick2,
                  onClick3: this.onClick3,
                  onClick4: this.onClick4,
                  onClick5: this.onClick5,
                  onClick6: this.onClick6,
                  onClick7: this.onClick7,
                }}
                week={this.state.calorieWeek}
                getCalories={this.getCalories}
              />
            </Route>
            <Route exact path="/dashboard/workouts">
              <WorkoutPage
                intensity={this.state.intensity}
                goal={this.state.goal}
              />
            </Route>
            <Route exact path="/dashboard/calories/edit">
              <EditPage
                week={this.state.calorieWeek}
                name={this.state.day}
                func={this.calories}
                getCalories={this.getCalories}
              />
            </Route>
            <Route exact path="/dashboard/workouts/exercises">
              <ExercisePage
                intensity={this.state.intensity}
                goal={this.state.goal}
              />
            </Route>
            <Route exact path="/dashboard/workouts/exercises/:name"></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
