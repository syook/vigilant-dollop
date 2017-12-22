var Product = require('../models/product')

const index = function(req,res){
    Product.find({},function(err,products){
        res.status(200).json({products: products});
    });
}

const create = function(req,res){
    let product = Product({
        name: req.body.name,
        price: req.body.price,
        isAvailable: true
    });
    product.save(function(err,product){
        if(err) res.send(err);
        res.status(200).json({product: product});
    })
}

const update = function(req,res){
    const params = req.body
    const options = {upsert: true, new: true}
    // console.log(params)
    Product.findByIdAndUpdate(req.params.id, params, options, function(err,product){
        if(err) res.send(err);
        res.status(200).json({ product: product });
    });
}

const find = function(req,res){
    Product.find({name: req.params.name},function(err,products){
        if(err) res.send(err);
        if(products.length == ""){
            res.status(200).json({"res":"No results found"});
        }else res.send(products);
    });
}

const destroy = function(req,res){
    Product.findByIdAndRemove(req.params.id,function(err,product){
        if(err) resizeBy.send(err);
        res.status(200).json({product: product});
    })
}

module.exports = {create: create,find: find,update: update,index: index,destroy: destroy}