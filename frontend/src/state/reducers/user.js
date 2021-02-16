import {
    LOGGED_IN_REQUEST,
    LOGGED_IN_SUCCESS,
    LOGGED_IN_FAIL,
    LOGOUT,
} from '../constants/user';

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGGED_IN_REQUEST:
            return {
                loading: true,
            }
        case LOGGED_IN_SUCCESS:
            return {
                userInfo: action.payload,
                loading: false,
            }
        case LOGGED_IN_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        case LOGOUT:
            return {}
        default:
            return state;
    }
}