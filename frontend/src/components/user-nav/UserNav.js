// * styled
import {
    StyledSider,
    StyledNavLink,
    List,
    ListItem,
} from './styles';

// * @antd
import { 
    HeartFilled,
    KeyOutlined,
    HistoryOutlined,
} from '@ant-design/icons';

const UserNav = () => {
    return (
        <StyledSider
            breakpoint='md'
            collapsedWidth='0'
        >
            <List>
                <StyledNavLink 
                    to='/user/history' 
                    activeClassName='isActive'
                >
                    <ListItem>
                        <span><HistoryOutlined /></span>
                        History
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
                <StyledNavLink 
                    to='/user/wishlist' 
                    activeClassName='isActive'
                >
                    <ListItem>
                        <span><HeartFilled /></span>
                        Wishlist
                    </ListItem>
                </StyledNavLink>
            </List>
        </StyledSider>
    )
}

export default UserNav;