import Product from '../models/product';
import slugify from 'slugify';
import { BAD_REQUEST, CREATED, OK } from '../utils/contsants';

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

const getProducts = async (req, res) => {
    const count = req.params.count;

    try {
        const products = await Product
        .find({})
        .limit(parseInt(count))
        .populate('category')
        .populate('subCategories')
        .sort([['createdAt', 'desc']])
        .exec();

        res.status(OK).json(products);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Products retrieving failed'
        });
    }
}

export {
    createProduct,
    getProducts,
}