import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Category name is required',
        minLength: [2, 'Too short category name'],
        maxLength: [32, 'Too long category name'],
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    }
}, {
    timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);

export default Category;