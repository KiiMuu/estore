import { 
    lightColor, 
    primaryColor, 
    primaryDarkColor 
} from './colors';

export const linkHover = () => {
    return `
        position: relative;
        transition: transform .15s ease-in-out;
        &::before {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            transform: scale(0);
            background-color: ${lightColor};
            border-radius: 3px;
            transition: transform .15s ease-in-out;
            transform-origin: center;
        }
        &:hover {
            color: ${primaryColor};
        }
        &:hover::before {
            transform: scale(1);
            transform-origin: top right;
        }
        &:active {
            transform: scale(.9);
        }
    `;
}

export const headingStyle = () => {
    return `
        background-image: linear-gradient(
            to right, 
            ${primaryColor}, 
            ${primaryDarkColor}
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 900;
    `
}

export const inputControl = () => {
    return `
        position: relative;
        span {
            position: absolute;
            top: 50%;
            transform: translate(0%, -50%);
            color: ${primaryColor};
        }
        input {
            padding-left: 3rem;
            border: .2rem solid;
            border-color: transparent transparent #ddd transparent;
            outline: none;
            width: 100%;
            height: 5rem;
            background-color: #fff;
            border-radius: 0;
        }
        strong {
            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0;
                height: .2rem;
                background-color: ${primaryColor};
                transition: all .3s ease-in-out;
            }
        }
        input:focus + strong {
            &:after {
                width: 100%;
                left: 0;
            }
        }
    `;
}