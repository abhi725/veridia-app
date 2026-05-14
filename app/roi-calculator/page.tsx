import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import ROICalculatorContent from '@/components/tools/ROICalculatorContent';

export const metadata: Metadata = {
    title: 'AI Chatbot ROI Calculator | Calculate Your Savings',
    description: 'Calculate your potential savings with SwanDigitals AI. Compare current support costs vs. automated AI agents. See how much 85% automation can save you.',
    keywords: ['ROI Calculator', 'Chatbot Cost Savings', 'AI Automation ROI', 'Support Cost Calculator', 'Call Center Savings'],
    alternates: {
        canonical: 'https://swandigitals.com/roi-calculator',
    },
}

export default function ROICalculatorPage() {
    return (
        <SiteLayout>
            <Hero
                badge="💰 ROI Calculator"
                title="Calculate Your Savings"
                subtitle="See how much you can save with SwanDigitals. Like Yellow.ai's ROI calculator, but with more realistic projections based on actual customer data."
                primaryCTA={{ text: "Get Custom Analysis", href: "/demo" }}
            />

            <ROICalculatorContent />

            {/* Customer Results */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Real Customer Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { company: "FinanceOne", saved: "$1.2M", rate: "85%", time: "3 weeks" },
                            { company: "HealthPlus", saved: "$890K", rate: "91%", time: "4 weeks" },
                            { company: "RetailPro", saved: "$2.1M", rate: "88%", time: "2 weeks" }
                        ].map((result, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                                <div className="text-2xl font-bold text-slate-900 mb-4">{result.company}</div>
                                <div className="text-4xl font-bold text-green-600 mb-2">{result.saved}</div>
                                <div className="text-slate-600">Annual Savings</div>
                                <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <div className="font-bold text-orange-600">{result.rate}</div>
                                        <div className="text-slate-500">Automation</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-purple-600">{result.time}</div>
                                        <div className="text-slate-500">Deployment</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
