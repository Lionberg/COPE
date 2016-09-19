var http    = require("http");
var express = require("express");
var app     = express();
var moment  = require("moment");
var fs      = require("fs");
var logger  = require("./modules/logger");
var lang    = require("./data/lang_ru");
var mime    = require('mime');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//var bodyParser = require('body-parser');
//var multer  = require('multer');
var mustache = require("mustache");

app.use(express.static("static"));
//app.use(express.static(''));

app.post("/lang", function(req, res){
    var languageId = req.body.languageId;
    logger.Log("language was changed to " + languageId);
});

app.get("/css/*", function (req, res) {
   res.sendFile(__dirname + "/" + req.url)
});
app.get("/node_modules/jquery/dist/*", function (req, res) {

    res.writeHead(200, {'content-type': 'text/javascript'});
    var script = fs.readFileSync(__dirname + "/" + req.url, "utf8");
    res.end(script);
   // res.end();
});


app.get("/", function(req, res){
    logger.Log("request started");

    // get header
    fs.readFile("pages/templates/header.mst", function(err, hdata){

        fs.readFile("pages/index.mst", function(err, data) {

            var o = {
                header: hdata.toString()
            };
            //res.write
            res.send(mustache.render(data.toString(), o));
        });
    });
});


app.listen(8081);