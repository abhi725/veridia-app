"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';
import { Shield, AlertTriangle, Database } from 'lucide-react';

export default function VsKorePage() {
    const comparisonRows = [
        { feature: "Implementation Time", SwanDigitals: "1-4 weeks", competitor: "3-6 months" },
        { feature: "Target Market", SwanDigitals: "SMB to Enterprise", competitor: "Large, complex enterprises" },
        { feature: "Monthly Cost (Professional)", SwanDigitals: "₹28,000/mo", competitor: "$5,000+" },
        { feature: "On-Premise Deployment", SwanDigitals: true, competitor: true },
        { feature: "No-Code Builder", SwanDigitals: true, competitor: false },
        { feature: "Industry Solutions", SwanDigitals: "General + Custom", competitor: "BankAssist, HealthAssist" },
        { feature: "Live Agent Handoff", SwanDigitals: true, competitor: true },
        { feature: "Multi-Language Support", SwanDigitals: "100+ languages", competitor: "60+ languages" },
        { feature: "API Access", SwanDigitals: true, competitor: true },
        { feature: "Custom Integrations", SwanDigitals: "Unlimited", competitor: "Limited" },
        { feature: "Training Required", SwanDigitals: "1-2 days", competitor: "1-2 weeks" },
        { feature: "Annual Contract Required", SwanDigitals: false, competitor: true },
        { feature: "Setup Fees", SwanDigitals: "₹0-₹40,000", competitor: "$10,000+" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Detailed Comparison"
                title="SwanDigitals vs Kore.ai"
                subtitle="See why companies switch to SwanDigitals for 10x faster deployment and 60% lower costs"
                primaryCTA={{ text: "Start Pilot (₹10k)", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            {/* Competitor Overview */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">About Kore.ai</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    Core Strengths
                                </h3>
                                <p className="text-slate-600 text-sm">Advanced enterprise AI; industry-specific solutions (BankAssist, HealthAssist).</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                                    Key Weaknesses
                                </h3>
                                <p className="text-slate-600 text-sm">Targets very large, complex enterprises; may be overkill for mid-market.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-blue-500" />
                                    Data & Compliance
                                </h3>
                                <p className="text-slate-600 text-sm">Strong on compliance, but likely standard enterprise cloud/SaaS model.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Kore.ai"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Customers Switch from Kore.ai</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">⚡ 10x Faster Deployment</h3>
                            <p className="text-lg text-slate-700">
                                "Kore.ai took us 5 months to implement. When we added a new use case, we switched to SwanDigitals and went live in just 3 weeks."
                            </p>
                            <p className="text-slate-600 mt-2">— Sarah Johnson, CTO, FinanceOne</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 Right-Sized for Mid-Market</h3>
                            <p className="text-lg text-slate-700">
                                Kore.ai is built for complex enterprise deployments with industry-specific solutions. If you don't need BankAssist or HealthAssist,
                                SwanDigitals gives you the same core AI capabilities without paying for features you won't use.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎓 1/10th the Training Time</h3>
                            <p className="text-lg text-slate-700">
                                Our intuitive no-code builder means your team is productive in days, not weeks. No expensive consultants required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Make the Switch?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Start with a ₹10,000 pilot — refundable if you sign within 3 months
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Pilot Program
                        </Link>
                        <Link href="/case-studies" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Read Migration Stories
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
