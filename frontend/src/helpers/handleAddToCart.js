import { ADD_TO_CART } from '../state/constants/cart';

export const handleAddToCart = (product, setTooltip) => dispatch => {
    let cart = [];
    
    // * localStorage is a part of the window object
    if (typeof window !== 'undefined') {
        // * if cart is in localStorage, get it!
        if (localStorage.getItem('userCart')) {
            // * parse json data to recieve them as JS object!
            cart = JSON.parse(localStorage.getItem('userCart'))
        }

        // * otherwise, push new product to cart!
        cart.push({
            ...product,
            count: 1,
        });

        // * prevent duplicates
        let IDs = cart.map(c => c._id)
        let uniqueCarts = cart.filter(({ _id }, index) => !IDs.includes(_id, index + 1));

        // * save to LS
        localStorage.setItem('userCart', JSON.stringify(uniqueCarts));

        setTooltip('Added');

        dispatch({
            type: ADD_TO_CART,
            payload: uniqueCarts,
        });
    }
}