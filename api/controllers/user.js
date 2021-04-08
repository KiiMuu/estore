import User from '../models/user';
import Product from '../models/product';
import Cart from '../models/cart';
import Coupon from '../models/coupon';
import Order from '../models/order';
import { OK, BAD_REQUEST, UNPROCESSABLE_ENTITY } from '../utils/contsants';

const proceedCheckout = async (req, res) => {
    try {
        const { cart } = req.body;

        let products = [];
        const user = await User.findOne({ email: req.user.email }).exec();
        let cartExistByThisUser = await Cart.findOne({ orderedBy: user._id }).exec();

        if (cartExistByThisUser) {
            cartExistByThisUser.remove();
        }

        for (let i = 0; i < cart.length; i++) {
            let obj = {};
            
            // * get price to create total
            let productFromDB = await Product.findById(cart[i]._id).select('price').exec();

            // * actual product in db
            // * adding product, count and color to obj
            obj.product = cart[i]._id;
            obj.count = cart[i].count;
            obj.color = cart[i].color;
            obj.price = productFromDB.price;

            products.push(obj);
        }

        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal += products[i].price * products[i].count;
        }

        await new Cart({
            products,
            cartTotal,
            orderedBy: user._id,
        }).save();

        res.status(OK).json({ ok: true, });
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Cart saving failed'
        });
    }
}

const getUserCart = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email }).exec();

        let cart = await Cart
        .findOne({ orderedBy: user._id })
        .populate('products.product', '_id title price totalAfterDiscount')
        .exec();

        const { products, cartTotal, totalAfterDiscount } = cart;

        res.status(OK).json({
            products, 
            cartTotal, 
            totalAfterDiscount,
        });
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Cart retrieving failed'
        });
    }
}

const removeUserCart = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email }).exec();

        await Cart.findOneAndRemove({ orderedBy: user._id }).exec();

        res.status(OK).json({ ok: true, });
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Cart removing failed'
        });
    }
}

const addAddress = async (req, res) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { address: req.body.address },
            { new: true, }
        ).exec();

        res.status(OK).json({ ok: true, });
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Delivery address adding failed'
        });
    }
}

const applyCoupon = async (req, res) => {
    try {
        const { coupon } = req.body;

        const validCoupon = await Coupon.findOne({ name: coupon }).exec();

        if (validCoupon === null) {
            return res.status(UNPROCESSABLE_ENTITY).json({
                message: 'Invalid coupon!'
            });
        }

        const user = await User.findOne({ email: req.user.email }).exec();

        let { cartTotal } = await Cart
        .findOne({ orderedBy: user._id })
        .populate('products.product', '_id title price')
        .exec();

        // * compute total after discount
        let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2);

        Cart.findOneAndUpdate(
            { orderedBy: user._id, },
            { totalAfterDiscount, },
            { new: true, },
        ).exec();

        res.status(OK).json(totalAfterDiscount);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Applying coupon failed'
        });
    }
}

const createOrder = async (req, res) => {
    try {
        const { paymentIntent } = req.body.stripeResponse; // * sent from frontend

        const user = await User.findOne({ email: req.user.email }).exec();
        const { products } = await Cart.findOne({ orderedBy: user._id }).exec();

        await new Order({
            products,
            paymentIntent,
            orderedBy: user._id,
        }).save();

        res.status(OK).json({ ok: true, });
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Order creation failed'
        });
    }
}

export {
    proceedCheckout,
    getUserCart,
    removeUserCart,
    addAddress,
    applyCoupon,
    createOrder,
}