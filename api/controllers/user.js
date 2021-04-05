import User from '../models/user';
import Product from '../models/product';
import Cart from '../models/cart';
import { OK, BAD_REQUEST } from '../utils/contsants';

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
            let { price } = await Product.findById(cart[i]._id).select('price').exec();

            // * actual product in db
            // * adding product, count and color to obj
            obj.product = cart[i]._id;
            obj.count = cart[i].count;
            obj.color = cart[i].color;
            obj.price = price;

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

export {
    proceedCheckout,
    getUserCart,
}