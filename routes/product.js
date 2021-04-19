import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createProduct,
    getProductsByCount,
    getProduct,
    updateProduct,
    removeProduct,
    getProducts,
    productsCount,
    rateProduct,
    relatedProducts,
    searchFilters,
 } from '../controllers/product.js';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth.js';

// * validators
import { runValidation } from '../validators/index.js';
import {
    productCreateValidator,
} from '../validators/product.js';

// * @desc    Create a new product
// * @route   POST /api/product
// * @access  Private
router.post(
    '/product', 
    authCheck, 
    adminCheck,
    productCreateValidator,
    runValidation,
    createProduct,
);

// * @desc    Get total products
// * @route   GET /api/products/total
// * @access  Public
router.get('/products/total', productsCount);

// * @desc    Get products
// * @route   GET /api/products/:count
// * @access  Public
router.get('/products/:count', getProductsByCount);

// * @desc    Get product
// * @route   GET /api/products/:slug
// * @access  Public
router.get('/product/:slug', getProduct);

// * @desc    Update product
// * @route   PUT /api/product/:slug
// * @access  Private
router.put(
    '/product/:slug', 
    authCheck, 
    adminCheck,
    productCreateValidator,
    runValidation,
    updateProduct,
);

// * @desc    Delete product
// * @route   DELETE /api/product/:slug
// * @access  Private
router.delete('/product/:slug', authCheck, adminCheck, removeProduct);

// * @desc    Get products
// * @route   POST /api/products
// * @access  Public
// * post -> to send data and params in req.body
router.post('/products', getProducts);

// * @desc    Post a rate
// * @route   PUT /api/product/rate/:id
// * @access  Private
// * put -> as we're going to update the product
router.put('/product/rate/:id', authCheck, rateProduct);

// * @desc    Get related products
// * @route   GET /api/product/related/:id
// * @access  Public
// * put -> as we're going to update the product
router.get('/product/related/:id', relatedProducts);

// * @desc    Search in products
// * @route   POST /api/product/search/filters
// * @access  Public
router.post('/products/search/filters', searchFilters);

export default router;