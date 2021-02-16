import styled from 'styled-components';
import { lightColor, primaryColor } from '../../themes/colors';
import { descFontSize } from '../../themes/fonts';
import { boxPadding, topSpace } from '../../themes/spaces';
import { appName, linkHover } from '../../themes/mixins';
import { registerBoxQuery } from '../../themes/breakpoints';

// @antd
import Typography from 'antd/lib/typography';

const {
    Title,
} = Typography;


export const ImageWrapper = styled.div`
    height: 100vh;
`;

export const StyledImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${props => props.location === '/register' ? "url('/auth/register.svg')" : "url('/auth/login.svg')"};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 95vh, 0 100%);
    background-color: ${primaryColor};
`;

export const FormWrapper = styled.div`
    height: 100%;
    padding: ${topSpace} 0;
`;

export const Content = styled.div`
    padding: 0 2rem;
`;

export const CompleteContent = styled.div`
    padding: ${boxPadding};
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 .5rem 1rem rgba(154,160,185,.05), 0 1.5rem 4rem rgba(166,173,201,.2);
    ${registerBoxQuery};
`;

export const StyledTitle = styled(Title)`
    // for higher specifity;
    // You can use as many & as you want, the more you use the higher the specificity will be!
    && {
        ${appName};
        margin-bottom: .5rem;
    }
`;

export const StyledForm = styled.form`
    margin-top: 2.5rem;
`;

export const InputControl = styled.div`
    position: relative;
    span {
        position: absolute;
        top: 50%;
        transform: translate(50%, -50%);
    }
    &:not(:first-child) {
        margin-top: 1rem;
    }
`;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 5rem;
    padding-left: 3rem;
    outline: none;
    border: 1px solid #ddd;
    background-color: #fff;
    font-size: ${descFontSize};
    transition: all .15s ease;
    &:focus {
        border-color: ${primaryColor};
        box-shadow: 0 0 .5rem .1rem ${primaryColor};
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

export const Indicator = styled.span`
    color: red;
`;