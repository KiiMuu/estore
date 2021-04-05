import Coupon from '../models/coupon';
import { OK, CREATED, BAD_REQUEST } from '../utils/contsants';

const createCoupon = async (req, res) => {
    try {
        const { name, expiration, discount } = req.body;

        const coupon = await new Coupon({
            name,
            expiration,
            discount,
        }).save();

        res.status(CREATED).json(coupon);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Coupon creation failed'
        });
    }
}

const getCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find({}).sort({ createdAt: -1 }).exec();
    
        res.status(OK).json(coupons);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Coupons retrieving failed'
        });
    }
}

const removeCoupon = async (req, res) => {
    try {
        const couponId = req.params.couponId;

        const removedCoupon = await Coupon.findOneAndDelete({ _id: couponId });

        res.status(OK).json(removedCoupon);
    } catch (err) {
        res.status(BAD_REQUEST).json({
            message: 'Coupon deletion failed'
        });
    }
}

export {
    createCoupon,
    getCoupons,
    removeCoupon,
}