import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SwanDigitals vs Zendesk: AI Automation vs Helpdesk Tools',
    description: 'Compare SwanDigitals vs Zendesk. Reduce ticket volume by 90% with AI. Seamless integration with Zendesk for human handoff.',
    keywords: ['Swandigitals vs Zendesk', 'Zendesk Alternative India', 'Zendesk Chatbot Integration', 'Helpdesk Automation'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-zendesk',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';
import { Shield, AlertTriangle, Database } from 'lucide-react';

export default function VsZendeskPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDesk: "₹10,000 Pilot / ₹12,000/mo", competitor: "$55+/agent/month" },
        { feature: "AI Chatbot", SwanDesk: "Native, included", competitor: "Add-on (Answer Bot)" },
        { feature: "Voice AI", SwanDesk: true, competitor: false },
        { feature: "No-Code Builder", SwanDesk: true, competitor: "Limited" },
        { feature: "Self-Hosted Option", SwanDesk: true, competitor: false },
        { feature: "WhatsApp Business API", SwanDesk: true, competitor: true },
        { feature: "Multi-Language (Indic)", SwanDesk: "10+ languages", competitor: "Limited" },
        { feature: "Pricing Model", SwanDesk: "Flat platform fee", competitor: "Per agent + add-ons" },
        { feature: "Conversation Automation", SwanDesk: "90%+", competitor: "50-60%" },
        { feature: "Live Agent Handoff", SwanDesk: true, competitor: true },
        { feature: "Ticketing System", SwanDesk: true, competitor: true },
        { feature: "AI-First Design", SwanDesk: true, competitor: "Bolt-on AI" },
        { feature: "Data Residency India", SwanDesk: "100% guaranteed", competitor: "Global data centers" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Support Platform Comparison"
                title="SwanDigitals vs Zendesk"
                subtitle="AI-first support platform vs helpdesk with bolted-on AI. 90% automation vs 50%. You do the math."
                primaryCTA={{ text: "Start Pilot (₹10k)", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            {/* Competitor Overview */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">About Zendesk</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    Core Strengths
                                </h3>
                                <p className="text-slate-600 text-sm">Global leader in service/sales engagement; rich ecosystems and integrations.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                                    Key Weaknesses
                                </h3>
                                <p className="text-slate-600 text-sm">Primarily cloud-based, per-agent pricing; not India-specific.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-blue-500" />
                                    Data & Compliance
                                </h3>
                                <p className="text-slate-600 text-sm">Global data centers; may not guarantee India-only data residency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Zendesk"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Companies Choose SwanDigitals Over Zendesk</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🤖 AI-First, Not AI-Added</h3>
                            <p className="text-lg text-slate-700">
                                Zendesk started as a ticketing system and added AI later. SwanDigitals is built AI-first —
                                automation is the default, human escalation is the exception.
                                Result: 90%+ automation vs Zendesk's 50-60%.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎙️ Voice AI Included</h3>
                            <p className="text-lg text-slate-700">
                                Zendesk Talk is a separate product with per-minute charges.
                                SwanDigitals includes AI voice agents that handle phone support natively —
                                same platform, same pricing, no surprises.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 Flat Platform Fee</h3>
                            <p className="text-lg text-slate-700">
                                Zendesk charges per agent, encouraging you to hire fewer people.
                                SwanDigitals offers a flat platform fee — scale your team without worrying about seat costs.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏢 Self-Hosted Option</h3>
                            <p className="text-lg text-slate-700">
                                Zendesk is cloud-only with global data centers. For regulated industries needing India data sovereignty,
                                SwanDigitals offers on-premise deployment with 100% data residency in India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Support AI That Actually Automates</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        90%+ automation rate. Voice + Chat. Flat platform fee.
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
