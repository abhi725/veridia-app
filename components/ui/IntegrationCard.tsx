"use client";

import { useState } from 'react';

interface Integration {
    name: string;
    image: string;
    isNative?: boolean;
}

export default function IntegrationCard({ integration }: { integration: Integration }) {
    const [error, setError] = useState(false);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100/80 text-center font-medium text-slate-700 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center justify-between h-38 group relative overflow-hidden">
            {/* Native vs Custom Badge */}
            <div className="absolute top-2 right-2">
                {integration.isNative ? (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-green-50 text-green-700 border border-green-200">
                        NATIVE
                    </span>
                ) : (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-slate-50 text-slate-600 border border-slate-200">
                        API/N8N
                    </span>
                )}
            </div>

            <div className="h-16 w-full flex items-center justify-center p-2 mt-2 group-hover:scale-105 transition-transform duration-300">
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
            <span className="text-sm font-semibold leading-tight mb-1">{integration.name}</span>
        </div>
    );
}


