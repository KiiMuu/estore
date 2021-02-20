import { Link } from 'react-router-dom';

// * @antd
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import { 
    HeartFilled,
    UploadOutlined, 
    UserOutlined,
} from '@ant-design/icons';

const { 
    Sider 
} = Layout;

const UserNav = () => {
    return (
        <Sider
            breakpoint='md'
            collapsedWidth='0'
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Menu mode='inline' defaultSelectedKeys={['3']}>
                <ul style={{ marginTop: 65 }}>
                    <li>
                        <Link key='1' to='/user/history'>
                            <span><UserOutlined /></span>
                            History
                        </Link>
                    </li>
                    <li>
                        <Link key='2' to='/user/password'>
                            <span><UploadOutlined /></span>
                            Password
                        </Link>
                    </li>
                    <li>
                        <Link key='3' to='/user/password'>
                            <span><HeartFilled /></span>
                            Wishlist
                        </Link>
                    </li>
                </ul>
            </Menu>
        </Sider>
    )
}

export default UserNav;
