import ProductCard from '../../components/cards/ProductCard';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';

// * styles
import {
    ProductsSection, StyledText, StyledTitle,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';

const Shop = ({ loading, shopProds, error }) => {
    return (
        <ProductsSection>
            <StyledTitle level={4}>
                Products
            </StyledTitle>
            <StyledText type='secondary'>
                Browse, search and and filter eStore products
            </StyledText>
            {loading ? (
                <CardSkeleton count={6} />
            ) : shopProds?.length === 0 ? (
                <Alert 
                    message='No products found' 
                    type='info' 
                    closeText='Hide' 
                    showIcon
                />
            ) : error ? (
                <Alert message={error} type='error' showIcon />
            ) : (
                <Row gutter={[10, 10]}>
                    {shopProds?.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </Row>
            )}
        </ProductsSection>
    )
}

export default Shop;