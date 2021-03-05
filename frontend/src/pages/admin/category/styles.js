import styled from 'styled-components';
import { headingStyle, inputIcon, inputLabel } from '../../../themes/mixins';
import { marginBottomBox } from '../../../themes/spaces';

// * @antd
import Typography from 'antd/lib/typography';
import { addButtonQuery } from '../../../themes/breakpoints';

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

export const InputLabel = styled.div`
    ${inputLabel};
`;

export const InputControl = styled.div`
    ${inputIcon};
    margin-top: -1rem;
    input {
        height: 4rem;
    }
`;

export const AddButton = styled.div`
    display: flex;
    justify-content: flex-end;
    ${addButtonQuery};
`;