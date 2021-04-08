import styled from 'styled-components';
import { headerHeight, topSpace } from '../../themes/spaces';
import { darkColor } from '../../themes/colors';

export const SubHeading = styled.h3`
    text-transform: uppercase;
    color: ${darkColor};
    font-weight: 900;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2.5rem;
`;

export const ImageWrapper = styled.div`
    height: 100vh;
`;

export const StyledImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('/payment/payment.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    margin-top: ${headerHeight};
    box-shadow: 0 0 .2rem .2rem rgba(0 0 0 / 5%);
`;

export const FormWrapper = styled.div`
    height: 100%;
    padding: ${topSpace} 0;
`;

export const Content = styled.div`
    padding: 0 2rem;
`;