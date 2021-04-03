import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
    primaryLightColor, 
    lightColor, 
    primaryColor,
    darkColor,
    primaryDarkColor,
} from '../../themes/colors';
import { linkHover } from '../../themes/mixins';
import { defaultFontSize } from '../../themes/fonts';
import { headerHeight } from '../../themes/spaces';

// @antd
import Menu from 'antd/lib/menu';

const { SubMenu, Item } = Menu;

export const HeaderWrapper = styled.header`
    background: ${primaryColor};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${headerHeight};
`;

export const Logo = styled.div`
    a {
        text-decoration: none;
        padding: .8rem .5rem;
        font-weight: 900;
        border-radius: .3rem;
        font-size: ${defaultFontSize};
        text-transform: uppercase;
        letter-spacing: 2px;
        background-color: ${lightColor};
        color: ${primaryColor};
        span {
            text-transform: lowercase;
        }
    }
`;

export const NavItems = styled.ul`
    display: flex;
    margin-bottom: 0;
`;

export const ListItem = styled.li`
    &:not(:first-child) {
        margin-left: .5rem;
    }
    list-style: none;
    position: relative;
`;

export const CartCount = styled.span`
    position: absolute;
    color: ${lightColor};
    background-color: ${primaryDarkColor};
    top: 0;
    min-width: 2rem;
    min-height: 2rem;
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
    border-radius: 50%;
`;

export const NavItemLink = styled(Link)`
    text-decoration: none;
    padding: 1rem;
    color: ${lightColor};
    ${linkHover};
    span {
        margin-right: .3rem;
    }
`;

// mob nav
export const MobileNav = styled.div`
    display: none;
    z-index: 100;
`;

export const NavMenuIcon = styled.div`
    color: ${lightColor};
    font-size: 1.8rem;
    cursor: pointer;
    padding: .3rem 1rem;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 3px;

    &:active {
        background-color: ${primaryLightColor};
        color: ${lightColor};
        transition: all .15s ease-in-out;
    }
`;

export const NavMenuContent = styled.div`
    position: absolute;
    background-color: white;
    padding: 1.5rem 2rem;
    transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0)'};
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, .15);
    transform-origin: top right;
    transition: transform .15s ease-in-out;
`;

export const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
`;

export const MenuCloser = styled.div`
    color: ${darkColor};
    font-size: 1.8rem;
    cursor: pointer;
    padding: .3rem 1rem;
    background-color: rgba(0, 0, 0, .1);
    opacity: .3;
    border-radius: 3px;
`;

export const MobNav = styled.nav`
    background-color: ${lightColor};
    border-radius: 3px;
`;

export const MobNavItems = styled.ul`
    margin-bottom: 0;
    padding: 1.5rem 1rem;
`;

export const MobListItem = styled.li`
    &:not(:first-child) {
        margin-top: 1rem;
    }
    list-style: none;
    font-size: 1.4rem;
`;

export const MobNavItemLink = styled(Link)`
    color: ${darkColor};
    span {
        margin-right: .3rem;
    }
`;

// @antd override
export const StyledMenu = styled(Menu)`
    font-size: 1.4rem;
`;

export const StyledSubMenu = styled(SubMenu)`
    background-color: ${lightColor};
    div {
        padding: 0 !important;
        margin: 0 !important;
        &:active {
            background-color: transparent;
        }
    }
    span:first-child {
        margin-top: 0;
        margin-right: .5rem;
        font-size: 1.4rem;
    }
    i {
        right: 0;
    }
`;

export const StyledItem = styled(Item)`
    font-size: 1.3rem;
    padding: 0 1rem !important;
    margin: 0 !important;
`;