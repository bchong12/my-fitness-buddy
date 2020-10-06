import React from "react";
import HeaderDashboard from "../../Components/Header-dashboard/Header-dashboard.component";
import axios from "axios";
import "./exercise-page.component.css";
import WorkoutBox from "../../Components/Workout-Box/Workout-Box.component";

class ExercisePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [],
    };
  }

  componentDidMount() {
    axios
      .get(`/api/workouts/${this.props.intensity}`)
      .then((res) => {
        this.setState({
          workouts: res.data,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => console.log(this.state.workouts.day1));
  }

  render() {
    return (
      <div className="exercise-page">
        <HeaderDashboard />
        {this.state.workouts.day1 !== undefined &&
          this.state.workouts.day1.map((exerciseObj, i) => {
            return (
              <>
                <WorkoutBox
                  key={i}
                  name={exerciseObj.name}
                  imgUrl={exerciseObj.example}
                  sets={exerciseObj.sets}
                  reps={exerciseObj.reps}
                />
              </>
            );
          })}
        {this.state.workouts.day2 !== undefined &&
          this.state.workouts.day2.map((exerciseObj, i) => {
            return (
              <WorkoutBox
                key={i}
                name={exerciseObj.name}
                imgUrl={exerciseObj.example}
                sets={exerciseObj.sets}
                reps={exerciseObj.reps}
              />
            );
          })}
        {this.state.workouts.day3 !== undefined &&
          this.state.workouts.day3.map((exerciseObj, i) => {
            return (
              <WorkoutBox
                key={i}
                name={exerciseObj.name}
                imgUrl={exerciseObj.example}
                sets={exerciseObj.sets}
                reps={exerciseObj.reps}
              />
            );
          })}
        {this.state.workouts.day4 !== undefined &&
          this.state.workouts.day4.map((exerciseObj, i) => {
            return (
              <WorkoutBox
                key={i}
                name={exerciseObj.name}
                imgUrl={exerciseObj.example}
                sets={exerciseObj.sets}
                reps={exerciseObj.reps}
              />
            );
          })}
        {this.state.workouts.day5 !== undefined &&
          this.state.workouts.day5.map((exerciseObj, i) => {
            return (
              <WorkoutBox
                key={i}
                name={exerciseObj.name}
                imgUrl={exerciseObj.example}
                sets={exerciseObj.sets}
                reps={exerciseObj.reps}
              />
            );
          })}
        {this.state.workouts.day6 !== undefined &&
          this.state.workouts.day6.map((exerciseObj, i) => {
            return (
              <WorkoutBox
                key={i}
                name={exerciseObj.name}
                imgUrl={exerciseObj.example}
                sets={exerciseObj.sets}
                reps={exerciseObj.reps}
              />
            );
          })}
      </div>
    );
  }
}

export default ExercisePage;

// {intensity: "intense",…}
// day1: [{name: "Squats", sets: 5, reps: 10,…}, {name: "Hip Thrust", sets: 4, reps: 10,…},…]
// day2: [{exercise: "flat bench press", sets: 5, reps: 8,…},…]
// day3: [{exercise: "Deadlift", sets: 6, reps: 10,…}, {exercise: "Pull ups", sets: 5, reps: 10,…},…]
// day4: [{name: "Squats", sets: 5, reps: 10,…}, {name: "Calf Raises", sets: 4, reps: 10,…},…]
// day5: [{exercise: "flat bench press", sets: 5, reps: 8,…},…]
// day6: [{exercise: "Deadlift", sets: 6, reps: 10,…}, {exercise: "Pull ups", sets: 5, reps: 10,…},…]
// intensity: "intense"
