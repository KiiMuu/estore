import axios from 'axios';
import {
    SUB_CATEGORY_LIST_REQUEST,
    SUB_CATEGORY_LIST_SUCCESS,
    SUB_CATEGORY_LIST_FAIL,
    SUB_CATEGORY_SINGLE_REQUEST,
    SUB_CATEGORY_SINGLE_SUCCESS,
    SUB_CATEGORY_SINGLE_FAIL,
    SUB_CATEGORY_CREATE_REQUEST,
    SUB_CATEGORY_CREATE_SUCCESS,
    SUB_CATEGORY_CREATE_FAIL,
    SUB_CATEGORY_UPDATE_REQUEST,
    SUB_CATEGORY_UPDATE_SUCCESS,
    SUB_CATEGORY_UPDATE_FAIL,
    SUB_CATEGORY_DELETE_REQUEST,
    SUB_CATEGORY_DELETE_SUCCESS,
    SUB_CATEGORY_DELETE_FAIL,
} from '../constants/subCategory';

export const getSubCategories = () => async dispatch => {
    try {
        dispatch({
            type: SUB_CATEGORY_LIST_REQUEST,
        });
        
        const { data } = await axios.get('/api/sub-categories');

        dispatch({
            type: SUB_CATEGORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: SUB_CATEGORY_LIST_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const getSubCategory = slug => async dispatch => {
    try {
        dispatch({
            type: SUB_CATEGORY_SINGLE_REQUEST,
        });
    
        const { data } = await axios.get(`/api/sub-category/${slug}`);
    
        dispatch({
            type: SUB_CATEGORY_SINGLE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: SUB_CATEGORY_SINGLE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const createSubCategory = (subCategory, authtoken) => async dispatch => {
    try {
        dispatch({
            type: SUB_CATEGORY_CREATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.post('/api/sub-category', subCategory, config);
    
        dispatch({
            type: SUB_CATEGORY_CREATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: SUB_CATEGORY_CREATE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const updateSubCategory = (slug, subCategory, authtoken) => async dispatch => {
    try {
        dispatch({
            type: SUB_CATEGORY_UPDATE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.put(`/api/sub-category/${slug}`, subCategory, config);
    
        dispatch({
            type: SUB_CATEGORY_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: SUB_CATEGORY_UPDATE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const deleteSubCategory = (slug, authtoken) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUB_CATEGORY_DELETE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.delete(`/api/sub-category/${slug}`, config);
    
        dispatch({
            type: SUB_CATEGORY_DELETE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: SUB_CATEGORY_DELETE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}