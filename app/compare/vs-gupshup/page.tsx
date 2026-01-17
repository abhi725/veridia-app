import type { Metadata } from 'next';

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';
import { Shield, AlertTriangle, Database } from 'lucide-react';

export const metadata: Metadata = {
    title: 'SwanDigitals vs Gupshup: The Best Conversational AI Alternative (2025 Review)',
    description: 'Compare SwanDigitals vs Gupshup. Better analytics, voice AI, and on-premise deployment. Sovereign AI for regulated Indian businesses.',
}

export default function VsGupshupPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDigitals: "₹10,000 Pilot / ₹12,000/mo", competitor: "Usage-based" },
        { feature: "Voice AI Native", SwanDigitals: true, competitor: "Limited" },
        { feature: "On-Premise Deployment", SwanDigitals: true, competitor: false },
        { feature: "Analytics Dashboard", SwanDigitals: "Advanced", competitor: "Limited" },
        { feature: "WhatsApp Business API", SwanDigitals: true, competitor: true },
        { feature: "Messaging Scale", SwanDigitals: "Enterprise-grade", competitor: "High-scale infrastructure" },
        { feature: "BFSI Focus", SwanDigitals: true, competitor: true },
        { feature: "No-Code Builder", SwanDigitals: true, competitor: true },
        { feature: "Complex Logic Engine", SwanDigitals: true, competitor: "Basic" },
        { feature: "Multi-Language (Indic)", SwanDigitals: "10+ languages", competitor: "Yes" },
        { feature: "Data Sovereignty", SwanDigitals: "100% India residency", competitor: "Not highlighted" },
        { feature: "Live Agent Handoff", SwanDigitals: true, competitor: true },
        { feature: "Flat Platform Fee", SwanDigitals: true, competitor: false }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Messaging Platform Comparison"
                title="SwanDigitals vs Gupshup"
                subtitle="When you need more than just messaging — advanced analytics, voice AI, and true data sovereignty."
                primaryCTA={{ text: "Start Pilot (₹10k)", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            {/* Competitor Overview */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">About Gupshup</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    Core Strengths
                                </h3>
                                <p className="text-slate-600 text-sm">Leader in conversational messaging; strong in BFSI; high-scale infrastructure.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                                    Key Weaknesses
                                </h3>
                                <p className="text-slate-600 text-sm">Analytics and dashboard capabilities noted as limited.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-blue-500" />
                                    Data & Compliance
                                </h3>
                                <p className="text-slate-600 text-sm">Mature messaging platform; data sovereignty specifics not a highlighted feature.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Gupshup"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Companies Choose SwanDigitals Over Gupshup</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">📊 Advanced Analytics & Dashboards</h3>
                            <p className="text-lg text-slate-700">
                                Gupshup is excellent at messaging infrastructure, but their analytics and dashboard capabilities are limited.
                                SwanDigitals provides comprehensive analytics out of the box — conversation insights, agent performance,
                                customer satisfaction metrics, and more.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎙️ Native Voice AI</h3>
                            <p className="text-lg text-slate-700">
                                Gupshup focuses on messaging channels. SwanDigitals includes native voice AI that handles phone calls
                                with human-like conversations — perfect for BFSI use cases that require phone support.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏢 True Data Sovereignty</h3>
                            <p className="text-lg text-slate-700">
                                For regulated industries like banking and healthcare, data sovereignty is critical. SwanDigitals offers
                                managed private cloud or on-premise deployment with 100% data residency in India — not just compliance checkboxes.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">⚙️ Complex Logic Engine</h3>
                            <p className="text-lg text-slate-700">
                                Beyond simple messaging workflows, SwanDigitals offers an advanced logic engine for complex business rules,
                                multi-step processes, and enterprise integrations that go beyond what basic bot builders can handle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Need More Than Just Messaging?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Analytics, Voice AI, and Data Sovereignty — all in one platform
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Pilot Program
                        </Link>
                        <Link href="/features" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Explore Features
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
