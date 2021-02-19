'use strict;'

const router = require('express').Router();

//request methods => CRUD
//GET:
router.get("/getAll", (req, res) =>{
    res.send(`Here is the information needed .....`);
});

//POST: 
router.get("/create", (req, res) =>{
    const name = req.body.name;
    res.send(`Hello there ${name}`);
});

module.exports = router;
