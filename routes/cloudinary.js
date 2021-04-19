import { Router } from 'express';
const router = Router();

// * controllers
import {
    uploadImages,
    removeImage,
} from '../controllers/cloudinary';

// * middlewares
import { 
    authCheck,
    adminCheck,
} from '../middlewares/auth';

// * @desc    Upload multiple images for product
// * @route   post /api/upload-images
// * @access  Private
router.post(
    '/upload-images',
    authCheck,
    adminCheck,
    uploadImages,
);

// * @desc    Remove image from product
// * @route   post /api/remove-image
// * @access  Private
router.post(
    '/remove-image',
    authCheck,
    adminCheck,
    removeImage,
);

export default router;