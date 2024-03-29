import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkoutProceed } from '../../state/actions/cart';
import useUserHook from '../../hooks/useUserHook';
import CartItem from './CartItem';
import errorAlert from '../../components/layout/message/errorAlert';

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
import { CheckSquareOutlined, DollarOutlined } from '@ant-design/icons';

const Cart = ({ history }) => {
    const { userInfo } = useUserHook();
    const dispatch = useDispatch();

    // * cart state
    const cartList = useSelector(state => state.cartList);

    // * checkout state
    const { 
        error: checkoutError, 
        userCart
    } = useSelector(state => state.proceedCheckout);

    const getTotal = () => {
        return cartList?.reduce((curr, next) => {
            return curr + next.count * next.price;
        }, 0);
    }

    const saveOrderToDB = () => {
        dispatch(checkoutProceed(cartList, userInfo?.token));
    }

    const saveCashOrderToDB = () => {
        dispatch({
            type: 'IS_CASH_ON_DELIVERY',
            payload: true,
        });
        
        dispatch(checkoutProceed(cartList, userInfo?.token));
    }

    useEffect(() => {
        if (checkoutError) {
            errorAlert(checkoutError, 3);
        }

        if (userCart?.ok) {
            history.push('/checkout');
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
                    {cartList?.map(c => (
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
                    You have {cartList?.length} products in your cart
                </StyledText>
                <Row gutter={[20, 20]}>
                    <Col xs={24} lg={18}>
                        {!cartList?.length ? (
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
                    {cartList?.length > 0 && (
                        <Col xs={24} lg={6}>
                            <SubHeading>Order Summary</SubHeading>
                            <List>
                                <Space direction='vertical' wrap>
                                    {cartList?.map((c, i) => (
                                        <ListItem 
                                            key={i} 
                                        >{c.title} x {c.count} = ${c.price * c.count}</ListItem>
                                    ))}
                                    <Tag color='#059669'>Total: ${getTotal()}</Tag>
                                </Space>
                            </List>
                            <Divider />
                            {userInfo ? (
                                <Fragment>
                                    <Space size={[8, 10]} wrap>
                                        <Button 
                                            onClick={saveOrderToDB}
                                            style={{ display: 'block' }}
                                            type='primary'
                                            icon={<CheckSquareOutlined />}
                                        >Proceed to Checkout</Button>
                                        <Button 
                                            onClick={saveCashOrderToDB}
                                            style={{ display: 'block' }}
                                            type='default'
                                            icon={<DollarOutlined />}
                                        >Pay Cash on Delivery</Button>
                                    </Space>
                                </Fragment>
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