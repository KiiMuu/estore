import { useState } from 'react';
import {
    RegisterWrapper,
    ImageWrapper,
    FormWrapper,
    StyledImg,
    RegHeading,
    RegDesc,
} from './styles';

// @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const Register = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <RegisterWrapper>
            <Row>
                <Col xs={24} lg={18}>
                    <ImageWrapper>
                        <StyledImg></StyledImg>
                    </ImageWrapper>
                </Col>
                <Col xs={24} lg={6}>
                    <FormWrapper>
                        <RegHeading>Register</RegHeading>
                        <RegDesc>Create a new account</RegDesc>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='email'
                                inputMode='email' 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <button type='submit'>Register</button>
                        </form>
                    </FormWrapper>
                </Col>
            </Row>
        </RegisterWrapper>
    )
}

export default Register;