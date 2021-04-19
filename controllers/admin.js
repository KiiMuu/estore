import Order from '../models/order.js';
import { BAD_REQUEST, OK } from '../utils/contsants.js';

const getOrders = async (req, res) => {
    try {
        const orders = await Order
        .find({})
        .sort({ createdAt: -1 })
        .populate('products.product')
        .exec();
    
        res.status(OK).json(orders);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Orders retrieving failed'
        });
    }
}

const orderStatus = async (req, res) => {
    try {
        const { orderId, orderStatus } = req.body;
        
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { orderStatus },
            { new: true, },
        ).exec();
    
        res.status(OK).json(updatedOrder);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Status updating failed'
        });
    }
}

export {
    getOrders,
    orderStatus
}