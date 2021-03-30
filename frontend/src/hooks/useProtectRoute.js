import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUserHook from './useUserHook';

const useProtectRoute = () => {
    const history = useHistory();
    const { userInfo } = useUserHook();

    useEffect(() => {
        let intended = history.location.state;

        if (intended) {
            return;
        } else {
            if (userInfo?.token) history.push('/');
        }
    }, [userInfo, history]);
}

export default useProtectRoute;