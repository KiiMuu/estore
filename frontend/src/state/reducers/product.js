import {
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
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

const initialProductsList = {
    products: []
}

export const productListReducer = (state = initialProductsList, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                products: action.payload,
                success: true,
                loading: false,
            }
        case PRODUCT_LIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}