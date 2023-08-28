const express = require('express');
// Setting up express router for use
const router = express.Router();

//  Importing our controller to be used 
const productController = require('../controllers/productsController')

// Fetch the products from DB
router.get('/products', productController.products);
// API to add product to DB
router.post('/products/create', productController.addProduct);

//  API to delete product from DB
router.post('/products/:id', productController.deleteProduct);

// API to update quantity of a product
router.post('/products/:id/update_quantity', productController.updateQuantity);

module.exports = router;