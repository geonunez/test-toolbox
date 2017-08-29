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
};

/**
 * Creates a new product.
 */
exports.postAction = (req, res) => {
    console.log('POST');
    console.log(req.body);

    var product = new Product({
        name:      req.body.name,
        brand:     req.body.brand,
        inventory: req.body.inventory,
        hola: req.body.hola
    });

    console.log(product);

    product.save(function(err, product) {
        if(err) {
          return res.status(500).send( err.message);
        }

        res.status(200).jsonp(product);
    });
};
