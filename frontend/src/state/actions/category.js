import axios from 'axios';
import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_SINGLE_REQUEST,
    CATEGORY_SINGLE_SUCCESS,
    CATEGORY_SINGLE_FAIL,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_FAIL,
    CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_SUCCESS,
    CATEGORY_UPDATE_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAIL,
    SUBS_OF_PARENT_REQUEST,
    SUBS_OF_PARENT_SUCCESS,
    SUBS_OF_PARENT_FAIL,
} from '../constants/category';

export const getCategories = () => async dispatch => {
    try {
        dispatch({
            type: CATEGORY_LIST_REQUEST,
        });

        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/categories`);

        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const getCategory = slug => async dispatch => {
    try {
        dispatch({
            type: CATEGORY_SINGLE_REQUEST,
        });
    
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/category/${slug}`);
    
        dispatch({
            type: CATEGORY_SINGLE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: CATEGORY_SINGLE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const createCategory = (category, authtoken) => async dispatch => {
    try {
        dispatch({
            type: CATEGORY_CREATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/category`, category, config);
    
        dispatch({
            type: CATEGORY_CREATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const updateCategory = (slug, category, authtoken) => async dispatch => {
    try {
        dispatch({
            type: CATEGORY_UPDATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.put(`${process.env.REACT_APP_API}/api/category/${slug}`, category, config);
    
        dispatch({
            type: CATEGORY_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: CATEGORY_UPDATE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const deleteCategory = (slug, authtoken) => async dispatch => {
    try {
        dispatch({
            type: CATEGORY_DELETE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/category/${slug}`, config);
    
        dispatch({
            type: CATEGORY_DELETE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: CATEGORY_DELETE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const getSubsOfParent = _id => async dispatch => {
    try {
        dispatch({
            type: SUBS_OF_PARENT_REQUEST,
        });
    
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/category/sub-categories/${_id}`);
    
        dispatch({
            type: SUBS_OF_PARENT_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: SUBS_OF_PARENT_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}