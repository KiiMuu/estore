import { check } from 'express-validator';

const categoryCreateValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Please type a category name')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long')
];

export { categoryCreateValidator }