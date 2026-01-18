import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SwanDigitals vs Kasisto: Conversational AI for Indian Banks',
    description: 'Compare SwanDigitals vs Kasisto KAI. Affordable banking AI with native voice capabilities and 10+ Indian languages support.',
    keywords: ['Swandigitals vs Kasisto', 'Kasisto Alternative India', 'Banking Chatbot Cost', 'Voice Banking AI'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-kasisto',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsKasistoPage() {
    const comparisonRows = [
        { feature: "Starting Price", SwanDigitals: "Free / ₹1,999", competitor: "Custom (Enterprise only)" },
        { feature: "Implementation Time", SwanDigitals: "2-4 weeks", competitor: "8-12 weeks" },
        { feature: "Industry Focus", SwanDigitals: "Multi-industry", competitor: "Banking only" },
        { feature: "Voice AI Native", SwanDigitals: true, competitor: false },
        { feature: "No-Code Builder", SwanDigitals: true, competitor: false },
        { feature: "On-Premise Deployment", SwanDigitals: true, competitor: false },
        { feature: "WhatsApp Business API", SwanDigitals: true, competitor: false },
        { feature: "Multi-Language (Indic)", SwanDigitals: "10+ languages", competitor: "English/Spanish" },
        { feature: "Generative AI", SwanDigitals: true, competitor: true },
        { feature: "Banking-Specific NLU", SwanDigitals: true, competitor: true },
        { feature: "SMB Friendly", SwanDigitals: true, competitor: false },
        { feature: "Setup Fees", SwanDigitals: "₹0", competitor: "Custom (High)" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Banking AI Comparison"
                title="SwanDigitals vs Kasisto (KAI)"
                subtitle="All of Kasisto's banking intelligence + voice AI + multi-industry support. At a fraction of the cost."
                primaryCTA={{ text: "Book Banking Demo", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Kasisto KAI"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Banks Choose SwanDigitals Over Kasisto</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🏦 Banking-Grade + More</h3>
                            <p className="text-lg text-slate-700">
                                SwanDigitals includes financial NLU, transaction handling, and compliance features that match Kasisto's KAI-GPT.
                                Plus, we support retail, healthcare, and other industries if you expand beyond banking.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎙️ Voice AI for Phone Banking</h3>
                            <p className="text-lg text-slate-700">
                                Kasisto focuses on text-based digital assistants. SwanDigitals's voice AI handles
                                phone banking inquiries with natural conversations — balance checks, fund transfers,
                                card blocks — all via voice with &lt;500ms latency.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🇮🇳 10+ Indian Languages</h3>
                            <p className="text-lg text-slate-700">
                                Kasisto primarily supports English and Spanish. SwanDigitals speaks Hindi, Tamil, Telugu,
                                Marathi, Bengali, and more — essential for Indian regional banks and NBFCs.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 Accessible Pricing</h3>
                            <p className="text-lg text-slate-700">
                                Kasisto is enterprise-only with 6-figure implementation costs. SwanDigitals starts at Free / ₹1,999
                                with no setup fees — making AI accessible to cooperative banks, NBFCs, and fintechs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready for Banking AI That Speaks Your Language?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        See how SwanDigitals handles your banking use cases — schedule a personalized demo
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Get Banking Demo
                        </Link>
                        <Link href="/solutions/banking" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Explore Banking Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
