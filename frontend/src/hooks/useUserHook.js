import { useSelector } from 'react-redux';

const useUserHook = () => {
    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    return { userInfo }
}

export default useUserHook;