import axios from 'axios';
import {
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
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