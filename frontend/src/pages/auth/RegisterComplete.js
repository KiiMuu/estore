import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { isFormValid } from './validate';

// styles
import {
    FormWrapper,
    StyledTitle,
    StyledForm,
    StyledInput,
    StyledButton,
    InputControl,
    CompleteContent,
} from './styles';

// @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';
import message from 'antd/lib/message';

import {
    UserAddOutlined,
    KeyOutlined,
} from '@ant-design/icons';

const {
    Text
} = Typography;

const RegisterComplete = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setEmail(window.localStorage.getItem('registerEmail'));
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();

        if (isFormValid(email, password)) {
            try {
                const result = await auth.signInWithEmailLink(email, window.location.href);
    
                if (result.user.emailVerified) {
                    // remove user email from localStorae
                    window.localStorage.removeItem('registerEmail');
    
                    // get user id token
                    let user = auth.currentUser;
    
                    await user.updatePassword(password);
    
                    const tokenIdResult = await user.getIdTokenResult();
    
                    // redux store
                    console.table({ user, tokenIdResult });
    
                    // redirect user
                    history.push('/');
                }
            } catch (err) {
                message.error({
                    content: err.message, 
                    style: {
                        fontSize: '1.35rem',
                        color: '#262626',
                    },
                    duration: 10
                });
            }
        }
    }

    return (
        <div className='container'>
            <Row>
                <Col xs={24} lg={{ span: 12, offset: 6 }}>
                    <FormWrapper>
                        <CompleteContent>
                            <StyledTitle level={3}>
                                Continue
                            </StyledTitle>
                            <Text type='secondary'>
                                Complete your registeration
                            </Text>
                            <StyledForm onSubmit={handleSubmit}>
                                <InputControl>
                                    <span><UserAddOutlined /></span>
                                    <StyledInput
                                        type='email'
                                        value={email}
                                        disabled
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
                                <StyledButton type='submit'>Continue</StyledButton>
                            </StyledForm>
                        </CompleteContent>
                    </FormWrapper>
                </Col>
            </Row>
        </div>
    )
}

export default RegisterComplete;