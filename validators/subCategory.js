import { check } from 'express-validator';

const subCategoryCreateValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Please type a category name')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
    check('parent')
    .not()
    .isEmpty()
    .withMessage('Please select parent category')
];

export { subCategoryCreateValidator }