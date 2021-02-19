'use strict;'

const express = require('express');

//Initalize the app
const app = express();

const productRoute = require("./routes/products");

app.use("/product", productRoute);

//communicate with the app on a specific port
const server = app.listen(6020, () =>{
    console.log(`Server has successfully started on port number: ${server.address().port}`);
});
