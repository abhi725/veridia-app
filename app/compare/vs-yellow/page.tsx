import type { Metadata } from 'next';

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';
import { Shield, AlertTriangle, Database } from 'lucide-react';

export const metadata: Metadata = {
    title: 'SwanDigitals vs Yellow.ai: The Best On-Premise Alternative (2025 Review)',
    description: 'Compare SwanDigitals vs Yellow.ai. Why regulated enterprises choose SwanDigitals: True on-premise deployment, no vendor lock-in, and better TCO.',
    keywords: ['Swandigitals vs Yellow.ai', 'Yellow.ai Alternative India', 'Yellow.ai Pricing', 'On-premise vs Cloud Chatbot'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-yellow',
    },
}

export default function VsYellowPage() {
    const comparisonRows = [
        { feature: "True On-Premise Deployment", SwanDigitals: true, competitor: false },
        { feature: "Data Sovereignty", SwanDigitals: "100% India residency", competitor: "Limited (VPC only)" },
        { feature: "Monthly Cost (Enterprise)", SwanDigitals: "₹28,000/mo Pro", competitor: "$8,000+" },
        { feature: "Air-Gapped Deployment", SwanDigitals: true, competitor: false },
        { feature: "ROI Calculator", SwanDigitals: true, competitor: true },
        { feature: "Agent Marketplace", SwanDigitals: true, competitor: false },
        { feature: "Voice AI", SwanDigitals: true, competitor: true },
        { feature: "WhatsApp Integration", SwanDigitals: true, competitor: true },
        { feature: "GDPR Compliance", SwanDigitals: true, competitor: true },
        { feature: "HIPAA Compliance", SwanDigitals: true, competitor: "Limited" },
        { feature: "Vendor Lock-in", SwanDigitals: "None (open standards)", competitor: "Yes" },
        { feature: "Self-Hosted Option", SwanDigitals: true, competitor: false },
        { feature: "SOC2 Compliance", SwanDigitals: true, competitor: true }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Data Sovereignty Comparison"
                title="SwanDigitals vs Yellow.ai: Why Enterprises are Switching to On-Premise"
                subtitle="True on-premise deployment vs cloud-only: Why regulated industries choose SwanDigitals"
                primaryCTA={{ text: "Start Pilot (₹10k)", href: "/demo" }}
                secondaryCTA={{ text: "See Security Details", href: "/security" }}
            />

            {/* Competitor Overview */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">About Yellow.ai</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    Core Strengths
                                </h3>
                                <p className="text-slate-600 text-sm">Enterprise-grade, omnichannel AI; no-code platform; global clientele (e.g., Domino's).</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                                    Key Weaknesses
                                </h3>
                                <p className="text-slate-600 text-sm">Can be expensive; customer support response times may vary.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-blue-500" />
                                    Data & Compliance
                                </h3>
                                <p className="text-slate-600 text-sm">Offers compliance (SOC2/GDPR), but is a global cloud platform — no true on-prem option.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ComparisonTable
                title="On-Premise vs Cloud Comparison"
                competitorName="Yellow.ai"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">The On-Premise Difference</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏦 True Data Sovereignty</h3>
                            <p className="text-lg text-slate-700">
                                Yellow.ai offers a "dedicated VPC" but your data still lives in their cloud. With SwanDigitals, your data never leaves your data center.
                                100% data residency in India guaranteed.
                            </p>
                            <p className="text-slate-600 mt-2">Critical for banking, healthcare, and government sectors</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🔒 Air-Gapped Deployment</h3>
                            <p className="text-lg text-slate-700">
                                Deploy in completely isolated networks with no internet connection. Impossible with cloud-only solutions like Yellow.ai.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🌍 No Vendor Lock-In</h3>
                            <p className="text-lg text-slate-700">
                                We use open standards and provide data export tools. Your conversation data, training models, and configurations are always yours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Need True On-Premise?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Talk to our compliance team about air-gapped and on-premise options
                    </p>
                    <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all inline-block">
                        Contact Security Team
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
