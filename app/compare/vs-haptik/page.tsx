"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsHaptikPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDigitals: "Free / ₹1,999", competitor: "₹25,000+/month" },
        { feature: "Implementation Time", SwanDigitals: "2-4 weeks", competitor: "4-8 weeks" },
        { feature: "Voice AI Native", SwanDigitals: true, competitor: false },
        { feature: "No-Code Builder", SwanDigitals: true, competitor: true },
        { feature: "On-Premise Deployment", SwanDigitals: true, competitor: false },
        { feature: "WhatsApp Business API", SwanDigitals: true, competitor: true },
        { feature: "Multi-Language (Indic)", SwanDigitals: "10+ languages", competitor: "100+ languages" },
        { feature: "Live Agent Handoff", SwanDigitals: true, competitor: true },
        { feature: "Sentiment Analysis", SwanDigitals: true, competitor: true },
        { feature: "API Access", SwanDigitals: true, competitor: true },
        { feature: "Setup Fees", SwanDigitals: "₹0", competitor: "Custom" },
        { feature: "Annual Contract Required", SwanDigitals: false, competitor: true }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Detailed Comparison"
                title="SwanDigitals vs Haptik"
                subtitle="Enterprise-grade AI chatbot at 1/10th the cost. Same features, fraction of the price."
                primaryCTA={{ text: "Start Free Trial", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Haptik"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Companies Choose SwanDigitals Over Haptik</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 90% Lower Monthly Cost</h3>
                            <p className="text-lg text-slate-700">
                                Haptik starts at ₹25,000+/month. SwanDigitals delivers the same enterprise capabilities starting at just Free / ₹1,999.
                                That's over ₹2.5 lakh saved annually without compromising on features.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎙️ Native Voice AI Included</h3>
                            <p className="text-lg text-slate-700">
                                Unlike Haptik which focuses on text-based chatbots, SwanDigitals includes AI voice agents
                                that handle phone calls with human-like conversations. No additional vendor required.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏢 True On-Premise Option</h3>
                            <p className="text-lg text-slate-700">
                                For regulated industries like BFSI and healthcare, SwanDigitals offers genuine on-premise deployment
                                where data never leaves your network. Haptik only offers cloud solutions.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">📅 No Annual Lock-in</h3>
                            <p className="text-lg text-slate-700">
                                Start monthly, scale as you grow. SwanDigitals doesn't require annual contracts or
                                enterprise minimums. Pay for what you use, upgrade when you're ready.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Save ₹2.5 Lakh+ Per Year?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Join growing businesses who switched from Haptik to SwanDigitals
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Get Free Migration Assessment
                        </Link>
                        <Link href="/pricing" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Compare Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
