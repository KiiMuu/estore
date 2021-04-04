// * styles
import {
    CheckoutScreen,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';

const Checkout = () => {
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
                        <h4>Order summary</h4>
                        <ul>
                            <li>product x</li>
                            <li>products list</li>
                            <li>Cart total</li>
                        </ul>
                        <Row gutter={[10, 10]} justify='space-between'>
                            <Col xs={12}>
                                <Button type='primary'>Place Order</Button>
                            </Col>
                            <Col xs={12}>
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