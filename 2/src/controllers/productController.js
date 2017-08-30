"use strict";

var mongoose = require('mongoose');
var Product  = mongoose.model('Product');

var productService = require('../services/productService.js');

/**
 * Gets all Products.
 */
exports.getAction = (req, res) => {
    Product.find((err, products) => {
        if (err) {
            res.send(500, err.message);
        }

        // Creates dummy data at first call
        if (products.length === 0) {
            products = productService.populate();
        }

        res.status(200)
            .jsonp(products);
    });
};

/**
 * Gets a Product.
 */
exports.getOneAction = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            res.send(500, err.message);
        }
        res.status(200)
            .jsonp(product);
    });
};