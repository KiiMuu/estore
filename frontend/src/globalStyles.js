import { createGlobalStyle } from 'styled-components';
import { primaryColor } from './themes/colors';

const GloblaStyle = createGlobalStyle`
    html {
        font-size: 62.5%; // * 1 rem = 10px; 10px / 16px = 62.5%
    }
    html,
    body {
        font-family: 'Open Sans', sans-serif;
        scroll-behavior: smooth;
    }
    body {
        line-height: 1.7;
    }
    .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    // * global media query classes
    @media screen and (max-width: 640px) {
        .hide-md {
            display: none !important;
        }
    }
    @media screen and (max-width: 640px) {
        .show-md {
            display: block !important;
        }
    }

    ::selection {
        background-color: ${primaryColor};
        color: #f3f3f3;
    }
`;

export default GloblaStyle;