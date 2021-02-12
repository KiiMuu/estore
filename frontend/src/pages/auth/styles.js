import styled from 'styled-components';
import { primaryColor } from '../../themes/colors';
import { headerHeight, paddingBetweenSections } from '../../themes/spaces';
import { mainHeadFontSize, descFontSize } from '../../themes/fonts';
import { appName } from '../../themes/mixins';

// register
export const RegisterWrapper = styled.div`
    /* background-color: rebeccapurple; */
    /* padding-top: ${headerHeight}; */
`;

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
    filter: drop-shadow(2px 4px 8px #585858);
    clip-path: polygon(0 0, 100% 0, 100% 95vh, 0 100%);
    background-color: ${primaryColor};
`;

export const FormWrapper = styled.div`
    height: 100%;
    padding: ${paddingBetweenSections} 2rem;
`;

export const RegHeading = styled.h1`
    font-size: ${mainHeadFontSize};
    margin: 0;
    text-transform: uppercase;
    ${appName};
`;

export const RegDesc = styled.p`
    font-size: ${descFontSize};
    margin: 0;
    color: #aaa;
`;