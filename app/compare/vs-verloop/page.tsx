import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Verloop Alternative in India | Best Support Automation',
    description: 'Compare SwanDigitals vs Verloop.io. Upgrade to a fully unified inbox with native Voice AI and predictable flat pricing.',
    keywords: ['Verloop Alternative', 'Verloop vs SwanDigitals', 'AI Support Automation'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-verloop',
    },
}

export default function VsVerloopPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Verloop.io"
            heroTitle="SwanDigitals vs Verloop.io"
            heroSubtitle="Upgrade to a fully unified inbox with native Voice AI, deeper integrations, and predictable flat pricing."
            aboutCompetitor="Verloop is an established Indian conversational AI platform focused heavily on e-commerce and basic customer support."
            competitorStrengths="Strong e-commerce features, Indian market focus, and good WhatsApp integration."
            realityCheck="Verloop built its reputation on legacy intent-based chatbots. SwanDigitals is built natively on modern LLM architecture, allowing for far more dynamic, unscripted customer conversations."
            comparisonRows={[
                { feature: "AI Architecture", SwanDigitals: "Generative RAG", competitor: "Legacy Intent/Flows" },
                { feature: "Voice AI", SwanDigitals: "Native & Included", competitor: "Limited/Third-party" },
                { feature: "Agent Inbox", SwanDigitals: "Full Enterprise Helpdesk", competitor: "Basic Inbox" },
                { feature: "On-Premise", SwanDigitals: "True Air-Gapped", competitor: "Cloud Focus" },
                { feature: "Pricing", SwanDigitals: "Flat Platform Fee", competitor: "Usage/Tier Based" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Modern Generative AI",
                    description: "Stop building rigid decision trees. SwanDigitals uses RAG to simply read your knowledge base and answer dynamically."
                },
                {
                    title: "Unified Agent Experience",
                    description: "Provide your human agents with a world-class ticketing system that feels like Zendesk, but is built entirely in India."
                },
                {
                    title: "Native Voice Agents",
                    description: "Support isn't just text. Deploy AI voice agents that can handle incoming calls naturally in Indian languages."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You want to graduate from rigid chatbot flows to true Generative AI automation without losing the Indian market focus."
            faqs={[
                {
                    question: "Is SwanDigitals suitable for E-commerce?",
                    answer: "Yes, we integrate seamlessly with Shopify and WooCommerce to handle WISMO (Where is my order?) queries automatically."
                }
            ]}
        />
    );
}
