import UserNav from '../../components/user-nav/UserNav';

// * styles 
import {
    ContentContainer,
} from './styles';

// * @antd
import Layout from 'antd/lib/layout';

const { 
    Content,  
} = Layout;

const UserLayout = ({ children }) => {
    return (
        <Layout style={{ height: '100vh' }}>
            <UserNav />
            <Layout>
                <Content style={{ marginTop: 65, background: '#fff' }}>
                    <ContentContainer className='container'>
                        {children}
                    </ContentContainer>
                </Content>
            </Layout>
        </Layout>
    )
}

export default UserLayout;