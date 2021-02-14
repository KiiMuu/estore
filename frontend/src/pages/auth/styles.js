import styled from 'styled-components';
import { lightColor, primaryColor } from '../../themes/colors';
import { descFontSize } from '../../themes/fonts';
import { paddingBetweenSections } from '../../themes/spaces';
import { appName, linkHover } from '../../themes/mixins';

// @antd
import Typography from 'antd/lib/typography';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';

const {
    Title,
} = Typography;

// register
export const ImageWrapper = styled.div`
    height: 100vh;
`;

export const StyledImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('/auth/register.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 95vh, 0 100%);
    background-color: ${primaryColor};
`;

export const FormWrapper = styled.div`
    height: 100%;
    padding: ${paddingBetweenSections} 2rem;
`;

export const StyledTitle = styled(Title)`
    // for higher specifity;
    // You can use as many & as you want, the more you use the higher the specificity will be!
    && {
        ${appName};
        margin-bottom: .5rem;
    }
`;

export const StyledForm = styled(Form)`
    margin-top: 2.5rem;
    div {
        margin-bottom: 0;
    }
`;

export const StyledInput = styled(Input)`
    && {
        font-size: ${descFontSize};
        margin-bottom: 0;
    }
`;

export const StyledButton = styled.button`
    padding: 1rem 3rem;
    margin-top: 1.5rem;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 1;
    ${linkHover};
    &::before {
        background-color: ${primaryColor};
    }
    &:hover {
        color: ${lightColor};
    }
`;