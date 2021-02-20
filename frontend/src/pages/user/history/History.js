import UserNav from '../../../components/user-nav/UserNav';

// * @antd
import Layout from 'antd/lib/layout';

const { 
    Content,  
} = Layout;

const History = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <UserNav />
            <Layout>
                <Content style={{ marginTop: 65 }}>
                    <div style={{ minHeight: 360 }}>
                        content
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default History;
