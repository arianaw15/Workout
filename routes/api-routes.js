const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req,res)=>{
    Workout.create(req.body).then(exercise =>{
        res.json(exercise)
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.put("/api/workouts/:id",(req,res)=>{
    Workout.findOneAndUpdate({_id:req.params.id},{$push:{exercises: req.body}}).then(exercise=>{
        res.json(exercise)
    })
    .catch(err => {
        res.status(400).json(err);
    });
})


module.exports = router;