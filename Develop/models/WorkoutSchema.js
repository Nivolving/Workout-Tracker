const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter a workout type."
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter a workout name."
      },
      duration: {
        type: Number,
        required: "Please enter a workout duration."
      },
      weight: {

        type : Number
      },

      reps: {
        type : Number
      },

      sets:{ 
        type : Number
      },

      distance :{
        type : Number
      }
    }
  ]

});




const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
