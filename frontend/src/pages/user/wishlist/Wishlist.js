import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useUserHook from '../../../hooks/useUserHook';
import UserLayout from '../UserLayout';
import { getWishlist, removeItemFromWishlist } from '../../../state/actions/wishlist';
import successAlert from '../../../components/layout/message/successAlert';
import errorAlert from '../../../components/layout/message/errorAlert';

// * styles
import { 
    StyledText, 
    StyledTitle, 
    WishlistItem, 
    WishlistScreen 
} from './styles';

// * @antd
import Alert from 'antd/lib/alert';
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';
import { DeleteOutlined, LoadingOutlined } from '@ant-design/icons';

const Wishlist = () => {
    const dispatch = useDispatch();
    const { userInfo } = useUserHook();

    // * wishlist state
    const { 
        loading, 
        error, 
        wishlist, 
    } = useSelector(state => state.wishList);
    const {
        error: errorError, 
        removedWishItem,
    } = useSelector(state => state.deleteFromWishlist);

    useEffect(() => {
        dispatch(getWishlist(userInfo?.token));
    }, [dispatch, userInfo]);

    const handleRemove = productId => dispatch(removeItemFromWishlist(productId, userInfo?.token));

    useEffect(() => {
        if (removedWishItem?.ok) {
            successAlert('Product removed successfully', 3);

            dispatch(getWishlist(userInfo?.token));
        }

        if (errorError) {
            errorAlert(errorError, 3);
        }
    }, [dispatch, userInfo, removedWishItem, errorError]);

    const showWishList = () => (
        <Space size={[8, 10]} wrap>
            {wishlist?.wishlist?.length === 0 ? (
                <Alert
                    message='Your wishlist products will be listed here' 
                    type='info' 
                />
            ) : wishlist?.wishlist?.map(p => (
                <WishlistItem key={p._id}>
                    <Link to={`/product/${p.slug}`}>{p.title}</Link>
                    <Button 
                        onClick={() => handleRemove(p._id)}
                        size='small'
                        type='danger'>
                        <DeleteOutlined />
                    </Button>
                </WishlistItem>
            ))}
        </Space>
    )

    return (
        <UserLayout>
            <WishlistScreen>
                <StyledTitle level={4}>
                    Wishlist
                </StyledTitle>
                <StyledText type='secondary'>
                    Here your wishlist products
                </StyledText>
                {loading ? <LoadingOutlined /> : error ? (
                    <Alert
                        message={error} 
                        type='error' 
                        showIcon
                    />
                ) : (
                    showWishList()
                )}
            </WishlistScreen>
        </UserLayout>
    )
}

export default Wishlist;