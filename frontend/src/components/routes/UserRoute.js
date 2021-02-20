import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from '../layout/redirect-loading/LoadingToRedirect';

const UserRoute = ({ children, ...rest }) => {
    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    return userInfo?.token ? (
        <Route 
            {...rest} 
            render={() => children}
        />
    ) : <LoadingToRedirect />;
}

export default UserRoute;