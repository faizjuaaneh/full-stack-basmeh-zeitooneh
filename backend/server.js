var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var morgan = require("morgan");
var app = express();
//var port = process.env.port ||=8000;


app.use(bodyparser.json());
app.use(cors());
app.use(morgan("dev"));

app.use(express.static("../public"));



mongoose.connect("mongodb://localhost/bassma", function () {
    console.log("connected to database");
})


app.use("/api/student", require("./routers/studentRoutes"));




app.listen(8000, function () {
    console.log("your  port 8000");
});