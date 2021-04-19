import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    removeCategory,
    getSubsOfSingleParent,
 } from '../controllers/category.js';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth.js';

// * validators
import { runValidation } from '../validators/index.js';
import {
    categoryCreateValidator,
} from '../validators/category.js';

// * @desc    Create a new category
// * @route   POST /api/category
// * @access  Private
router.post(
    '/category',
    authCheck, 
    adminCheck, 
    categoryCreateValidator,
    runValidation,
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
    categoryCreateValidator,
    runValidation,
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

// * @desc    Get sub categories of a parent category
// * @route   get /api/category/sub-categories/:_id
// * @access  Public
router.get('/category/sub-categories/:_id', getSubsOfSingleParent);

export default router;