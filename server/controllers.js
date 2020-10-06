const workouts = [
  {
    name: "cardio",
    leanBulk: [
      { name: "jumprope", time: 30 },
      { name: "walk", time: 30 },
    ],
    cut: [
      { name: "jumprope", time: 30 },
      { name: "walk", time: 90 },
      { name: "mountain climbers", set: 4, reps: 10 },
      { name: "crunches", sets: 4, reps: 20 },
    ],
  },
  {
    name: "chest",
    compoundLifts: [
      {
        name: "flat bench press",
        sets: 5,
        reps: 8,
        example:
          "https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/07/1-1-bench-press.jpg?itok=bJYGPFGO",
      },
      {
        name: "incline bench press",
        sets: 5,
        reps: 8,
        example:
          "https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/11/incline-bench-press.jpg?itok=qg_b9Yil",
      },
    ],
    isolatedLifts: [
      {
        name: "push ups",
        sets: 4,
        reps: 10,
        example:
          "https://upl.stack.com/wp-content/uploads/2012/10/Flex_o001_2_-e1350409352620.jpg",
      },
      {
        name: "Chest Flies with TRX",
        sets: 4,
        reps: 10,
        example:
          "https://www.anytimefitness.com/wp-content/uploads/2020/06/trx-fly.jpg",
      },
      {
        name: "Dumbbell Flies",
        sets: 4,
        reps: 10,
        example:
          "https://bodybuilding-wizard.com/wp-content/uploads/2014/05/flat-bench-dumbbell-flyes.jpg",
      },
      {
        name: "Incline Chest Flies",
        sets: 4,
        reps: 10,
        example:
          "https://bodybuilding-wizard.com/wp-content/uploads/2014/07/incline-bench-dumbbell-fly-exercise.jpg",
      },
    ],
  },
  {
    name: "back",
    compoundLifts: [
      {
        name: "Deadlift",
        sets: 6,
        reps: 10,
        example:
          "https://bodybuilding-wizard.com/wp-content/uploads/2018/08/trap-bar-deadlift-benefits.jpg",
      },
      {
        name: "Pull ups",
        sets: 5,
        reps: 10,
        example:
          "https://qph.fs.quoracdn.net/main-qimg-872ed74fb05e111efca88423a31db971",
      },
    ],
    isolatedLifts: [
      {
        name: "Barbell Row",
        sets: 4,
        reps: 10,
        example:
          "https://cdn2.coachmag.co.uk/sites/coachmag/files/2016/07/3-2a-barbell-bent-over-row.jpg",
      },
      {
        name: "Dumbell Row",
        sets: 4,
        reps: 10,
        example:
          "https://www.fitnessandpower.com/wp-content/uploads/2016/04/bent-over-dumbbell-row.jpg",
      },
    ],
  },
  {
    name: "biceps",
    compoundLifts: [
      {
        name: "Bicep Curls",
        sets: 4,
        reps: 10,
        example:
          "https://www.fitstream.com/images/weight-training/exercises/biceps-curl.jpeg",
      },
      {
        name: "Inner Bicep Curl",
        sets: 4,
        reps: 10,
        example:
          "https://valleyfitnessnutrition.com/wp-content/uploads/2014/03/Incline-Inner-Biceps-Curl.jpg",
      },
      {
        name: "Pronated Bicep Curl",
        sets: 4,
        reps: 10,
        example: "https://pbs.twimg.com/media/EQzWcdUW4AArZZn.jpg",
      },
    ],
    isolatedLifts: [],
  },
  {
    name: "triceps",
    compoundLifts: [
      {
        name: "Dips",
        sets: 5,
        reps: 10,
        example:
          "https://static.wixstatic.com/media/5ba5f6_4a7168f3204a41f0a9d679648d9738b9~mv2.jpg/v1/fit/w_2500,h_1330,al_c/5ba5f6_4a7168f3204a41f0a9d679648d9738b9~mv2.jpg",
      },
      {
        name: "Close Grip Bench",
        sets: 4,
        reps: 10,
        example:
          "https://musclemagfitness.com/wp-content/uploads/close-grip-bench-press-body-building-exercise-1024x576.jpg",
      },
      {
        name: "Underhand Kickbacks",
        sets: 4,
        reps: 10,
        example:
          "https://www.mensjournal.com/wp-content/uploads/mf/101-best-workouts-the-best-dumbbell-only-triceps-workout-2.jpg?quality=86&strip=all&iswp=1",
      },
    ],
    isolatedLifts: [],
  },
  {
    name: "legs",
    compoundLifts: [
      {
        name: "Squats",
        sets: 5,
        reps: 10,
        example:
          "https://weighttraining.guide/wp-content/uploads/2016/10/barbellsquat.png",
      },
    ],
    isolatedLifts: [
      {
        name: "Bulgarian Split Squat",
        sets: 4,
        reps: 10,
        example:
          "https://gymjunkies.com/wp-content/uploads/2017/06/bodyweight_workout_1-2_bulgarian_split_squat-2.jpg",
      },
      {
        name: "Calf Raises",
        sets: 4,
        reps: 10,
        example:
          "https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/07/calf-raise.jpg",
      },
      {
        name: "Hip Thrust",
        sets: 4,
        reps: 10,
        example:
          "https://weighttraining.guide/wp-content/uploads/2017/04/barbell-hip-thrust.png",
      },
      {
        name: "Jane Fondas",
        sets: 4,
        reps: 10,
        example:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtrNAVVOri0NrTs-lUKDG2sT8zr80TUfhoHw&usqp=CAU",
      },
      {
        name: "Lunges",
        sets: 4,
        reps: 10,
        example:
          "https://cdn1.coachmag.co.uk/sites/coachmag/files/2016/11/posh-pt-jumping-lunge.jpg",
      },
    ],
  },
  {
    name: "shoulders",
    compoundLifts: [
      {
        name: "Military Press",
        reps: 4,
        sets: 10,
        example:
          "https://jatindermall1313.000webhostapp.com/wp-content/uploads/2018/07/barbell-military-press-2.png",
      },
      {
        name: "Rear Delt Fly",
        sets: 4,
        reps: 10,
        example:
          "https://www.t-nation.com/system/publishing/article_assets/8572/original/Flye.jpg?ts=1534795617",
      },
      {
        name: "Side Lateral Raise",
        sets: 4,
        reps: 10,
        example:
          "https://weighttraining.guide/wp-content/uploads/2016/12/Seated-Dumbbell-Lateral-Raise.png",
      },
    ],
    isolatedLifts: [
      {
        name: "Rear Delt Raise",
        sets: 4,
        reps: 10,
        example:
          "https://weighttraining.guide/wp-content/uploads/2018/12/Side-lying-dumbbell-rear-delt-raise.png",
      },
    ],
  },
];

