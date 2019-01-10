const express = require('express');

const path = require('path');
const port = process.env.PORT || 3000;
var app = express();
//var bodyParser = require('body-parser');


// path module in nodejs.org
// path is a built in modeule no need to install it


const publicpath = path.join(__dirname, '../public');
//console.log('__dirname +'/../public');
console.log(publicpath);

// Define the port to run on


// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// Set static directory before defining routes
app.use(express.static(publicpath));

var server = app.listen(port, function() {
  console.log('Magic happens on port ' + port);
});

// Enable parsing of posted forms
//app.use(bodyParser.urlencoded({ extended: false }));


// Listen for requests
