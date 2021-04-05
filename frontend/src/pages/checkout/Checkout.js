import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart } from '../../state/actions/cart';
import useUserHook from '../../hooks/useUserHook';

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
    const dispatch = useDispatch();
    const { userInfo } = useUserHook();

    // * user cart state
    const { loading, error, userCart } = useSelector(state => state.userCart);

    useEffect(() => {
        dispatch(getUserCart(userInfo?.token));
    }, [dispatch, userInfo]);

    const saveAddressToDB = () => {}

    return (
        <div className='container'>
            <CheckoutScreen>
                <Row gutter={[20, 20]}>
                    <Col xs={24} md={12}>
                        Delivery address
                        <textarea />
                        <Button type='secondary' onClick={saveAddressToDB}>Save</Button>
                        <h5>Got coupon?</h5>
                        <p>coupon input and apply button</p>
                    </Col>
                    <Col xs={24} md={12}>
                        <SubHeading>Order Summary</SubHeading>
                        {loading ? (
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
                        )}
                        <Divider />
                        <Row gutter={[10, 10]} justify='space-between'>
                            <Col>
                                <Button type='primary'>Place Order</Button>
                            </Col>
                            <Col>
                                <Button type='secondary'>Empty Cart</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </CheckoutScreen>
        </div>
    )
}

export default Checkout;