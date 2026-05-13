import React from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';

export interface ComparisonPageProps {
    competitorName: string;
    heroTitle: string;
    heroSubtitle: string;
    aboutCompetitor: string;
    competitorStrengths: string;
    realityCheck: string;
    reasonsToSwitch: {
        title: string;
        description: string;
    }[];
    comparisonRows: {
        feature: string;
        SwanDesk: string | boolean;
        competitor: string | boolean;
    }[];
    targetPersona: string;
    verdict: string;
    faqs: { question: string; answer: string }[];
}

export default function ComparisonPageTemplate({
    competitorName,
    heroTitle,
    heroSubtitle,
    aboutCompetitor,
    competitorStrengths,
    realityCheck,
    reasonsToSwitch,
    comparisonRows,
    targetPersona,
    verdict,
    faqs
}: ComparisonPageProps) {
    return (
        <SiteLayout>
            <Hero
                badge={`🆚 vs ${competitorName}`}
                title={heroTitle}
                subtitle={heroSubtitle}
                primaryCTA={{ text: "Book a Strategy Call", href: "/demo" }}
                secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
            />

            {/* Competitor Reality Check */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                        <div className="mb-8 border-b border-slate-100 pb-8">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Reality of {competitorName}</h2>
                            <p className="text-lg text-slate-600">{aboutCompetitor}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Shield className="w-6 h-6 text-green-500" />
                                    What They Do Well
                                </h3>
                                <p className="text-slate-600 leading-relaxed">{competitorStrengths}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                                    The Harsh Reality
                                </h3>
                                <p className="text-slate-600 leading-relaxed">{realityCheck}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Switch */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Top 3 Reasons to Switch to SwanDesk</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Stop compromising on your customer experience and team productivity.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {reasonsToSwitch.map((reason, index) => (
                            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-orange-200 transition-colors">
                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                                <p className="text-slate-600">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Head-to-Head Comparison</h2>
                    </div>
                    <ComparisonTable rows={comparisonRows} competitorName={competitorName} title={`SwanDesk vs ${competitorName}`} />
                </div>
            </section>

            {/* Verdict */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-semibold tracking-wider text-orange-300 uppercase mb-6">
                        The Final Verdict
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Who is this actually for?</h2>
                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-left backdrop-blur-sm">
                        <div className="flex gap-4 items-start mb-6 pb-6 border-b border-white/10">
                            <CheckCircle2 className="w-8 h-8 text-slate-400 shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Choose {competitorName} if...</h3>
                                <p className="text-slate-300">{targetPersona}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <CheckCircle2 className="w-8 h-8 text-green-400 shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Choose SwanDesk if...</h3>
                                <p className="text-slate-300">{verdict}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            {faqs.length > 0 && (
                <FAQ items={faqs} heading={`Frequently Asked Questions: SwanDesk vs ${competitorName}`} />
            )}

            {/* Final CTA */}
            <section className="py-24 bg-white border-t border-slate-200 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to make the switch?</h2>
                    <p className="text-xl text-slate-600 mb-10">We handle the entire migration process for you. Zero downtime.</p>
                    <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all">
                        Get Started Today
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
