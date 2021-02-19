import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isFormValid } from './validate';
import { register } from '../../state/actions/user';

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
    KeyOutlined,
} from '@ant-design/icons';

const {
    Text
} = Typography;

const RegisterComplete = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        setEmail(window.localStorage.getItem('registerEmail'));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        if (isFormValid(email, password)) {
            dispatch(register(email, password, history));
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
                                        autoFocus
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