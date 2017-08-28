"use strict";

require('../models/product.js');

var mongoose = require('mongoose');
var Product  = mongoose.model('Product');

/**
 * Finds all Products.
 */
exports.findAllAction = (req, res) => {
    Product.find((err, products) => {
        if (err) {
            res.send(500, err.message);
        }

        res.status(200)
            .jsonp(products);
    });
}