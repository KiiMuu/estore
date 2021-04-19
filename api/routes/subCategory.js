import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createSubCategory,
    getSubCategories,
    getSubCategory,
    updateSubCategory,
    removeSubCategory,
 } from '../controllers/subCategory.js';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth.js';

// * validators
import { runValidation } from '../validators/index.js';
import {
    subCategoryCreateValidator,
} from '../validators/subCategory.js';

// * @desc    Create a new sub category
// * @route   POST /api/sub-category
// * @access  Private
router.post(
    '/sub-category',
    authCheck, 
    adminCheck, 
    subCategoryCreateValidator,
    runValidation,
    createSubCategory,
);

// * @desc    Get all sub categories
// * @route   GET /api/sub-categories
// * @access  Public
router.get(
    '/sub-categories', 
    getSubCategories,
);

// * @desc    Get single sub category
// * @route   GET /api/sub-categories/:slug
// * @access  Public
router.get(
    '/sub-category/:slug',
    getSubCategory,
);

// * @desc    Update sub category
// * @route   PUT /api/sub-category/:slug
// * @access  Private
router.put(
    '/sub-category/:slug', 
    authCheck, 
    adminCheck, 
    subCategoryCreateValidator,
    runValidation,
    updateSubCategory,
);

// * @desc    Remove sub category
// * @route   delete /api/sub-category/:slug
// * @access  Private
router.delete(
    '/sub-category/:slug', 
    authCheck, 
    adminCheck, 
    removeSubCategory,
);

export default router;