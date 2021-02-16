import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { isEmailValid } from './validate';
import error from '../../components/layout/message/error';
import success from '../../components/layout/message/success';

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

import {
    UserAddOutlined,
} from '@ant-design/icons';

const {
    Text
} = Typography;

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    useEffect(() => {
        setEmail(window.localStorage.getItem('registerEmail'));
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();

        if (isEmailValid(email)) {
            const config = {
                url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
                handleCodeInApp: true
            }

            await auth.sendPasswordResetEmail(email, config).then(() => {
                success(`Email is sent to ${email}. Click the link to reset password.`);

                setEmail('');
            }).catch(err => {
                error(err.message);
            });
        }
    }

    return (
        <div className='container'>
            <Row>
                <Col xs={24} lg={{ span: 12, offset: 6 }}>
                    <FormWrapper>
                        <CompleteContent>
                            <StyledTitle level={3}>
                                Forgot Password
                            </StyledTitle>
                            <Text type='secondary'>
                                Type your email to recieve a password reset link
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
                                        autoFocus
                                    />
                                </InputControl>
                                <StyledButton type='submit'>Send Email</StyledButton>
                            </StyledForm>
                        </CompleteContent>
                    </FormWrapper>
                </Col>
            </Row>
        </div>
    )
}

export default ForgotPassword;