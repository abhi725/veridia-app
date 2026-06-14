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

            {/* Typical Results — projections based on platform benchmarks, not fake clients */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">What Teams Typically Achieve</h2>
                    <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
                        Based on SwanDigitals platform benchmarks across chatbot, WhatsApp, and voice deployments.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Automation Rate", value: "80%+", sub: "of tickets resolved without a human agent", color: "text-orange-600" },
                            { label: "Deployment Time", value: "7 Days", sub: "from signup to first resolved ticket", color: "text-purple-600" },
                            { label: "WhatsApp Markup", value: "0%", sub: "pass-through Meta fees — no reseller premium", color: "text-green-600" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100">
                                <div className={`text-4xl font-bold mb-2 ${item.color}`}>{item.value}</div>
                                <div className="font-semibold text-slate-800 mb-2">{item.label}</div>
                                <div className="text-slate-500 text-sm">{item.sub}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-8">
                        Actual results vary by industry, ticket volume, and configuration. Book a demo for a tailored ROI estimate.
                    </p>
                </div>
            </section>
        </SiteLayout>
    );
}
