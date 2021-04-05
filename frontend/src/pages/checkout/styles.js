import styled from 'styled-components';
import { topSpace } from '../../themes/spaces';
import { darkColor, lightColor } from '../../themes/colors';

export const CheckoutScreen = styled.div`
    padding: ${topSpace} 0;
`;

export const SubHeading = styled.h3`
    text-transform: uppercase;
    color: ${darkColor};
    font-weight: 900;
    font-size: 1.5rem;
`;

export const List = styled.ul`
    padding: 0;
`;

export const ListItem = styled.li`
    list-style: none;
    padding: 1rem;
    color: ${darkColor};
    background-color: ${lightColor};
    border: 1px solid rgba(0 0 0 / 5%);
    border-radius: .3rem;
`;