import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Kore.ai Alternative in India | Flexible On-Premise Support AI',
    description: 'Compare SwanDigitals vs Kore.ai. Flat pricing, true air-gapped on-premise deployments, and deep Indian language support.',
    keywords: ['Kore.ai Alternative', 'Kore.ai vs SwanDigitals', 'Enterprise AI India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-kore',
    },
}

export default function VsKorePage() {
    return (
        <ComparisonPageTemplate
            competitorName="Kore.ai"
            slug="vs-kore"
            heroTitle="Escape the Complex Tooling of Kore.ai"
            heroSubtitle="Upgrade to an agile, locally-supported AI platform that doesn't take 6 months to deploy."
            aboutCompetitor="Kore.ai is a heavyweight enterprise AI platform known for highly specialized vertical solutions (like BankAssist)."
            competitorStrengths="Deep vertical solutions, massive global infrastructure, and extensive developer tooling."
            realityCheck="Kore.ai requires significant IT resources, developer training, and long deployment cycles. SwanDigitals is an out-of-the-box, fully managed solution that gets you live in weeks, not quarters. SwanDigitals offers the same advanced vector learning engines and local hosting options, but allows your support team to make updates instantly in a no-code visual builder."
            comparisonRows={[
                { feature: "Deployment Time", SwanDigitals: "2-4 Weeks", competitor: "3-6 Months" },
                { feature: "Pricing Structure", SwanDigitals: "Flat Monthly/Annual", competitor: "Complex usage tiers" },
                { feature: "Developer Required", SwanDigitals: "No (Fully Managed)", competitor: "Yes (Heavy IT reliance)" },
                { feature: "On-Premise", SwanDigitals: "True Air-Gapped", competitor: "Dedicated VPC" },
                { feature: "Indian Language NLU", SwanDigitals: "Native & Conversational", competitor: "Translation layer" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Faster Time to Value",
                    description: "Avoid the 6-month enterprise deployment cycle. We handle the setup, training, and deployment for you in weeks."
                },
                {
                    title: "True On-Premise",
                    description: "Unlike 'Dedicated VPCs' which still rely on cloud infrastructure, SwanDigitals can be deployed completely offline on your bare-metal servers."
                },
                {
                    title: "Local Indian Support",
                    description: "Get direct access to our core engineering team in India, not a global tiered support desk."
                }
            ]}
            targetPersona="You are an IT enterprise division with dedicated developers who strictly require customized legacy architectures."
            verdict="You need a highly secure, locally compliant AI helpdesk but cannot afford the massive IT overhead, unpredictable pricing, or 6-month deployment cycles of legacy enterprise platforms."
            faqs={[
                {
                    question: "Where is my customer data stored?",
                    answer: "All customer data is stored securely in our Mumbai database servers. This ensures your business remains fully compliant with India's DPDP Act of 2023 and local regulatory guidelines. On-premise installations are also supported."
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
                    answer: "Yes, our onboarding team handles the migration of your customer directories and support logs from Kore.ai, making the transition seamless."
                }
            ]}
        />
    );
}
