import { useEffect } from 'react';

const ScrollHander = () => {
    useEffect(() => {
        function handleScroll() {
            const elements = document.querySelectorAll('.aos-init');
            elements.forEach((el) => {
                if (el.classList.contains('aos-animate')) {
                    el.dataset.aos = '';
                }
            });
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return null;
}

export default ScrollHander;