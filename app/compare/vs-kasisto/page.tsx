import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Kasisto Alternative in India | Conversational AI for Indian Banks',
    description: 'Compare SwanDesk vs Kasisto. Dedicated banking AI that fully supports native Indian languages and true on-premise air-gapping.',
    keywords: ['Kasisto Alternative', 'Kasisto vs SwanDesk', 'Banking AI India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-kasisto',
    },
}

export default function VsKasistoPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Kasisto"
            heroTitle="SwanDesk vs Kasisto"
            heroSubtitle="Dedicated banking AI that fully supports native Indian languages and true on-premise air-gapping."
            aboutCompetitor="Kasisto is a US-based conversational AI company that specializes deeply in the banking and finance sector (KAI)."
            competitorStrengths="Specialized banking models, US banking compliance, and deep finance integrations."
            realityCheck="Kasisto is incredible for US banks. But for Indian NBFCs and banks, it lacks native fluency in regional languages like Marathi or Tamil, and struggles with Indian compliance nuances compared to a localized platform."
            comparisonRows={[
                { feature: "Primary Market", SwanDesk: "India", competitor: "USA / Global" },
                { feature: "Indian Language NLU", SwanDesk: "Native & Conversational", competitor: "Basic Translation" },
                { feature: "Deployment", SwanDesk: "Air-Gapped On-Premise", competitor: "Cloud/Hybrid" },
                { feature: "Voice AI", SwanDesk: "Native Indian Accents", competitor: "Third-party" },
                { feature: "Pricing Model", SwanDesk: "Flat India-friendly SaaS", competitor: "Premium US Pricing" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Native Indian Compliance",
                    description: "Built for DPDP Act 2023 and RBI guidelines from day one, rather than adapting US regulations to the Indian market."
                },
                {
                    title: "True Language Mastery",
                    description: "When an Indian customer mixes Hindi and English on a WhatsApp voice note, SwanDesk understands perfectly."
                },
                {
                    title: "Total Data Control",
                    description: "Our true air-gapped on-premise deployment ensures not a single byte of customer financial data leaves your firewall."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You are an Indian bank, fintech, or NBFC that needs specialized AI, but requires strict local compliance and native Indian language mastery."
            faqs={[
                {
                    question: "Can it handle balance checks?",
                    answer: "Yes, our native integrations allow for highly secure, OTP-verified transaction and balance checks directly within the chat."
                }
            ]}
        />
    );
}
