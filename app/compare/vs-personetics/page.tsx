import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SwanDigitals vs Personetics: Transactional AI vs Insights',
    description: 'Compare SwanDigitals vs Personetics. Move beyond financial insights to actionable banking AI that executes transactions via Voice & Chat.',
    keywords: ['Swandigitals vs Personetics', 'Actionable Banking AI', 'Transactional Chatbot', 'Financial Wellness AI'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-personetics',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsPersoneticsPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDigitals: "Free / ₹1,999", competitor: "Custom (Enterprise only)" },
        { feature: "Implementation Time", SwanDigitals: "2-4 weeks", competitor: "8-12 weeks" },
        { feature: "Voice AI Native", SwanDigitals: true, competitor: false },
        { feature: "Full Chatbot Capabilities", SwanDigitals: true, competitor: "Limited (Insights focus)" },
        { feature: "Transaction Execution", SwanDigitals: true, competitor: "Insights only" },
        { feature: "No-Code Builder", SwanDigitals: true, competitor: false },
        { feature: "Multi-Industry", SwanDigitals: true, competitor: "Banking only" },
        { feature: "WhatsApp Business API", SwanDigitals: true, competitor: true },
        { feature: "Multi-Language (Indic)", SwanDigitals: "10+ languages", competitor: "Limited" },
        { feature: "Financial Wellness Insights", SwanDigitals: true, competitor: true },
        { feature: "Predictive Analytics", SwanDigitals: true, competitor: true },
        { feature: "SMB Friendly", SwanDigitals: true, competitor: false }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Financial AI Comparison"
                title="SwanDigitals vs Personetics"
                subtitle="Beyond insights — full transactional AI that acts, not just advises. Voice + Chat + Actions."
                primaryCTA={{ text: "See Demo", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Personetics"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Banks Choose SwanDigitals Over Personetics</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎯 Actions, Not Just Insights</h3>
                            <p className="text-lg text-slate-700">
                                Personetics excels at financial wellness insights — spending patterns, saving suggestions.
                                SwanDigitals goes further: customers can act immediately. Transfer funds, block cards, schedule payments —
                                all within the conversation.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎙️ Voice Banking Included</h3>
                            <p className="text-lg text-slate-700">
                                Personetics integrates with voice assistants but doesn't offer native voice AI.
                                SwanDigitals's voice agents handle phone banking with human-like conversations —
                                perfect for customers who prefer calling over typing.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏢 Full Chatbot Platform</h3>
                            <p className="text-lg text-slate-700">
                                Personetics is primarily an insights engine. For full chatbot capabilities —
                                FAQ automation, ticket routing, live agent handoff — banks need additional solutions.
                                SwanDigitals is a complete platform in one.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🇮🇳 Built for India</h3>
                            <p className="text-lg text-slate-700">
                                10+ Indian languages including regional dialects. UPI and India-specific payment integrations.
                                Compliance with RBI guidelines. SwanDigitals understands Indian banking better.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready for AI That Does More Than Advise?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        See how SwanDigitals handles complete banking conversations — insights to actions
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Request Banking Demo
                        </Link>
                        <Link href="/solutions/banking" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Banking Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
