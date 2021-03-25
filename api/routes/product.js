import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createProduct,
    getProducts,
    removeProduct,
 } from '../controllers/product';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth';

// * validators
import { runValidation } from '../validators';
import {
    productCreateValidator,
} from '../validators/product';

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

// * @desc    Get products
// * @route   GET /api/products/:count
// * @access  Public
router.get('/products/:count', getProducts);

// * @desc    Delete product
// * @route   DELETE /api/product/:slug
// * @access  Private
router.delete('/product/:slug', authCheck, adminCheck, removeProduct);

export default router;