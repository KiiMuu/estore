import Product from '../models/product';
import User from '../models/user';
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

const getProductsByCount = async (req, res) => {
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

const getProduct = async (req, res) => {
    const slug = req.params.slug;

    const product = await Product
    .findOne({ slug })
    .populate('category')
    .populate('subCategories')
    .exec();

    if (product) {
        res.status(OK).json(product);
    } else {
        res.status(NOT_FOUND).json({
            message: 'Product maybe deleted'
        });
    }
}

const updateProduct = async (req, res) => {
    const slug = req.params.slug;

    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }

        const updatedProduct = await Product.findOneAndUpdate({ slug }, req.body, {new: true}).exec();

        res.status(OK).json(updatedProduct);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Product updating failed'
        });
    }
}

const removeProduct = async (req, res) => {
    try {
        const slug = req.params.slug;

        const removedProduct = await Product.findOneAndDelete({ slug });

        res.status(OK).json(removedProduct);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Product deletion failed'
        });
    }
}

// * without pagination
// const getProducts = async (req, res) => {
//     try {
//         const { sort, order, limit } = req.body;

//         const products = await Product
//         .find({})
//         .populate('category')
//         .populate('subCategories')
//         .sort([[sort, order]])
//         .limit(limit)
//         .exec();

//         res.status(OK).json(products);
//     } catch (err) {
//         console.log(err);
//         res.status(BAD_REQUEST).json({
//             message: 'Products retrieving failed'
//         });
//     }
// }

// * with pagination
const getProducts = async (req, res) => {
    try {
        const { sort, order, page } = req.body;

        const currentPage = page || 1;
        const perPage = 3;

        const products = await Product
        .find({})
        .skip((currentPage - 1) * perPage)
        .populate('category')
        .populate('subCategories')
        .sort([[sort, order]])
        .limit(perPage)
        .exec();

        res.status(OK).json(products);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Products retrieving failed'
        });
    }
}

const productsCount = async (req, res) => {
    let totalProducts = await Product.find({}).estimatedDocumentCount().exec();

    res.status(OK).json(totalProducts);
}

const rateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const currentUser = req.user.email;

        const product = await Product.findById(productId).exec();
        const user = await User.findOne({ email: currentUser }).exec();

        const { numberOfStars, rateText } = req.body;

        // * check if currently logged in user have already added rating to this product
        let existingRating = product.ratings
        .find(ele => ele.ratedBy.toString() === user._id.toString());

        // * if user haven't left rating yet, then, push it
        // * else, update it
        if (existingRating === undefined) {
            let ratingAdded = await Product.findByIdAndUpdate(product._id, {
                $push: {
                    ratings: {
                        numberOfStars,
                        rateText,
                        ratedBy: user._id,
                    },
                }
            }, {
                new: true, // * to send newly and updated info to client
            }).exec();

            res.status(OK).json(ratingAdded);
        } else {
            let ratingUpdated = await Product.updateOne({
                ratings: {
                    $elemMatch: existingRating,
                }
            }, {
                $set: {
                    'ratings.$.numberOfStars': numberOfStars,
                    'ratings.$.rateText': rateText,
                }
            }, {
                new: true,
            }).exec();

            res.status(OK).json(ratingUpdated);
        }
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Rating adding failed'
        });
    }
}

const relatedProducts = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId).exec();

        const relatedProds = await Product.find({
            _id: { $ne: product._id },
            category: product.category,
        })
        .limit(3)
        .populate('category')
        .populate('subCategories')
        .populate('ratedBy')
        .exec();

        res.status(OK).json(relatedProds);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Related products retrieving failed'
        });
    }
}

// * search / filters
const handleQuery = async (req, res, query) => {
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

const handlePrice = async (req, res, price) => {
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

const searchFilters = async (req, res) => {
    try {
        const { query, price } = req.body;

        if (query) {
            await handleQuery(req, res, query);
        }
        
        if (price !== undefined) {
            await handlePrice(req, res, price);
        }
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Search products failed'
        });
    }
}

export {
    createProduct,
    getProduct,
    getProductsByCount,
    updateProduct,
    removeProduct,
    getProducts,
    productsCount,
    rateProduct,
    relatedProducts,
    searchFilters,
}