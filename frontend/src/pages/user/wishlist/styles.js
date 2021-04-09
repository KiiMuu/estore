import styled from 'styled-components';
import { headingStyle } from '../../../themes/mixins';
import { marginBottomBox } from '../../../themes/spaces';

// * @antd
import Typography from 'antd/lib/typography';

const {
    Title,
    Text,
} = Typography;

export const WishlistScreen = styled.div`
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

export const WishlistItem = styled.div`
    padding: 1rem 2rem;
    background-color: #eee;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
        margin-bottom: 1rem;
    }
`;