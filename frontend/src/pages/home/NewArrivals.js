import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCount } from '../../state/actions/product';
import ProductCard from '../../components/cards/ProductCard';

// * styles
import { 
    LatestArrivals, 
    StyledTitle,
    StyledText,
} from './styles';

// * @antd
import Row from 'antd/lib/row';

const NewArrivals = () => {
    const dispatch = useDispatch();

    // * products state
    const prodsList = useSelector(state => state.productList);
    const { loading, error, products } = prodsList;

    useEffect(() => {
        dispatch(getProductsByCount(100));
    }, [dispatch]);

    const showNewArrivals = () => (
        <Row gutter={[20, 20]}>
            {products?.map(product => (
                <ProductCard product={product} key={product._id} />
            ))}
        </Row>
    )

    return (
        <LatestArrivals>
            <StyledTitle level={4}>New Arrivals</StyledTitle>
            <StyledText type='secondary'>
                See our latest arrivals products
            </StyledText>
            {loading ? (
                <p>loading</p>
            ) : error ? (
                <p>error</p>
            ) : (
                showNewArrivals()
            )}
        </LatestArrivals>
    )
}

export default NewArrivals;
