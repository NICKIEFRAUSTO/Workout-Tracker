const router = require("express").Router();
const Workout = require("../models/workout.js");

// ----------------get last workout-----------------------
router.get("api/workout")