"use strict";

module.exports = (app) => {
    // Index routes
    var indexController = require('./controllers/indexController');

    app.route('/')
        .get(indexController.indexAction);

    // Product routes
    var productController = require('./controllers/productController');

    app.route('/products')
        .get(productController.getAction);
    app.route('/products/:id')
        .get(productController.getOneAction);

    // Stock routes
    var stockController = require('./controllers/stockController');

    app.route('/products/:id/stock/add')
        .post(stockController.addAction)

    app.route('/products/:id/stock/subtract')
        .post(stockController.subtractAction)
}
