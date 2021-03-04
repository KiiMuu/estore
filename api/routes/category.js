import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    removeCategory,
 } from '../controllers/category';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth';

// * @desc    Create a new category
// * @route   POST /api/category
// * @access  Private
router.post(
    '/category',
    authCheck, 
    adminCheck, 
    createCategory
);

// * @desc    Get all categories
// * @route   GET /api/categories
// * @access  Public
router.get(
    '/categories', 
    getCategories
);

// * @desc    Get single category
// * @route   GET /api/categories/:slug
// * @access  Public
router.get(
    '/category/:slug',
    getCategory
);

// * @desc    Update category
// * @route   PUT /api/category/:slug
// * @access  Private
router.put(
    '/category/:slug', 
    authCheck, 
    adminCheck, 
    updateCategory
);

// * @desc    Remove category
// * @route   delete /api/category/:slug
// * @access  Private
router.delete(
    '/category/:slug', 
    authCheck, 
    adminCheck, 
    removeCategory
);

export default router;