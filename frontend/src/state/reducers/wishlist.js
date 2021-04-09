import { 
    ADD_TO_WISHLIST_FAIL,
    ADD_TO_WISHLIST_REQUEST,
    ADD_TO_WISHLIST_SUCCESS,
    REMOVE_FROM_WISHLIST_FAIL,
    REMOVE_FROM_WISHLIST_REQUEST,
    REMOVE_FROM_WISHLIST_SUCCESS,
    WISH_LIST_FAIL, 
    WISH_LIST_REQUEST, 
    WISH_LIST_SUCCESS 
} from '../constants/wishlist';

const initialWishList = {
    wishlist: []
}

export const wishListReducer = (state = initialWishList, action) => {
    switch (action.type) {
        case WISH_LIST_REQUEST:
            return {
                loading: true,
            }
        case WISH_LIST_SUCCESS:
            return {
                wishlist: action.payload,
                loading: false,
                success: true,
            }
        case WISH_LIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialAddToWishlit = {}

export const addToWishListReducer = (state = initialAddToWishlit, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST_REQUEST:
            return {
                loading: true,
            }
        case ADD_TO_WISHLIST_SUCCESS:
            return {
                wishItem: action.payload,
                loading: false,
                success: true,
            }
        case ADD_TO_WISHLIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialWishListDelete = {}

export const deleteFromWishlistReducer = (state = initialWishListDelete, action) => {
    switch (action.type) {
        case REMOVE_FROM_WISHLIST_REQUEST:
            return {
                loading: true,
            }
        case REMOVE_FROM_WISHLIST_SUCCESS:
            return {
                removedWishItem: action.payload,
                success: true,
                loading: false,
            }
        case REMOVE_FROM_WISHLIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}