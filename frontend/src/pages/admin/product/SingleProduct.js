import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    deleteProduct,
    getProductsByCount,
} from '../../../state/actions/product';
import errorAlert from '../../../components/layout/message/errorAlert';
import successAlert from '../../../components/layout/message/successAlert';
import useUserHook from '../../../hooks/useUserHook';
import AdminProductCard from '../../../components/cards/AdminProductCard';

const SingleProduct = ({ product }) => {
    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    const productDeletion = useSelector(state => state.productDelete);
    const { 
        removedProduct,
        error, 
        success,
        loading,
    } = productDeletion;

    const handleDeleteProduct = slug => {
        dispatch(deleteProduct(slug, userInfo.token));
    }

    useEffect(() => {
        if (error) {
            errorAlert(error);
        }

        if (success && removedProduct.title === product.title) {
            successAlert(`"${removedProduct.title}" has been deleted`, 3);
            dispatch(getProductsByCount(100));
        }
    }, [error, success, dispatch, removedProduct, product.title]);

    return <AdminProductCard 
        product={product} 
        handleDeleteProduct={handleDeleteProduct}
        loading={loading}
    />;
}

export default SingleProduct;
