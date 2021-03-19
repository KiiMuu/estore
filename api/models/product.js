import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const productSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        text: true, // * to support text search queries on string content. text indexes can include any field whose value is a string or an array of string elements.
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 2000,
        text: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 32,
    },
    // category: {
    //     type: ObjectId,
    //     ref: 'Category',
    // },
    // subCategories: [{
    //     type: ObjectId,
    //     ref: 'SubCategory',
    // }],
    quantity: Number,
    sold: {
        type: Number,
        default: 0,
    },
    // images: {
    //     type: Array,
    // },
    shipping: {
        type: String,
        enum: ['Yes', 'No'],
    },
    color: {
        type: String,
        enum: ['Black', 'White', 'Brown', 'Silver', 'Blue'],
    },
    brand: {
        type: String,
        enum: ['Apple', 'Samsung', 'Dell', 'Acer', 'Microsoft'],
    },
    // ratings: [{
    //     star: Number,
    //     postedBy: {
    //         type: ObjectId,
    //         ref: 'User',
    //     },
    // }],
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;