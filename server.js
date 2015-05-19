// server.js 

// Setting up and loading the all frameworks that we need
var express = require('express');
var http = require('http');
var app = express();
// Setting up the port right now at 5858
var port = process.env.PORT || 5858; 

//app.configure(function () {
//    app.use(express.logger('dev')); // log every request to the console
//    app.use(express.cookieParser());
//    app.use(function (req, res, next) {
//        res.header("Access-Control-Allow-Origin", "*");
//        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//        next();
//    });
//});
// routes will load all the routes and pass it to the app
require('./app/routes.js')(app);

// Creating the server with the app
http.createServer(app).listen(port, function () {
    console.log("Scooper BackEnd In Development On Port: " + port);
});