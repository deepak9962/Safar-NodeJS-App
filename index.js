const express = require("express");
const app = express();
const port = 8080;

const root = require("./routes/index");
const db = require('./config/mongoose');

app.set('view engine', 'ejs'); // activate the view engine
app.set('views', 'views'); // set the ejs views

app.use(express.static('static')); // enable static resources
app.use(express.urlencoded()); // body parser

app.use("/", root);

app.listen(port, (err) => {
    if (err) {
        console.log("Error: ", err);
    }

    console.log("Server is running on port: ", port);
})