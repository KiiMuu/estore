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

export const inputIcon = () => {
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

export const inputLabel = () => {
    return `
        label {
            display: block;
            color: #000;
            font-weight: 500;
            margin-bottom: .2rem;
        }
        input {
            width: 100%;
            outline: none;
            height: 4rem;
            padding-left: 1rem;
            border: .1rem solid rgba(0 0 0 / 10%);
            &:focus {
                box-shadow: 0 0 .1rem .1rem ${primaryDarkColor};
                border: .1rem solid ${primaryColor};
                transition: all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
        }
    `;
}

export const buttonStyle = () => {
    return `
        padding: .5rem 1rem;
        border: none;
        cursor: pointer;
        outline: none;
        z-index: 1;
        position: relative;
        background-color: ${primaryColor};
        color: ${lightColor};
        transition: all .15s ease-in-out;
        &::before {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: ${primaryDarkColor};
            border-radius: 3px;
            transition: all .15s ease-in-out;
        }
        &:hover {
            color: ${lightColor};
        }
        &:hover::before {
            height: 100%;
        }
        &:active {
            transform: scale(.95);
        }
        span {
            margin-right: .3rem;
        }
    `;
}