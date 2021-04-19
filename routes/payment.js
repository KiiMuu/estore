import { Router } from 'express';
const router = Router();

// * controllers
import {
    createPaymentIntent,
} from '../controllers/payment.js';

// * middlewares
import { 
    authCheck,
} from '../middlewares/auth.js';

// * @desc    Create payment with stripe
// * @route   POST /api/create-payment-intent
// * @access  Private
router.post('/create-payment-intent', authCheck, createPaymentIntent);

export default router;