import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// * components
import Home from './pages/home/Home';
import Header from './components/nav/Header';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import UserRoute from './components/routes/UserRoute';
import History from './pages/user/history/History';
import Password from './pages/user/password/Password';
import Wishlist from './pages/user/wishlist/Wishlist';

// * functions
import { userAuthState } from './state/actions/user';

const App = () => {
    const dispatch = useDispatch();

    // * check firebase auth state
    useEffect(() => {
        dispatch(userAuthState());

        // * clean up
        return () => userAuthState();
    }, [dispatch]);

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/register/complete' component={RegisterComplete} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/password/forgot' component={ForgotPassword} />
                <UserRoute exact path='/user/history' component={History} />
                <UserRoute exact path='/user/password' component={Password} />
                <UserRoute exact path='/user/wishlist' component={Wishlist} />
            </Switch>
        </Fragment>
    )
}

export default App;