const randomNumGenerator = (randomNeeded, max) => {
  const arr = [];

  for (let i = 0; i < 100000; i++) {
    const num = Math.floor(Math.random() * (max + 1));
    if (!arr.includes(num)) {
      arr.push(num);
    }
    if (arr.length === randomNeeded) {
      break;
    }
  }

  return arr;
};

const fullBodyWorkoutAdder = (workout) => {
  const arr = [];
  for (let i = 1; i < workouts.length; i++) {
    workout[i].compoundLifts.forEach((el) => {
      arr.push(el);
    });
    if (workout[i].compoundLifts.length < 3) {
      const randomNeeded = 3 - workout[i].compoundLifts.length;
      const max = workout[i].isolatedLifts.length - 1;
      const randomIndexes = randomNumGenerator(randomNeeded, max);
      randomIndexes.forEach((num) => {
        arr.push(workout[i].isolatedLifts[num]);
      });
    }
  }
  return arr;
};

const specificDayWorkoutAdder = (workout, either) => {
  const arr = [];
  let workoutArr = [];

  if (either === "push") {
    workoutArr = [1, 4, 6];
  } else if (either === "pull") {
    workoutArr = [2, 3, 5];
  } else if (either === "sl") {
    workoutArr = [5, 6];
  } else if (either === "ct") {
    workoutArr = [1, 4];
  } else if (either === "bb") {
    workoutArr = [2, 3];
  }

  workoutArr.forEach((num) => {
    workout[num].compoundLifts.forEach((el) => {
      arr.push(el);
    });
    if (workout[num].compoundLifts.length < 3) {
      const randomNeeded = 3 - workout[num].compoundLifts.length;
      const max = workout[num].isolatedLifts.length - 1;
      const randomIndexes = randomNumGenerator(randomNeeded, max);
      randomIndexes.forEach((number) => {
        arr.push(workout[num].isolatedLifts[number]);
      });
    }
  });

  return arr;
};

