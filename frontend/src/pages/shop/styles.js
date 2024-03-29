import styled from 'styled-components';
import { headerHeight, boxPadding, marginBottomBox, topSpace } from '../../themes/spaces';
import { darkColor, primaryColor } from '../../themes/colors';
import { layoutQuery } from '../../themes/breakpoints';

// * @antd
import Layout from 'antd/lib/layout';
import Typography from 'antd/lib/typography';

const { Title, Text } = Typography;
const { Content, Sider } = Layout;

// * ShopFiltersMenu.js
export const StyledSider = styled(Sider)`
    && {
        padding-top: ${headerHeight};
        background: #fff;
        border-right: .2rem solid #eee;
        box-shadow: 0 0 0.3rem 0.2rem rgb(0 0 0 / 3%);
        position: fixed;
        height: 100vh;
        left: 0;
        z-index: 98;
        > div {
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
        }
    }
`;

export const FilterHeading = styled.h3`
    padding: 2rem 1.5rem;
    margin: 0;
    color: ${primaryColor};
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.4rem;
    background-color: #fff;
`;

export const ListItem = styled.li`
    padding: 1rem 1.5rem;
`;

export const CheckBoxItem = styled.div`
    padding: .5rem 0;
    span {
        color: ${darkColor};
    }
`;

export const ResetFilter = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`; 

// * ShopLayout.js
export const StyledContent = styled(Content)`
    && {
        margin-top: ${headerHeight};
        background-color: rgba(255 255 255 / 50%);
        height: 100%;
        ${layoutQuery};
    }
`;

export const ContentContainer = styled.div`
    height: 100%;
`;

// * Shop.js
export const ProductsSection = styled.div`
    padding: ${boxPadding} 0 ${topSpace} 0;
`;

export const StyledTitle = styled(Title)`
    && {
        text-transform: uppercase;
        color: ${darkColor};
        margin: 0;
    }
`;

export const StyledText = styled(Text)`
    && {
        display: block;
        margin-bottom: ${marginBottomBox};
    }
`;