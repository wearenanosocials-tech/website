'use client';

import { useState, useEffect, useRef } from 'react';

const phrases = [
    "brands launch and manage campaigns",
    "creators discover opportunities.",
];

export default function useTypingEffect() {
    const [displayText, setDisplayText] = useState('');
    const phraseIndex = useRef(0);
    const charIndex = useRef(0);
    const isDeleting = useRef(false);

    useEffect(() => {
        let timeout;

        function type() {
            const currentPhrase = phrases[phraseIndex.current];
            let typeSpeed = 100;

            if (isDeleting.current) {
                setDisplayText(currentPhrase.substring(0, charIndex.current - 1));
                charIndex.current--;
                typeSpeed = 50;
            } else {
                setDisplayText(currentPhrase.substring(0, charIndex.current + 1));
                charIndex.current++;
                typeSpeed = 100;
            }

            if (!isDeleting.current && charIndex.current === currentPhrase.length) {
                isDeleting.current = true;
                typeSpeed = 2000;
            } else if (isDeleting.current && charIndex.current === 0) {
                isDeleting.current = false;
                phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
                typeSpeed = 500;
            }

            timeout = setTimeout(type, typeSpeed);
        }

        timeout = setTimeout(type, 500);
        return () => clearTimeout(timeout);
    }, []);

    return displayText;
}
