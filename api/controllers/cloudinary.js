import cloudinary from 'cloudinary';
import { BAD_REQUEST, OK } from '../utils/contsants';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secert: process.env.CLOUDINARY_API_SECERT,
});

const uploadImages = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.body.image, {
            public_id: `${Date.now()}`,
            resource_type: 'auto', // * jpeg, png, etc
        });
    
        res.status(OK).json({
            publicId: result.public_id,
            url: result.secure_url,
        });
    } catch (err) {
        console.log(err);
        res.status(BAD_REQUEST).json({
            message: 'Something went wrong'
        });
    }
}

const removeImage = (req, res) => {
    const image_id = req.body.publicId;

    cloudinary.uploader.destroy(image_id, (err, result) => {
        if (err) {
            res.status(BAD_REQUEST).json({
                message: 'Something went wrong'
            });
        }

        res.status(OK).json({
            message: 'OK'
        });
    });
}

export { uploadImages, removeImage }