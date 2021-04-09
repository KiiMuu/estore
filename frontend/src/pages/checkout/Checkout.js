import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { 
    getUserCart, 
    removeUserCart, 
    saveUserAddress 
} from '../../state/actions/cart';
import { createDiscount } from '../../state/actions/coupon';
import { createCashOnDeliveryOrder } from '../../state/actions/order';
import useUserHook from '../../hooks/useUserHook';
import errorAlert from '../../components/layout/message/errorAlert';
import successAlert from '../../components/layout/message/successAlert';
import { ADD_TO_CART } from '../../state/constants/cart';

// * styles
import {
    CheckoutScreen, 
    List, 
    ListItem, 
    SubHeading,
    CouponSection,
    InputControl,
    QuillSection,
    OrderSummary,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Tag from 'antd/lib/tag';
import Space from 'antd/lib/space';
import Divider from 'antd/lib/divider';
import Alert from 'antd/lib/alert';
import Tooltip from 'antd/lib/tooltip'
import { LoadingOutlined } from '@ant-design/icons';
import { IS_COUPON_APPLIED } from '../../state/constants/coupon';

const Checkout = ({ history }) => {
    const [address, setAddress] = useState('');
    const [addressSaved, setAddressSaved] = useState(false);
    const [coupon, setCoupon] = useState('');

    const dispatch = useDispatch();
    const { userInfo } = useUserHook();

    // * user cart state
    let { loading, error, userCart } = useSelector(state => state.userCart);
    const { 
        error: removeError, 
    } = useSelector(state => state.deleteUserCart);

    // * user address state
    const { 
        loading: addressLoading,
        error: addressError, 
        deliveryAddress,
    } = useSelector(state => state.addDeliveryAddress);

    // * coupon discount state
    let { 
        loading: couponDiscountLoading,
        error: couponDiscountError, 
        success: couponDiscountSuccess,
        priceAfterDiscount,
    } = useSelector(state => state.couponApply);

    const isCouponApplied = useSelector(state => state.isCouponApplied);

    // * COD state
    const isCashOnDelivery = useSelector(state => state.isCashOnDelivery);

    // * cash order state
    const { 
        loading: cashOrderLoading,
        error: cashOrderError, 
        cashOrder,
    } = useSelector(state => state.cashOrderCreate);


    useEffect(() => {
        dispatch(getUserCart(userInfo?.token));
    }, [dispatch, userInfo]);

    const handleEmptyCart = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('userCart');
        }

        dispatch({
            type: ADD_TO_CART,
            payload: [],
        });

        dispatch(removeUserCart(userInfo?.token));

        userCart.products = [];
        userCart.cartTotal = 0;
        priceAfterDiscount = 0;
    }

    useEffect(() => {
        if (removeError) {
            errorAlert(removeError, 3);
        }
    }, [dispatch, removeError]);

    const saveAddressToDB = () => {
        dispatch(saveUserAddress(address, userInfo?.token));
    }

    useEffect(() => {
        if (addressError) {
            errorAlert(addressError, 3);
        }

        if (deliveryAddress?.ok) {
            setAddress('');
            setAddressSaved(true);

            successAlert('Your address has been posted!',3 );
        }
    }, [addressError, deliveryAddress]);

    const handleCouponDiscount = () => {
        dispatch(createDiscount(coupon, userInfo?.token));
    }

    useEffect(() => {
        if (couponDiscountError) {
            dispatch({
                type: IS_COUPON_APPLIED,
                payload: false,
            });

            errorAlert(couponDiscountError, 3);
        }

        if (couponDiscountSuccess) {
            setCoupon('');

            dispatch({
                type: IS_COUPON_APPLIED,
                payload: true,
            });

            successAlert('Congrats!, you have applied to this offer');
        }
    }, [dispatch, couponDiscountError, couponDiscountSuccess]);

    const createCashOrder = () => {
        dispatch(createCashOnDeliveryOrder(userInfo?.token, isCashOnDelivery, isCouponApplied));
    }

    useEffect(() => {
        if (cashOrderError) {
            errorAlert(cashOrderError, 3);
        }

        if (cashOrder?.ok) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('userCart');
            }
    
            dispatch({
                type: ADD_TO_CART,
                payload: [],
            });

            dispatch({
                type: IS_COUPON_APPLIED,
                payload: false,
            });

            dispatch({
                type: 'IS_CASH_ON_DELIVERY',
                payload: false,
            });
    
            dispatch(removeUserCart(userInfo?.token));

            setTimeout(() => {
                history.push('/user/history');
            }, 1000);
        }
    }, [dispatch, cashOrderError, cashOrder, userInfo, history]);

    const couponSection = () => (
        <CouponSection>
            <SubHeading>Got a coupon?</SubHeading>
            <Space direction='vertical'>
                <InputControl>
                    <input
                        type='text'
                        inputMode='text'
                        placeholder='Enter your own coupon'
                        value={coupon}
                        onChange={e => setCoupon(e.target.value)} 
                    />
                </InputControl>
                <Button 
                    type='primary' 
                    onClick={handleCouponDiscount}
                    loading={couponDiscountLoading}
                >Apply</Button>
            </Space>
        </CouponSection>
    )

    return (
        <div className='container'>
            <CheckoutScreen>
                <Row gutter={[20, 20]}>
                    <Col xs={24} md={12}>
                        <QuillSection>
                            <SubHeading>Delivery Address</SubHeading>
                            <Space 
                                style={{ width: '100%' }}
                                direction='vertical'>
                                    <ReactQuill 
                                        theme='snow' 
                                        value={address} 
                                        onChange={setAddress}
                                    />
                                    <Button 
                                        type='primary' 
                                        onClick={saveAddressToDB}
                                        loading={addressLoading}
                                    >Save</Button>
                            </Space>
                        </QuillSection>
                        {couponSection()}
                    </Col>
                    <Col xs={24} md={12}>
                        <OrderSummary>
                            <SubHeading>Order Summary</SubHeading>
                            {!userCart?.products.length ? (
                                <Alert message='Cart has been Emptied' type='success' showIcon />
                            ) : loading ? (
                                    <LoadingOutlined spin />
                                ) : error ? (
                                    <Alert message={error} type='error' showIcon />
                                ) : (
                                    <List>
                                        <Space 
                                            direction='vertical' 
                                            wrap 
                                            style={{ width: '100%' }}>
                                            {userCart?.products.map(p => (
                                                <ListItem key={p._id}>
                                                    {p.product.title} ({p.color}) x {p.count} = <Tag color='geekblue'>{p.product.price * p.count}</Tag>
                                                </ListItem>
                                                
                                            ))}
                                            <Tag color='#059669'>Total: ${userCart?.cartTotal}</Tag>
                                            {priceAfterDiscount > 0 && (
                                                <Tag color='success'>Total after discount: ${priceAfterDiscount}</Tag>
                                            )}
                                        </Space>
                                    </List>
                                )
                            }
                            <Divider />
                            <Row gutter={[10, 10]} justify='space-between'>
                                <Col>
                                    <Tooltip 
                                        color='#059669'
                                        title={
                                            (!addressSaved) ? 'Please enter your delivery address to continue!' : ''
                                        }>
                                        {isCashOnDelivery ? (
                                            <Button 
                                                disabled={!addressSaved || !userCart?.products.length}
                                                type='primary'
                                                onClick={createCashOrder}
                                                loading={cashOrderLoading}
                                            >Place Order</Button>
                                        ) : (
                                             <Button 
                                                disabled={!addressSaved || !userCart?.products.length}
                                                type='primary'
                                                onClick={() => history.push('/payment')}
                                            >Place Order</Button>
                                        )}
                                    </Tooltip>
                                </Col>
                                <Col>
                                    <Button 
                                        disabled={!userCart?.products.length}
                                        type='secondary' 
                                        onClick={handleEmptyCart}
                                    >Empty Cart</Button>
                                </Col>
                            </Row>
                        </OrderSummary>
                    </Col>
                </Row>
            </CheckoutScreen>
        </div>
    )
}

export default Checkout;