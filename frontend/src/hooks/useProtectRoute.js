import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useProtectRoute = () => {
    const history = useHistory();

    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    useEffect(() => {
        if (userInfo?.token) history.push('/');
    }, [userInfo, history]);
}

export default useProtectRoute;