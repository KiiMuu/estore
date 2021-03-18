import { check } from 'express-validator';

const productCreateValidator = [
    check('title')
    .not()
    .isEmpty()
    .withMessage('Enter product title')
    .isLength({ max: 32 })
    .withMessage('Title must be at most 32 characters long'),

    check('description')
    .not()
    .isEmpty()
    .withMessage('Enter product description')
    .isLength({ max: 2000 })
    .withMessage('Description must be at most 2000 characters long'),

    check('price')
    .not()
    .isEmpty()
    .withMessage('Enter product price')
    .isLength({ max: 32 })
    .withMessage('Description must be at most 32 numbers long'),
];

export { productCreateValidator }