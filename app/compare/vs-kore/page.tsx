import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Kore.ai Alternative in India | Flexible On-Premise Support AI',
    description: 'Compare SwanDesk vs Kore.ai. Flat pricing, true air-gapped on-premise deployments, and deep Indian language support.',
    keywords: ['Kore.ai Alternative', 'Kore.ai vs SwanDesk', 'Enterprise AI India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-kore',
    },
}

export default function VsKorePage() {
    return (
        <ComparisonPageTemplate
            competitorName="Kore.ai"
            heroTitle="SwanDesk vs Kore.ai"
            heroSubtitle="Upgrade to an agile, locally-supported AI platform that doesn't take 6 months to deploy."
            aboutCompetitor={{
                description: "Kore.ai is a heavyweight enterprise AI platform known for highly specialized vertical solutions (like BankAssist).",
                strengths: [
                    "Deep vertical solutions",
                    "Massive global infrastructure",
                    "Extensive developer tooling"
                ]
            }}
            realityCheck={{
                title: "Heavy Enterprise IT vs Agile Deployment",
                description: "Kore.ai requires significant IT resources, developer training, and long deployment cycles. SwanDesk is an out-of-the-box, fully managed solution that gets you live in weeks, not quarters."
            }}
            comparisonRows={[
                { feature: "Deployment Time", SwanDesk: "2-4 Weeks", competitor: "3-6 Months" },
                { feature: "Pricing Structure", SwanDesk: "Flat Monthly/Annual", competitor: "Complex usage tiers" },
                { feature: "Developer Required", SwanDesk: "No (Fully Managed)", competitor: "Yes (Heavy IT reliance)" },
                { feature: "On-Premise", SwanDesk: "True Air-Gapped", competitor: "Dedicated VPC" },
                { feature: "Indian Language NLU", SwanDesk: "Native & Conversational", competitor: "Translation layer" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Faster Time to Value",
                    description: "Avoid the 6-month enterprise deployment cycle. We handle the setup, training, and deployment for you in weeks."
                },
                {
                    title: "True On-Premise",
                    description: "Unlike 'Dedicated VPCs' which still rely on cloud infrastructure, SwanDesk can be deployed completely offline on your bare-metal servers."
                },
                {
                    title: "Local Indian Support",
                    description: "Get direct access to our core engineering team in India, not a global tiered support desk."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You need a highly secure, locally compliant AI helpdesk but cannot afford the massive IT overhead, unpredictable pricing, or 6-month deployment cycles of legacy enterprise platforms."
            faqs={[
                {
                    question: "Does SwanDesk offer vertical-specific features like Kore?",
                    answer: "Yes, we natively integrate with core banking systems, Shopify, and healthcare CRMs, providing the same deep vertical capability with much less friction."
                }
            ]}
        />
    );
}
