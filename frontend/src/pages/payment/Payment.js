import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import '../../stripe.css';
import StripeCheckout from '../../components/stripe/StripeCheckout';

// * styles
import {
    ImageWrapper,
    StyledImg, 
    SubHeading,
    FormWrapper,
    Content,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { Fragment } from 'react';

// * load stripe outside component to avoid re-creating stripe obj on every render!
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
    return (
        <Fragment>
            <Row>
                <Col xs={24} lg={16}>
                    <ImageWrapper>
                        <StyledImg></StyledImg>
                    </ImageWrapper>
                </Col>
                <Col xs={24} lg={8}>
                    <FormWrapper>
                        <Content>
                            <SubHeading>Complete your purchase</SubHeading>
                            <Elements stripe={stripePromise}>
                                <StripeCheckout />
                            </Elements>
                        </Content>
                    </FormWrapper>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Payment;