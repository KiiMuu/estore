// * styles
import { 
    Table, 
    TableHeadings, 
    TableRows, 
    TableWrapper 
} from '../../cart/styles';

// * @antd
import Tag from 'antd/lib/tag';

const PaymentInfo = ({ order }) => {
    return (
        <TableWrapper>
            <Table>
                <thead>
                    <TableHeadings>
                        <th>Order ID</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Method</th>
                        <th>Payment</th>
                        <th>Ordered On</th>
                        <th>STATUS</th>
                    </TableHeadings>
                </thead>

                <TableRows>
                    <tr>
                        <td>
                            <Tag color='processing'>
                                {order.paymentIntent.id}
                            </Tag>
                        </td>
                        <td>
                            <Tag color='processing'>
                                {(order.paymentIntent.amount /= 100).toLocaleString('en-US', {
                                    currency: 'USD',
                                    style: 'currency',
                                })}
                            </Tag>
                        </td>
                        <td>
                            <Tag color='processing'>
                                {order.paymentIntent.currency.toUpperCase()}
                            </Tag>
                        </td>
                        <td>
                            <Tag color='processing'>
                                {order.paymentIntent.payment_method_types[0]}
                            </Tag>
                        </td>
                        <td>
                            <Tag color='processing'>
                                {order.paymentIntent.status.toUpperCase()}
                            </Tag>
                        </td>
                        <td>
                            <Tag color='processing'>
                                {new Date(order.paymentIntent.created * 1000).toLocaleString()}
                            </Tag>
                        </td>
                        <td>
                            <Tag color='processing'>
                                {order.orderStatus}
                            </Tag>
                        </td>
                    </tr>
                </TableRows>
            </Table>
        </TableWrapper>
    )
}

export default PaymentInfo;