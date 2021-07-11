import axios from 'axios';
import { 
    STRIPE_FAIL, 
    STRIPE_REQUEST, 
    STRIPE_SUCCESS 
} from '../constants/stripe';

export const payWithStripe = (authtoken, isCouponApplied) => async dispatch => {
    try {
        dispatch({
            type: STRIPE_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/create-payment-intent`, { isCouponApplied }, config);
    
        dispatch({
            type: STRIPE_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: STRIPE_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}