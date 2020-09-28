//require express library
const express = require("express");
const ctrl = require("./controllers");

//create an instance of express
const app = express();

//utilize the express json parser
app.use(express.json());

//Calorie Crud Routes
app.get("/api/calories", ctrl.readFoods);
app.get("/api/calories/:id/:foodId", ctrl.readFood);
app.post("/api/calories/:id", ctrl.addFood);
app.delete("/api/calories/:id/:foodId", ctrl.deleteFood);
app.put("/api/calories/:id/:foodId", ctrl.updateFood);

//practice routes

//Workout Crud Routes
app.get("/api/workouts/beginner", ctrl.easyWorkout);
app.get("/api/workouts/intermediate", ctrl.mediumWorkout);
app.get("/api/workouts/advanced", ctrl.hardWorkout);

//create a server using express
app.listen(5000);
