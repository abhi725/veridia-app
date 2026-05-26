import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Personetics Alternative in India | Transactional Banking AI',
    description: 'Compare SwanDigitals vs Personetics. Combine proactive financial insights with a full-stack, omnichannel customer service inbox.',
    keywords: ['Personetics Alternative', 'Personetics vs SwanDigitals', 'Banking CRM'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-personetics',
    },
}

export default function VsPersoneticsPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Personetics"
            heroTitle="SwanDigitals vs Personetics"
            heroSubtitle="Combine proactive financial insights with a full-stack, omnichannel customer service inbox."
            aboutCompetitor="Personetics focuses on data-driven, proactive financial insights and personal finance management (PFM) for banking customers."
            competitorStrengths="Proactive financial insights, deep transaction analysis, and PFM specialization."
            realityCheck="Personetics is great for sending customers insights about their spending. SwanDigitals is for when that customer replies and actually needs a problem solved across WhatsApp, Email, or Phone."
            comparisonRows={[
                { feature: "Core Focus", SwanDigitals: "Omnichannel Support", competitor: "Financial Insights" },
                { feature: "Agent Inbox", SwanDigitals: "Enterprise Grade", competitor: "No/Limited" },
                { feature: "WhatsApp Support", SwanDigitals: "Native", competitor: "Limited" },
                { feature: "Voice AI Support", SwanDigitals: "Included", competitor: "No" },
                { feature: "Data Sovereignty", SwanDigitals: "Air-Gapped Option", competitor: "Cloud Dependent" }
            ]}
            reasonsToSwitch={[
                {
                    title: "The Complete Support Loop",
                    description: "Don't just give customers insights. Give them a way to instantly resolve issues when those insights trigger a question."
                },
                {
                    title: "True Omnichannel",
                    description: "Meet your banking customers where they are: on WhatsApp, Telegram, or via phone call with our native Voice AI."
                },
                {
                    title: "Unified Agent Experience",
                    description: "When the AI can't answer, the ticket escalates seamlessly to a human agent within the exact same platform."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You need an actual customer support helpdesk and conversational AI platform to resolve tickets, not just a financial insight engine."
            faqs={[
                {
                    question: "Can we use both?",
                    answer: "Yes, you can use Personetics for proactive insights and integrate SwanDigitals to handle the inbound customer service queries."
                }
            ]}
        />
    );
}
