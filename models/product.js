var mongoose = require('mongoose');
var schema = mongoose.Schema;
var products = new schema({
    name: String,
    price: Number,
    isAvailable: Boolean
});

var product = mongoose.model("product",products);

module.exports = product;