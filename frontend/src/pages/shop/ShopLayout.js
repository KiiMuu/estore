import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShopFiltersMenu from './ShopFiltersMenu';
import { getProductsByCount, searchProducts } from '../../state/actions/product';
import Shop from './Shop';

// * styles 
import {
    ContentContainer,
    StyledContent,
} from './styles';

// * @antd
import Layout from 'antd/lib/layout';

const ShopLayout = () => {
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
            });

            setShopProds(products);
        }, 300);
        
        return () => clearTimeout(delayed);
    }, [text, products]);

    return (
        <Layout>
            <ShopFiltersMenu setShopProds={setShopProds} shopProds={shopProds} />
            <Layout>
                <StyledContent>
                    <ContentContainer className='container'>
                        <Shop 
                            loading={loading} 
                            error={error}
                            shopProds={shopProds}
                        />
                    </ContentContainer>
                </StyledContent>
            </Layout>
        </Layout>
    )
}

export default ShopLayout;