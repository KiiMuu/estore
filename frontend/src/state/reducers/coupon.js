import { 
    APPLY_COUPON_FAIL,
    APPLY_COUPON_REQUEST,
    APPLY_COUPON_SUCCESS,
    COUPON_CREATE_FAIL,
    COUPON_CREATE_REQUEST,
    COUPON_CREATE_RESET,
    COUPON_CREATE_SUCCESS,
    COUPON_DELETE_FAIL,
    COUPON_DELETE_REQUEST,
    COUPON_DELETE_SUCCESS,
    COUPON_LIST_FAIL,
    COUPON_LIST_REQUEST, 
    COUPON_LIST_SUCCESS,
} from '../constants/coupon';

const initialCouponsList = {
    coupons: []
}

export const couponListReducer = (state = initialCouponsList, action) => {
    switch (action.type) {
        case COUPON_LIST_REQUEST:
            return {
                loading: true,
            }
        case COUPON_LIST_SUCCESS:
            return {
                coupons: action.payload,
                loading: false,
                success: true,
            }
        case COUPON_LIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialCouponCreate = {}

export const couponCreateReducer = (state = initialCouponCreate, action) => {
    switch (action.type) {
        case COUPON_CREATE_REQUEST:
            return {
                loading: true,
            }
        case COUPON_CREATE_SUCCESS:
            return {
                coupon: action.payload,
                success: true,
                loading: false,
            }
        case COUPON_CREATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        case COUPON_CREATE_RESET:
            return {}
        default:
            return state;
    }
}

const initialCouponDelete = {}

export const couponDeleteReducer = (state = initialCouponDelete, action) => {
    switch (action.type) {
        case COUPON_DELETE_REQUEST:
            return {
                loading: true,
            }
        case COUPON_DELETE_SUCCESS:
            return {
                removedCoupon: action.payload,
                success: true,
                loading: false,
            }
        case COUPON_DELETE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialCouponApply = {
    priceAfterDiscount: 0,
}

export const couponApplyReducer = (state = initialCouponApply, action) => {
    switch (action.type) {
        case APPLY_COUPON_REQUEST:
            return {
                loading: true,
            }
        case APPLY_COUPON_SUCCESS:
            return {
                priceAfterDiscount: action.payload,
                success: true,
                loading: false,
            }
        case APPLY_COUPON_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}