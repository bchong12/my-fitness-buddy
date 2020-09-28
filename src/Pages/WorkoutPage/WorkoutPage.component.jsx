import React from "react";

import HeaderDashboard from "../../Components/Header-dashboard/Header-dashboard.component";

import "./WorkoutPage.component.css";

class WorkoutPage extends React.Component {
  render() {
    return (
      <>
        <HeaderDashboard />
        <div className="workout-page">
          <h1>WorkoutPage</h1>
        </div>
      </>
    );
  }
}

export default WorkoutPage;
