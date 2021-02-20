import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoadingToRedirect = () => {
    const history = useHistory();

    const [count, setCount] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(currentCount => --currentCount);
        }, 1000);

        count === 0 && history.push('/');

        return () => clearInterval(interval);
    }, [count, history]);

    return (
        <div className='container' style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <p>You will be redirected in {count}</p>
        </div>
    )
}

export default LoadingToRedirect;
