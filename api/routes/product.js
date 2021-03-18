import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createProduct,
 } from '../controllers';

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
    runValidation,
    productCreateValidator,
    createProduct,
);

export default router;