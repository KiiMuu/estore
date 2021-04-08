import { 
    ORDER_LIST_FAIL, 
    ORDER_LIST_REQUEST, 
    ORDER_LIST_SUCCESS, 
    ORDER_UPDATE_FAIL, 
    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS
} from '../constants/admin';

const initialOrdersList = {
    orders: []
}

export const orderListReducer = (state = initialOrdersList, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return {
                loading: true,
            }
        case ORDER_LIST_SUCCESS:
            return {
                orders: action.payload,
                loading: false,
                success: true,
            }
        case ORDER_LIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialOrderUpdate = {}

export const orderUpdateReducer = (state = initialOrderUpdate, action) => {
    switch (action.type) {
        case ORDER_UPDATE_REQUEST:
            return {
                loading: true,
            }
        case ORDER_UPDATE_SUCCESS:
            return {
                updatedOrder: action.payload,
                loading: false,
                success: true,
            }
        case ORDER_UPDATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}