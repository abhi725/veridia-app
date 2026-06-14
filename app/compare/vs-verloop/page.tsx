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
            slug="vs-verloop"
            heroTitle="Upgrade from the Legacy Intent Systems of Verloop"
            heroSubtitle="Deploy modern generative AI RAG systems in weeks. Predictable flat platform rates, native Voice AI, and 100% Indian data compliance."
            aboutCompetitor="Verloop is an established Indian conversational AI platform focused heavily on e-commerce and basic customer support."
            competitorStrengths="Strong e-commerce features, Indian market focus, and good WhatsApp integration."
            realityCheck="Verloop built its reputation on legacy intent-based chatbots. SwanDigitals is built natively on modern LLM architecture, allowing for far more dynamic, unscripted customer conversations without manual training loops."
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
            targetPersona="You are an enterprise support team that strictly requires flow-builder tools and has the time to manually train intent categories."
            verdict="You want to graduate from rigid chatbot flows to true Generative AI automation without losing the Indian market focus."
            faqs={[
                {
                    question: "Where is my customer data stored?",
                    answer: "All customer data is stored securely in our Mumbai database servers. This ensures your business remains fully compliant with India's DPDP Act of 2023 and local regulatory guidelines."
                },
                {
                    question: "Can we pay Meta directly for WhatsApp business messages?",
                    answer: "Yes. You link your own Meta Business account and pay Meta directly. SwanDigitals does not charge any markup fees or commission on your WhatsApp conversations."
                },
                {
                    question: "Can I port my existing WhatsApp Business number?",
                    answer: "Yes, you can port your existing WhatsApp Business API number directly to our platform with zero downtime or service interruption."
                },
                {
                    question: "Can we migrate our existing customer profiles and support history?",
                    answer: "Yes, our onboarding team handles the migration of your customer directories and support logs from Verloop, making the transition seamless."
                }
            ]}
        />
    );
}
