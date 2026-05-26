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

export default function PricingPage() {
    return (
        <SiteLayout>
            <Hero
                badge="💼 SwanDigitals Flat-Rate Pricing"
                title="Honest Pricing. No Surprises."
                subtitle="Ditch seat taxes and session caps. Premium AI chat and voice plans designed specifically for high-growth Indian enterprises, D2C brands, and regulated sectors."
                primaryCTA={{ text: "View Pricing Plans", href: "#plans" }}
                secondaryCTA={{ text: "Book a Demo", href: "/demo" }}
            />

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
