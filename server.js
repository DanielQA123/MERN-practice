'use strict;'

const express = require('express');

//Initalize the app
const app = express();

//Requests
app.get("/", (req, res) => {
    res.send("hello world!");
});

app.get("/hello", (req, res) => {
    res.send("This is the hello world route");
});

app.get("/error",(res,rep) =>{
    res.status(500).send("oops");
});

//communicate with the app on a specific port
const server = app.listen(6020, () =>{
    console.log(`Server has successfully started on port number: ${server.address().port}`);
});
