import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import LoadingToRedirect from '../layout/redirect-loading/LoadingToRedirect';
import { currentAdmin } from '../../state/actions/user';
import useUserHook from '../../hooks/useUserHook';

const AdminRoute = ({ ...rest }) => {
    const { userInfo } = useUserHook();

    const [ok, setOk] = useState(false);

    useEffect(() => {
        if (userInfo?.token) {
            currentAdmin(userInfo?.token).then(res => {
                setOk(true);
            }).catch(err => {
                console.error(err);
                setOk(false);
            });
        }
    }, [userInfo]);

    return ok ? <Route {...rest} /> : <LoadingToRedirect />;
}

export default AdminRoute;