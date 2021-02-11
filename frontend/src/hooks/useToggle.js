import { useEffect, useCallback, useRef } from 'react';
import { useOutsideClick } from './useOutsideClick';

const useToggle = () => {
    const elementRef = useRef(null);
	const [isOpen, setIsOpen] = useOutsideClick(elementRef, false);

	const handleEscKey = useCallback(
		e => {
			if (e.keyCode === 27) setIsOpen(!isOpen);
		},
		[isOpen, setIsOpen]
	);

	useEffect(() => {
		if (isOpen) {
            document.addEventListener('keydown', handleEscKey, false, {
                once: true,
            });
        }
	}, [handleEscKey, isOpen]);

	const handleToggle = () => setIsOpen(!isOpen);

	return { isOpen, handleToggle, elementRef }
};

export default useToggle;