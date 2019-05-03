//require express 
var express = require("express");

//PORT
var PORT = process.env.PORT || 8080;

var app = express();

//Static content for the app from Public folder
app.use(express.static("public"));

//Body-Parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Handlebars
var exphbs = require ("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give server access
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Start server to begin listening to user requests
app.listen(PORT, function() {
    //Server-side log when server has started
    console.log("server listening on: http://localhost:" + PORT)
});