import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from '../layout/redirect-loading/LoadingToRedirect';

const UserRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    return <Route 
        {...rest} 
        render={props => userInfo?.token ? (
            <Component {...props} />
        ) : (
            <LoadingToRedirect />
        )} 
    />
}

export default UserRoute;