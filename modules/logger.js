// logger module
var moment = require("moment");

module.exports = {
    
    Log: function(data){
        console.log(moment().format("YYYY MMM, HH:ss") + ": " + data);
    }
};