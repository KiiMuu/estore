import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCount } from '../../../state/actions/product';
import errorAlert from '../../../components/layout/message/errorAlert';
import successAlert from '../../../components/layout/message/successAlert';
import SingleProduct from './SingleProduct';
import { PRODUCT_UPDATE_RESET } from '../../../state/constants/product';

// * styles
import { 
    StyledProducts,
    StyledPageHeader,
    Loader,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Result from 'antd/lib/result';
import { LoadingOutlined } from '@ant-design/icons';

const Products = () => {
    const dispatch = useDispatch();

    // * product state
    const prodsList = useSelector(state => state.productList);
    const { loading, error, products } = prodsList;

    const productUpdating = useSelector(state => state.productUpdate);
    const {
        updatedProduct,
        error: updateError,
        success: updateSuccess,
    } = productUpdating;

    const productDeletion = useSelector(state => state.productDelete);
    const { 
        removedProduct,
        error: removeError, 
        success: removeSuccess,
    } = productDeletion;

    useEffect(() => {
        dispatch(getProductsByCount(100));
    }, [dispatch]);

    useEffect(() => {
        if (updateError) {
            errorAlert(updateError, 3);
        }

        if (updateSuccess) {
            dispatch({
                type: PRODUCT_UPDATE_RESET,
            });

            successAlert(`Product has been updated`, 3);

            dispatch(getProductsByCount(100));
        }
    }, [updateError, updateSuccess, updatedProduct, dispatch]);

    useEffect(() => {
        if (removeError) {
            errorAlert(removeError);
        }

        if (removeSuccess) {
            successAlert(`"${removedProduct.title}" has been deleted`, 3);
            dispatch(getProductsByCount(100));
        }
    }, [removeError, removeSuccess, dispatch, removedProduct]);

    const prodsItems = () => (
        <Row gutter={[10, 8]}>
            {products?.length === 0 ? (
                <StyledPageHeader
                    subTitle='No products added yet, once you add products they will be listed here'
                />
            ) : products?.map(product => (
                <SingleProduct 
                    product={product}
                    key={product._id}
                />
            ))}
        </Row>
    )

    return (
        <StyledProducts>
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
                prodsItems()
            )}
        </StyledProducts>
    )
}

export default memo(Products);