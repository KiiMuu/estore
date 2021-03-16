import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const subCategorySchema = new Schema({
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
    },
    parent: {
        type: ObjectId,
        ref: 'Category',
        required: true,
    }
}, {
    timestamps: true,
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;