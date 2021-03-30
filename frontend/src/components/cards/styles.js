import styled from 'styled-components';
import { darkColor, primaryColor } from '../../themes/colors';
import { buttonStyle } from '../../themes/mixins';

// * @antd
import Typography from 'antd/lib/typography';
import { marginBottomBox, marginTopBox } from '../../themes/spaces';

const { Title } = Typography;

// * ProductCard.js
export const Card = styled.div`
    background-color: #fff;
    padding: .5rem;
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
        font-size: 1.8rem;
        text-transform: capitalize;
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
        ${buttonStyle};
    }
`;

// * SingleProduct.js
export const StyledTitle = styled(Title)`
    && {
        text-transform: uppercase;
        color: ${primaryColor};
    }
`;

export const StyledText = styled.p`
    && {
        display: block;
        margin-bottom: ${marginBottomBox};
        line-height: 2.5rem;
        color: rgba(0 0 0 / 75%);
    }
`;

export const ProductInfo = styled.div`
    border: 1px solid rgba(0 0 0 / 15%);
    padding: 1rem;
`;
export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:first-child) {
        margin-top: .5rem;
    }
    p {
        color: ${primaryColor};
        margin: 0;
    }
    span {
        color: ${darkColor};
    }
`;

export const ProductActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: ${marginTopBox};
`;

export const CartAction = styled.div`
    button {
        ${buttonStyle};
    }
    margin-bottom: .5rem;
`;

export const WishListAction = styled.div`
    button {
        border: none;
        padding: .65rem;
        a {
            span {
                margin-right: .3rem;
            }
        }
    }
    margin-bottom: .5rem;
`

export const CarouselItem = styled.div`
    div {
        img {
            border: 1px solid rgba(0 0 0 / 15%);
        }
    }
`;

export const StyledRating = styled.div`
    margin-bottom: 1.5rem;
`;