import Product from '../models/product';
import { OK } from '../utils/contsants';

export const handleQuery = async (req, res, query) => {
    const products = await Product.find({ 
        $text: {
            $search: query,
        } 
    })
    .populate('category', '_id name')
    .populate('subCategories', '_id name')
    .populate('ratedBy', '_id name')
    .exec();

    res.status(OK).json(products);
}

export const handlePrice = async (req, res, price) => {
    try {
        const products = await Product.find({
            price: {
                $gte: price[0],
                $lte: price[1],
            }
        })
        .populate('category', '_id name')
        .populate('subCategories', '_id name')
        .populate('ratedBy', '_id name')
        .exec();

        res.status(OK).json(products);
    } catch (err) {
        console.log({ err });
    }
}

export const handleCategory = async (req, res, category) => {
    try {
        const products = await Product.find({ category })
        .populate('category', '_id name')
        .populate('subCategories', '_id name')
        .populate('ratedBy', '_id name')
        .exec();

        res.status(OK).json(products);
    } catch (err) {
        console.log({ err });
    }
}