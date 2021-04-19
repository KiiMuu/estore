import { check } from 'express-validator';

const couponValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Please type a coupon name')
    .isLength({ min: 6, max: 12 })
    .withMessage('Name must be between 6-12 characters long'),
    check('expiration')
    .not()
    .isEmpty()
    .withMessage('Please enter coupon expiration date'),
    check('discount')
    .not()
    .isEmpty()
    .withMessage('Please enter coupon discount')
];

export { couponValidator }