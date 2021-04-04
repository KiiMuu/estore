import styled from 'styled-components';
import { marginBottomBox, topSpace } from '../../themes/spaces';
import { darkColor, lightColor } from '../../themes/colors';

// * @antd
import Typography from 'antd/lib/typography';

const { Title, Text } = Typography;

export const CartScreen = styled.div`
    padding: ${topSpace} 0;
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

export const SubHeading = styled.h3`
    text-transform: uppercase;
    color: ${darkColor};
    font-weight: 900;
    font-size: 1.5rem;
`;

export const TableWrapper = styled.div`
    overflow-x: auto;
    ::-webkit-scrollbar {
        height: .8rem;
        border-radius: .8rem;
        background-color: #ddd;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #666;
        border-radius: .8rem;
    }
`;

export const Table = styled.table`
    width: 100%;
    border: .2rem solid rgba(0 0 0 / 3%);
    border-radius: .3rem;
`;

export const TableHeadings = styled.tr`
    th {
        &:first-child {
            padding-left: 1rem;
        }
        padding: 1rem 0;
        font-weight: normal;
        color: #000;
        background: ${lightColor};
        min-width: 10rem;
    }
`;

export const TableRows = styled.tbody`
    td {
        &:first-child {
            padding-left: 1rem;
        }
        background-color: rgba(0 0 0 / 2%);
        padding: 1rem 2rem 1rem 0;
    }
`;