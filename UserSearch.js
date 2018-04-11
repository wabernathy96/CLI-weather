// import { userInfo } from 'os';

var weather = require('weather-js');
var fs = require('fs');
var moment = require('moment');

function User (name, location) {
    this.name = name;
    this.location = location;

};

User.prototype.getDate = function () {
    var now = moment().format("MMMM Do YYYY, h:mm:ss a");
    this.date = now;
};

User.prototype.logInfo = function () {
    var userInfo = `Name: ${this.name} Location: ${this.location} Date: ${this.date}`;
    fs.appendFile('log.txt', userInfo + '\n', function(err){
        if(err) console.log(err);
    })
};

User.prototype.getWeather = function () {

    this.getDate();
    this.logInfo();
    weather.find ({search: this.location, degreeType: 'F'}, function(err, result){
        if(err) console.log(err);

        console.log(JSON.stringify(result[0], null, 2)); 
    });
};

module.exports = User;


