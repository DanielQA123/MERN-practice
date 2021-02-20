'use strict;'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Initalize the app
const app = express();
app.use(cors());
app.use(bodyParser.json());

const productRoute = require("./routes/products");

app.use("/product", productRoute);

//communicate with the app on a specific port
const server = app.listen(6020, () =>{
    console.log(`Server has successfully started on port number: ${server.address().port}`);
});
