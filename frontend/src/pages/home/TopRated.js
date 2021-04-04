import { useEffect, useState } from 'react';
import { listAllProducts, getTotalProducts } from '../../state/actions/product';
import ProductCard from '../../components/cards/ProductCard';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';

// * styles
import { 
    TopRatedProds, 
    StyledTitle,
    StyledText,
    StyledPagination,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';
import Pagination from 'antd/lib/pagination';

const TopRated = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);

    const loadProductsCount = () => {
        getTotalProducts().then(res => setProductsCount(res));
    }

    useEffect(() => {
        setLoading(true);
        listAllProducts('ratings.numberOfStars', 'desc', page).then(res => {
            setProducts(res);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false);
        });
    }, [page]);

    useEffect(() => {
        loadProductsCount();
    }, []);

    const showTopRated = () => (
        <Row gutter={[20, 20]}>
            {products?.map(product => (
                <ProductCard product={product} key={product._id} />
            ))}
        </Row>
    )

    return (
        <TopRatedProds>
            <StyledTitle level={4}>Top Rated</StyledTitle>
            <StyledText type='secondary'>
                See our top rated products
            </StyledText>
            {loading ? (
                <CardSkeleton count={3} />
            ) : error ? (
                <Alert message={error} type='error' showIcon />
            ) : (
                showTopRated()
            )}
            <StyledPagination>
                <Pagination 
                    total={(productsCount / 3) * 10} 
                    current={page} 
                    onChange={val => setPage(val)}
                />
            </StyledPagination>
        </TopRatedProds>
    )
}

export default TopRated;