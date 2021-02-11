import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Nav,
    Logo,
    NavItems,
    NavItemLink,
    ListItem,
    MobileNav,
    NavMenuIcon,
    NavMenuContent,
    MenuHeader,
    MenuCloser,
} from './styles';
import useToggle from '../../hooks/useToggle';

// @antd
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import { 
    HomeOutlined,
    UserAddOutlined,
    LoginOutlined,
    SettingOutlined,
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons';

const { Item } = Menu;

const Header = () => {

    const { isOpen, handleToggle, elementRef } = useToggle();

    const userMenu = (
        <Menu>
            <Item key='0'><span>Profile</span></Item>
            <Item key='1'><span>Profile</span></Item>
            <Item key='2'><span>Profile</span></Item>
        </Menu>
    );

    return (
        <HeaderWrapper>
            <div className='container'>
                <Nav>
                    <Logo>
                        <Link to='/'><span>e</span>Store</Link>
                    </Logo>
                    {/* web view */}
                    <div className='hide-md'>
                        <NavItems>
                            <ListItem>
                                <NavItemLink to='/'>
                                    <span><HomeOutlined /></span>
                                    Home
                                </NavItemLink>
                            </ListItem>
                            <ListItem>
                                <NavItemLink to='/register'>
                                    <span><UserAddOutlined /></span>
                                    Register
                                </NavItemLink>
                            </ListItem>
                            <ListItem>
                                <NavItemLink to='/login'>
                                    <span><LoginOutlined /></span>
                                    Login
                                </NavItemLink>
                            </ListItem>
                            <ListItem>
                                <Dropdown 
                                    overlay={userMenu} 
                                    trigger={['click']}
                                    placement='topCenter'
                                    arrow
                                >
                                    <NavItemLink
                                        className='ant-dropdown-link' 
                                        onClick={e => e.preventDefault()}
                                    >
                                        <span><SettingOutlined /></span> 
                                        Username
                                    </NavItemLink>
                                </Dropdown>
                            </ListItem>
                        </NavItems>
                    </div>
                    {/* mob view */}
                    <MobileNav className='show-md'>
                        <NavMenuIcon onClick={handleToggle}>
                            <MenuOutlined />
                        </NavMenuIcon>
                        <NavMenuContent ref={elementRef} isOpen={isOpen}>
                            <MenuHeader>
                                <Logo>
                                    <Link to='/'><span>e</span>Store</Link>
                                </Logo>
                                <MenuCloser>
                                    <CloseOutlined onClick={handleToggle} />
                                </MenuCloser>
                            </MenuHeader>
                            <div>content</div>
                        </NavMenuContent>
                    </MobileNav>
                </Nav>
            </div>
        </HeaderWrapper>
    )
}

export default Header;
