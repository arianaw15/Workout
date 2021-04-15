const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workout", ({body},res)=>{
    Workout.create(body)
    .then(exercises =>{
        res.json(exercises)
    })
    .catch(err => {
        res.status(400).json(err);
    });
})


module.exports = router;