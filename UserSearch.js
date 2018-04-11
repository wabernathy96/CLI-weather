// import { userInfo } from 'os';

var weather = require('weather-js');
var fs = require('fs');
var moment = require('moment');

function User (name, location) {
    this.name = name;
    this.location = location;

}

User.prototype.getDate = function () {

}

User.prototype.logInfo = function () {

}

User.prototype.getWeather = function () {
    weather.find ({search: this.location, degreeType: 'F'}, function(err, result){
        if(err) console.log(err);

        console.log(JSON.stringify(result[0], null, 2)); 
    });
};

var Connor = new User ('Connor', 'Houston');
Connor.getWeather();
