import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SwanDesk vs Haptik: Voice AI & On-Premise Alternative India | 2026',
    description: 'Compare SwanDesk vs Haptik for Indian businesses. Native Voice AI, transparent pricing, no annual lock-in, and 100% India data sovereignty.',
    keywords: ['Swandigitals vs Haptik', 'Haptik Pricing India', 'Haptik Alternative', 'Voice AI Comparison'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-haptik',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';
import { Shield, AlertTriangle, Database } from 'lucide-react';

export default function VsHaptikPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDesk: "₹10,000 Pilot / ₹12,000/mo", competitor: "₹25,000+/month" },
        { feature: "Implementation Time", SwanDesk: "1-4 weeks", competitor: "4-8 weeks" },
        { feature: "Voice AI Native", SwanDesk: true, competitor: false },
        { feature: "No-Code Builder", SwanDesk: true, competitor: true },
        { feature: "On-Premise Deployment", SwanDesk: true, competitor: false },
        { feature: "WhatsApp Business API", SwanDesk: true, competitor: true },
        { feature: "WhatsApp Pricing", SwanDesk: "Pass-through + 5-20%", competitor: "High markup" },
        { feature: "Multi-Language (Indic)", SwanDesk: "10+ languages", competitor: "100+ languages" },
        { feature: "Live Agent Handoff", SwanDesk: true, competitor: true },
        { feature: "Sentiment Analysis", SwanDesk: true, competitor: true },

        { feature: "Setup Fees", SwanDesk: "₹0-₹40,000", competitor: "Custom" },
        { feature: "Annual Contract Required", SwanDesk: false, competitor: true },
        { feature: "Data Residency India", SwanDesk: "100% guaranteed", competitor: "May be concern for regulated clients" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Detailed Comparison"
                title="SwanDigitals vs Haptik"
                subtitle="Enterprise-grade AI chatbot at a fraction of the cost. Same features, transparent pricing."
                primaryCTA={{ text: "Start Pilot (₹10k)", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            {/* Competitor Overview */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">About Haptik</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    Core Strengths
                                </h3>
                                <p className="text-slate-600 text-sm">Enterprise automation; strong in BFSI/retail; multilingual; owned by Jio.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                                    Key Weaknesses
                                </h3>
                                <p className="text-slate-600 text-sm">High WhatsApp pricing; integration options can be limited.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-blue-500" />
                                    Data & Compliance
                                </h3>
                                <p className="text-slate-600 text-sm">Primarily cloud-based; data residency may be a concern for highly regulated clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 Transparent Pricing</h3>
                            <p className="text-lg text-slate-700">
                                Haptik starts at ₹25,000+/month with high WhatsApp markups. SwanDigitals offers transparent pass-through pricing
                                with only 5-20% platform fee depending on your tier. Start with a ₹10,000 pilot to test before committing.
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
                                where data never leaves your network. Haptik's cloud-based approach may not meet strict data residency requirements.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">📅 No Annual Lock-in</h3>
                            <p className="text-lg text-slate-700">
                                Start with a pilot, scale monthly. SwanDigitals doesn't require annual contracts or
                                enterprise minimums. Pay for what you use, upgrade when you're ready.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Compare in Person?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Start with a ₹10,000 pilot — refundable if you sign within 3 months
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Pilot Program
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
