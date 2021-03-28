import { useEffect, useState } from 'react';
import { getTotalProducts, listAllProducts } from '../../state/actions/product';
import ProductCard from '../../components/cards/ProductCard';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';

// * styles
import { 
    TopSellers, 
    StyledTitle,
    StyledText,
    StyledPagination,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';
import Pagination from 'antd/lib/pagination';

const BestSellers = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);

    const loadBestSellers = () => {
        setLoading(true);

        listAllProducts('sold', 'desc', page).then(res => {
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
        loadBestSellers();

        // eslint-disable-next-line
    }, [page]);

    useEffect(() => {
        loadProductsCount();
    }, []);

    const showBestSellers = () => (
        <Row gutter={[20, 20]}>
            {products?.map(product => (
                <ProductCard product={product} key={product._id} />
            ))}
        </Row>
    )

    return (
        <TopSellers>
            <StyledTitle level={4}>Top Sellers</StyledTitle>
            <StyledText type='secondary'>
                See our most sold products
            </StyledText>
            {loading ? (
                <CardSkeleton count={3} />
            ) : error ? (
                <Alert message={error} type='error' showIcon />
            ) : (
                showBestSellers()
            )}
            <StyledPagination>
                <Pagination
                    total={(productsCount / 3) * 10}
                    current={page} 
                    onChange={val => setPage(val)}
                />
            </StyledPagination>
        </TopSellers>
    )
}

export default BestSellers;