const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const productController = require('../controller/product')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct); // just passing a reference to the function and not actually executing this function

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

exports.routes = router;
exports.products = products;

module.exports = router;