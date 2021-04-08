import PaymentInfo from '../../user/history/PaymentInfo';

// * @antd
import Select from 'antd/lib/select';

const Orders = ({ orders, handleOrderStatus }) => (
    orders.map(order => (
        <div key={order._id} style={{ marginBottom: '1rem' }}>
            <PaymentInfo order={order} showStatus={false} />

            <div style={{ marginTop: '.5rem' }}>
                <Select 
                    defaultValue={order.orderStatus} 
                    onChange={e => handleOrderStatus(order._id, e)}
                >
                    <Select.Option value='No Processed'>
                        No Processed
                    </Select.Option>
                    <Select.Option value='Processing'>
                        Processing
                    </Select.Option>
                    <Select.Option value='Dispatched'>
                        Dispatched
                    </Select.Option>
                    <Select.Option value='Cancelled'>
                        Cancelled
                    </Select.Option>
                    <Select.Option value='Completed'>
                        Completed
                    </Select.Option>
                </Select>
            </div>
        </div>
    ))
)

export default Orders;