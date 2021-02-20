import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// * @antd
import Spin from 'antd/lib/spin';
import { LoadingOutlined } from '@ant-design/icons';

const SpinnerContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
        <SpinnerContainer className='container'>
            <Spin 
                tip={`You will be redirected in ${count}`} 
                size='large'
                indicator={<LoadingOutlined />}
            />
        </SpinnerContainer>
    )
}

export default LoadingToRedirect;
