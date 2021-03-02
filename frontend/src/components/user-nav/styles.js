import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { headerHeight } from '../../themes/spaces';
import { defaultFontSize } from '../../themes/fonts';
import { linkHover } from '../../themes/mixins';
import {
    lightColor,
    darkColor,
    primaryDarkColor,
} from '../../themes/colors';

// * @antd
import Layout from 'antd/lib/layout';

const { 
    Sider 
} = Layout;

export const StyledSider = styled(Sider)`
    && {
        padding-top: ${headerHeight};
        background: #fff;
        border-right: .1rem solid #eee;
        box-shadow: 0 0 0.3rem 0.2rem rgb(0 0 0 / 3%);
    }
`;

export const StyledNavLink = styled(NavLink)`
    border-radius: .3rem;
    &.isActive {
        background-color: ${primaryDarkColor};
        li {
            color: ${lightColor};
        }
    }
`;

export const List = styled.ul`
    padding: 2rem .5rem;
    list-style: none;
    font-size: ${defaultFontSize};
    a {
        display: block;
        background-color: rgb(0 0 0 / 3%);
        &:not(:last-child) {
            margin-bottom: .5rem;
        }

        &:nth-child(1) {
            span { color: #c0392b; }
        }
        &:nth-child(2) {
            span { color: #2ecc71; }
        }
        &:nth-child(3) {
            span { color: #2980b9; }
        }
    }
`;

export const ListItem = styled.li`
    padding: .5rem 1.5rem;
    color: ${darkColor};
    z-index: 1;
    ${linkHover};
    &::before {
        background-color: ${primaryDarkColor};
    }
    &:hover {
        color: ${lightColor};
    }
    span {
        margin-right: .5rem;
    }
`;