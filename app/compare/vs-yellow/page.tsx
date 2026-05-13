import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Yellow.ai Alternative in India | Sovereign Data AI Helpdesk',
    description: 'Yellow.ai is cloud-only. SwanDesk gives you true data sovereignty with air-gapped deployment. Compare deployment options, pricing, and features.',
    keywords: ['Yellow.ai Alternative', 'Yellow.ai vs SwanDesk', 'Sovereign Data AI', 'On-Premise Chatbot'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-yellow',
    },
}

export default function VsYellowPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Yellow.ai"
            heroTitle="SwanDesk vs Yellow.ai"
            heroSubtitle="Escape unpredictable usage-based pricing and massive enterprise deployment timelines. Go live in weeks with flat pricing."
            aboutCompetitor="Yellow.ai is a major enterprise conversational AI platform known for massive scale and complex integrations."
            competitorStrengths="Massive global scale, deep legacy enterprise integrations, and 135+ languages supported."
            realityCheck="Yellow.ai charges based on usage and tokens, meaning the more successful your automation, the more you pay. SwanDesk provides flat annual licensing so your costs never spiral out of control."
            comparisonRows={[
                { feature: "Pricing Model", SwanDesk: "Flat Annual License", competitor: "Usage/Token Based" },
                { feature: "Data Sovereignty", SwanDesk: "Air-gapped option", competitor: "Cloud-only" },
                { feature: "Deployment Time", SwanDesk: "21 Days Average", competitor: "60-90+ Days" },
                { feature: "On-Premise", SwanDesk: "Full offline mode", competitor: "Not available" },
                { feature: "Focus Market", SwanDesk: "Indian Enterprise", competitor: "Global Enterprise" }
            ]}
            reasonsToSwitch={[
                {
                    title: "True Data Sovereignty",
                    description: "Even with 'India hosting', your data touches global infrastructure. SwanDesk offers 100% air-gapped deployments for total DPDP and RBI compliance."
                },
                {
                    title: "Faster Implementation",
                    description: "Yellow.ai enterprise deployments can take months. SwanDesk's dedicated success team gets you live in an average of 21 days."
                },
                {
                    title: "No 'Token Tax'",
                    description: "Stop getting punished for scaling. Our flat pricing means unlimited AI conversations without surprise bills at the end of the month."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You are a highly regulated Indian bank, NBFC, or enterprise that requires strict data sovereignty, predictable flat pricing, and faster implementation than legacy enterprise platforms can provide."
            faqs={[
                {
                    question: "Can I migrate from Yellow.ai mid-contract?",
                    answer: "Yes, we work with your timeline and can run in parallel during your transition to ensure zero downtime."
                },
                {
                    question: "Will I lose my training data?",
                    answer: "No, we can import your conversation history and training corpus to retrain your new AI agents instantly."
                }
            ]}
        />
    );
}
