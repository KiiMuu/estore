import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { isFormValid } from './validate';
import error from '../../components/layout/message/error';
import { 
    LOGGED_IN_FAIL, 
    LOGGED_IN_SUCCESS 
} from '../../state/constants/user';

// styles
import {
    ImageWrapper,
    FormWrapper,
    StyledImg,
    StyledTitle,
    StyledForm,
    StyledInput,
    StyledButton,
    Content,
    InputControl,
} from './styles';

// @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';

import {
    UserAddOutlined,
    KeyOutlined,
} from '@ant-design/icons';

const {
    Text
} = Typography;

const Login = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();

        setLoading(true);

        if (isFormValid(email, password)) {
            try {
                const result = await auth.signInWithEmailAndPassword(email, password);
    
                const { user } = result;
    
                const tokenIdResult = await user.getIdTokenResult();
                
                dispatch({
                    type: LOGGED_IN_SUCCESS,
                    payload: {
                        email: user.email,
                        token: tokenIdResult.token,
                    },
                });
    
                history.push('/');
            } catch (err) {
                error(err.message);

                setLoading(false);
            }
        }
    }

    return (
        <Row>
            <Col xs={24} lg={18}>
                <ImageWrapper>
                    <StyledImg></StyledImg>
                </ImageWrapper>
            </Col>
            <Col xs={24} lg={6}>
                <FormWrapper>
                    <Content>
                        <StyledTitle level={3}>
                            Login
                        </StyledTitle>
                        <Text type='secondary'>
                            Welcome back, login
                        </Text>
                        <StyledForm onSubmit={handleSubmit}>
                            <InputControl>
                                <span><UserAddOutlined /></span>
                                <StyledInput
                                    type='email'
                                    inputMode='email'
                                    value={email}
                                    placeholder='Type your email'
                                    onChange={e => setEmail(e.target.value)}  
                                />
                            </InputControl>
                            <InputControl>
                                <span><KeyOutlined /></span>
                                <StyledInput
                                    type='password'
                                    inputMode='password'
                                    value={password}
                                    placeholder='Type your password'
                                    onChange={e => setPassword(e.target.value)}  
                                />
                            </InputControl>
                            <StyledButton type='submit'>Login</StyledButton>
                        </StyledForm>
                    </Content>
                </FormWrapper>
            </Col>
        </Row>
    )
}

export default Login;