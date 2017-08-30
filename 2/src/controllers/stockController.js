"use strict";

var mongoose = require('mongoose');
var Product  = mongoose.model('Product');
var Stock  = mongoose.model('Stock');

/**
 * Add stock.
 */
exports.addAction = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            res.send(500, err.message);
        }

        var stock = new Stock({
            quantity: req.body.quantity,
            type: "add"
        });

        product.history.push(stock);
        product.save()
            .then(() => {
                res.status(201)
                    .jsonp(product);
            });
    });
};

/**
 * Subtract stock.
 */
exports.subtractAction = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            res.send(500, err.message);
        }

        var stock = new Stock({
            quantity: req.body.quantity,
            type: "subtract"
        });

        product.history.push(stock);
        product.save()
            .then(() => {
                res.status(201)
                    .jsonp(product);
            });
    });
};
