import React from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import FAQ from '@/components/ui/FAQ';
import { MapPin, ShieldCheck, Building2, Landmark, Zap, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LocationPageProps {
    city: string;
    state: string;
    ecosystemDesc: string;
    industryFocus: string;
    localTerm: string;
    languageNotes: string;
    painPoint: string;
    stats: { value: string; label: string }[];
    useCases: { title: string; desc: string; icon: React.ReactNode }[];
}

export default function LocationPageTemplate({
    city,
    state,
    ecosystemDesc,
    industryFocus,
    localTerm,
    languageNotes,
    painPoint,
    stats,
    useCases
}: LocationPageProps) {
    const faqs = [
        {
            question: `How does SwanDigitals support businesses in ${city}?`,
            answer: `SwanDigitals provides native on-premise and sovereign cloud deployment options tailored specifically for ${city}'s business landscape. We specialize in high-performance AI agents that scale customer support, qualify leads, and automate internal workflows while adhering strictly to Indian data residency guidelines.`
        },
        {
            question: `Does your AI support local languages in ${city}?`,
            answer: `Yes! Our AI voice and chat agents support English, Hindi, and ${languageNotes} to ensure smooth communications with your localized customer base.`
        },
        {
            question: `Is SwanDigitals compliant with local data regulations?`,
            answer: `Absolutely. SwanDigitals is designed from the ground up to comply with the DPDP Act 2023 and RBI cybersecurity guidelines, offering 100% Indian data residency (AWS/GCP Mumbai regions) and fully air-gapped on-premises options for highly regulated industries.`
        }
    ];

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: `AI Chatbots in ${city}`,
                item: `https://swandigitals.com/${city.toLowerCase().replace(' ncr', '')}`
            }
        ]
    };

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero
                badge={`📍 AI Solutions for ${city}`}
                title={`Enterprise AI Chatbots & Voice Agents in ${city}`}
                subtitle={`Sovereign, DPDP-compliant AI chatbots and automated voice agents built for ${city}'s leading ${industryFocus} brands.`}
                primaryCTA={{ text: "Book a Demo", href: "/demo" }}
                secondaryCTA={{ text: "Calculate ROI", href: "/roi-calculator" }}
            />

            {/* Local Context section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-semibold">
                                <MapPin className="w-3.5 h-3.5" />
                                {city}, {state}
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Tailored AI for the {city} Market
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {ecosystemDesc}
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Businesses in {city} face unique demands, especially with {painPoint}. SwanDigitals addresses these challenges by deploying autonomous agents that auto-resolve up to 90% of support queries instantly, reducing operational costs while boosting conversion rates.
                            </p>
                        </div>
                        <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-orange-50/50 p-8 rounded-3xl border border-slate-100 space-y-6">
                            <h3 className="font-bold text-xl text-slate-900 mb-4">Why {city} Chooses SwanDigitals</h3>
                            <div className="space-y-4">
                                {[
                                    { title: "Local Data Residency", desc: "Data hosted in AWS/GCP Mumbai with zero egress" },
                                    { title: "Multilingual Intelligence", desc: `English, Hindi, and ${languageNotes} support` },
                                    { title: "On-Premise Ready", desc: "Deploy behind your firewall for complete data control" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                                            <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats section */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-4xl font-bold">{stat.value}</div>
                                <div className="text-white/80 text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                            AI Use Cases Built for {city}'s Ecosystem
                        </h2>
                        <p className="text-lg text-slate-600 mt-4">
                            Sovereign AI workflows customized for regional customer experience and operational requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {useCases.map((uc, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                                    {uc.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-slate-900">{uc.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{uc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Localized FAQ component */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
                        Frequently Asked Questions in {city}
                    </h2>
                    <FAQ items={faqs} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Customer Operations in {city}</h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Talk to our solutions team to implement sovereign, secure AI chatbots that integrate directly with your databases and workflows.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Request Free Sandbox
                        </Link>
                        <Link href="/contact" className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-all">
                            Contact Office
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
