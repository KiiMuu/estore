import styled from 'styled-components';
import { marginTopBox, headerHeight } from '../../themes/spaces';
import { headingStyle, inputIcon } from '../../themes/mixins';

// * @antd
import Layout from 'antd/lib/layout';
import Typography from 'antd/lib/typography';
import Button from 'antd/lib/button';

const {
    Title,
} = Typography;

const { 
    Content,  
} = Layout;

export const StyledLayout = styled(Layout)`
    && {
        height: 100vh;
    }
`;

export const StyledContent = styled(Content)`
    && {
        margin-top: ${headerHeight};
        background-color: #fff;
    }
`;

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
    ${inputIcon};
    span:nth-child(2) {
        right: 1.5rem;
        cursor: pointer;
    }
`;

export const StyledButton = styled(Button)`
    margin-top: 1.5rem;
`;