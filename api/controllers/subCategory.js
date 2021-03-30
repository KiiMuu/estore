import SubCategory from '../models/subCategory';
import Product from '../models/product';
import slugify from 'slugify';
import { BAD_REQUEST, CREATED, NOT_FOUND, OK } from '../utils/contsants';

const createSubCategory = async (req, res) => {
    try {
        const { name, parent } = req.body;

        const subCategory = await new SubCategory({ 
            name, 
            parent,
            slug: slugify(name)
        }).save();

        res.status(CREATED).json(subCategory);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Sub-category creation failed'
        });
    }
}

const getSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory
        .find({})
        .sort({ createdAt: -1 })
        .populate('parent', 'name')
        .exec();
    
        res.status(OK).json(subCategories);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Sub-categories retrieving failed'
        });
    }
}

const getSubCategory = async (req, res) => {
    const slug = req.params.slug;

    const subCategory = await SubCategory.findOne({ slug }).exec();

    // * get sub category products
    const subCategoryProducts = await Product.find({ subCategories: subCategory })
    .populate('category')
    .exec();

    if (subCategory) {
        res.status(OK).json({
            subCategory,
            subCategoryProducts,
        });
    } else {
        res.status(NOT_FOUND).json({
            message: 'Sub-category maybe deleted'
        });
    }
}

const updateSubCategory = async (req, res) => {
    const slug = req.params.slug;
    const { name, parent } = req.body;

    try {
        const updatedSubCategory = await SubCategory.findOneAndUpdate(
            { slug }, 
            { name, parent, slug: slugify(name) },
            { new: true }
        );

        res.status(OK).json(updatedSubCategory);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Sub-category updating failed'
        });
    }
}

const removeSubCategory = async (req, res) => {
    try {
        const slug = req.params.slug;

        const removedSubCategory = await SubCategory.findOneAndDelete({ slug });

        res.status(OK).json(removedSubCategory);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Sub-category deletion failed'
        });
    }
}

export {
    createSubCategory,
    getSubCategories,
    getSubCategory,
    updateSubCategory,
    removeSubCategory,
}