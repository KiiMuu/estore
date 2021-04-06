import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { payWithStripe } from '../../state/actions/stripe';
import useUserHook from '../../hooks/useUserHook';
import errorAlert from '../../components/layout/message/errorAlert';
import successAlert from '../../components/layout/message/successAlert';

// * styles
import { StripeForm } from './styles';

// * @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Space from 'antd/lib/space';
import Tag from 'antd/lib/tag';
import Alert from 'antd/lib/alert';
import {
    DollarOutlined,
    CheckSquareOutlined,
    LoadingOutlined,
} from '@ant-design/icons';

const StripeCheckout = ({ history }) => {
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const { userInfo } = useUserHook();

    // * stripe state
    const paymentInfo = useSelector(state => state.stripePaymentIntent);
    const { 
        loading,
        clientSecret, 
        cartTotal, 
        payable, 
        totalAfterDiscount 
    } = paymentInfo;

    // * coupon state
    const isCouponApplied = useSelector(state => state.isCouponApplied);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        dispatch(payWithStripe(userInfo?.token, isCouponApplied))
    }, [dispatch, userInfo, isCouponApplied]);

    const handleChange = async e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message: '');
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: e.target.name.value,
                },
            },
        });

        if (payload.error) {
            setError(`Payment Failed: ${payload.error.message}`);
            setProcessing(false);
        } else {
            console.log(JSON.stringify(payload));
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    }

    useEffect(() => {
        if (succeeded) {
            successAlert('Payment done successfully!. See it in your purchase history')
        }

        if (error) {
            errorAlert(error);
        }
    }, [succeeded, error]);

    const cardStyle = {
        style: {
            base: {
                color: '#262626',
                fontSize: '13px',
                '::placeholder': {
                    color: '#32325d',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: 'fa755a',
            },
        },
    }

    return (
        <Fragment>
            {!succeeded && (    
                <Row>
                    <Col xs={24}>
                        <Alert message={
                            isCouponApplied && totalAfterDiscount !== undefined ? (
                                <Fragment>
                                    Coupon has been applied, Total after discount: ${totalAfterDiscount}
                                </Fragment>
                            ) : (
                                <Fragment>
                                    No coupon applied
                                </Fragment>
                            )
                        } type={isCouponApplied && totalAfterDiscount !== undefined ? 'success' : 'info'} showIcon />
                    </Col>
                </Row>
            )}
            <Row justify='space-between' style={{ margin: '1rem 0' }}>
                <Col>
                    <Space direction='vertical'>
                        {loading ? <LoadingOutlined /> : <Tag color='blue'><DollarOutlined /> {`Total: $${cartTotal}`}</Tag>}
                    </Space>
                </Col>
                <Col>
                    <Space direction='vertical'>
                        {loading ? <LoadingOutlined /> : <Tag color='blue'><CheckSquareOutlined /> {`Payable: $${(payable / 100).toFixed(2)}`}</Tag>}
                    </Space>
                </Col>
            </Row>
            <StripeForm 
                id='payment-form' 
                className='stripe-form' 
                onSubmit={handleSubmit}>
                <CardElement
                    id='card-element'
                    options={cardStyle}
                    onChange={handleChange} 
                />
                <button
                    className='stripe-button'
                    disabled={succeeded || processing || disabled}
                >
                    <span id='button-text'>
                        {processing ? <div className='spinner' id='spinner'></div> : (
                            loading ? <LoadingOutlined /> : `Pay $${payable}`
                        )}
                    </span>
                </button>
            </StripeForm>
        </Fragment>
    )
}

export default StripeCheckout;