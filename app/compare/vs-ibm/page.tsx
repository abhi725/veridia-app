"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsIBMPage() {
    const comparisonRows = [
        { feature: "Modern Tech Stack", veridia: "Gemini + Cloudflare + Next.js", competitor: "Legacy Watson" },
        { feature: "Developer Experience", veridia: "Excellent", competitor: "Complex" },
        { feature: "Time to Market", veridia: "2-4 weeks", competitor: "6-12 months" },
        { feature: "Monthly Cost (Professional)", veridia: "$1,999", competitor: "$10,000+" },
        { feature: "No-Code Builder", veridia: true, competitor: false },
        { feature: "API-First Architecture", veridia: true, competitor: "Limited" },
        { feature: "Innovation Speed", veridia: "Monthly updates", competitor: "Quarterly" },
        { feature: "Cloud Native", veridia: true, competitor: "Hybrid legacy" },
        { feature: "Startup Agility", veridia: true, competitor: false },
        { feature: "Enterprise Size Req", veridia: "Any size", competitor: "Fortune 500 only" },
        { feature: "Modern AI Models", veridia: "Latest Gemini", competitor: "Older Watson" },
        { feature: "Community Support", veridia: "Active", competitor: "Limited" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Modern vs Legacy"
                title="Veridia vs IBM watsonx"
                subtitle="Modern AI stack vs legacy technology: Why innovation leaders choose Veridia"
                primaryCTA={{ text: "See Platform", href: "/platform" }}
                secondaryCTA={{ text: "Book Demo", href: "/demo" }}
            />

            <ComparisonTable
                title="Technology & Innovation Comparison"
                competitorName="IBM watsonx"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Modern Companies Choose Veridia</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🚀 Built on Modern AI</h3>
                            <p className="text-lg text-slate-700">
                                We use Google's latest Gemini models, which outperform IBM Watson on all major benchmarks. Your users get better, more natural conversations.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">⚡ Ship Features 10x Faster</h3>
                            <p className="text-lg text-slate-700">
                                IBM's quarterly release cycle means waiting months for new features. We ship updates every 2-4 weeks, keeping you at the cutting edge.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 1/5th the Cost</h3>
                            <p className="text-lg text-slate-700">
                                No IBM sales overhead, no legacy infrastructure costs. Get enterprise-grade AI at startup prices.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">👨‍💻 Developer-First</h3>
                            <p className="text-lg text-slate-700">
                                Modern REST APIs, comprehensive SDKs (Python, Node.js, Java), and detailed documentation. IBM's API is notoriously difficult.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready for Modern AI?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        See why tech-forward companies choose Veridia over IBM Watson
                    </p>
                    <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all inline-block">
                        Schedule Technical Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
