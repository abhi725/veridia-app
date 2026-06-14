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
            slug="vs-intercom"
            heroTitle="Intercom Alternative for Indian Enterprises: Native AI, Flat Pricing"
            heroSubtitle="Avoid seat pricing and per-resolution charges. Switch to a flat-rate customer helpdesk featuring native voice, chat, and Indian language comprehension."
            aboutCompetitor="Intercom specializes in beautiful customer messaging interfaces and interactive onboarding widgets."
            competitorStrengths="A highly polished interface, intuitive product tour widgets, and excellent proactive support capabilities."
            realityCheck="Intercom charges per seat, per customer reached, and per automated answer. As your traffic grows, your support software bill climbs unpredictably. SwanDigitals gives you a flat license with unlimited agents and sessions, so scaling support doesn't scale your billing."
            comparisonRows={[
                { feature: "Pricing Model", SwanDigitals: "Flat Platform Fee", competitor: "Per Seat + AI Fees" },
                { feature: "Focus Market", SwanDigitals: "India (DPDP Compliant)", competitor: "Global / US" },
                { feature: "WhatsApp API", SwanDigitals: "Native & Deep", competitor: "Basic Integration" },
                { feature: "Voice AI", SwanDigitals: "Included natively", competitor: "Not available" },
                { feature: "Data Residency", SwanDigitals: "100% India", competitor: "US / EU Datacenters" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Predictable Flat Rates",
                    description: "Grow your agent pool or AI ticket resolution counts. Your software licensing rate remains exactly the same."
                },
                {
                    title: "Regional Language RAG",
                    description: "Our AI understands regional Hinglish queries (e.g. 'refund kab milega') natively. No translation API layers needed."
                },
                {
                    title: "Local Indian Cloud Hosting",
                    description: "Guaranteed data residency in Mumbai. Ensure complete alignment with DPDP 2023 guidelines."
                }
            ]}
            targetPersona="global enterprise teams that prioritise interactive in-app widgets and have the budget to support per-resolution software surcharges."
            verdict="you are a scaling Indian brand that wants beautiful customer support interfaces without unpredictable pricing or offshore data storage."
            faqs={[
                {
                    question: "Is the agent workspace as polished as Intercom?",
                    answer: "Yes. We offer a modern shared team inbox designed for fast resolution, alongside deeper integrations with local Indian tools like Razorpay and Delhivery."
                }
            ]}
        />
    );
}

