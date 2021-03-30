import styled from 'styled-components';
import { marginBottomBox, topSpace } from '../../themes/spaces';

// * @antd
import Typography from 'antd/lib/typography';
import { darkColor, primaryColor } from '../../themes/colors';

const { Title, Text } = Typography;

export const SubCategoryScreen = styled.div`
    padding: ${topSpace} 0;
`;

export const StyledTitle = styled(Title)`
    && {
        text-transform: uppercase;
        color: ${darkColor};
        span {
            color: ${primaryColor};
            text-decoration: underline;
        }
    }
`;

export const StyledText = styled(Text)`
    && {
        display: block;
        margin-bottom: ${marginBottomBox};
    }
`;