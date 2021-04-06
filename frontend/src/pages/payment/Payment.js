import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import '../../stripe.css';
import StripeCheckout from '../../components/stripe/StripeCheckout';

// * styles
import {
    PaymentScreen, 
    SubHeading,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

// * load stripe outside component to avoid re-creating stripe obj on every render!
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
    return (
        <div className='container'>
            <PaymentScreen>
                <SubHeading>Complete your purchase</SubHeading>
                <Elements stripe={stripePromise}>
                    <Row>
                        <Col xs={24} lg={{ offset: 6, span: 12 }}>
                            <StripeCheckout />
                        </Col>
                    </Row>
                </Elements>
            </PaymentScreen>
        </div>
    )
}

export default Payment;