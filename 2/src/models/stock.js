"use strict";

var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;

var stockSchema = new Schema ({
    quantity:  { type: Number },
    type: { type: String, enum: ['add', 'subtract'] },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Stock', stockSchema);