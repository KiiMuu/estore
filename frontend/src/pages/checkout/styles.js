import styled from 'styled-components';
import { topSpace } from '../../themes/spaces';
import { darkColor, lightColor } from '../../themes/colors';
import { inputLabel } from '../../themes/mixins';

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

export const QuillSection = styled.div`
    box-shadow: 0 0 .5rem .5rem rgba(0 0 0 / 5%);
    padding: 2.5rem 2rem;
    border-radius: .3rem;
`;

export const OrderSummary = styled(QuillSection)``;

export const CouponSection = styled(QuillSection)`
    margin-top: 2rem;
`;

export const InputControl = styled.div`
    ${inputLabel};
`;