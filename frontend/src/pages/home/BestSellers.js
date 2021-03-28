import { useEffect, useState } from 'react';
import { listAllProducts } from '../../state/actions/product';
import ProductCard from '../../components/cards/ProductCard';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';

// * styles
import { 
    TopSellers, 
    StyledTitle,
    StyledText,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';

const BestSellers = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const loadBestSellers = () => {
        setLoading(true);

        listAllProducts('sold', 'desc', 3).then(res => {
            setProducts(res);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false);
        })
    }

    useEffect(() => {
        loadBestSellers();
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
        </TopSellers>
    )
}

export default BestSellers;