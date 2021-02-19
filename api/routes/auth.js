import { Router } from 'express';
const router = Router();

// * controllers
import { auth } from '../controllers/auth';

// * middlewares
import { protectRoute } from '../middlewares/auth';

// * @desc    Create a user
// * @route   POST /api/create-or-update-user
// * @access  Private
router.post('/create-or-update-user', protectRoute, auth);

export default router;