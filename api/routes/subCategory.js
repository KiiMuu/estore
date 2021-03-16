import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createSubCategory,
    getSubCategories,
    getSubCategory,
    updateSubCategory,
    removeSubCategory,
 } from '../controllers/subCategory';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth';

// * validators
import { runValidation } from '../validators';
import {
    categoryCreateValidator,
} from '../validators/category';

// * @desc    Create a new sub category
// * @route   POST /api/sub-category
// * @access  Private
router.post(
    '/sub-category',
    authCheck, 
    adminCheck, 
    categoryCreateValidator,
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
    categoryCreateValidator,
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