import PaymentInfo from '../../user/history/PaymentInfo';

// * styles
import { 
    Table, 
    TableHeadings, 
    TableRows, 
    TableWrapper 
} from '../../cart/styles';

// * @antd
import Select from 'antd/lib/select';
import Tag from 'antd/lib/tag';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import Divider from 'antd/lib/divider';

const Orders = ({ orders, handleOrderStatus }) => {
    const showOrdersInTable = order => (
        <TableWrapper>
            <Table>
                <thead>
                    <TableHeadings>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Color</th>
                        <th>Count</th>
                        <th>Shipping</th>
                    </TableHeadings>
                </thead>

                <TableRows>
                    {order.products?.map(p => (
                        <tr key={p._id}>
                            <td>
                                <i><Tag color='purple'>{p.product.title}</Tag></i>
                            </td>
                            <td><Tag color='processing'>${p.product.price}</Tag></td>
                            <td><Tag color='processing'>{p.product.brand}</Tag></td>
                            <td><Tag color='processing'>{p.product.color}</Tag></td>
                            <td><Tag color='processing'>{p.count}</Tag></td>
                            <td>
                                {p.product.shipping === 'Yes' ? (
                                    <Tag color='green'><CheckCircleOutlined /></Tag>
                                ) : (
                                    <Tag color='error'><CloseCircleOutlined /></Tag>
                                )}
                            </td>
                        </tr>
                    ))}
                </TableRows>
            </Table>
        </TableWrapper>
    )

    return (
        orders.map(order => (
            <div key={order._id} style={{ marginBottom: '1rem' }}>
                <PaymentInfo order={order} showStatus={false} />
    
                <div style={{ margin: '.5rem 0' }}>
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
                        <Select.Option value='Cash On Delivery'>
                            Cash On Delivery
                        </Select.Option>
                    </Select>
                </div>

                {showOrdersInTable(order)}
                <Divider />
            </div>
        ))
    )
}

export default Orders;