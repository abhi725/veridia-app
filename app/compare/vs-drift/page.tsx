import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Drift Alternative in India | Affordable Conversational AI',
    description: 'Compare SwanDesk vs Drift. Don\'t pay premium US pricing for B2B chat. Get advanced AI Lead Generation for a flat fee.',
    keywords: ['Drift Alternative India', 'Drift vs SwanDesk', 'B2B Conversational AI'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-drift',
    },
}

export default function VsDriftPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Drift"
            heroTitle="SwanDesk vs Drift"
            heroSubtitle="Stop paying US enterprise pricing for B2B chat. Get a dedicated AI Sales Agent for a fraction of the cost."
            aboutCompetitor="Drift invented Conversational Marketing, focusing purely on high-end B2B sales acceleration and website lead generation."
            competitorStrengths="Pioneered conversational marketing, deep B2B CRM integrations, and advanced sales routing."
            realityCheck="Drift is an incredible tool, but its pricing is optimized for Fortune 500 US companies. SwanDesk delivers the same core B2B lead generation capabilities at a flat, India-friendly price point."
            comparisonRows={[
                { feature: "Primary Use Case", SwanDesk: "Sales + Support", competitor: "Pure B2B Sales" },
                { feature: "Pricing Tier", SwanDesk: "Accessible Flat Fee", competitor: "$2,500+/month minimum" },
                { feature: "WhatsApp Support", SwanDesk: "Native", competitor: "Limited/Add-on" },
                { feature: "Voice AI", SwanDesk: "Native", competitor: "No" },
                { feature: "Data Residency", SwanDesk: "100% India", competitor: "Global" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Drastically Lower TCO",
                    description: "Drift starts in the thousands of dollars per month. SwanDesk provides enterprise AI for a flat, predictable local fee."
                },
                {
                    title: "Support AND Sales",
                    description: "Drift is strictly for sales. SwanDesk's unified inbox handles both your pre-sales lead qualification and your post-sales support."
                },
                {
                    title: "Native Voice & WhatsApp",
                    description: "Drift is heavily focused on the website widget. SwanDesk brings that same AI qualification power natively to WhatsApp and Voice."
                }
            ]}
            targetPersona="B2B Sales & Marketing"
            verdict="You are a B2B company that wants to qualify leads automatically 24/7, but you refuse to pay massive US enterprise software premiums to do so."
            faqs={[
                {
                    question: "Does SwanDesk integrate with my CRM?",
                    answer: "Yes, we integrate with HubSpot, Salesforce, and Zoho to automatically push qualified leads from the chat directly into your sales pipeline."
                }
            ]}
        />
    );
}
