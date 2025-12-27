import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
    badge?: string;
    title: string;
    subtitle: string;
    primaryCTA?: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    gradient?: boolean;
}

export default function Hero({ badge, title, subtitle, primaryCTA, secondaryCTA, gradient = true }: HeroProps) {
    return (
        <section className={`relative py-20 lg:py-32 overflow-hidden ${gradient ? 'bg-gradient-to-br from-slate-50 to-purple-50' : 'bg-white'}`}>
            {gradient && (
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                </div>
            )}

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {badge && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full mb-6 border border-slate-200">
                        <span className="text-sm font-medium text-slate-700">{badge}</span>
                    </div>
                )}

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    {title}
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
                    {subtitle}
                </p>

                {primaryCTA && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={primaryCTA.href}
                            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center gap-2"
                        >
                            {primaryCTA.text}
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        {secondaryCTA && (
                            <Link
                                href={secondaryCTA.href}
                                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-semibold text-lg hover:border-slate-300 transition-all hover:scale-105"
                            >
                                {secondaryCTA.text}
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

