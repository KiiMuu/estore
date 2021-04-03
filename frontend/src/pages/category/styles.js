import styled from 'styled-components';
import { marginBottomBox, topSpace } from '../../themes/spaces';
import { darkColor } from '../../themes/colors';

// * @antd
import Typography from 'antd/lib/typography';

const { Title, Text } = Typography;

export const CategoryScreen = styled.div`
    padding: ${topSpace} 0;
`;

export const StyledTitle = styled(Title)`
    && {
        text-transform: uppercase;
        color: ${darkColor};
    }
`;

export const StyledText = styled(Text)`
    && {
        display: block;
        margin-bottom: ${marginBottomBox};
    }
`;