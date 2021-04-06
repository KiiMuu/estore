import User from '../models/user';
import Cart from '../models/cart';
import Product from '../models/product';
import Coupon from '../models/coupon';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET);
import { OK, BAD_REQUEST } from '../utils/contsants';

const createPaymentIntent = async (req, res) => {
    try {
        const { isCouponApplied } = req.body; // * sent from frontrend

        const user = await User.findOne({ email: req.user.email }).exec();
        const { 
            cartTotal, 
            totalAfterDiscount,
        } = await Cart.findOne({ orderedBy: user._id }).exec();

        let finalAmount = 0;

        if (isCouponApplied && totalAfterDiscount) {
            finalAmount = totalAfterDiscount * 100; // * convert $ to cent
        } else {
            finalAmount = cartTotal * 100;
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: finalAmount,
            currency: 'usd',
        });

        res.status(OK).json({
            clientSecret: paymentIntent.client_secret,
            cartTotal,
            totalAfterDiscount,
            payable: finalAmount,
        })
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Payment creation failed'
        });
    }
}

export {
    createPaymentIntent,
}