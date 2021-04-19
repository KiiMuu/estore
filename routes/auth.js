import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createOrUpdateUser,
    currentUser,
 } from '../controllers/auth.js';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth.js';

// * @desc    Create or update a user
// * @route   POST /api/create-or-update-user
// * @access  Public
router.post('/create-or-update-user', authCheck, createOrUpdateUser);

// * @desc    Post current user
// * @route   POST /api/current-user
// * @access  Private
router.post('/current-user', authCheck, currentUser);

// * @desc    Post current admin
// * @route   POST /api/current-admin
// * @access  Private
router.post('/current-admin', authCheck, adminCheck, currentUser);

export default router;