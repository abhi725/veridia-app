"use client";

import Link from 'next/link';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm">
                <span className="font-semibold">🏆 Named a Leader in Gartner Magic Quadrant 2024</span>
                <Link href="/resources" className="underline hover:no-underline">
                    Read Report →
                </Link>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 p-1 rounded"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
