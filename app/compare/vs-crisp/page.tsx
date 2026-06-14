import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Crisp Alternative in India | Unified Inbox & AI Helpdesk',
    description: 'Crisp is a nice inbox for startups. Upgrade to SwanDigitals for local DPDP data compliance, native Voice AI, and 90% support automation.',
    keywords: ['Crisp alternative', 'Crisp chat alternative India', 'Enterprise shared inbox', 'AI Helpdesk'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-crisp',
    },
}

export default function VsCrispPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Crisp"
            slug="vs-crisp"
            heroTitle="Moving Beyond a Pretty Shared Inbox"
            heroSubtitle="Crisp is built for manual startup chat. Upgrade to an AI Helpdesk built for deep automation and local data compliance in India."
            aboutCompetitor="Crisp.chat is a clean, modern shared inbox. It offers a free tier, making it popular among early-stage startups around the world."
            competitorStrengths="It has a fast, light interface, good live chat tools, and simple flat pricing that small teams like."
            realityCheck="Crisp is good for manual typing, but its AI features are basic when you need to automate support at scale. Also, Crisp stores data on global servers in Europe and the US. For Indian companies that must follow local rules like the DPDP Act, sending chat data abroad is a major risk."
            reasonsToSwitch={[
                {
                    title: "Local Data Compliance",
                    description: "SwanDigitals guarantees that your data stays inside India. We can also deploy on your own secure servers, which Crisp does not support."
                },
                {
                    title: "Advanced Customer Support AI",
                    description: "Crisp focus is on human agents typing messages. SwanDigitals uses smart AI to resolve 90% of your tickets before a human agent needs to look at the screen."
                },
                {
                    title: "Native Phone Call AI",
                    description: "Crisp only does text. SwanDigitals has native Voice AI built-in, so your customers can speak directly to a smart system on the phone."
                }
            ]}
            comparisonRows={[
                { feature: "Data Residency", SwanDigitals: "100% India (On-Prem available)", competitor: "Europe / Global" },
                { feature: "Main Focus", SwanDigitals: "AI Ticket Resolution", competitor: "Human Agent Inbox" },
                { feature: "Voice AI Features", SwanDigitals: "Native Integration", competitor: "None" },
                { feature: "Pricing Model", SwanDigitals: "Flat Monthly Fee", competitor: "Flat Pricing" },
                { feature: "Indian Language Models", SwanDigitals: "Native & Highly Accurate", competitor: "Plugin-Based Translation" }
            ]}
            targetPersona="You are an early startup looking for a simple, cheap shared inbox for a few people to answer support chats manually."
            verdict="You are a regulated Indian business that needs deep AI automation, voice tools, and full compliance with local data laws."
            faqs={[
                {
                    question: "Where is my customer data stored and how is it secured?",
                    answer: "We store all customer data on secure servers in India. This keeps your business compliant with local laws like the DPDP Act. We use AES-256 encryption for data at rest and TLS for data in transit to keep your files safe."
                },
                {
                    question: "How does Meta direct billing work for WhatsApp conversations?",
                    answer: "Instead of adding extra markup fees on your chats, we connect you directly to Meta's billing. You pay Meta directly at actual cost for your WhatsApp Business API conversations. We do not charge extra fees per message."
                },
                {
                    question: "Can I port my existing WhatsApp Business API number to SwanDigitals?",
                    answer: "Yes, you can easily port your existing WhatsApp number to our platform. There is no downtime. Your business profile, green tick status, and phone number remain exactly the same during the transition."
                },
                {
                    question: "How do we migrate our existing chats and ticket history from our previous CRM?",
                    answer: "Our team helps you import all your contact lists, historical chat logs, and support tickets from your previous tool. We make sure the migration is smooth and your agents do not lose any context during the switch."
                }
            ]}
        />
    );
}
