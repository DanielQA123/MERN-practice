'use strict';

const router = require('express').Router();
const {Product} = require("../config/database");

let products = ["chicken", "bread", "water", "grapes"];

//request methods => CRUD
//GET:
router.get("/getAll", (req, res, next) =>{
    Product.find((err, products) =>{
        if(err){
            console.log(err)
        }
        res.send(products);
    })
    // res.send(`Here is the information needed .....${products}`);
    // next();
});

// router.use((req, res) =>{
//     console.log("hello");
//     res.send("done");
// });

//POST: 
router.get("/create", (req, res, next) =>{
    const name = req.body.name;
    products.push(name);
    res.send(`Added ${name} to create a product list, here is the list ${products}`);
});

//url parameters

router.delete("/delete/:id", (req,res,next) =>{
    console.log(req.params.id);
    res.send(`done`);
});

//Query Parameters
router.patch("/update/:id", (req,res,next)=>{
    const id = req.params.id;
    console.log(`id: ${id}`);
    // const name = req.query.name;
    // const age = req.query.age;

    //destructuring: 
    const {name, age} = req.query;
    console.log(`name: ${name}, age: ${age}`);
    res.send(`Info recieved, carry on`);

});

module.exports = router;
