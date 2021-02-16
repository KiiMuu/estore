import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// components
import Home from './pages/home/Home';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';
import Login from './pages/auth/Login';
import Header from './components/nav/Header';

import { auth } from './firebase';
import {
    LOGGED_IN_SUCCESS,
    LOGGED_IN_FAIL,
} from './state/constants/user';

const App = () => {
    const dispatch = useDispatch();

    // check firebse auth state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
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

        // clean up
        return () => unsubscribe();
    }, [dispatch]);

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/register/complete' component={RegisterComplete} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </Fragment>
    )
}

export default App;
