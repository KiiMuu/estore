import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// * components
// * public
import Home from './pages/home/Home';
import Header from './components/nav/Header';
// * auth
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
// * user
import UserRoute from './components/routes/UserRoute';
import History from './pages/user/history/History';
import Password from './pages/user/password/Password';
import Wishlist from './pages/user/wishlist/Wishlist';
// * admin
import AdminRoute from './components/routes/AdminRoute';
import Dashboard from './pages/admin/dashboard/Dashboard';
import CreateCategory from './pages/admin/category/CreateCategory';

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
                {/* public */}
                <Route exact path='/' component={Home} />
                {/* auth */}
                <Route exact path='/register' component={Register} />
                <Route exact path='/register/complete' component={RegisterComplete} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/password/forgot' component={ForgotPassword} />
                {/* user */}
                <UserRoute exact path='/user/history' component={History} />
                <UserRoute exact path='/user/password' component={Password} />
                <UserRoute exact path='/user/wishlist' component={Wishlist} />
                {/* admin */}
                <AdminRoute exact path='/admin/dashboard' component={Dashboard} />
                <AdminRoute exact path='/admin/category' component={CreateCategory} />
            </Switch>
        </Fragment>
    )
}

export default App;