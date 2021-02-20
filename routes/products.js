'use strict;'

const router = require('express').Router();

//request methods => CRUD
//GET:
router.get("/getAll", (req, res, next) =>{
    res.send(`Here is the information needed .....`);
    next();
});

router.use((req, res) =>{
    console.log("hello");
    res.send("done");
});

//POST: 
router.get("/create", (req, res) =>{
    const name = req.body.name;
    res.send(`Hello there ${name}`);
});

module.exports = router;
