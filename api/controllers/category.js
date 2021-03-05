import Category from '../models/category';
import slugify from 'slugify';
import { BAD_REQUEST, CREATED, NOT_FOUND, OK } from '../utils/contsants';

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

    if (category) {
        res.status(OK).json(category);
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

export { 
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    removeCategory,
}