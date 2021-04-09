import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        index: true,
    },
    role: {
        type: String,
        enum: ['admin', 'subscriber'],
        default: 'subscriber',
    },
    cart: {
        type: Array,
        default: [],
    },
    address: String,
    wishlist: [{
        type: ObjectId,
        ref: 'Product',
    }]
}, {
    timestamps: true,
});

userSchema.set('autoIndex', false);

const User = mongoose.model('User', userSchema);

export default User;