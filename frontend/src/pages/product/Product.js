import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../state/actions/product';
import SingleProduct from '../../components/cards/SingleProduct';
import ProductSkeleton from '../../components/layout/skeletons/ProductSkeleton';

// * styles
import {
    RelatedProducts,
    StyledProduct,
    Loader,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Typography from 'antd/lib/typography';
import Alert from 'antd/lib/alert';

const { Title } = Typography;

const Product = ({ match }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(match.params.slug));
    }, [dispatch, match.params.slug]);

    // * product state
    const prod = useSelector(state => state.productSingle);
    const { error, loading, product } = prod;

    return (
        <div className='container'>
            {loading ? (
                <Loader><ProductSkeleton count={2} /></Loader>
            ) : error ? (
                <Alert message={error} type='error' showIcon />
            ) : (
                <Fragment>
                    <StyledProduct>
                        <Row gutter={[20, 20]}>
                            <SingleProduct product={product} />
                        </Row>
                    </StyledProduct>
                    <RelatedProducts>
                        <Title level={4}>Related Products</Title>
                        <div>Related Cards</div>
                    </RelatedProducts>
                </Fragment>
            )}
        </div>
    )
}

export default Product;