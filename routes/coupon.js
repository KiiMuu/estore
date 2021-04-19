import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createCoupon,
    getCoupons,
    removeCoupon,
 } from '../controllers/coupon.js';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth.js';

// * validators
import { runValidation } from '../validators/index.js';
import {
    couponValidator,
} from '../validators/coupon.js';

// * @desc    Create a new coupon
// * @route   POST /api/coupon
// * @access  Private
router.post(
    '/coupon',
    authCheck, 
    adminCheck, 
    couponValidator,
    runValidation,
    createCoupon,
);

// * @desc    Get all coupons
// * @route   GET /api/coupons
// * @access  Public
router.get('/coupons', getCoupons);

// * @desc    Remove coupon
// * @route   DELETE /api/coupon/:couponId
// * @access  Private
router.delete('/coupon/:couponId', authCheck, adminCheck, removeCoupon);

export default router;