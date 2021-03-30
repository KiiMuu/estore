import styled from 'styled-components';
import { topSpace } from '../../themes/spaces';
import { lightColor, primaryColor } from '../../themes/colors';

// * @antd
import Tag from 'antd/lib/tag';

export const StyledCatgeories = styled.div`
    padding-bottom: ${topSpace};
`;

export const StyledTag = styled(Tag)`
    && {
        background-color: ${primaryColor};
        color: ${lightColor};
        border-color: ${primaryColor};
    }
`;