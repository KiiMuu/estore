import axios from 'axios';
import { auth, googleAuth } from '../../firebase';
import errorAlert from '../../components/layout/message/errorAlert';
import {
    LOGGED_IN_SUCCESS,
    LOGGED_IN_FAIL,
} from '../constants/user';

export const currentUser = async authtoken => {
    return await axios.post('/api/current-user', {}, {
        headers: {
            authtoken,
        }
    });
}

export const currentAdmin = async authtoken => {
    return await axios.post('/api/current-admin', {}, {
        headers: {
            authtoken,
        }
    });
}

export const userAuthState = () => async dispatch => {
    auth.onAuthStateChanged(async user => {
        try {
            if (user) {
                const tokenIdResult = await user.getIdTokenResult();

                currentUser(tokenIdResult.token).then(res => {
                    const { name, email, role, _id } = res.data;
        
                    dispatch({
                        type: LOGGED_IN_SUCCESS,
                        payload: {
                            name,
                            email,
                            role,
                            _id,
                            token: tokenIdResult.token,
                        },
                    });
                }).catch(err => {
                    console.error(err);
                });
            }
        } catch (err) {
            dispatch({
                type: LOGGED_IN_FAIL,
                payload: err.message,
            });
        }
    });
}

export const createOrUpdateUser = async authtoken => {
    return await axios.post('/api/create-or-update-user', {}, {
        headers: {
            authtoken,
        }
    });
}

export const roleBasedRedirect = (res, history) => {
    let intended = history.location.state;

    if (intended) {
        history.push(intended.from);
    } else {
        if (res.data.role === 'admin') {
            history.push('/admin/dashboard');
        } else {
            history.push('/user/history');
        }
    }
}

export const login = (email, password, history) => async dispatch => {
    try {
        const result = await auth.signInWithEmailAndPassword(email, password);
        const { user } = result;
        const tokenIdResult = await user.getIdTokenResult();

        createOrUpdateUser(tokenIdResult.token).then(res => {
            const { name, email, role, _id } = res.data;

            dispatch({
                type: LOGGED_IN_SUCCESS,
                payload: {
                    name,
                    email,
                    role,
                    _id,
                    token: tokenIdResult.token,
                },
            });

            roleBasedRedirect(res, history);
        }).catch(err => {
            console.error(err);
        });
    } catch (err) {
        dispatch({
            type: LOGGED_IN_FAIL,
            payload: err.message,
        });

        errorAlert(err.message);
    }
}

export const register = (email, password, history) => async dispatch => {
    try {
        const result = await auth.signInWithEmailLink(email, window.location.href);

        if (result.user.emailVerified) {
            // remove user email from localStorae
            window.localStorage.removeItem('registerEmail');

            // get user id token
            let user = auth.currentUser;

            await user.updatePassword(password);

            const tokenIdResult = await user.getIdTokenResult();

            createOrUpdateUser(tokenIdResult.token).then(res => {
                const { name, email, role, _id } = res.data;
    
                dispatch({
                    type: LOGGED_IN_SUCCESS,
                    payload: {
                        name,
                        email,
                        role,
                        _id,
                        token: tokenIdResult.token,
                    },
                });
            }).catch(err => {
                console.error(err);
            });

            history.push('/');
        }
    } catch (err) {
        dispatch({
            type: LOGGED_IN_FAIL,
            payload: err.message,
        });
        
        errorAlert(err.message);
    }
}

export const googleLogin = history => async dispatch => {
    try {
        auth.signInWithPopup(googleAuth).then(async result => {
            const { user } = result;
            const tokenIdResult = await user.getIdTokenResult();
    
            createOrUpdateUser(tokenIdResult.token).then(res => {
                const { name, email, role, _id } = res.data;
    
                dispatch({
                    type: LOGGED_IN_SUCCESS,
                    payload: {
                        name,
                        email,
                        role,
                        _id,
                        token: tokenIdResult.token,
                    },
                });

                roleBasedRedirect(res, history);
            }).catch(err => {
                console.error(err);
            });
        }).catch(err => {
            console.error(err);
        });
    } catch (err) {
        dispatch({
            type: LOGGED_IN_FAIL,
            payload: err.message,
        });

        errorAlert(err.message);
    }
}