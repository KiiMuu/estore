import axios from 'axios';
import { 
    ADD_TO_WISHLIST_FAIL,
    ADD_TO_WISHLIST_REQUEST,
    ADD_TO_WISHLIST_SUCCESS,
    REMOVE_FROM_WISHLIST_FAIL,
    REMOVE_FROM_WISHLIST_REQUEST,
    REMOVE_FROM_WISHLIST_SUCCESS,
    WISH_LIST_FAIL, 
    WISH_LIST_REQUEST, 
    WISH_LIST_SUCCESS,
} from '../constants/wishlist';

export const getWishlist = authtoken => async dispatch => {
    try {
        dispatch({
            type: WISH_LIST_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }

        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/user/wishlist`, config);

        dispatch({
            type: WISH_LIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: WISH_LIST_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const addItemToWishlist = (productId, authtoken) => async dispatch => {
    try {
        dispatch({
            type: ADD_TO_WISHLIST_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/user/wishlist`, { productId }, config);

        dispatch({
            type: ADD_TO_WISHLIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: ADD_TO_WISHLIST_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const removeItemFromWishlist = (productId, authtoken) => async dispatch => {
    try {
        dispatch({
            type: REMOVE_FROM_WISHLIST_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }

        const { data } = await axios.put(`${process.env.REACT_APP_API}/api/user/wishlist/${productId}`, {}, config);

        dispatch({
            type: REMOVE_FROM_WISHLIST_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: REMOVE_FROM_WISHLIST_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}