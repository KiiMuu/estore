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
    PRODUCT_SINGLE_REQUEST,
    PRODUCT_SINGLE_SUCCESS,
    PRODUCT_SINGLE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_RATING_REQUEST,
    PRODUCT_RATING_SUCCESS,
    PRODUCT_RATING_FAIL,
    PRODUCT_RELATED_REQUEST,
    PRODUCT_RELATED_SUCCESS,
    PRODUCT_RELATED_FAIL,
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

        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/product`, product, config);

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

        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/products/${count}`);

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

export const getProduct = slug => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_SINGLE_REQUEST,
        });
    
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/product/${slug}`);
    
        dispatch({
            type: PRODUCT_SINGLE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_SINGLE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const updateProduct = (slug, product, authtoken) => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.put(`${process.env.REACT_APP_API}/api/product/${slug}`, product, config);
    
        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
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
    
        const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/product/${slug}`, config);
    
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

export const listAllProducts = async (sort, order, page) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/products`, {
            sort,
            order,
            page,
        });

        return data;
    } catch (err) {
        return err.response?.data.message ? err.response.data.message : err.message;
    }
}

export const getTotalProducts = async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/products/total`);

        return data;
    } catch (err) {
        return err.response?.data.message ? err.response.data.message : err.message;
    }
}

export const rateProduct = (id, numberOfStars, rateText, authtoken) => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_RATING_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        await axios.put(`${process.env.REACT_APP_API}/api/product/rate/${id}`, { 
            numberOfStars,
            rateText, 
        }, config);
    
        dispatch({
            type: PRODUCT_RATING_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_RATING_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const getRelatedProducts = id => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_RELATED_REQUEST,
        });

        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/product/related/${id}`);

        dispatch({
            type: PRODUCT_RELATED_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_RELATED_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const searchProducts = async arg => {
    try {
        return await axios.post(`${process.env.REACT_APP_API}/api/products/search/filters`, arg);
    } catch (err) {
        return err.response?.data.message ? err.response.data.message : err.message;
    }
}