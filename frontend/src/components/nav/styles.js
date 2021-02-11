import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
    primaryLightColor, 
    lightColor, 
    primaryColor,
    darkColor,
} from '../../themes/colors';
import { linkHover } from '../../themes/mixins';
import { defaultFontSize } from '../../themes/fonts';

export const HeaderWrapper = styled.header`
    background: ${primaryColor};
    position: fixed;
    top: 0;
    width: 100%;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
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
    /* position: relative; */
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