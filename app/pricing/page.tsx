import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { Suspense } from 'react';
import PricingContentWrapper from './PricingContentWrapper';

export const metadata: Metadata = {
    title: 'Honest Pricing. No Surprises. | SwanDigitals',
    description: 'AI Chatbot from ₹4,999/mo. Voice AI from ₹5/min. Unlimited conversations, unlimited agents, zero per-message billing. On-premise available.',
    keywords: ['AI Chatbot Cost India', 'WhatsApp Bot Price India', 'Voice Bot Pricing INR', 'RBI Compliant AI Pricing', 'Sovereign Hosting Price'],
    alternates: {
        canonical: 'https://swandigitals.com/pricing',
    },
    openGraph: {
        images: [
            {
                url: 'https://swandigitals.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'SwanDigitals Flat-Rate & Value-Based Pricing',
            }
        ]
    }
};

// Phase 1/3 Schema: Page-specific SoftwareApplication with named INR offers
// The global layout has a generic version; this adds plan-level detail for AI Overviews
const pricingSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': 'https://swandigitals.com/pricing',
            url: 'https://swandigitals.com/pricing',
            name: 'SwanDigitals Pricing — Flat-Rate AI Chatbot & Voice Plans India',
            dateModified: new Date().toISOString().split('T')[0],
            inLanguage: 'en-IN',
            isPartOf: { '@id': 'https://swandigitals.com/#website' },
        },
        {
            '@type': 'SoftwareApplication',
            name: 'SwanDigitals AI Omnichannel Chatbot',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, On-Premise',
            url: 'https://swandigitals.com/pricing',
            offers: [
                {
                    '@type': 'Offer',
                    name: 'Growth Hub',
                    description: 'Flat-rate AI chatbot plan for startups and D2C brands. Unlimited agent seats, WhatsApp + Web Chat, RAG knowledge base.',
                    price: '4999',
                    priceCurrency: 'INR',
                    priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
                    url: 'https://swandigitals.com/pricing#growth-hub',
                },
                {
                    '@type': 'Offer',
                    name: 'Performance Pro',
                    description: 'Full omnichannel platform: WhatsApp, Email, Instagram, Web Chat, Voice AI. Unlimited agents. DPDP 2023 compliant Indian datacenter.',
                    price: '14999',
                    priceCurrency: 'INR',
                    priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
                    url: 'https://swandigitals.com/pricing#performance-pro',
                },
                {
                    '@type': 'Offer',
                    name: 'Sovereign Enterprise',
                    description: 'Air-gapped on-premise deployment for BFSI and regulated sectors. RBI-compliant. Fully private LLM. Custom pricing.',
                    price: '28000',
                    priceCurrency: 'INR',
                    priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
                    url: 'https://swandigitals.com/pricing#sovereign-enterprise',
                },
            ],
        },
    ],
};

export default function PricingPage() {
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
                name: 'Pricing',
                item: 'https://swandigitals.com/pricing'
            }
        ]
    };

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Phase 3 Schema: SoftwareApplication with named INR Offer objects */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />
            <Hero
                badge="💼 SwanDigitals Flat-Rate Pricing"
                title="Honest Pricing. No Surprises."
                subtitle="Ditch seat taxes and session caps. Premium AI chat and voice plans designed specifically for high-growth Indian enterprises, D2C brands, and regulated sectors."
                primaryCTA={{ text: "View Pricing Plans", href: "#plans" }}
                secondaryCTA={{ text: "Book a Demo", href: "/demo" }}
            />

            {/* Phase 3 CRO: Trust badge strip — counters fear of hidden reseller margins */}
            {/* Position: immediately below hero, before plan cards, so it's seen before price shock */}
            <section className="py-5 bg-white border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-5 py-2 text-sm font-semibold text-green-800">
                            <span>✅</span>
                            <span>0% Markup on Meta WhatsApp Fees — Pay Direct</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 text-sm font-semibold text-blue-800">
                            <span>🏦</span>
                            <span>RBI Compliant &amp; DPDP 2023 Ready</span>
                        </div>
                        <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-5 py-2 text-sm font-semibold text-orange-800">
                            <span>♾️</span>
                            <span>Unlimited Agent Seats — All Plans</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-5 py-2 text-sm font-semibold text-slate-700">
                            <span>🇮🇳</span>
                            <span>100% Indian Datacenter Hosting</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Suspense Boundary for useSearchParams */}
            <Suspense fallback={
                <div className="py-20 bg-slate-50 text-center text-slate-500 font-medium">
                    Loading pricing configuration...
                </div>
            }>
                <PricingContentWrapper />
            </Suspense>
        </SiteLayout>
    );
}
