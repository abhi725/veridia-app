"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsZendeskPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDigitals: "Free / ₹1,999", competitor: "$55+/agent/month" },
        { feature: "AI Chatbot", SwanDigitals: "Native, included", competitor: "Add-on (Answer Bot)" },
        { feature: "Voice AI", SwanDigitals: true, competitor: false },
        { feature: "No-Code Builder", SwanDigitals: true, competitor: "Limited" },
        { feature: "Self-Hosted Option", SwanDigitals: true, competitor: false },
        { feature: "WhatsApp Business API", SwanDigitals: true, competitor: true },
        { feature: "Multi-Language (Indic)", SwanDigitals: "10+ languages", competitor: "Limited" },
        { feature: "Pricing Model", SwanDigitals: "Per conversation", competitor: "Per agent + add-ons" },
        { feature: "Conversation Automation", SwanDigitals: "90%+", competitor: "50-60%" },
        { feature: "Live Agent Handoff", SwanDigitals: true, competitor: true },
        { feature: "Ticketing System", SwanDigitals: true, competitor: true },
        { feature: "AI-First Design", SwanDigitals: true, competitor: "Bolt-on AI" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Support Platform Comparison"
                title="SwanDigitals vs Zendesk"
                subtitle="AI-first support platform vs helpdesk with bolted-on AI. 90% automation vs 50%. You do the math."
                primaryCTA={{ text: "Start Free Trial", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

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
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 No Per-Agent Pricing</h3>
                            <p className="text-lg text-slate-700">
                                Zendesk charges per agent, encouraging you to hire fewer people.
                                SwanDigitals charges per conversation — scale your team without worrying about seat costs.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏢 Self-Hosted Option</h3>
                            <p className="text-lg text-slate-700">
                                Zendesk is cloud-only. For regulated industries needing data sovereignty,
                                SwanDigitals offers on-premise deployment with full control.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Support AI That Actually Automates</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        90%+ automation rate. Voice + Chat. No per-agent fees.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Free Trial
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
