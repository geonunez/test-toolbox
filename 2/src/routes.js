"use strict";

module.exports = (app) => {
    // Index routes
    var indexController = require('./controllers/indexController.js');

    app.route('/')
        .get(indexController.indexAction);

    // Product routes
    var productController = require('./controllers/productController.js');

    app.route('/products')
        .get(productController.findAllAction)
        .post(productController.postAction);

}
