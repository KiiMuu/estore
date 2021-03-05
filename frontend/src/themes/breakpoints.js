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