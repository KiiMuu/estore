import { Router } from 'express';
const router = Router();

// * controllers
import {
    proceedCheckout,
    getUserCart,
    removeUserCart,
    addAddress,
    applyCoupon,
} from '../controllers/user';

// * middlewares
import { 
    authCheck,
} from '../middlewares/auth';

// * @desc    Create cart checkout
// * @route   POST /api/user/cart
// * @access  Private
router.post('/user/cart', authCheck, proceedCheckout);

// * @desc    get cart checkout
// * @route   GET /api/user/cart
// * @access  Private
router.get('/user/cart', authCheck, getUserCart);

// * @desc    remove cart checkout
// * @route   PUT /api/user/cart
// * @access  Private
router.put('/user/cart', authCheck, removeUserCart);

// * @desc    post delivery address in cart checkout
// * @route   POST /api/user/address
// * @access  Private
router.post('/user/address', authCheck, addAddress);

// * @desc    Apply coupon in cart checkout
// * @route   POST /api/user/apply-coupon
// * @access  Private
router.post(
    '/user/apply-coupon', 
    authCheck,
    applyCoupon,
);

export default router;