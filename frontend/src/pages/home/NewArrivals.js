import { useEffect, useState } from 'react';
import { listAllProducts } from '../../state/actions/product';
import ProductCard from '../../components/cards/ProductCard';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';

// * styles
import { 
    LatestArrivals, 
    StyledTitle,
    StyledText,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';

const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const loadNewArrivals = () => {
        setLoading(true);

        listAllProducts('createdAt', 'desc', 3).then(res => {
            setLoading(false);
            setProducts(res);
        }).catch(err => {
            setLoading(false);
            setError(err);
        })
    }

    useEffect(() => {
        loadNewArrivals();
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
        </LatestArrivals>
    )
}

export default NewArrivals;
