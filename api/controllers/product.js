import Product from '../models/product';
import slugify from 'slugify';
import { BAD_REQUEST, CREATED } from '../utils/contsants';

const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        req.body.slug = slugify(req.body.title);

        const newProduct = await new Product(req.body).save();

        res.status(CREATED).json(newProduct);
    } catch (err) {
        console.log(err);
        res.status(BAD_REQUEST).json({
            message: 'Product creation failed',
        });
    }
}

export {
    createProduct,
}