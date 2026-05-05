"use client";

import { useState } from 'react';

interface Integration {
    name: string;
    image: string;
}

export default function IntegrationCard({ integration }: { integration: Integration }) {
    const [error, setError] = useState(false);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100/80 text-center font-medium text-slate-700 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-3 h-36 group">
            <div className="h-16 w-full flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                {!error ? (
                    <img
                        src={integration.image}
                        alt={integration.name}
                        className="max-h-full max-w-full object-contain"
                        onError={() => setError(true)}
                    />
                ) : (
                    <span className="text-4xl">🔌</span>
                )}
            </div>
            <span className="text-sm font-semibold leading-tight">{integration.name}</span>
        </div>
    );
}


