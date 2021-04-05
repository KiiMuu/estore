import { useDispatch, useSelector } from 'react-redux';
import { 
    deleteCoupon, 
} from '../../../state/actions/coupon';
import useUserHook from '../../../hooks/useUserHook';

// * styles
import {
    StyledActions,
} from './styles';

// * @antd
import Popover from 'antd/lib/popover';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import Tag from 'antd/lib/tag';
import Space from 'antd/lib/space';

const SingleCoupon = ({ coupon }) => {
    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * category state
    const couponDeletion = useSelector(state => state.couponDelete);
    const { loading: deletionLoading } = couponDeletion;

    const handleDeleteCoupon = couponId => {
        dispatch(deleteCoupon(couponId, userInfo.token));
    }

    const couponActions = (
        <StyledActions>
            <Space direction='vertical'>
                <Tag color='#059669'>
                    Discount: {coupon?.discount}%
                </Tag>
                <Tag color='#059669'>
                    Expiration Date: {new Date(coupon?.expiration).toLocaleDateString()}
                </Tag>
            </Space>
            <Divider />
            <Button 
                size='small' 
                type='danger' 
                onClick={() => handleDeleteCoupon(coupon?._id)}
                loading={deletionLoading}>
                Ok
            </Button>
        </StyledActions>
    );

    console.log({coupon})

    return (
        <Popover 
            content={couponActions} 
            title='Want to delete this coupon?' 
            trigger='click'
            key={coupon._id}>
            <Button type='primary'>
                {coupon.name}
            </Button>
        </Popover>
    )
}

export default SingleCoupon;