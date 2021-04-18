import styled from 'styled-components';
import { 
    headerHeight, 
    marginBottomBox, 
    topSpace,
    marginTopBox,
} from '../../themes/spaces';
import { darkColor, lightColor, primaryColor, primaryLightColor } from '../../themes/colors';
import { linkHover } from '../../themes/mixins';
import { HomePreviewQuery } from '../../themes/breakpoints';

// * @antd
import Typography from 'antd/lib/typography';

const { Title, Text } = Typography;

// * NewArrivals.js
export const LatestArrivals = styled.div`
    padding: ${topSpace} 0;
`;

export const StyledTitle = styled(Title)`
    && {
        text-transform: uppercase;
        margin-bottom: 0;
        color: ${darkColor};
    }
`;

export const StyledText = styled(Text)`
    && {
        display: block;
        margin-bottom: ${marginBottomBox};
    }
`;

// * HomePreview.js
export const Preview = styled.div`
    margin-top: ${headerHeight};
    background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, .76),
        rgba(255, 255, 255, .6)),
    url('/home/home_preview.jpg');
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PreviewText = styled.div`
    text-align: center;
    div {
        font-size: 5rem;
        font-weight: 900;
        color: ${primaryLightColor};
        ${HomePreviewQuery}
    }
    p {
        color: #444;
        font-size: 1.6rem;
        letter-spacing: .2rem;
        span {
            font-weight: 900;
            color: ${primaryLightColor};
        }
    }
    a {
        padding: 1rem 3rem;
        margin-top: 1rem;
        display: inline-block;
        border: none;
        cursor: pointer;
        outline: none;
        z-index: 1;
        ${linkHover};
        background-color: ${primaryColor};
        color: ${lightColor};
        &::before {
            background-color: ${lightColor} !important;
        }
        &:hover {
            color: ${darkColor};
        }
    }
`;

// * BestSellers.js
export const TopSellers = styled.div`
    padding: 0 0 ${topSpace} 0;
`;

export const StyledPagination = styled.div`
    margin-top: ${marginTopBox};
    text-align: center;
`;

// * TopRated.js
export const TopRatedProds = styled.div`
    padding: 0 0 ${topSpace} 0;
`;