import { 
    ADD_TO_CART,
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