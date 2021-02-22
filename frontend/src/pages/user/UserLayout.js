import UserNav from '../../components/user-nav/UserNav';

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
                <Content style={{ marginTop: 65 }}>
                    {/* <div style={{ minHeight: 360 }}>
                        content
                    </div> */}
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default UserLayout;