import { Router } from 'express';
const router = Router();

// * @desc    get a user
// * @route   POST /api/user
// * @access  Private
router.get('/user', (req, res) => {
    res.json({ data: 'user endpoint' });
});

export default router;