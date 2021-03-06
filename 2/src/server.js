"use strict";

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var http = require("http");
var server = http.createServer(app);
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Registers schemas
require('./schemas.js');
// Defines routes
require('./routes.js')(app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test-toolbox',
    {
        useMongoClient: true
    },
    (err, res) => {
        if (err) {
            console.log('ERROR: connecting to Database. ' + err);
        }
        app.listen(3000, function () {
            console.log("Node server running on http://localhost:3000");
        });
    }
);
