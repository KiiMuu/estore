import axios from 'axios';
import {
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
} from '../constants/product';

export const createProduct = (product, authtoken) => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }

        const { data } = await axios.post('/api/product', product, config);

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const getProductsByCount = count => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST,
        });

        const { data } = await axios.get(`/api/products/${count}`);

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const deleteProduct = (slug, authtoken) => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.delete(`/api/product/${slug}`, config);
    
        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}