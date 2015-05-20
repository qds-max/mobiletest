// server.js 

// Setting up and loading the all frameworks that we need
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var app = express();
// Setting up the port right now at 5858
var port = process.env.PORT || 5858;

app.use(morgan('dev'));                                 // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                             // parse application/json
app.use(methodOverride());                              // simulate DELETE and PUT

// routes ======================================================================
require('./app/routes.js')(app); // load our routes 

// Creating the server with the app
http.createServer(app).listen(port, function () {
    console.log("Scooper BackEnd In Development On Port: " + port);
});