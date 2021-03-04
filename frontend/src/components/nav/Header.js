import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import { auth } from '../../firebase';
import { LOGOUT } from '../../state/constants/user';

// @antd
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import { 
    HomeOutlined,
    UserAddOutlined,
    LoginOutlined,
    SettingOutlined,
    DashboardOutlined,
    MenuOutlined,
    CloseOutlined,
    LogoutOutlined,
} from '@ant-design/icons';

const { Item, Divider } = Menu;

const Header = () => {

    const { isOpen, handleToggle, elementRef } = useToggle();

    const dispatch = useDispatch();
    const history = useHistory();

    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    const logout = () => {
        auth.signOut();

        dispatch({
            type: LOGOUT,
        });

        history.push('/login');
    }

    const adminMenu = (
        <Menu>
            <Item icon={<DashboardOutlined />}>
                <Link to='/admin/dashboard'>Dashboard</Link>
            </Item>
            <Divider />
            <Item icon={<LogoutOutlined />} onClick={logout}>Logout</Item>
        </Menu>
    );

    const userMenu = (
        <Menu>
            <Item icon={<DashboardOutlined />}>
                <Link to='/user/history'>Dashboard</Link>
            </Item>
            <Divider />
            <Item icon={<LogoutOutlined />} onClick={logout}>Logout</Item>
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
                            {!userInfo && (
                                <>
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
                                </>
                            )}
                            {userInfo && (
                                <ListItem>
                                    <Dropdown 
                                        overlay={userInfo?.role === 'subscriber' ? userMenu : adminMenu}
                                        trigger={['click']}
                                    >
                                        <NavItemLink
                                            className='ant-dropdown-link' 
                                            to='#'
                                            onClick={e => e.preventDefault()}
                                        >
                                            <span><SettingOutlined /></span> 
                                            {userInfo?.email.split('@')[0]}
                                        </NavItemLink>
                                    </Dropdown>
                                </ListItem>
                            )}
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
                                    {!userInfo && (
                                        <>
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
                                        </>
                                    )}
                                    {userInfo && (
                                        <MobListItem>
                                            <StyledMenu mode='inline'>
                                                <StyledSubMenu 
                                                    icon={<SettingOutlined />}
                                                    title={userInfo?.email.split('@')[0]}
                                                >
                                                    {userInfo?.role === 'subscriber' ? (
                                                        <StyledItem icon={<DashboardOutlined />}>
                                                            <Link to='/user/history'>Dashboard</Link>
                                                        </StyledItem>
                                                    ) : (
                                                        <StyledItem icon={<DashboardOutlined />}>
                                                            <Link to='/admin/dashboard'>Dashboard</Link>
                                                        </StyledItem>
                                                    )}
                                                    <StyledItem 
                                                        icon={<LogoutOutlined />} 
                                                        onClick={logout}>
                                                            Logout
                                                    </StyledItem>
                                                </StyledSubMenu>
                                            </StyledMenu>
                                        </MobListItem>
                                    )}
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
