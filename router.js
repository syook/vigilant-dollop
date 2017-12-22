var productsController = require('./controllers/productsController');
var express = require('express');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

module.exports = function(app){
    app.get('/index',function(req,res){
        res.send("This is index");
    });
    app.get('/products',productsController.index);
    app.post('/products',productsController.create);
    app.get('/products/:name',productsController.find);
    app.put('/products/:id',productsController.update);
    app.delete('/products/:id',productsController.destroy);
};