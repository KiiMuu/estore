import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createOrUpdateUser,
    currentUser,
 } from '../controllers/auth';

// * middlewares
import { authCheck } from '../middlewares/auth';

// * @desc    Create or update a user
// * @route   POST /api/create-or-update-user
// * @access  Public
router.post('/create-or-update-user', authCheck, createOrUpdateUser);

// * @desc    Get current user
// * @route   POST /api/current-user
// * @access  Private
router.post('/current-user', authCheck, currentUser);

export default router;