import { auth } from '../../firebase';
import {
    LOGGED_IN_SUCCESS,
    LOGGED_IN_FAIL,
} from '../constants/user';

export const userAuthState = dispatch => auth.onAuthStateChanged(async user => {
    try {
        if (user) {
            const tokenIdResult = await user.getIdTokenResult();

            dispatch({
                type: LOGGED_IN_SUCCESS,
                payload: {
                    email: user.email,
                    token: tokenIdResult.token,
                },
            });
        }
    } catch (err) {
        dispatch({
            type: LOGGED_IN_FAIL,
            payload: err.message,
        });
    }
});