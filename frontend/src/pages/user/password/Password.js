import { useState } from 'react';
import UserLayout from '../UserLayout';
import { auth } from '../../../firebase';
import success from '../../../components/layout/message/success';
import error from '../../../components/layout/message/error';

// * styles
import {
    PasswordWrapper,
    InputControl,
    StyledTitle,
    FormContainer,
    StyledButton,
} from '../styles';

// * @antd
import Typography from 'antd/lib/typography';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';

import {
    KeyOutlined,
    EyeInvisibleOutlined,
    EyeOutlined,
} from '@ant-design/icons';

const {
    Text,
} = Typography;

const Password = () => {

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        setLoading(true);

        await auth.currentUser.updatePassword(password).then(() => {
            setLoading(false);

            success('Password updated successfully');

            setPassword('');
        }).catch(err => {
            setLoading(false);

            error(err.message);
        });
    }

    const togglePassword = () => setIsPasswordVisible(!isPasswordVisible);

    const passwordUpdateForm = () => (
        <FormContainer>
            <InputControl>
                <span>
                    <KeyOutlined />
                </span>
                <span onClick={togglePassword}>
                    {isPasswordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </span>
                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    inputMode='text'
                    value={password}
                    placeholder='Type new password'
                    onChange={e => setPassword(e.target.value)}
                />
                <strong></strong>
            </InputControl>
            <StyledButton
                onClick={handleSubmit}
                type='primary'
                loading={loading ? true : false}>
                Update
            </StyledButton>
        </FormContainer>
    )

    return (
        <UserLayout>
            <Row>
                <Col xs={24} lg={12}>
                    <PasswordWrapper>
                        <StyledTitle level={4}>
                            Password update
                        </StyledTitle>
                        <Text type='secondary'>
                            update your current password
                        </Text>
                        {passwordUpdateForm()}
                    </PasswordWrapper>
                </Col>
            </Row>
        </UserLayout>
    )
}

export default Password;