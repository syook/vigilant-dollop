var express = require('express');
var config = require('./config/config');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var router = require('./router');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

app.use(urlEncodedParser);
app.use(jsonParser);

mongoose.connect(config.database,{useMongoClient: true});

app.get("/",function(req,res){
    res.send("You are Running Express");
});



app.listen(port);
router(app);