import React from "react";
import HeaderDashboard from "../../Components/Header-dashboard/Header-dashboard.component";
import axios from "axios";

import "./EditPage.component.css";

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    const day1 = this.props.week
      .find((el) => this.props.name === el.name)
      .meals.reduce((total, value) => {
        total = total + value.calories;
        return total;
      }, 0);
    this.state = {
      toggleInput: false,
      MealName: "",
      CalorieAmount: 0,
      week: [],
      toggleMealName: false,
      totalCalories: day1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.week !== prevProps.week ||
      this.state.CalorieAmount !== prevState.CalorieAmount
    ) {
      this.setState({
        totalCalories: this.props.week
          .find((el) => this.props.name === el.name)
          .meals.reduce((total, value) => {
            total = total + value.calories;
            return total;
          }, 0),
      });
    }
  }

  render() {
    const day = this.props.week.find((el) => this.props.name === el.name);
    return (
      <>
        <HeaderDashboard />
        <div className="edit-page">
          <div className="edit-block">
            <div className="upper">
              <p>{this.props.name}</p>
              <p>{this.state.totalCalories}</p>
              <div className="add-meal">
                {this.state.toggleInput ? (
                  <>
                    <input
                      id="meal-value"
                      placeholder="Meal Name"
                      onChange={(e) => {
                        this.setState({
                          MealName: e.target.value,
                        });
                      }}
                    />
                    <input
                      id="calorie-amount"
                      placeholder="Calorie Amount"
                      onChange={(e) => {
                        this.setState({
                          CalorieAmount: +e.target.value,
                        });
                      }}
                    />
                    <button
                      onClick={() => {
                        if (
                          this.state.CalorieAmount !== 0 &&
                          this.state.MealName !== ""
                        ) {
                          axios
                            .post(`/api/calories/${day.id}`, {
                              name: this.state.MealName,
                              calories: this.state.CalorieAmount,
                            })
                            .then((res) => {
                              console.log(res.data);
                            })
                            .catch((err) => console.log(err));
                          this.setState({
                            toggleInput: !this.state.toggleInput,
                          });
                          document.getElementById("meal-value").value = "";
                          document.getElementById("calorie-amount").value = "";
                        } else {
                          alert("Incomplete Fields");
                        }
                      }}
                    >
                      Submit
                    </button>
                  </>
                ) : (
                  <p
                    onClick={() => {
                      this.setState({
                        toggleInput: !this.state.toggleInput,
                      });
                    }}
                  >
                    Add New Meal
                  </p>
                )}
              </div>
            </div>
            {day !== undefined
              ? day.meals.map((el) => {
                  return (
                    <>
                      {!this.state.toggleMealName ? (
                        <>
                          <p
                            onClick={() => {
                              this.setState({
                                toggleMealName: !this.state.toggleMealName,
                              });
                            }}
                            key={el.index}
                          >
                            {el.name}
                          </p>
                          <p key={el.index + 1000}>{el.calories}</p>
                          <button
                            onClick={() => {
                              axios
                                .delete(`/api/calories/${day.id}/${el.index}`)
                                .then((res) => {
                                  console.log(res.data);
                                })
                                .catch((err) => console.log(err));
                            }}
                          >
                            x
                          </button>
                        </>
                      ) : (
                        <>
                          <input
                            id="meal-value-1"
                            onChange={(e) => {
                              this.setState({
                                MealName: e.target.value,
                              });
                            }}
                            placeholder="Meal Name"
                          />
                          <input
                            id="calorie-amount-1"
                            onChange={(e) => {
                              this.setState({
                                CalorieAmount: +e.target.value,
                              });
                            }}
                            placeholder="Calories"
                          />
                          <button
                            onClick={() => {
                              if (
                                this.state.CalorieAmount !== 0 &&
                                this.state.MealName !== ""
                              ) {
                                axios
                                  .put(`/api/calories/${day.id}/${el.index}`, {
                                    name: this.state.MealName,
                                    calories: this.state.CalorieAmount,
                                  })
                                  .then((res) => {
                                    console.log(res.data);
                                  })
                                  .catch((err) => console.log(err));
                                this.setState({
                                  toggleMealName: !this.state.toggleMealName,
                                });
                                document.getElementById("meal-value-1").value =
                                  "";
                                document.getElementById(
                                  "calorie-amount-1"
                                ).value = "";
                              } else {
                                alert("Incomplete Fields");
                              }
                            }}
                          >
                            Submit
                          </button>
                        </>
                      )}
                    </>
                  );
                })
              : "no meals"}
          </div>
        </div>
      </>
    );
  }
}

export default EditPage;
