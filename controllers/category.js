import Category from '../models/category.js';
import SubCategory from '../models/subCategory.js';
import Product from '../models/product.js';
import slugify from 'slugify';
import { BAD_REQUEST, CREATED, NOT_FOUND, OK } from '../utils/contsants.js';

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const category = await new Category({ 
            name, 
            slug: slugify(name)
        }).save();

        res.status(CREATED).json(category);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Category creation failed'
        });
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({}).sort({ createdAt: -1 }).exec();
    
        res.status(OK).json(categories);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Categories retrieving failed'
        });
    }
}

const getCategory = async (req, res) => {
    const slug = req.params.slug;

    const category = await Category.findOne({ slug }).exec();

    // * get category products
    const categoryProducts = await Product.find({ category })
    .populate('category')
    .exec();

    if (category) {
        res.status(OK).json({
            category,
            categoryProducts,
        });
    } else {
        res.status(NOT_FOUND).json({
            message: 'Category maybe deleted'
        });
    }
}

const updateCategory = async (req, res) => {
    const slug = req.params.slug;
    const { name } = req.body;

    try {
        const updatedCategory = await Category.findOneAndUpdate(
            { slug }, 
            { name, slug: slugify(name) },
            { new: true }
        );

        res.status(OK).json(updatedCategory);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Category updating failed'
        });
    }
}

const removeCategory = async (req, res) => {
    try {
        const slug = req.params.slug;

        const removedCategory = await Category.findOneAndDelete({ slug });

        res.status(OK).json(removedCategory);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Category deletion failed'
        });
    }
}

const getSubsOfSingleParent = (req, res) => {
    const parentId = req.params._id;

    SubCategory.find({ parent: parentId }).exec((err, subs) => {
        if (err) {
            return res.status(BAD_REQUEST).json({
                message: 'Failed to get sub categories'
            });
        }

        res.status(OK).json(subs);
    });
}

export { 
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    removeCategory,
    getSubsOfSingleParent,
}