import UserNav from '../../components/user-nav/UserNav';

// * styles 
import {
    ContentContainer,
    StyledLayout,
    StyledContent,
} from './styles';

// * @antd
import Layout from 'antd/lib/layout';

const UserLayout = ({ children }) => {
    return (
        <StyledLayout>
            <UserNav />
            <Layout>
                <StyledContent>
                    <ContentContainer className='container'>
                        {children}
                    </ContentContainer>
                </StyledContent>
            </Layout>
        </StyledLayout>
    )
}

export default UserLayout;