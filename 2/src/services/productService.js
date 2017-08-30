"use strict";

var mongoose = require('mongoose');
var Product  = mongoose.model('Product');
var Stock  = mongoose.model('Stock');

/**
 * Populates dummy data
 */
exports.populate = () => {
    var howManyProducts = Math.trunc(Math.random() * 100);
    var products = [];

    for (var i = 1; i <= howManyProducts; i++) {
        var stock = new Stock({
            quantity: Math.trunc(Math.random() * 10),
            type: "add" 
        });
        
        var product = new Product({
            name: "Product " + i,
            brand: "Brand " + i,
            history: [stock]
        });

        product.save();
        products.push(product);
    }

    return products;
}