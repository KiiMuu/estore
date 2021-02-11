import { lightColor, primaryColor } from './colors';

export const linkHover = () => {
    return `
        position: relative;
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
    `;
}