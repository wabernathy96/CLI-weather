
var Admin = require('./WeatherAdmin');

var args = process.argv;

var userType = args[2];
var userName = args[3];
var userLoc = args[4];

var admin = new Admin;

switch(userType) {
    case 'admin': 
        admin.getLog();
    break;
    case 'user': 
        admin.newUserSearch(userName, userLoc);
    break;
}
