import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserRoute = ({ children, ...rest }) => {
    const history = useHistory();

    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    return userInfo?.token ? (
        <Route 
            {...rest} 
            render={() => children} 
        />
    ) : history.goBack();
}

export default UserRoute;