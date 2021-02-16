import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth, googleAuth } from '../../firebase';
import { isFormValid } from './validate';
import error from '../../components/layout/message/error';
import { 
    LOGGED_IN_SUCCESS,
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
    StyledActions,
} from './styles';

// @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';
import Divider from 'antd/lib/divider';
import Button from 'antd/lib/button';

import {
    UserAddOutlined,
    KeyOutlined,
    GoogleOutlined,
} from '@ant-design/icons';

const {
    Text
} = Typography;

const Login = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();

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
            }
        }
    }

    const googleLogin = async () => {
        auth.signInWithPopup(googleAuth).then(async result => {
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
        }).catch(err => {
            console.error(err);

            error(err.message);
        });
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
                            <StyledActions>
                                <StyledButton type='submit'>
                                    Login
                                </StyledButton>
                                <Link to='/password/forgot'>Forgot password?</Link>
                            </StyledActions>
                            <Divider orientation='center'>Or login with</Divider>
                            <Button 
                                onClick={googleLogin} 
                                type='danger'
                                block
                                icon={<GoogleOutlined />}>
                                Google
                            </Button>
                        </StyledForm>
                    </Content>
                </FormWrapper>
            </Col>
        </Row>
    )
}

export default Login;