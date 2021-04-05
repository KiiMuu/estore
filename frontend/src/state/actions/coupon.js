import axios from 'axios';
import { 
    COUPON_CREATE_FAIL,
    COUPON_CREATE_REQUEST,
    COUPON_CREATE_SUCCESS,
    COUPON_DELETE_FAIL,
    COUPON_DELETE_REQUEST,
    COUPON_DELETE_SUCCESS,
    COUPON_LIST_FAIL,
    COUPON_LIST_REQUEST, 
    COUPON_LIST_SUCCESS,
} from '../constants/coupon';

export const getCoupons = () => async dispatch => {
    try {
        dispatch({
            type: COUPON_LIST_REQUEST,
        });

        const { data } = await axios.get('/api/coupons');

        dispatch({
            type: COUPON_LIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: COUPON_LIST_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const createCoupon = (coupon, authtoken) => async dispatch => {
    try {
        dispatch({
            type: COUPON_CREATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.post('/api/coupon', coupon, config);
    
        dispatch({
            type: COUPON_CREATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: COUPON_CREATE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const deleteCoupon = (couponId, authtoken) => async dispatch => {
    try {
        dispatch({
            type: COUPON_DELETE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.delete(`/api/coupon/${couponId}`, config);
    
        dispatch({
            type: COUPON_DELETE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: COUPON_DELETE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}