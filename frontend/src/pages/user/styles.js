import styled from 'styled-components';
import { marginTopBox } from '../../themes/spaces';
import { headingStyle, inputControl } from '../../themes/mixins';

// * @antd
import Typography from 'antd/lib/typography';
import Button from 'antd/lib/button';

const {
    Title,
} = Typography;

export const ContentContainer = styled.div`
    height: 100%;
`;

export const PasswordWrapper = styled.div`
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

// * form
export const FormContainer = styled.form`
    margin-top: ${marginTopBox};
`;

export const InputControl = styled.div`
    ${inputControl};
`;

export const StyledButton = styled(Button)`
    margin-top: 1.5rem;
`;