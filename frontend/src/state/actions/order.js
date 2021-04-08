import axios from 'axios';
import { 
    ORDER_CREATE_FAIL, 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS 
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
    
        const { data } = await axios.post('/api/user/order', { stripeResponse }, config);
    
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