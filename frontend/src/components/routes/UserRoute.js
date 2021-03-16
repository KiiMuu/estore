import { Route } from 'react-router-dom';
import LoadingToRedirect from '../layout/redirect-loading/LoadingToRedirect';
import useUserHook from '../../hooks/useUserHook';

const UserRoute = ({ ...rest }) => {
    const { userInfo } = useUserHook();

    return userInfo?.token ? <Route {...rest} /> : <LoadingToRedirect />;
}

export default UserRoute;