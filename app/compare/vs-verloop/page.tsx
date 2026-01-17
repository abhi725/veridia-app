import type { Metadata } from 'next';

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';
import { Shield, AlertTriangle, Database } from 'lucide-react';

export const metadata: Metadata = {
    title: 'SwanDigitals vs Verloop.io: The Best Support Automation Alternative (2025 Review)',
    description: 'Compare SwanDigitals vs Verloop.io. Better analytics, voice AI, and on-premise deployment. Sovereign AI for regulated Indian businesses.',
}

export default function VsVerloopPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDigitals: "₹10,000 Pilot / ₹12,000/mo", competitor: "Custom pricing" },
        { feature: "Voice AI Native", SwanDigitals: true, competitor: false },
        { feature: "On-Premise Deployment", SwanDigitals: true, competitor: false },
        { feature: "Analytics", SwanDigitals: "Advanced", competitor: "Needs development" },
        { feature: "Helpdesk Integrations", SwanDigitals: "Native + Zendesk/Freshdesk", competitor: "Zendesk, Freshdesk" },
        { feature: "Support Automation Focus", SwanDigitals: true, competitor: true },
        { feature: "WhatsApp Business API", SwanDigitals: true, competitor: true },
        { feature: "No-Code Builder", SwanDigitals: true, competitor: true },
        { feature: "Complex Logic Engine", SwanDigitals: true, competitor: "Basic" },
        { feature: "Multi-Language (Indic)", SwanDigitals: "10+ languages", competitor: "Yes" },
        { feature: "Data Sovereignty", SwanDigitals: "100% India residency", competitor: "Cloud-based" },
        { feature: "Live Agent Handoff", SwanDigitals: true, competitor: true },
        { feature: "Process Complexity", SwanDigitals: "Streamlined", competitor: "Can be tedious" },
        { feature: "Flat Platform Fee", SwanDigitals: true, competitor: "Varies" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Support Automation Comparison"
                title="SwanDigitals vs Verloop.io"
                subtitle="Support automation with better analytics, native voice AI, and true data sovereignty."
                primaryCTA={{ text: "Start Pilot (₹10k)", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            {/* Competitor Overview */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">About Verloop.io</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    Core Strengths
                                </h3>
                                <p className="text-slate-600 text-sm">Specializes in support automation; integrates with helpdesks (Zendesk, Freshdesk).</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                                    Key Weaknesses
                                </h3>
                                <p className="text-slate-600 text-sm">Some processes can be tedious; analytics need development.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-blue-500" />
                                    Data & Compliance
                                </h3>
                                <p className="text-slate-600 text-sm">Cloud-based customer support automation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Verloop.io"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Companies Choose SwanDigitals Over Verloop.io</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">📊 Advanced Analytics Out of the Box</h3>
                            <p className="text-lg text-slate-700">
                                Verloop.io's analytics capabilities are still developing. SwanDigitals provides comprehensive analytics
                                from day one — conversation insights, agent performance, customer satisfaction metrics, and custom dashboards.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎙️ Native Voice AI</h3>
                            <p className="text-lg text-slate-700">
                                Verloop.io focuses on chat-based support. SwanDigitals includes native voice AI that handles phone calls
                                with human-like conversations — extend your support automation to phone channels seamlessly.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">⚡ Streamlined Processes</h3>
                            <p className="text-lg text-slate-700">
                                Some Verloop.io processes can be tedious. SwanDigitals offers a streamlined workflow experience
                                with intuitive no-code builders and advanced logic engines that make complex automations simple.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏢 True Data Sovereignty</h3>
                            <p className="text-lg text-slate-700">
                                For regulated industries, cloud-only isn't enough. SwanDigitals offers managed private cloud or
                                on-premise deployment with 100% data residency in India — your data never leaves your control.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Support Automation, Elevated</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Better analytics, voice AI, and data sovereignty — all in one platform
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Pilot Program
                        </Link>
                        <Link href="/solutions/customer-service" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            See Support Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
