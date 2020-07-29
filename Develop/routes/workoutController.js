const router = require("express").Router();
const { Workout } = require('../models');


router.post("/api/workouts", (req,res) =>{
    Workout.create( req.body )
        .then( dbWorkouts => {
            res.json( dbWorkouts )
        })
        .catch( err => {
            res.json(401).json(err);
          });     
});

router.get("/api/workouts", ( req,res) =>{
    Workout.find()
        .then( dbWorkouts => {
            res.json( dbWorkouts )
        })
        .catch( err => {
            res.json(401).json(err);
          });     
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push : { excercises : req.body } },
         {  new: true , runValidators : true }
    ).then(dbWorkout => {
        res.json( dbWorkout );
    }).catch( err => {
        res.status(401).json(err);
    })
});

router.get("/api/workouts/range", ( req,res) =>{
    Workout.find()
        .then( dbWorkouts => {
            res.json( dbWorkouts )
        })
        .catch( err => {
            res.json(401).json(err);
          });     
});
module.exports = router;
