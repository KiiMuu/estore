import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createProduct,
    getProducts,
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
// * @route   GET /api/products
// * @access  Public
router.get('/products', getProducts);

export default router;