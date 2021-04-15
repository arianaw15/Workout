const router = require("express").Router();
let mongoose = require("mongoose");
let db = require("../models");

router.post("/api/workouts", (req,res)=>{
    db.Workout.workouts.insert(req.body).then(exercise =>{
        res.json(exercise)
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.put("/api/workouts/:id",(req,res)=>{
    db.Workout.workouts.findOneAndUpdate({_id:req.params.id},{$push:{exercises: req.body}}).then(exercise=>{
        res.json(exercise)
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.get("api/workouts/range",(req,res)=>{
    db.Workout.workouts.find({}).then((exercise)=>{
        res.json(exercise)
    })
    .catch(err => {
        res.status(400).json(err);
    });
})


module.exports = router;