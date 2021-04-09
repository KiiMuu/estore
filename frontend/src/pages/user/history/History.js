import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    PDFDownloadLink,
} from '@react-pdf/renderer';
import UserLayout from '../UserLayout';
import { getUserOrders } from '../../../state/actions/order';
import useUserHook from '../../../hooks/useUserHook';
import PaymentInfo from './PaymentInfo';
import Invoice from './Invoice';

// * styles
import {
    HistoryScreen,
    StyledTitle,
    StyledText,
    SubHeading,
} from './styles';
import { 
    Table, 
    TableHeadings, 
    TableRows, 
    TableWrapper 
} from '../../cart/styles';

// * @antd
import Tag from 'antd/lib/tag';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import Alert from 'antd/lib/alert';
import { 
    CheckCircleOutlined, 
    CloseCircleOutlined, 
    DownloadOutlined, 
    LoadingOutlined 
} from '@ant-design/icons';

const History = () => {
    const dispatch = useDispatch();
    const { userInfo } = useUserHook();

    // * user orders state
    const {loading, error, userOrders} = useSelector(state => state.userOrdersList);

    useEffect(() => {
        dispatch(getUserOrders(userInfo?.token));
    }, [dispatch, userInfo]);

    const showDownloadLink = order => (
        <PDFDownloadLink document={
            <Invoice order={order} />
        } fileName={`${order.paymentIntent.id}.pdf`}>
            <Button 
                style={{ marginTop: '1rem' }} 
                type='primary'
                icon={<DownloadOutlined />}>
                Download PDF
            </Button>
        </PDFDownloadLink>
    )

    const showOrders = () => (
        userOrders?.reverse().map(order => (
            <div key={order._id}>
                <SubHeading>Payment Info</SubHeading>
                <PaymentInfo order={order} />
                <SubHeading>Products</SubHeading>
                {showOrdersInTable(order)}
                {showDownloadLink(order)}
                <Divider />
            </div>
        ))
    )

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
        <UserLayout>
            <HistoryScreen>
                <StyledTitle level={4}>
                    {userOrders?.length > 0 ? 'Your purchase orders' : 'No orders'}
                </StyledTitle>
                <StyledText type='secondary'>
                    Here we list your purchase history
                </StyledText>   
                {loading ? <LoadingOutlined /> : error ? (
                    <Alert
                        message={error} 
                        type='error' 
                        showIcon
                    />
                ) : (
                    showOrders()
                )}
            </HistoryScreen>
        </UserLayout>
    )
}

export default History;