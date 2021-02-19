// import { auth, googleAuth } from '../../firebase';
// import error from '../../components/layout/message/error';
// import { createOrUpdateUser } from '../../state/actions/user';
// import {
//     LOGGED_IN_SUCCESS,
//     LOGGED_IN_FAIL,
// } from '../../state/constants/user';

// const googleLogin = history => async dispatch => {
//     auth.signInWithPopup(googleAuth).then(async result => {
//         const { user } = result;
//         const tokenIdResult = await user.getIdTokenResult();

//         createOrUpdateUser(tokenIdResult.token).then(res => {
//             const { name, email, role, _id } = res.data;

//             dispatch({
//                 type: LOGGED_IN_SUCCESS,
//                 payload: {
//                     name,
//                     email,
//                     role,
//                     _id,
//                     token: tokenIdResult.token,
//                 },
//             });
//         }).catch(err => {
//             console.error(err);
//         });

//         history.push('/');
//     }).catch(err => {
//         dispatch({
//             type: LOGGED_IN_FAIL,
//             payload: err.message,
//         });

//         error(err.message);
//     });
// }

// export default googleLogin;