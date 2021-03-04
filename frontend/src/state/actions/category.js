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
} from '../constants/category';

export const getCategories = () => async dispatch => {
    try {
        dispatch({
            type: CATEGORY_LIST_REQUEST,
        });

        const { data } = await axios.get('/api/categories');

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
    
        const { data } = await axios.get(`/api/category/${slug}`);
    
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
    
        const { data } = await axios.post('/api/category', category, config);
    
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

    // await axios.post('/api/category', category, {
    //     headers: {
    //         authtoken,
    //     }
    // }).then(res => console.log(res)).catch(err => console.log(err));
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
    
        const { data } = await axios.put(`/api/category/${slug}`, category, config);
    
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

export const deleteCategory = (slug, authtoken) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_DELETE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        await axios.delete(`/api/category/${slug}`, config);
    
        dispatch({
            type: CATEGORY_DELETE_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: CATEGORY_DELETE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}