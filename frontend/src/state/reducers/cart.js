import { 
    ADD_TO_CART,
    ADD_TO_CART_DRAWER,
    PROCEED_CHECKOUT_FAIL,
    PROCEED_CHECKOUT_REQUEST,
    PROCEED_CHECKOUT_SUCCESS,
} from '../constants/cart';

let initialCartList = [];

// * load cart initial state from localStorage
if (typeof window !== 'undefined') {
    if (localStorage.getItem('userCart')) {
        initialCartList = JSON.parse(localStorage.getItem('userCart'));
    } else {
        initialCartList = [];
    }
}

export const cartListReducer = (state = initialCartList, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: action.payload,
            }
        default:
            return state;
    }
}

export const cartListDrawerReducer = (state = false, action) => {
    switch (action.type) {
        case ADD_TO_CART_DRAWER:
            return {
                drawer: action.payload,
            }
        default:
            return state;
    }
}

const initialProceedCheckoutReducer = {};

export const proceedCheckoutReducer = (state = initialProceedCheckoutReducer, action) => {
    switch (action.type) {
        case PROCEED_CHECKOUT_REQUEST:
            return {
                loading: true,
            }
        case PROCEED_CHECKOUT_SUCCESS:
            return {
                userCart: action.payload,
                success: true,
                loading: false,
            }
        case PROCEED_CHECKOUT_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}