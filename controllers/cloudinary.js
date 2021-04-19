import cloudinary from 'cloudinary';
import { BAD_REQUEST, OK } from '../utils/contsants.js';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImages = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.body.image, {
            public_id: `${Date.now()}`,
            resource_type: 'auto', // * jpeg, png, etc
        });
    
        res.status(OK).json({
            public_id: result.public_id,
            url: result.secure_url,
        });
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Something went wrong'
        });
    }
}

const removeImage = (req, res) => {
    const image_id = req.body.public_id;
    
    cloudinary.uploader.destroy(image_id);
    
    res.json({ image_id });

}

export { uploadImages, removeImage }