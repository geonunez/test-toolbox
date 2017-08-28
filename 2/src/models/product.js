"use strict";

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema ({
    name:    { type: String },
    brand:     { type: String },
    inventory:  { type: Number }
});

module.exports = mongoose.model('Product', productSchema);