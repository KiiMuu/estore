import styled from 'styled-components';

// * @antd
import Typography from 'antd/lib/typography';
import { headingStyle } from '../../../themes/mixins';
import { marginBottomBox } from '../../../themes/spaces';
import { darkColor } from '../../../themes/colors';

const {
    Title,
    Text,
} = Typography;

export const HistoryScreen = styled.div`
height: 100%;
    padding: 3rem 0;
    max-height: 100%;
`;

export const StyledTitle = styled(Title)`
    && {
        ${headingStyle};
        text-transform: uppercase;
        margin-bottom: 0;
    }
`;

export const StyledText = styled(Text)`
    && {
        margin-bottom: ${marginBottomBox};
        display: block;
    }
`;

export const SubHeading = styled.h3`
    text-transform: uppercase;
    color: ${darkColor};
    font-size: 1.5rem;
    margin: 1rem 0;
`;