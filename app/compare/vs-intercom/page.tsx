import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Intercom Alternative in India | AI Support for Indian Enterprise',
    description: 'Compare SwanDigitals vs Intercom. Ditch massive per-seat licenses for an AI-native omnichannel platform built for India.',
    keywords: ['Intercom Alternative India', 'Intercom vs SwanDigitals', 'AI Helpdesk Pricing'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-intercom',
    },
}

export default function VsIntercomPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Intercom"
            heroTitle="SwanDigitals vs Intercom"
            heroSubtitle="Stop paying massive per-seat licenses for global platforms. Get native AI automation built for the Indian market."
            aboutCompetitor="Intercom is a premium global customer communications platform known for a beautiful UI and strong product-led growth tools."
            competitorStrengths="Beautiful user interface, in-app messaging focus, and strong product tour features."
            realityCheck="Intercom's pricing is notoriously expensive, charging per seat and per AI resolution. SwanDigitals offers a flat platform fee, making it the financially viable choice for scaling Indian support teams."
            comparisonRows={[
                { feature: "Pricing Model", SwanDigitals: "Flat Platform Fee", competitor: "Per Seat + AI Fees" },
                { feature: "Focus Market", SwanDigitals: "India (DPDP Compliant)", competitor: "Global / US" },
                { feature: "WhatsApp API", SwanDigitals: "Native & Deep", competitor: "Basic Integration" },
                { feature: "Voice AI", SwanDigitals: "Included natively", competitor: "Not available" },
                { feature: "Data Residency", SwanDigitals: "100% India", competitor: "US / EU Datacenters" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Eliminate Seat Taxes",
                    description: "Grow your support team without growing your software bill. SwanDigitals includes unlimited agents."
                },
                {
                    title: "Native Indian Integrations",
                    description: "Deep integrations with WhatsApp, Razorpay, and UPI, natively understanding Hinglish and local dialects."
                },
                {
                    title: "Guaranteed Data Sovereignty",
                    description: "Intercom hosts data globally. SwanDigitals guarantees 100% data residency in Mumbai to ensure DPDP compliance."
                }
            ]}
            targetPersona="SMB & Enterprise"
            verdict="You are an Indian startup or enterprise that loves good UI but is tired of Intercom's exorbitant pricing scaling out of control as your traffic grows."
            faqs={[
                {
                    question: "Is the UI as good as Intercom?",
                    answer: "Yes, SwanDigitals provides a highly polished, modern shared inbox that your agents will love using, with even better WhatsApp capabilities."
                }
            ]}
        />
    );
}
