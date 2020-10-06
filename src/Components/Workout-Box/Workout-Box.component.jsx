import React from "react";
import "./Workout-Box.component.css";

const WorkoutBox = (props) => {
  return (
    <div key={props.i} className="Workout-Box">
      <div className="left-workoutbox">
        <p>{props.name}</p>
        <p>{props.sets}</p>
        <p>{props.reps}</p>
      </div>
      <img className="images" src={props.imgUrl} />
      <div className="right-workoutbox">
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default WorkoutBox;
