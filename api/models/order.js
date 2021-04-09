import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const orderSchema = new Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref: 'Product',
            },
            count: Number,
            color: String,
        },
    ],
    paymentIntent: {},
    orderStatus: {
        type: String,
        default: 'Not Processed',
        enum: [
            'Not Processed', 
            'Processing', 
            'Dispatched', 
            'Cancelled', 
            'Completed',
            'Cash On Delivery',
        ],
    },
    orderedBy: {
        type: ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

export default Order;