import { useState } from 'react';
import { auth } from '../../firebase';

// styles
import {
    ImageWrapper,
    FormWrapper,
    StyledImg,
    StyledTitle,
    StyledForm,
    StyledInput,
    StyledButton,
} from './styles';

// @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';
import Message from 'antd/lib/message';
import PopOver from 'antd/lib/popover';
import Divider from 'antd/lib/divider';

import {
    UserOutlined
} from '@ant-design/icons';

const {
    Text
} = Typography;

const Register = () => {

    const [email, setEmail] = useState('');

    const [form] = StyledForm.useForm();

    const handleSubmit = async () => {

        // firebase config
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true
        }

        await auth.sendSignInLinkToEmail(email, config);

        Message.success({
            content: `Email is sent to ${email}. Click the link to complete registration.`, 
            style: {
                fontSize: '1.35rem',
                color: '#262626',
            },
            duration: 10
        });

        // save user email in localStorage
        // for non-repeat typing the same email in redirection
        window.localStorage.setItem('registerEmail', email);

        form.resetFields();
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
                    <StyledTitle level={3}>
                        Register
                    </StyledTitle>
                    <Text type='secondary'>
                        Create a new account
                    </Text>
                    <StyledForm 
                        form={form}
                        onFinish={handleSubmit}
                        layout='vertical'
                        requiredMark='optional'>
                            <PopOver 
                                content='Please make sure you provide a valid email address so you can complete your registration'
                                trigger='focus'>
                                <StyledForm.Item
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please type your email'
                                        }
                                    ]}
                                    label='Email Address'>
                                    <StyledInput 
                                        size='small'
                                        prefix={<UserOutlined />}
                                        type='email'
                                        inputMode='email'
                                        value={email}
                                        placeholder='Type your email'
                                        onChange={e => setEmail(e.target.value)} 
                                    />
                                </StyledForm.Item>
                            </PopOver>
                        <StyledButton type='submit'>Register</StyledButton>
                        <Divider orientation='center'>Or use</Divider>
                    </StyledForm>
                </FormWrapper>
            </Col>
        </Row>
    )
}

export default Register;