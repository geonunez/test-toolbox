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

productSchema.post('save', (product, next) => {
    var stock = 0;
    product.history.forEach((h) => {
        if (h.type === "add") {
            stock += h.quantity;
        } else {
            stock -= h.quantity;
        }
    }, this);

    product.stock = stock;
    next();
});

module.exports = mongoose.model('Product', productSchema);