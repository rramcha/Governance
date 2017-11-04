var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
app = new express(),
winston = require('winston');

winston.emitErrs = true;
//TO DO: config for setting up mongodb
//var db = require('./config/db.js');

var port = process.env.PORT || 90; 

//TO DO: set up logger
var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports.stream = {
    write: function(message, encoding){
        logger.info(message.slice(0, -1));
    }
};


//TO DO: set up e2e testing - Protractor


app.use('/crm', require('./app/routes'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));
app.listen(port);

console.log("App is running on-->" + port);
module.exports = logger;
exports = module.exports = app;
