import { useState } from 'react';
import { auth } from '../../firebase';
import { isEmailValid } from './validate';
import success from '../../components/layout/message/success';

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
import PopOver from 'antd/lib/popover';
import Divider from 'antd/lib/divider';

import {
    UserAddOutlined
} from '@ant-design/icons';

const {
    Text
} = Typography;

const Register = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if (isEmailValid(email)) {
            // firebase config
            const config = {
                url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
                handleCodeInApp: true
            }
    
            await auth.sendSignInLinkToEmail(email, config);
    
            success(`Email is sent to ${email}. Click the link to complete registration.`);
    
            // save user email in localStorage
            // for non-repeat typing the same email in redirection
            window.localStorage.setItem('registerEmail', email);
    
            setEmail('');
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
                            Register
                        </StyledTitle>
                        <Text type='secondary'>
                            Create a new account
                        </Text>
                        <StyledForm onSubmit={handleSubmit}>
                            <PopOver 
                                content='Please make sure you provide a valid email address so you can complete your registration'
                                trigger='focus'>
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
                            </PopOver>
                            <StyledButton type='submit'>Register</StyledButton>
                            <Divider orientation='center'>Or use</Divider>
                        </StyledForm>
                    </Content>
                </FormWrapper>
            </Col>
        </Row>
    )
}

export default Register;