import styled from 'styled-components';
import { darkColor, primaryColor } from '../../themes/colors';

// * @antd
import Typography from 'antd/lib/typography';
import { marginBottomBox, marginTopBox } from '../../themes/spaces';
import { productActionsQuery } from '../../themes/breakpoints';

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

export const CardRate = styled.div`
    margin-bottom: 1rem;
`;

export const CardDesc = styled.div`
    color: #555;
    letter-spacing: .1rem;
`;

export const CardActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// * SingleProduct.js
export const StyledTitle = styled(Title)`
    && {
        text-transform: uppercase;
        color: ${primaryColor};
        margin: 0;
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
    background-color: #fff;
    box-shadow: 0 0 .5rem .3rem rgba(0 0 0 / 5%);
    padding: 2rem 2.5rem;
    min-height: 40rem;
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
`;

export const ProductActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: ${marginTopBox};
    button {
        ${productActionsQuery};
    }
`;

export const CarouselItem = styled.div`
    div {
        img {
            border: 1px solid rgba(0 0 0 / 10%);
        }
    }
`;

export const StyledRating = styled.div`
    margin-bottom: 1.5rem;
    text-align: center;
`;

export const PeopleRates = styled.div`
    background-color: #fff;
    box-shadow: 0 0 .5rem .3rem rgba(0 0 0 / 5%);
    padding: 0 2rem;
    border-radius: .3rem;
    height: 25rem;
    overflow: auto;
    ::-webkit-scrollbar {
        width: .8rem;
        border-radius: .8rem;
        background-color: #ddd;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #666;
        border-radius: .8rem;
    }
`;