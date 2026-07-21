import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'GoHighLevel Alternative in India | Focused Chat & Voice AI',
    description: 'GoHighLevel is a big marketing suite. SwanDigitals is a focused chat and +91 voice support platform for Indian SMEs, on flat rupee pricing.',
    keywords: ['GoHighLevel alternative', 'GHL alternative India', 'AI Helpdesk', 'SME support'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-gohighlevel',
    },
}

export default function VsGHLPage() {
    return (
        <ComparisonPageTemplate
            competitorName="GoHighLevel (GHL)"
            slug="vs-gohighlevel"
            heroTitle="GoHighLevel Alternative: Focused Support AI, Not a Bloated Suite"
            heroSubtitle="Skip the giant marketing suite. Get a focused support inbox with native +91 voice, data hosted in India, and flat rupee pricing."
            aboutCompetitor="GoHighLevel (GHL) bundles website builders, email, SMS pipelines and calendars for marketing agencies."
            competitorStrengths="Strong marketing lead tracking, deep funnel builders, and white-label options for agencies."
            realityCheck="GHL is built for marketing campaigns, not customer support, so support teams get buried under funnel and page builders they do not need. SwanDigitals is a focused chat and +91 voice support inbox that auto-trains on your content, on flat rupee pricing. Where GHL may fit better: marketing agencies whose main job is running ads, funnels and lead-gen campaigns."
            reasonsToSwitch={[
                {
                    title: "A Focused Support Inbox",
                    description: "No software bloat. Get a workspace built purely to resolve customer questions quickly across chat and voice."
                },
                {
                    title: "Native +91 Voice Calling",
                    description: "Go beyond basic call routing. Voice agents handle inbound and outbound calls in 10 Indian languages."
                },
                {
                    title: "Data Hosted in India",
                    description: "Keep customer data on servers in India, kept aware of the DPDP Act 2023, with no per-message markup."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Function", SwanDigitals: "Chat + Voice Support", competitor: "Marketing Funnel CRM" },
                { feature: "Software Complexity", SwanDigitals: "Focused & Intuitive", competitor: "Broad, high learning curve" },
                { feature: "Data Hosting", SwanDigitals: "Hosted in India", competitor: "Global" },
                { feature: "Native Voice AI", SwanDigitals: true, competitor: false },
                { feature: "White-Label Mode", SwanDigitals: "Available", competitor: "Available" }
            ]}
            targetPersona="You are a marketing agency whose main job is running ads, funnels and lead-gen campaigns, and you want an all-in-one marketing suite."
            verdict="You are an Indian SME (or a consultant serving them) that wants focused chat and voice support automation with data hosted in India."
            faqs={[
                {
                    question: "Can we migrate customer contact records to SwanDigitals?",
                    answer: "Yes. Our systems sync contact databases and historical custom fields directly through API integrations."
                },
                {
                    question: "Do you offer white-label capabilities for agencies?",
                    answer: "Yes. SwanDigitals provides custom domain routing, brand assets, and platform styling so you can resell to your clients."
                },
                {
                    question: "How are communication channel costs billed?",
                    answer: "We charge a flat software fee. You connect your own WhatsApp API and telephony accounts and pay those providers directly, with no markup."
                },
                {
                    question: "Is data hosted locally in India?",
                    answer: "Yes. SwanDigitals hosts data on servers in India, kept aware of the DPDP Act 2023, with no lock-in."
                }
            ]}
        />
    );
}
