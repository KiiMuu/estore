import axios from 'axios';
import {
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_FAIL,
} from '../constants/admin';

export const getOrders = authtoken => async dispatch => {
    try {
        dispatch({
            type: ORDER_LIST_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }

        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/admin/orders`, config);

        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const updateOrderStatus = (orderId, orderStatus, authtoken) => async dispatch => {
    try {
        dispatch({
            type: ORDER_UPDATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }

        const { data } = await axios.put(`${process.env.REACT_APP_API}/api/admin/update-status`, { orderId, orderStatus }, config);

        dispatch({
            type: ORDER_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: ORDER_UPDATE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}