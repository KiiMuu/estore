import Product from '../models/product.js';
import { OK } from '../utils/contsants.js';

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

export const handleStars = (req, res, stars) => {
    Product.aggregate([
        {
            // * generate average value
            $project: {
                document: '$$ROOT',
                floorAverage: {
                    $floor: {
                        $avg: '$ratings.numberOfStars',
                    },
                },
            },
        },
        {
            $match: {
                floorAverage: stars,
            },
        },
    ])
    .limit(12)
    .exec((err, result) => {
        if (err) console.log(err);

        Product.find({ _id: result })
        .populate('category', '_id name')
        .populate('subCategories', '_id name')
        .populate('ratedBy', '_id name')
        .exec((err, products) => {
            if (err) console.log(err);

            res.status(OK).json(products);
        });
    });
}

export const handleSubCategories =  async (req, res, sub) => {
    try {
        const products = await Product.find({ subCategories: sub })
        .populate('category', '_id name')
        .populate('subCategories', '_id name')
        .populate('ratedBy', '_id name')
        .exec();

        res.status(OK).json(products);
    } catch (err) {
        console.log({ err });
    }
}

export const handleColor = async (req, res, color) => {
    try {
        const products = await Product.find({ color })
        .populate('category', '_id name')
        .populate('subCategories', '_id name')
        .populate('ratedBy', '_id name')
        .exec();

        res.status(OK).json(products);
    } catch (err) {
        console.log({ err });
    }
}

export const handleBrand = async (req, res, brand) => {
    try {
        const products = await Product.find({ brand })
        .populate('category', '_id name')
        .populate('subCategories', '_id name')
        .populate('ratedBy', '_id name')
        .exec();

        res.status(OK).json(products);
    } catch (err) {
        console.log({ err });
    }
}

export const handleShipping = async (req, res, shipping) => {
    try {
        const products = await Product.find({ shipping })
        .populate('category', '_id name')
        .populate('subCategories', '_id name')
        .populate('ratedBy', '_id name')
        .exec();

        res.status(OK).json(products);
    } catch (err) {
        console.log({ err });
    }
}