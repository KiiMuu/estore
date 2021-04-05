import { 
    ADD_TO_CART,
    ADD_TO_CART_DRAWER,
    DELETE_USER_CART_FAIL,
    DELETE_USER_CART_REQUEST,
    DELETE_USER_CART_SUCCESS,
    DELIVERY_ADDRESS_FAIL,
    DELIVERY_ADDRESS_REQUEST,
    DELIVERY_ADDRESS_SUCCESS,
    GET_USER_CART_FAIL,
    GET_USER_CART_REQUEST,
    GET_USER_CART_SUCCESS,
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
            return action.payload;
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

const initialUserCartReducer = {};

export const userCartReducer = (state = initialUserCartReducer, action) => {
    switch (action.type) {
        case GET_USER_CART_REQUEST:
            return {
                loading: true,
            }
        case GET_USER_CART_SUCCESS:
            return {
                userCart: action.payload,
                loading: false,
            }
        case GET_USER_CART_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialDeleteUserCartReducer = {};

export const deleteUserCartReducer = (state = initialDeleteUserCartReducer, action) => {
    switch (action.type) {
        case DELETE_USER_CART_REQUEST:
            return {
                loading: true,
            }
        case DELETE_USER_CART_SUCCESS:
            return {
                userCart: action.payload,
                loading: false,
            }
        case DELETE_USER_CART_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialDeliveryAddressReducer = {};

export const addDeliveryAddressReducer = (state = initialDeliveryAddressReducer, action) => {
    switch (action.type) {
        case DELIVERY_ADDRESS_REQUEST:
            return {
                loading: true,
            }
        case DELIVERY_ADDRESS_SUCCESS:
            return {
                deliveryAddress: action.payload,
                loading: false,
            }
        case DELIVERY_ADDRESS_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}