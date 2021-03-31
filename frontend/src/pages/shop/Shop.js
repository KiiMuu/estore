import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCount, searchProducts } from '../../state/actions/product';
import ProductCard from '../../components/cards/ProductCard';
import ShopLayout from './ShopLayout';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';

// * styles
import {
    ProductsSection, StyledText, StyledTitle,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';

const Shop = () => {
    const [shopProds, setShopProds] = useState([]);

    const dispatch = useDispatch();

    // * product state
    const prodsList = useSelector(state => state.productList);
    const { loading, error, products } = prodsList;

    // * search query state
    const querySearching = useSelector(state => state.searchQuery);
    const { text } = querySearching;

    useEffect(() => {
        dispatch(getProductsByCount(12));
    }, [dispatch]);

    useEffect(() => {
        const delayed = setTimeout(() => {
            searchProducts({ query: text }).then(res => {
                setShopProds(res.data);
            }).catch(err => {
                console.log(err);
            })

            setShopProds(products);
        }, 300);
        
        return () => clearTimeout(delayed);
    }, [text, products]);

    return (
        <ShopLayout>
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
        </ShopLayout>
    )
}

export default Shop;