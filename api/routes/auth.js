import express from 'express';
const router = express.Router();

// * @desc    Create a user
// * @route   POST /api/create
// * @access  Private
router.get('/create', (req, res) => {
    res.json({ data: 'create endpoint' });
});

export default router;