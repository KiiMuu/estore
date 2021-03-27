export const registerBoxQuery = () => {
    return `
        @media screen and (max-width: 500px) {
            border: none;
            box-shadow: none;
            padding: 0;
        }
    `;
}

export const addButtonQuery = () => {
    return `
        @media screen and (max-width: 576px) {
            justify-content: flex-start;
        }
    `;
}

export const layoutQuery = () => {
    return `
        @media screen and (min-width: 768px) {
            margin-left: 20rem;
        }
    `;
}