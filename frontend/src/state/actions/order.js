import axios from 'axios';
import { 
    COD_ORDER_CREATE_FAIL,
    COD_ORDER_CREATE_REQUEST,
    COD_ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL, 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS, 
    USER_ORDERS_LIST_FAIL, 
    USER_ORDERS_LIST_REQUEST,
    USER_ORDERS_LIST_SUCCESS
} from '../constants/order';

export const createOrder = (stripeResponse, authtoken) => async dispatch => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/user/order`, { stripeResponse }, config);
    
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const getUserOrders = authtoken => async dispatch => {
    try {
        dispatch({
            type: USER_ORDERS_LIST_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }

        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/user/orders`, config);

        dispatch({
            type: USER_ORDERS_LIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: USER_ORDERS_LIST_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const createCashOnDeliveryOrder = (authtoken, isCashOnDelivery, isCouponApplied) => async dispatch => {
    try {
        dispatch({
            type: COD_ORDER_CREATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/user/cash-order`, { isCashOnDelivery, isCouponApplied }, config);
    
        dispatch({
            type: COD_ORDER_CREATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: COD_ORDER_CREATE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}