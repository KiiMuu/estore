import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from '../layout/redirect-loading/LoadingToRedirect';
import { currentAdmin } from '../../state/actions/user';

const AdminRoute = ({ ...rest }) => {
    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    const [ok, setOk] = useState(false);

    useEffect(() => {
        if (userInfo?.token) {
            currentAdmin(userInfo?.token).then(res => {
                console.log('CURR ADMIN', res);
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