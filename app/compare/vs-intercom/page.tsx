"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsIntercomPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDigitals: "Free / ₹1,999", competitor: "$74+/month (per seat)" },
        { feature: "Voice AI", SwanDigitals: true, competitor: false },
        { feature: "On-Premise Deployment", SwanDigitals: true, competitor: false },
        { feature: "No-Code Builder", SwanDigitals: true, competitor: true },
        { feature: "WhatsApp Business API", SwanDigitals: true, competitor: true },
        { feature: "Self-Hosted Option", SwanDigitals: true, competitor: false },
        { feature: "Multi-Language (Indic)", SwanDigitals: "10+ languages", competitor: "Limited" },
        { feature: "Pricing Model", SwanDigitals: "Per conversation", competitor: "Per seat + resolution" },
        { feature: "AI Bot Included", SwanDigitals: true, competitor: "Add-on ($0.99/resolution)" },
        { feature: "Live Agent Handoff", SwanDigitals: true, competitor: true },
        { feature: "Data Residency India", SwanDigitals: true, competitor: false },
        { feature: "Enterprise Features", SwanDigitals: "All plans", competitor: "Enterprise tier only" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Customer Service Comparison"
                title="SwanDigitals vs Intercom"
                subtitle="Enterprise-grade conversational AI without the per-seat pricing nightmare. Voice AI included, not extra."
                primaryCTA={{ text: "Start Free Trial", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Intercom"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Companies Choose SwanDigitals Over Intercom</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 Predictable Pricing</h3>
                            <p className="text-lg text-slate-700">
                                Intercom charges per seat AND per AI resolution ($0.99 each). Costs explode as you scale.
                                SwanDigitals offers simple per-conversation pricing — budget with confidence.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎙️ Voice AI Native</h3>
                            <p className="text-lg text-slate-700">
                                Intercom focuses on chat. SwanDigitals includes AI voice agents that handle phone calls —
                                no separate vendor, no integration headaches.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏢 True Data Sovereignty</h3>
                            <p className="text-lg text-slate-700">
                                Intercom is US-hosted only. For Indian enterprises needing data residency compliance,
                                SwanDigitals offers on-premise and India-hosted options.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🇮🇳 Built for India</h3>
                            <p className="text-lg text-slate-700">
                                10+ Indian languages, UPI integrations, RBI compliance-ready.
                                Intercom's limited language support doesn't cut it for Indian customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready for Predictable AI Pricing?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        No per-seat fees. No surprise resolution charges. Just powerful AI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Free Trial
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
