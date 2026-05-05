"use client";

import { useEffect, useRef } from 'react';

interface Integration {
    name: string;
    color: string;
    category: string;
    image?: string;
}

interface IntegrationCloudProps {
    integrations: Integration[];
    note?: string;
}

export default function IntegrationCloud({ integrations, note }: IntegrationCloudProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 50);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 lg:py-28 bg-slate-50/60">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="text-center mb-14">
                    <span className="reveal inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                        Integrations
                    </span>
                    <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Works With Your Tools
                    </h2>
                    <p className="reveal text-lg text-slate-500">
                        Connect with 50+ popular platforms in minutes
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {integrations.map((integration, index) => (
                        <div
                            key={index}
                            className="reveal group bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center gap-2.5 h-24 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-orange-100 transition-all duration-300 cursor-default"
                        >
                            {integration.image ? (
                                <img
                                    src={integration.image}
                                    alt={integration.name}
                                    className="w-8 h-8 object-contain"
                                />
                            ) : (
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs flex-shrink-0"
                                    style={{ backgroundColor: integration.color }}
                                >
                                    {integration.name.substring(0, 2).toUpperCase()}
                                </div>
                            )}
                            <span className="text-xs text-slate-500 group-hover:text-slate-700 font-medium text-center leading-tight transition-colors">
                                {integration.name}
                            </span>
                        </div>
                    ))}
                </div>

                {note && (
                    <p className="reveal text-center text-slate-400 mt-6 text-sm">{note}</p>
                )}

                <div className="reveal text-center mt-8">
                    <a
                        href="/integrations"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-600 transition-colors cursor-pointer"
                    >
                        View all integrations →
                    </a>
                </div>
            </div>
        </section>
    );
}


