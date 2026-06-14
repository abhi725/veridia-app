import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Personetics Alternative | Active Customer Support AI',
    description: 'Compare SwanDigitals and Personetics. Combine proactive financial alerts with a complete, multi-channel customer inbox.',
    keywords: ['Personetics Alternative', 'Personetics vs SwanDigitals', 'Banking CRM'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-personetics',
    },
}

export default function VsPersoneticsPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Personetics"
            slug="vs-personetics"
            heroTitle="SwanDigitals vs Personetics"
            heroSubtitle="Do more than just send financial alerts. Resolve customer queries instantly across WhatsApp, email, and voice."
            aboutCompetitor="Personetics is designed to analyze transaction history and send automated personal finance tips to users."
            competitorStrengths="Good at analyzing bank transactions and sending personal budget alerts."
            realityCheck="Personetics is built to show charts and suggest savings. But when a customer replies to those messages with a real problem, Personetics cannot help. SwanDigitals handles the entire support process when users actually need help."
            comparisonRows={[
                { feature: "Main Focus", SwanDigitals: "Solving Customer Problems", competitor: "Showing Finance Tips" },
                { feature: "Agent Inbox", SwanDigitals: "Built-in for support teams", competitor: "Not included or very basic" },
                { feature: "WhatsApp Support", SwanDigitals: "Native and deep integration", competitor: "Limited features" },
                { feature: "Voice AI Support", SwanDigitals: "Included out of the box", competitor: "No voice features" },
                { feature: "Data Control", SwanDigitals: "Run on your own local servers", competitor: "Dependent on public cloud" }
            ]}
            reasonsToSwitch={[
                {
                    title: "A Complete Support System",
                    description: "Do not just send alerts. Give your customers an easy way to resolve issues the moment they have a question."
                },
                {
                    title: "True Multi-Channel Chat",
                    description: "Connect with your banking users on WhatsApp, SMS, or phone calls using our built-in Voice AI."
                },
                {
                    title: "Unified Agent View",
                    description: "When the AI cannot answer a question, the chat moves to a human agent in the exact same workspace."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You need a complete customer service system and conversational AI to resolve real tickets, rather than just an analytics tool."
            faqs={[
                {
                    question: "Where is my data stored?",
                    answer: "All your data stays inside India. We support hosting on secure local cloud servers, or we can install the system directly on your own private company servers."
                },
                {
                    question: "Can we pay Meta directly for WhatsApp messages?",
                    answer: "Yes. You connect your own payment method to Meta. SwanDigitals does not add any extra fees or charges to your WhatsApp costs."
                },
                {
                    question: "Can we keep our existing WhatsApp Business number?",
                    answer: "Yes. You can move your current WhatsApp Business API number to SwanDigitals with zero downtime. You will keep your green verification badge."
                },
                {
                    question: "Can we import our past ticket history?",
                    answer: "Yes. We can migrate your complete past support tickets and history from your old systems, so your agents do not lose any context."
                }
            ]}
        />
    );
}
