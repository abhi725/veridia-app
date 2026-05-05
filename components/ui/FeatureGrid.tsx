"use client";

import { useEffect, useRef } from 'react';

interface FeatureGridProps {
    features: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }[];
    sectionLabel?: string;
    heading?: string;
    subheading?: string;
}

export default function FeatureGrid({ features, sectionLabel, heading, subheading }: FeatureGridProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 80);
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

                {(sectionLabel || heading) && (
                    <div className="text-center mb-14">
                        {sectionLabel && (
                            <span className="reveal inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                                {sectionLabel}
                            </span>
                        )}
                        {heading && (
                            <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900 mb-4 max-w-2xl mx-auto leading-tight">
                                {heading}
                            </h2>
                        )}
                        {subheading && (
                            <p className="reveal text-lg text-slate-500 max-w-xl mx-auto">
                                {subheading}
                            </p>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="reveal group bg-white border border-slate-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-orange-100 transition-all duration-300 cursor-default"
                        >
                            <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform duration-200 shadow-orange">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


