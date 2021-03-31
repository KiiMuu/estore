// * styled
import {
    StyledSider,
} from './styles';

// * @antd
// import { 
//     DashboardOutlined,
//     OrderedListOutlined,
//     AppstoreOutlined,
//     BlockOutlined,
//     KeyOutlined,
//     FireOutlined,
// } from '@ant-design/icons';

const ShopFiltersMenu = () => {
    return (
        <StyledSider
            breakpoint='md'
            collapsedWidth='0'
        >
            <ul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
            </ul>
            {/* <List>
                <StyledNavLink 
                    to='/admin/dashboard' 
                    activeClassName='isActive'
                >
                    <ListItem>
                        <span><DashboardOutlined /></span>
                        Dashboard
                    </ListItem>
                </StyledNavLink>
                <StyledNavLink 
                    to='/admin/product' 
                    activeClassName='isActive'
                >
                    <ListItem>
                        <span><OrderedListOutlined /></span>
                        Product
                    </ListItem>
                </StyledNavLink>
                <StyledNavLink 
                    to='/admin/category' 
                    activeClassName='isActive'
                >
                    <ListItem>
                        <span><AppstoreOutlined /></span>
                        Category
                    </ListItem>
                </StyledNavLink>
                <StyledNavLink 
                    to='/admin/sub' 
                    activeClassName='isActive'
                >
                    <ListItem>
                        <span><BlockOutlined /></span>
                        Sub Category
                    </ListItem>
                </StyledNavLink>
                <StyledNavLink 
                    to='/admin/coupon' 
                    activeClassName='isActive'
                >
                    <ListItem>
                        <span><FireOutlined /></span>
                        Coupon
                    </ListItem>
                </StyledNavLink>
                <StyledNavLink 
                    to='/user/password' 
                    activeClassName='isActive'
                >
                    <ListItem>
                        <span><KeyOutlined /></span>
                        Password
                    </ListItem>
                </StyledNavLink>
            </List> */}
        </StyledSider>
    )
}

export default ShopFiltersMenu;