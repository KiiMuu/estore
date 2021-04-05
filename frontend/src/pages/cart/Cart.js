import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkoutProceed } from '../../state/actions/cart';
import useUserHook from '../../hooks/useUserHook';
import CartItem from './CartItem';
import errorAlert from '../../components/layout/message/errorAlert';
import successAlert from '../../components/layout/message/successAlert';

// * styles
import { 
    CartScreen,
    StyledTitle,
    StyledText,
    SubHeading,
    Table,
    TableHeadings,
    TableWrapper,
    TableRows,
    List,
    ListItem,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Alert from 'antd/lib/alert';
import Button from 'antd/lib/button';
import Tag from 'antd/lib/tag';
import Space from 'antd/lib/space';
import Divider from 'antd/lib/divider';
import { CheckSquareOutlined } from '@ant-design/icons';

const Cart = ({ history }) => {
    const { userInfo } = useUserHook();
    const dispatch = useDispatch();

    // * cart state
    const { cart } = useSelector(state => state.cartList);

    // * checkout state
    const { 
        loading: checkoutLoading, 
        error: checkoutError, 
        userCart
    } = useSelector(state => state.proceedCheckout);

    const getTotal = () => {
        return cart?.reduce((curr, next) => {
            return curr + next.count * next.price;
        }, 0);
    }

    const saveOrderToDB = () => {
        dispatch(checkoutProceed(cart, userInfo?.token));
    }

    useEffect(() => {
        if (checkoutError) {
            errorAlert(checkoutError, 3)
        }

        if (userCart?.ok) {
            history.push('/checkout');

            successAlert('Done, you have checked out!', 3);
        }
    }, [userCart, checkoutError, history]);

    const showCartItems = () => (
        <TableWrapper>
            <Table>
                <thead>
                    <TableHeadings>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Color</th>
                        <th>Count</th>
                        <th>Shipping</th>
                        <th>Action</th>
                    </TableHeadings>
                </thead>
                
                <TableRows>
                    {cart?.map(c => (
                        <CartItem c={c} key={c._id} />
                    ))}
                </TableRows>
            </Table>
        </TableWrapper>
    )

    return (
        <div className='container'>
            <CartScreen>
                <StyledTitle level={4}>
                    Cart
                </StyledTitle>
                <StyledText type='secondary'>
                    You have {cart?.length} products in your cart
                </StyledText>
                <Row gutter={[20, 20]}>
                    <Col xs={24} lg={18}>
                        {!cart?.length ? (
                            <Alert 
                                message={<Fragment>
                                    You have not any products in your cart yet.<Link to='/shop'> Continue Shopping</Link>
                                </Fragment>} 
                                type='info' 
                                closeText='Hide' 
                                showIcon
                            />
                        ) : (
                            showCartItems()
                        )}
                    </Col>
                    {cart?.length && (
                        <Col xs={24} lg={6}>
                            <SubHeading>Order Summary</SubHeading>
                            <List>
                                <Space direction='vertical' wrap>
                                    {cart?.map((c, i) => (
                                        <ListItem 
                                            key={i} 
                                        >{c.title} x {c.count} = ${c.price * c.count}</ListItem>
                                    ))}
                                    <Tag color='#059669'>Total: ${getTotal()}</Tag>
                                </Space>
                            </List>
                            <Divider />
                            {userInfo ? (
                                <Button 
                                    onClick={saveOrderToDB}
                                    style={{ display: 'block' }}
                                    type='primary'
                                    icon={<CheckSquareOutlined />}
                                    loading={checkoutLoading}
                                >Proceed to Checkout</Button>
                            ) : (
                                <Link to={{
                                    pathname: '/login',
                                    state: {
                                        from: '/cart',
                                    },
                                }}>
                                    <Button 
                                        style={{ display: 'block' }}
                                        type='primary'
                                        icon={<CheckSquareOutlined />}
                                    >
                                        Login to Checkout
                                    </Button>
                                </Link>
                            )}
                        </Col>
                    )}
                </Row>
            </CartScreen>
        </div>
    )
}

export default Cart;