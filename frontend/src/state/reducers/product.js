import {
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_SINGLE_REQUEST,
    PRODUCT_SINGLE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_SINGLE_SUCCESS,
    PRODUCT_RATING_REQUEST,
    PRODUCT_RATING_SUCCESS,
    PRODUCT_RATING_FAIL,
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

const initialProductSingle = {}

export const productSingleReducer = (state = initialProductSingle, action) => {
    switch (action.type) {
        case PRODUCT_SINGLE_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_SINGLE_SUCCESS:
            return {
                product: action.payload,
                loading: false,
            }
        case PRODUCT_SINGLE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialProductUpdate = {
    product: {}
}

export const productUpdateReducer = (state = initialProductUpdate, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_UPDATE_SUCCESS:
            return {
                updatedProduct: action.payload,
                success: true,
                loading: false,
            }
        case PRODUCT_UPDATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        case PRODUCT_UPDATE_RESET:
            return {
                product: {},
            }
        default:
            return state;
    }
}

const initialProductDelete = {}

export const productDeleteReducer = (state = initialProductDelete, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_DELETE_SUCCESS:
            return {
                removedProduct: action.payload,
                success: true,
                loading: false,
            }
        case PRODUCT_DELETE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialProductRating = {}

export const productRatingReducer = (state = initialProductRating, action) => {
    switch (action.type) {
        case PRODUCT_RATING_REQUEST:
            return {
                loading: true,
            }
        case PRODUCT_RATING_SUCCESS:
            return {
                success: true,
                loading: false,
            }
        case PRODUCT_RATING_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}