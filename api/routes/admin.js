import { Router } from 'express';
const router = Router();

// * controllers
import {
    getOrders,
    orderStatus,
} from '../controllers/admin.js';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth.js';

// * @desc    Get orders
// * @route   GET /api/admin/orders
// * @access  Private
router.get('/admin/orders', authCheck, adminCheck, getOrders);

// * @desc    Update order status
// * @route   PUT /api/admin/update-status
// * @access  Private
router.put('/admin/update-status', authCheck, adminCheck, orderStatus);

export default router;