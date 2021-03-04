import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from '../layout/redirect-loading/LoadingToRedirect';

const UserRoute = ({ ...rest }) => {
    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    return userInfo?.token ? <Route {...rest} /> : <LoadingToRedirect />;
}

export default UserRoute;