'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WhySwanDeskRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/why-swandigitals');
    }, [router]);

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white px-6 text-center">
            <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
            <p className="text-slate-400 text-sm">
                We are moving you to the new <strong>SwanDigitals</strong> page.
            </p>
            <p className="text-xs text-slate-500 mt-8">
                If you are not redirected automatically, please click{' '}
                <a href="/why-swandigitals" className="text-orange-500 hover:text-orange-400 underline font-bold">
                    here
                </a>
                .
            </p>
        </div>
    );
}
