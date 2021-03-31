import ShopFiltersMenu from './ShopFiltersMenu';

// * styles 
import {
    ContentContainer,
    StyledContent,
} from './styles';

// * @antd
import Layout from 'antd/lib/layout';

const ShopLayout = ({ children }) => {
    return (
        <Layout>
            <ShopFiltersMenu />
            <Layout>
                <StyledContent>
                    <ContentContainer className='container'>
                        {children}
                    </ContentContainer>
                </StyledContent>
            </Layout>
        </Layout>
    )
}

export default ShopLayout;