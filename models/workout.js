const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
      {
        type: {
            type: String,
            required: "type of exercise is required"
        },
        name: {
            type:String,
            required: "name of exercise is required"
        },
        duration: Number,
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number
      }
    ]

})

 const Workout = mongoose.model("workout", workoutSchema);
 module.exports = Workout;

