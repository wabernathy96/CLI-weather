var User = require('./UserSearch.js');
var fs = require('fs');
var moment = require('moment');


let Admin = function () {
    type: admin;

}

Admin.prototype.getLog = function () {
    fs.readFile('log.txt', 'UTF8', function(err, data){
        
        if(err) console.log(err)

        var printInfo = data.split('\n');

        for (var info of printInfo){
            console.log(info);
        };
    });
};

Admin.prototype.newUserSearch = function (name, location) {
    var user = new User (name, location);

    user.getDate();
    user.logInfo();
    user.getWeather();
};

Admin.prototype.logAdmin = function () {

}

var admin = new Admin ();

admin.getLog();
admin.newUserSearch('Connor', 'Houston')

module.exports = Admin;