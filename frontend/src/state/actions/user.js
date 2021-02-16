// import { useDispatch } from 'react-redux';
// // import { auth } from '../../firebase';
// import {
//     LOGGED_IN_REQUEST,
//     LOGGED_IN_SUCCESS,
//     LOGGED_IN_FAIL,
// } from '../constants/user';

// export const login = () => async user => {
//     const dispatch = useDispatch();

//     try {
//         dispatch({
//             type: LOGGED_IN_REQUEST,
//         });

//         if (user) {
//             const tokenIdResult = await user.getIdTokenResult();

//             console.log('user', user);
//             dispatch({
//                 type: LOGGED_IN_SUCCESS,
//                 payload: {
//                     email: user.email,
//                     token: tokenIdResult.token,
//                 },
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: LOGGED_IN_FAIL,
//             payload: err.message,
//         });
//     }
// }