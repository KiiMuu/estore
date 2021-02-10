import { createGlobalStyle } from 'styled-components';
import { primaryColor } from './themes/colors';

const GloblaStyle = createGlobalStyle`
    html {
        font-size: 62.5%; // 1 rem = 10px; 10px / 16px = 62.5%
    }
    html,
    body {
        font-family: 'Open Sans', sans-serif;
        scroll-behavior: smooth;
    }
    body {
        line-height: 1.7;
    }
    ::selection {
        background-color: ${primaryColor};
        color: #f3f3f3;
    }
`;

export default GloblaStyle;