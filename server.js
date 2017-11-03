var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
app = new express();

//TO DO: config for setting up mongodb
var db = require('./config/db.js');

var port = process.env.PORT || 90; 

//TO DO: set up logger

//TO DO: set up nodemon - auto refresh

//TO DO: set up taskrunner - GULP

//TO DO: set up e2e testing - Protractor


app.use('/crm', require('./app/routes'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));
app.listen(port);
console.log("App is running on-->" + port);

exports = module.exports = app;
