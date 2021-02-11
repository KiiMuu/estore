import { useState, useEffect } from 'react';

export const useOutsideClick = (element, initialState) => {
    const [isOpen, setIsOpen] = useState(initialState);

    useEffect(() => {
        const clickedOutside = e => {
            // If the open element exists and is clicked outside of
            if (element.current !== null && !element.current.contains(e.target)) {
                setIsOpen(!isOpen);
            }
        }

        if (isOpen) {
            window.addEventListener('click', clickedOutside, {
                once: true
            });
        }
    }, [isOpen, element]);

    return [isOpen, setIsOpen];
}