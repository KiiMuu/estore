import axios from 'axios';
import { 
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
    
        const { data } = await axios.post('/api/user/cart', { cart }, config);
    
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