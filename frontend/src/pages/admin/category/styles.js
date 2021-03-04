import styled from 'styled-components';
import { headingStyle } from '../../../themes/mixins';
import { marginBottomBox } from '../../../themes/spaces';

// * @antd
import Typography from 'antd/lib/typography';
import Button from 'antd/lib/button';

const {
    Title,
    Text,
} = Typography;

export const CategoriesWrapper = styled.div`
    padding: 3rem 0;
    height: 100%;
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

export const StyledButton = styled(Button)`
    margin-top: 1.5rem;
`;

export const SearchField = styled.div``;

export const AddButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;