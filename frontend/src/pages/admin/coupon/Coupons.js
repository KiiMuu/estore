import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getCoupons, 
} from '../../../state/actions/coupon';
import errorAlert from '../../../components/layout/message/errorAlert';
import successAlert from '../../../components/layout/message/successAlert';
import SingleCoupon from './SingleCoupon';

// * styles
import {
    StyledCoupons,
    Loader,
    StyledPageHeader,
} from './styles';

// * @antd
import Space from 'antd/lib/space';
import Result from 'antd/lib/result';
import {
    LoadingOutlined,
} from '@ant-design/icons';

const Coupons = ({ searched, searchTerm }) => {
    const dispatch = useDispatch();

    // * coupon state
    const couponsList = useSelector(state => state.couponList);
    const { 
        loading, 
        error, 
        coupons
    } = couponsList;

    const couponDeletion = useSelector(state => state.couponDelete);
    const { 
        removedCoupon,
        error: removeError, 
        success: removeSuccess,
    } = couponDeletion;

    useEffect(() => {
        dispatch(getCoupons());
    }, [dispatch]);

    useEffect(() => {
        if (removeError) {
            errorAlert(removeError);
        }

        if (removeSuccess) {
            successAlert(`"${removedCoupon?.name}" has been deleted`, 3);
            dispatch(getCoupons());
        }
    }, [removeSuccess, removeError, dispatch, removedCoupon]);

    const couponsItems = () => (
        <Space size={[8, 10]} wrap>
            {coupons?.length === 0 ? (
                <StyledPageHeader
                    subTitle='No coupons added yet, once you add coupons they will be listed here'
                />
            ) : coupons?.filter(searched(searchTerm)).length === 0 ? (
                <StyledPageHeader
                    subTitle='No coupons matched your keyword'
                />
            ) : coupons?.filter(searched(searchTerm)).map(coupon => (
                <SingleCoupon 
                    coupon={coupon}
                    key={coupon._id}
                />
            ))}
        </Space>
    )

    return (
        <StyledCoupons>
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
                couponsItems()
            )}
        </StyledCoupons>
    )
}

export default Coupons;