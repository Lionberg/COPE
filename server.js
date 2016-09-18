var http    = require("http");
var express = require("express");
var app     = express();
var moment  = require("moment");
var fs      = require("fs");
var logger  = require("./modules/logger");
var lang    = require("./data/lang_ru");


//var bodyParser = require('body-parser');
//var multer  = require('multer');
var mustache = require("mustache");

//var engines = require('consolidate');

//app.engine('html', 'mustache');

app.use(express.static("static"));

app.get("/", function(req, res){
    logger.Log("request started");
    fs.readFile("pages/index.mst", function(err, data){
        logger.Log(data);
        var o = {
            name: "<b>Dmitry</b>"
        }
        res.send(mustache.render(data.toString(), o));
    });
});


app.listen(8081);