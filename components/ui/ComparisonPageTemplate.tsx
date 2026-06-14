import React from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';

// ---------------------------------------------------------------------------
// PHASE 1 SEO: Schema utility for compare pages
// Generates FAQPage + BreadcrumbList + WebPage JSON-LD in one call.
// Applied automatically to ALL 26 compare pages via this shared template.
// ---------------------------------------------------------------------------
function buildCompareSchema(
    competitorName: string,
    faqs: { question: string; answer: string }[],
    slug: string
) {
    const dateModified = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    return {
        '@context': 'https://schema.org',
        '@graph': [
            // 1. BreadcrumbList — improves SERP appearance with breadcrumb links
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://swandigitals.com',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Compare',
                        item: 'https://swandigitals.com/compare',
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: `SwanDigitals vs ${competitorName}`,
                        item: `https://swandigitals.com/compare/${slug}`,
                    },
                ],
            },
            // 2. FAQPage — feeds Google AI Overviews / AI Mode citations
            // Note: FAQPage no longer generates FAQ rich results in SERPs (removed May 7 2026)
            // but remains an active entity signal for AI citation systems.
            {
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                    },
                })),
            },
            // 3. WebPage — adds dateModified for content freshness signal (E-E-A-T)
            {
                '@type': 'WebPage',
                '@id': `https://swandigitals.com/compare/${slug}`,
                url: `https://swandigitals.com/compare/${slug}`,
                name: `SwanDigitals vs ${competitorName} — AI Chatbot Alternative India`,
                dateModified,
                inLanguage: 'en-IN',
                isPartOf: { '@id': 'https://swandigitals.com/#website' },
                author: {
                    '@type': 'Organization',
                    name: 'SwanDigitals',
                    url: 'https://swandigitals.com',
                },
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://swandigitals.com' },
                        { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://swandigitals.com/compare' },
                        { '@type': 'ListItem', position: 3, name: `vs ${competitorName}` },
                    ],
                },
            },
        ],
    };
}

export interface ComparisonPageProps {
    competitorName: string;
    /** URL slug, e.g. "vs-zendesk". Used to build canonical BreadcrumbList + WebPage URLs. */
    slug: string;
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
        SwanDigitals: string | boolean;
        competitor: string | boolean;
    }[];
    targetPersona: string;
    verdict: string;
    faqs: { question: string; answer: string }[];
}

export default function ComparisonPageTemplate({
    competitorName,
    slug,
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
    // Build all three schema blocks for this compare page
    const schemaData = buildCompareSchema(competitorName, faqs, slug);

    return (
        <SiteLayout>
            {/* Phase 1 SEO: FAQPage + BreadcrumbList + WebPage JSON-LD injected for all 26 compare pages */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Hero
                badge={`🆚 vs ${competitorName}`}
                title={heroTitle}
                subtitle={heroSubtitle}
                primaryCTA={{ text: "Book a Strategy Call", href: "/demo" }}
                secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
            />

            {/* Section B: Reality Check — H2 in question format for GEO/AEO */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                        <div className="mb-8 border-b border-slate-100 pb-8">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Is {competitorName} the Right Choice for Indian Enterprises?
                            </h2>
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

            {/* Section D: Why Switch — H2 in question format */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Why Do Indian Teams Switch from {competitorName} to SwanDigitals?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Three specific reasons — no fluff.</p>
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

            {/* Section C: Comparison Table — H2 in question format for GEO/AEO */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            How Does SwanDigitals&apos; Pricing Compare to {competitorName}?
                        </h2>
                        <p className="text-slate-500 text-sm mt-2">Side-by-side feature and pricing breakdown</p>
                    </div>
                    <ComparisonTable rows={comparisonRows} competitorName={competitorName} title={`SwanDigitals vs ${competitorName}`} />
                </div>
            </section>

            {/* Section E: Verdict — H2 in question format */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-semibold tracking-wider text-orange-300 uppercase mb-6">
                        The Final Verdict
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Is {competitorName} Actually For?</h2>
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
                                <h3 className="text-xl font-bold text-white mb-2">Choose SwanDigitals if...</h3>
                                <p className="text-slate-300">{verdict}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            {faqs.length > 0 && (
                <FAQ items={faqs} heading={`Frequently Asked Questions: SwanDigitals vs ${competitorName}`} />
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

            {/* Phase 2: Internal linking footer + Last Updated — E-E-A-T Trustworthiness signal */}
            <section className="py-10 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-slate-400">
                        Last updated: <time dateTime={new Date().toISOString().split('T')[0]}>{new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}</time>
                    </p>
                    <nav aria-label="Related pages" className="flex flex-wrap gap-4 text-sm">
                        <Link href="/pricing" className="text-orange-600 hover:text-orange-700 font-medium underline underline-offset-2">
                            See flat-rate pricing plans →
                        </Link>
                        <Link href="/compare" className="text-slate-600 hover:text-slate-800 font-medium underline underline-offset-2">
                            Compare all {26} competitors →
                        </Link>
                        <Link href="/demo" className="text-slate-600 hover:text-slate-800 font-medium underline underline-offset-2">
                            Book a migration call →
                        </Link>
                    </nav>
                </div>
            </section>

            {/* Phase 3 CRO: Sticky bottom CTA bar — persists as user scrolls the compare page */}
            {/* Visible on desktop only; avoids cluttering mobile where space is tight */}
            <div className="hidden md:flex fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 py-3 px-6 items-center justify-between shadow-2xl">
                <p className="text-sm text-slate-300">
                    Comparing <span className="font-semibold text-white">{competitorName}</span> vs SwanDigitals?
                    <span className="ml-2 text-orange-400">Flat pricing. No seat taxes. Indian datacenter.</span>
                </p>
                <div className="flex gap-3">
                    <Link
                        href="/pricing"
                        className="px-4 py-2 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors whitespace-nowrap"
                    >
                        Compare Pricing Plans
                    </Link>
                    <Link
                        href="/demo"
                        className="px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors whitespace-nowrap"
                    >
                        Book a Migration Call
                    </Link>
                </div>
            </div>
        </SiteLayout>
    );
}
