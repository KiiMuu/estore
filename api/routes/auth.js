import { Router } from 'express';
const router = Router();

// * controllers
import { 
    createOrUpdateUser,
 } from '../controllers/auth';

// * middlewares
import { authCheck } from '../middlewares/auth';

// * @desc    Create or update a user
// * @route   POST /api/create-or-update-user
// * @access  Public
router.post('/create-or-update-user', authCheck, createOrUpdateUser);

export default router;