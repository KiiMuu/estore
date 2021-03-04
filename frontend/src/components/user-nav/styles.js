import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { headerHeight } from '../../themes/spaces';
import { linkHover } from '../../themes/mixins';
import {
    lightColor,
    primaryDarkColor,
    primaryColor,
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
            span {
                color: ${lightColor};
            }
        }
    }
`;

export const List = styled.ul`
    padding: 2rem .5rem;
    list-style: none;
    a {
        display: block;
        background-color: rgb(0 0 0 / 3%);
        &:not(:last-child) {
            margin-bottom: .5rem;
        }
    }
`;

export const ListItem = styled.li`
    padding: 1rem 1.5rem;
    color: #000;
    z-index: 1;
    ${linkHover};
    &::before {
        background-color: ${primaryDarkColor};
    }
    &:hover {
        color: ${lightColor};
        span {
            color: ${lightColor};
        }
    }
    span {
        margin-right: .5rem;
        color: ${primaryColor};
    }
`;