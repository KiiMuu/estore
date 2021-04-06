import styled from 'styled-components';
import { topSpace } from '../../themes/spaces';
import { darkColor } from '../../themes/colors';

export const PaymentScreen = styled.div`
    padding: ${topSpace} 0;
`;

export const SubHeading = styled.h3`
    text-transform: uppercase;
    color: ${darkColor};
    font-weight: 900;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2.5rem;
`;