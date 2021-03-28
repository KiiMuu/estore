import styled from 'styled-components';
import { darkColor, lightColor, primaryColor } from '../../themes/colors';
import { linkHover } from '../../themes/mixins';

// * ProductCard.js
export const Card = styled.div`
    background: linear-gradient(to right, #F0FDF4, rgba(16, 185, 129, .4));
    padding: 1rem;
    border-radius: .3rem;
    box-shadow: 0 0 .5rem .3rem rgba(0, 0, 0, .1);
`;

export const CardInfo = styled.div`
    background-color: #fff;
    background: linear-gradient(to right, #F0FDF4, rgba(6, 95, 70, .1));
    padding: 1.5rem;
    box-shadow: 0 0 .3rem .1rem rgba(0, 0, 0, .1);
`;

export const CardHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    h2 {
        color: ${darkColor};
        word-break: break-all;
        margin: 0;
    }
    span {
        font-size: 1.8rem;
        color: ${primaryColor};
        font-weight: 900;
    }
`;

export const CardRate = styled.div``;

export const CardDesc = styled.div`
    color: #555;
    letter-spacing: .1rem;
`;

export const CardActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ViewProduct = styled.div`
    a {
        border: none;
        cursor: pointer;
        outline: none;
        z-index: 1;
        span {
            margin-right: .3rem;
        }
    }
`;

export const AddToCart = styled.div`
    button {
        padding: 1rem 1.5rem;
        border: none;
        cursor: pointer;
        outline: none;
        z-index: 1;
        ${linkHover};
        background-color: ${primaryColor};
        color: ${lightColor};
        span {
            margin-right: .3rem;
        }
    }
`;