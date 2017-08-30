"use strict";

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var StockModel = require('./stock');

var productSchema = new Schema ({
    name:  String,
    brand: String,
    stock: { type: Number, default: 0 },
    history: [ StockModel.schema ]
});

/**
 * Calculates the current stock.
 *
 * @param  Product product [description]
 */
function calculateStock(product) {
    var stock = 0;
    product.history.forEach((h) => {
        if (h.type === "add") {
            stock += h.quantity;
        } else {
            stock -= h.quantity;
        }
    }, product);

    product.stock = stock;
}

/**
 * Pre hook on saving.
 */
productSchema.pre('save', function(next) {
    calculateStock(this);
    next();
});

/**
 * Pre hook on updating.
 */
productSchema.pre('update', function(next) {
    calculateStock(this);
    next();
});

module.exports = mongoose.model('Product', productSchema);
