import { 
    ADD_TO_CART,
    ADD_TO_CART_DRAWER,
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