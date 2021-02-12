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
    MobNav,
    MobNavItems,
    MobListItem,
    MobNavItemLink,
    StyledMenu,
    StyledSubMenu,
    StyledItem,
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

const { Item, Divider } = Menu;

const Header = () => {

    const { isOpen, handleToggle, elementRef } = useToggle();

    const userMenu = (
        <Menu>
            <Item key='0' icon={<LoginOutlined />}>Profile</Item>
            <Divider />
            <Item key='1' icon={<LoginOutlined />}>Profile</Item>
            <Divider />
            <Item key='2' icon={<LoginOutlined />}>Profile</Item>
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
                            <MobNav>
                                <MobNavItems>
                                    <MobListItem>
                                        <MobNavItemLink to='/'>
                                            <span><HomeOutlined /></span>
                                            Home
                                        </MobNavItemLink>
                                    </MobListItem>
                                    <MobListItem>
                                        <MobNavItemLink to='/register'>
                                            <span><UserAddOutlined /></span>
                                            Register
                                        </MobNavItemLink>
                                    </MobListItem>
                                    <MobListItem>
                                        <MobNavItemLink to='/login'>
                                            <span><LoginOutlined /></span>
                                            Login
                                        </MobNavItemLink>
                                    </MobListItem>
                                    <MobListItem>
                                        <StyledMenu mode='inline'>
                                            <StyledSubMenu 
                                                icon={<SettingOutlined />}
                                                title='Username'
                                            >
                                                <StyledItem key='0' icon={<LoginOutlined />}>
                                                    Profile
                                                </StyledItem>
                                                <StyledItem key='1' icon={<LoginOutlined />}>
                                                    Profile
                                                </StyledItem>
                                            </StyledSubMenu>
                                        </StyledMenu>
                                    </MobListItem>
                                </MobNavItems>
                            </MobNav>
                        </NavMenuContent>
                    </MobileNav>
                </Nav>
            </div>
        </HeaderWrapper>
    )
}

export default Header;
