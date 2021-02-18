import { Router } from 'express';
const router = Router();

// * controllers
import { auth } from '../controllers/auth';

// * @desc    Create a user
// * @route   POST /api/create
// * @access  Private
router.get('/create', auth);

export default router;