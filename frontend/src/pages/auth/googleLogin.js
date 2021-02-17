import { auth, googleAuth } from '../../firebase';
import error from '../../components/layout/message/error';
import {
    LOGGED_IN_SUCCESS,
    LOGGED_IN_FAIL,
} from '../../state/constants/user';

const googleLogin = async (dispatch, history) => {
    auth.signInWithPopup(googleAuth).then(async result => {
        const { user } = result;
        const tokenIdResult = await user.getIdTokenResult();

        dispatch({
            type: LOGGED_IN_SUCCESS,
            payload: {
                email: user.email,
                token: tokenIdResult.token,
            },
        });

        history.push('/');
    }).catch(err => {
        dispatch({
            type: LOGGED_IN_FAIL,
            payload: err.message,
        });

        error(err.message);
    });
}

export default googleLogin;