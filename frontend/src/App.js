import Button from 'antd/lib/button';
import styled from 'styled-components';

const StyledParent = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
        margin-top: 1rem;
    }
`;

const App = () => {
    return (
        <StyledParent>
            <Button type="primary">eStore App</Button>
            <p>This is an initial setup.</p>
        </StyledParent>
    )
}

export default App;
