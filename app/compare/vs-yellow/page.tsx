import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Yellow.ai Alternative in India | Sovereign Data AI Helpdesk',
    description: 'Yellow.ai is cloud-only. SwanDigitals gives you true data sovereignty with air-gapped deployment. Compare deployment options, pricing, and features.',
    keywords: ['Yellow.ai Alternative', 'Yellow.ai vs SwanDigitals', 'Sovereign Data AI', 'On-Premise Chatbot'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-yellow',
    },
}

export default function VsYellowPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Yellow.ai"
            slug="vs-yellow"
            heroTitle="Escape the Yellow.ai Token Tax and Usage Surcharges"
            heroSubtitle="Indian enterprise support deserves predictable pricing and fast deployment. Protect customer data with 100% air-gapped local setups."
            aboutCompetitor="Yellow.ai operates a massive global conversation automation engine with multi-channel features."
            competitorStrengths="Deep developer toolkits, multi-lingual coverage, and experience with massive enterprise customer accounts."
            realityCheck="Yellow.ai bills you based on conversation usage metrics and token fees. As your automated chats increase, your bills climb automatically. SwanDigitals uses a flat platform structure. You get unlimited agent seats and unlimited customer support sessions on a predictable budget."
            comparisonRows={[
                { feature: "Pricing Model", SwanDigitals: "Flat Annual License", competitor: "Usage/Token Based" },
                { feature: "Data Sovereignty", SwanDigitals: "Air-gapped option", competitor: "Cloud-only" },
                { feature: "Deployment Time", SwanDigitals: "21 Days Average", competitor: "60-90+ Days" },
                { feature: "On-Premise", SwanDigitals: "Full offline mode", competitor: "Not available" },
                { feature: "Focus Market", SwanDigitals: "Indian Enterprise", competitor: "Global Enterprise" }
            ]}
            reasonsToSwitch={[
                {
                    title: "No Token Surcharges",
                    description: "Avoid scaling penalties. Our flat SaaS pricing allows unlimited automated customer interactions with no end-of-month surprises."
                },
                {
                    title: "True Local Air-Gapped Installs",
                    description: "Host all data on your local enterprise hardware or local clouds. Secure compliance for banking, finance, and health requirements."
                },
                {
                    title: "Fast Launch in Weeks",
                    description: "Yellow.ai setup cycles often span multiple months. SwanDigitals' solution engineers deploy your knowledge base and integrations in an average of 21 days."
                }
            ]}
            targetPersona="global enterprise conglomerates seeking large developer SDK layers and multi-quarter custom setup consultancy."
            verdict="you are a regulated Indian bank, NBFC, or retail enterprise needing fast implementation, secure local deployment, and flat-rate monthly support fees."
            faqs={[
                {
                    question: "Can we transition from Yellow.ai without service disruption?",
                    answer: "Yes. We configure and build your new automation environment in parallel, ensuring a clean swap with zero downtime for your customers."
                },
                {
                    question: "Will our historical training records migrate?",
                    answer: "Yes. Our team maps and migrates your historic transcripts and custom dialogue contexts directly into SwanDigitals."
                }
            ]}
        />
    );
}

