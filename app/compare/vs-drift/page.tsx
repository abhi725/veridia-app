import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SwanDigitals vs Drift: Affordable Conversational Marketing',
    description: 'Compare SwanDigitals vs Drift. 90% lower cost with added Voice AI capabilities. Self-hosted options for data privacy.',
    keywords: ['Swandigitals vs Drift', 'Drift Alternative India', 'Conversational Marketing Cost', 'Self-hosted Chatbot'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-drift',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsDriftPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDesk: "Free / ₹1,999", competitor: "$2,500+/month" },
        { feature: "Voice AI", SwanDesk: true, competitor: false },
        { feature: "Self-Hosted Option", SwanDesk: true, competitor: false },
        { feature: "On-Premise Deployment", SwanDesk: true, competitor: false },
        { feature: "No-Code Builder", SwanDesk: true, competitor: true },
        { feature: "WhatsApp Business API", SwanDesk: true, competitor: false },
        { feature: "Multi-Language (Indic)", SwanDesk: "10+ languages", competitor: "Limited" },
        { feature: "Target Market", SwanDesk: "All businesses", competitor: "Enterprise only" },
        { feature: "Sales Focus", SwanDesk: "Sales + Support", competitor: "Sales only" },
        { feature: "AI Chatbot", SwanDesk: true, competitor: true },
        { feature: "Meeting Scheduling", SwanDesk: true, competitor: true },
        { feature: "Data Residency Options", SwanDesk: true, competitor: false }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Sales AI Comparison"
                title="SwanDigitals vs Drift"
                subtitle="All of Drift's conversational marketing power + voice AI + self-hosting. At 90% lower cost."
                primaryCTA={{ text: "Start Free Trial", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Drift"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Companies Choose SwanDigitals Over Drift</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 90% Cost Savings</h3>
                            <p className="text-lg text-slate-700">
                                Drift starts at $2,500/month and only targets enterprise.
                                SwanDigitals starts at Free / ₹1,999 with the same conversational marketing features accessible to all.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎙️ Voice + Chat Combined</h3>
                            <p className="text-lg text-slate-700">
                                Drift focuses exclusively on web chat. SwanDigitals combines chat with AI voice agents —
                                qualify leads on your website AND follow up with automated calls.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏢 Self-Hosted Option</h3>
                            <p className="text-lg text-slate-700">
                                Drift is cloud-only. For companies needing data control,
                                SwanDigitals offers self-hosted deployment where data never leaves your infrastructure.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🔧 Sales + Support</h3>
                            <p className="text-lg text-slate-700">
                                Drift is sales-focused only. SwanDigitals handles both lead generation AND customer support
                                in one platform — no need for multiple tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Conversational Marketing Without the Enterprise Price Tag</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Qualify leads, book meetings, and follow up — starting at Free / ₹1,999
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Free Trial
                        </Link>
                        <Link href="/solutions/sales" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            See Sales Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
