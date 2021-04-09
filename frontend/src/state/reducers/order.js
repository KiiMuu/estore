import { 
    COD_ORDER_CREATE_FAIL,
    COD_ORDER_CREATE_REQUEST,
    COD_ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL, 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS, 
    USER_ORDERS_LIST_FAIL, 
    USER_ORDERS_LIST_REQUEST,
    USER_ORDERS_LIST_SUCCESS
} from '../constants/order';

const initialOrderCreate = {}

export const orderCreateReducer = (state = initialOrderCreate, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true,
            }
        case ORDER_CREATE_SUCCESS:
            return {
                order: action.payload,
                loading: false,
            }
        case ORDER_CREATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialUserOrders = {
    userOrders: []
}

export const userOrdersListReducer = (state = initialUserOrders, action) => {
    switch (action.type) {
        case USER_ORDERS_LIST_REQUEST:
            return {
                loading: true,
            }
        case USER_ORDERS_LIST_SUCCESS:
            return {
                userOrders: action.payload,
                loading: false,
                success: true,
            }
        case USER_ORDERS_LIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialCashOrderCreate = {}

export const cashOrderCreateReducer = (state = initialCashOrderCreate, action) => {
    switch (action.type) {
        case COD_ORDER_CREATE_REQUEST:
            return {
                loading: true,
            }
        case COD_ORDER_CREATE_SUCCESS:
            return {
                cashOrder: action.payload,
                loading: false,
            }
        case COD_ORDER_CREATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}