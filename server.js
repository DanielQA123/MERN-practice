'use strict;'

const express = require('express');

//Initalize the app
const app = express();

//communicate with the app on a specific port

app.listen(5019);

//Requests
app.get("/", (req, res) => {
    res.send("hello world!");
});

app.get("/hello", (req, res) => {
    res.send("This is the hello world route");
});