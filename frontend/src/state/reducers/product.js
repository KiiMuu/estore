import {
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,
} from '../constants/product';

const initialProductCreate = {}

export const productCreateReducer = (state = initialProductCreate, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_CREATE_SUCCESS:
            return {
                product: action.payload,
                success: true,
                loading: false,
            }
        case PRODUCT_CREATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        case PRODUCT_CREATE_RESET:
            return {}
        default:
            return state;
    }
}