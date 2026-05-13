import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SwanDesk vs Pega: Agile AI Chatbot for India | 2026 Comparison',
    description: 'Compare SwanDesk vs Pega for Indian businesses. Deploy enterprise AI in weeks, not months. No complex case-based pricing or minimum commitments.',
    keywords: ['Swandigitals vs Pega', 'Pega Alternative India', 'Agile Enterprise AI', 'Chatbot Implementation Speed'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-pega',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsPegaPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDesk: "Free / ₹1,999", competitor: "$35+/user/month (500 user min)" },
        { feature: "Implementation Time", SwanDesk: "2-4 weeks", competitor: "12+ weeks" },
        { feature: "Pricing Model", SwanDesk: "Simple monthly", competitor: "Complex case-based" },
        { feature: "Voice AI Native", SwanDesk: true, competitor: false },
        { feature: "No-Code Builder", SwanDesk: true, competitor: false },
        { feature: "Minimum Commitment", SwanDesk: "None", competitor: "500 users + 350K cases/year" },
        { feature: "WhatsApp Business API", SwanDesk: true, competitor: false },
        { feature: "Standalone Chatbot", SwanDesk: true, competitor: "Platform add-on only" },
        { feature: "Multi-Channel Native", SwanDesk: true, competitor: true },
        { feature: "Case Management", SwanDesk: true, competitor: true },
        { feature: "Setup Fees", SwanDesk: "₹0", competitor: "Custom (High)" },
        { feature: "SMB Friendly", SwanDesk: true, competitor: false }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Enterprise Platform Comparison"
                title="SwanDigitals vs Pega"
                subtitle="Enterprise chatbot power without Pega's complexity and cost. Deploy in weeks, not quarters."
                primaryCTA={{ text: "Book a Demo", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Pega"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Companies Choose SwanDigitals Over Pega</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">⚡ 6x Faster Implementation</h3>
                            <p className="text-lg text-slate-700">
                                Pega implementations typically take 3-6 months with extensive consulting.
                                SwanDigitals goes live in 2-4 weeks with no professional services required.
                                Our no-code builder means your team can build bots themselves.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 Transparent, Simple Pricing</h3>
                            <p className="text-lg text-slate-700">
                                Pega's case-based pricing model is notoriously complex — costs escalate with users, environments, and automation workloads.
                                SwanDigitals offers simple monthly pricing starting at Free / ₹1,999. No surprises, no hidden fees.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎙️ Standalone + Voice AI</h3>
                            <p className="text-lg text-slate-700">
                                Pega's chatbot is an add-on to their broader platform. SwanDigitals is a standalone solution
                                with native voice AI — no need to buy an entire BPM suite just for conversational AI.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🚫 No Minimums</h3>
                            <p className="text-lg text-slate-700">
                                Pega requires 500 user minimums and 350K+ annual case commitments.
                                SwanDigitals has no minimums — start small, scale naturally as your needs grow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Enterprise Power, Startup Simplicity</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Get Pega-level capabilities without Pega-level complexity
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            See It In Action
                        </Link>
                        <Link href="/case-studies" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Read Success Stories
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
