"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import Link from 'next/link';

export default function VsKorePage() {
    const comparisonRows = [
        { feature: "Implementation Time", veridia: "2-4 weeks", competitor: "3-6 months" },
        { feature: "Deployment Speed", veridia: true, competitor: false },
        { feature: "Monthly Cost (Professional)", veridia: "$1,999", competitor: "$5,000+" },
        { feature: "On-Premise Deployment", veridia: true, competitor: true },
        { feature: "No-Code Builder", veridia: true, competitor: false },
        { feature: "Live Agent Handoff", veridia: true, competitor: true },
        { feature: "Multi-Language Support", veridia: "100+ languages", competitor: "60+ languages" },
        { feature: "API Access", veridia: true, competitor: true },
        { feature: "Custom Integrations", veridia: "Unlimited", competitor: "Limited" },
        { feature: "Training Required", veridia: "1-2 days", competitor: "1-2 weeks" },
        { feature: "Annual Contract Required", veridia: false, competitor: true },
        { feature: "Setup Fees", veridia: "$0", competitor: "$10,000+" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🆚 Detailed Comparison"
                title="Veridia vs Kore.ai"
                subtitle="See why companies switch to Veridiafor 10x faster deployment and 60% lower costs"
                primaryCTA={{ text: "Get Started", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            <ComparisonTable
                title="Feature-by-Feature Comparison"
                competitorName="Kore.ai"
                rows={comparisonRows}
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Customers Switch from Kore.ai</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">⚡ 10x Faster Deployment</h3>
                            <p className="text-lg text-slate-700">
                                "Kore.ai took us 5 months to implement. When we added a new use case, we switched to Veridia and went live in just 3 weeks."
                            </p>
                            <p className="text-slate-600 mt-2">— Sarah Johnson, CTO, FinanceOne</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 60% Lower Total Cost</h3>
                            <p className="text-lg text-slate-700">
                                With no setup fees, lower monthly costs, and faster time-to-value, companies save an average of $100,000 in the first year alone.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">🎓 1/10th the Training Time</h3>
                            <p className="text-lg text-slate-700">
                                Our intuitive no-code builder means your team is productive in days, not weeks. No expensive consultants required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Make the Switch?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Join 50+ companies who migrated from Kore.ai to Veridia
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Get Free Migration Assessment
                        </Link>
                        <Link href="/case-studies" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Read Migration Stories
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
