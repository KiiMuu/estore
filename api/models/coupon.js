import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const couponSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true,
        required: 'Coupon name is required!',
        minlength: [6, 'Too short coupon name!'],
        maxlength: [12, 'Too long coupon name!']
    },
    expiration: {
        type: Date,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;