import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { 
    getUserCart, 
    removeUserCart, 
    saveUserAddress 
} from '../../state/actions/cart';
import useUserHook from '../../hooks/useUserHook';
import errorAlert from '../../components/layout/message/errorAlert';
import successAlert from '../../components/layout/message/successAlert';
import { ADD_TO_CART } from '../../state/constants/cart';

// * styles
import {
    CheckoutScreen, List, ListItem, SubHeading,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Tag from 'antd/lib/tag';
import Space from 'antd/lib/space';
import Divider from 'antd/lib/divider';
import Alert from 'antd/lib/alert';
import { LoadingOutlined } from '@ant-design/icons';

const Checkout = () => {
    const [address, setAddress] = useState('');
    const [addressSaved, setAddressSaved] = useState(false);

    const dispatch = useDispatch();
    const { userInfo } = useUserHook();

    // * user cart state
    let { loading, error, userCart } = useSelector(state => state.userCart);
    const { 
        error: removeError, 
        userCart: removeCart 
    } = useSelector(state => state.deleteUserCart);

    // * user address state
    const { 
        loading: addressLoading,
        error: addresError, 
        deliveryAddress,
    } = useSelector(state => state.addDeliveryAddress);

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
    }

    useEffect(() => {
        if (removeError) {
            errorAlert(removeError, 3);
        }

        if (removeCart?.ok) {
            successAlert('Your cart has been deleted!',3 );
        }
    }, [dispatch, removeError, removeCart]);

    const saveAddressToDB = () => {
        dispatch(saveUserAddress(address, userInfo?.token));
    }

    useEffect(() => {
        if (addresError) {
            errorAlert(addresError, 3);
        }

        if (deliveryAddress?.ok) {
            setAddress('');
            setAddressSaved(true);

            successAlert('Your address has been posted!',3 );
        }
    }, [addresError, deliveryAddress]);

    return (
        <div className='container'>
            <CheckoutScreen>
                <Row gutter={[20, 20]}>
                    <Col xs={24} md={12}>
                        <SubHeading>Delivery Address</SubHeading>
                        <Space direction='vertical'>
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
                            <h5>Got coupon?</h5>
                            <p>coupon input and apply button</p>
                        </Space>
                    </Col>
                    <Col xs={24} md={12}>
                        <SubHeading>Order Summary</SubHeading>
                        {!userCart?.products.length ? (
                            <Alert message='Cart has been Emptied' type='success' showIcon />
                        ) : (
                            loading ? (
                                <LoadingOutlined spin />
                            ) : error ? (
                                <Alert message={error} type='error' showIcon />
                            ) : (
                                <List>
                                    <Space direction='vertical' wrap>
                                        {userCart?.products.map(p => (
                                            <ListItem key={p._id}>
                                                {p.product.title} ({p.color}) x {p.count} = <Tag color='geekblue'>{p.product.price * p.count}</Tag>
                                            </ListItem>
                                            
                                        ))}
                                        <Tag color='#059669'>Total: ${userCart?.cartTotal}</Tag>
                                    </Space>
                                </List>
                            )
                        )}
                        <Divider />
                        <Row gutter={[10, 10]} justify='space-between'>
                            <Col>
                                <Button 
                                    disabled={!addressSaved || !userCart?.products.length}
                                    type='primary'
                                >Place Order</Button>
                            </Col>
                            <Col>
                                <Button 
                                    disabled={!userCart?.products.length}
                                    type='secondary' 
                                    onClick={handleEmptyCart}
                                >Empty Cart</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </CheckoutScreen>
        </div>
    )
}

export default Checkout;