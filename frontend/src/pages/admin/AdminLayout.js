import AdminNav from '../../components/user-nav/AdminNav';

// * styles 
import {
    ContentContainer,
    StyledLayout,
    StyledContent,
} from './styles';

// * @antd
import Layout from 'antd/lib/layout';

const AdminLayout = ({ children }) => {
    return (
        <StyledLayout>
            <AdminNav />
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

export default AdminLayout;