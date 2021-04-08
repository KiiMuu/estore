import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, updateOrderStatus } from '../../../state/actions/admin';
import AdminLayout from '../AdminLayout';
import successAlert from '../../../components/layout/message/successAlert';
import errorAlert from '../../../components/layout/message/errorAlert';
import useUserHook from '../../../hooks/useUserHook';

// * styles
import {
    Loader,
    OrdersWrapper,
} from './styles';
import { StyledText, StyledTitle } from '../category/styles';

// * @antd
import Result from 'antd/lib/result';
import { LoadingOutlined } from '@ant-design/icons';
import Orders from './Orders';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { userInfo } = useUserHook();

    // * order state
    const { loading, error, orders } = useSelector(state => state.orderList);
    const { 
        error: updateError, 
        success: updateSuccess,
    } = useSelector(state => state.orderUpdate);

    useEffect(() => {
        dispatch(getOrders(userInfo?.token));
    }, [dispatch, userInfo]);

    const handleOrderStatus = (orderId, orderStatus) => {
        dispatch(updateOrderStatus(orderId, orderStatus, userInfo?.token));
    }

    useEffect(() => {
        if (updateSuccess) {
            successAlert('Order status has been updated', 3);

            dispatch(getOrders(userInfo?.token));
        }

        if (updateError) {
            errorAlert(updateError, 3);
        }
    }, [updateSuccess, updateError, dispatch, userInfo]);

    return (
        <AdminLayout>
            <OrdersWrapper>
                <StyledTitle level={4}>
                    Dashboard
                </StyledTitle>
                <StyledText type='secondary'>
                    Orders list, update order status
                </StyledText>
                {loading ? (
                    <Loader>
                        <LoadingOutlined spin />
                    </Loader>
                ) : error ? (
                    <Result
                        status='500'
                        subTitle='Sorry, something went wrong.'
                    />
                ) : (
                    <Orders orders={orders} handleOrderStatus={handleOrderStatus} />
                )}
            </OrdersWrapper>
        </AdminLayout>
    )
}

export default Dashboard;