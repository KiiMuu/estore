import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCount } from '../../../state/actions/product';
import SingleProduct from './SingleProduct';

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

    useEffect(() => {
        dispatch(getProductsByCount(100));
    }, [dispatch]);

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

export default Products;