const data = [
  {
    name: "workouts",
    workouts: [
      {
        intensity: "easy",
        day1: [...fullBodyWorkoutAdder(workouts), workouts[0]],
        day2: [...fullBodyWorkoutAdder(workouts), workouts[0]],
      },
      {
        intensity: "intermediate",
        day1: [...specificDayWorkoutAdder(workouts, "push"), workouts[0]],
        day2: [...specificDayWorkoutAdder(workouts, "pull")],
        day3: [...specificDayWorkoutAdder(workouts, "push"), workouts[0]],
        day4: [...specificDayWorkoutAdder(workouts, "pull")],
      },
      {
        intensity: "intense",
        day1: [...specificDayWorkoutAdder(workouts, "sl"), workouts[0]],
        day2: specificDayWorkoutAdder(workouts, "ct"),
        day3: [...specificDayWorkoutAdder(workouts, "bb"), workouts[0]],
        day4: specificDayWorkoutAdder(workouts, "sl"),
        day5: [...specificDayWorkoutAdder(workouts, "ct"), workouts[0]],
        day6: specificDayWorkoutAdder(workouts, "bb"),
      },
    ],
  },
  {
    name: "calories",
    calories: [
      {
        totalCalories: 0,
        meals: [],
        name: "Sunday",
        id: 0,
      },
      {
        totalCalories: 0,
        meals: [],
        name: "Monday",
        id: 1,
      },
      {
        totalCalories: 0,
        meals: [],
        name: "Tuesday",
        id: 2,
      },
      {
        totalCalories: 0,
        meals: [],
        name: "Wednesday",
        id: 3,
      },
      {
        totalCalories: 0,
        meals: [],
        name: "Thursday",
        id: 4,
      },
      {
        totalCalories: 0,
        meals: [],
        name: "Friday",
        id: 5,
      },
      {
        totalCalories: 0,
        meals: [],
        name: "Saturday",
        id: 6,
      },
    ],
  },
];

const exercises = data[0].workouts;
const calories = data[1];

module.exports = {
  readFood: (req, res) => {
    const id = +req.params.id;
    const foodId = +req.params.foodId;

    console.log(req.params);

    const day = calories.calories.find((el) => el.id === id);
    const food = day.meals.find((el) => el.index === foodId);
    res.status(200).send(food);
  },
  addFood: (req, res) => {
    const id = +req.params.id;
    let index = calories.calories[id].meals.length;
    const day = calories.calories.find((el) => el.id === id);

    day.meals.push({
      index: index,
      name: req.body.name,
      calories: req.body.calories,
    });

    res.status(200).send(calories);
  },
  deleteFood: (req, res) => {
    const id = +req.params.id;
    const foodId = +req.params.foodId;
    const day = calories.calories.find((el) => el.id === id);
    day.meals.splice(foodId, 1);

    res.status(200).send(calories);
  },
  updateFood: (req, res) => {
    const id = +req.params.id;
    const foodId = +req.params.foodId;

    const day = calories.calories.find((el) => el.id === id);

    const newFood = {
      index: day.meals[foodId].index,
      name: req.body.name,
      calories: req.body.calories,
    };

    day.meals[foodId] = newFood;

    res.status(200).send(calories);
  },
  easyWorkout: (req, res) => {
    res.status(200).send(exercises[0]);
  },
  mediumWorkout: (req, res) => {
    res.status(200).send(exercises[1]);
  },
  hardWorkout: (req, res) => {
    res.status(200).send(exercises[2]);
  },
  readFoods: (req, res) => {
    res.send(calories);
  },
  deleteFoods: (req, res) => {
    const id = +req.params.id;
    const foodId = +req.params.foodId;
    const day = calories.calories.find((el) => el.id === id);
    day.meals.splice(foodId, 1);

    res.status(200).send(calories);
  },
};
