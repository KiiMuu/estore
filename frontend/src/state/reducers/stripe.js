import { 
    STRIPE_FAIL, 
    STRIPE_REQUEST, 
    STRIPE_SUCCESS 
} from '../constants/stripe';

const initialPaymentIntentReducer = {};

export const stripePaymentIntentReducer = (state = initialPaymentIntentReducer, action) => {
    switch (action.type) {
        case STRIPE_REQUEST:
            return {
                loading: true,
            }
        case STRIPE_SUCCESS:
            return {
                ...action.payload,
                success: true,
                loading: false,
            }
        case STRIPE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}