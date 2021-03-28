import { useEffect, useState } from 'react';
import { listAllProducts, getTotalProducts } from '../../state/actions/product';
import ProductCard from '../../components/cards/ProductCard';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';

// * styles
import { 
    LatestArrivals, 
    StyledTitle,
    StyledText,
    StyledPagination,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';
import Pagination from 'antd/lib/pagination';

const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);

    const loadNewArrivals = () => {
        setLoading(true);

        listAllProducts('createdAt', 'desc', page).then(res => {
            setProducts(res);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false);
        })
    }

    const loadProductsCount = () => {
        getTotalProducts().then(res => setProductsCount(res));
    }

    useEffect(() => {
        loadNewArrivals();

        // eslint-disable-next-line
    }, [page]);

    useEffect(() => {
        loadProductsCount();
    }, []);

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
                <CardSkeleton count={3} />
            ) : error ? (
                <Alert message={error} type='error' showIcon />
            ) : (
                showNewArrivals()
            )}
            <StyledPagination>
                <Pagination 
                    total={(productsCount / 3) * 10} 
                    current={page} 
                    onChange={val => setPage(val)}
                />
            </StyledPagination>
        </LatestArrivals>
    )
}

export default NewArrivals;