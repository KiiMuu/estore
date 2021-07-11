import axios from 'axios';
import { 
    DELETE_USER_CART_FAIL,
    DELETE_USER_CART_REQUEST,
    DELETE_USER_CART_SUCCESS,
    DELIVERY_ADDRESS_FAIL,
    DELIVERY_ADDRESS_REQUEST,
    DELIVERY_ADDRESS_SUCCESS,
    GET_USER_CART_FAIL,
    GET_USER_CART_REQUEST,
    GET_USER_CART_SUCCESS,
    PROCEED_CHECKOUT_FAIL,
    PROCEED_CHECKOUT_REQUEST, 
    PROCEED_CHECKOUT_SUCCESS,
} from '../constants/cart';

export const checkoutProceed = (cart, authtoken) => async dispatch => {
    try {
        dispatch({
            type: PROCEED_CHECKOUT_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/user/cart`, { cart }, config);
    
        dispatch({
            type: PROCEED_CHECKOUT_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: PROCEED_CHECKOUT_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const getUserCart = authtoken => async dispatch => {
    try {
        dispatch({
            type: GET_USER_CART_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/user/cart`, config);
    
        dispatch({
            type: GET_USER_CART_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: GET_USER_CART_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const removeUserCart = authtoken => async dispatch => {
    try {
        dispatch({
            type: DELETE_USER_CART_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        // * at least {} in put request
        const { data } = await axios.put(`${process.env.REACT_APP_API}/api/user/cart`, {}, config);

        dispatch({
            type: DELETE_USER_CART_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: DELETE_USER_CART_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const saveUserAddress = (address, authtoken) => async dispatch => {
    try {
        dispatch({
            type: DELIVERY_ADDRESS_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/user/address`, { address }, config);

        dispatch({
            type: DELIVERY_ADDRESS_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: DELIVERY_ADDRESS_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}