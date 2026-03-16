"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
                fixed z-50 flex items-center justify-center
                w-11 h-11 rounded-full
                bg-slate-900 text-white shadow-lg
                hover:bg-slate-700 active:scale-95
                transition-all duration-200
                right-5 bottom-24
                lg:bottom-8 lg:right-8 lg:w-10 lg:h-10
            "
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
