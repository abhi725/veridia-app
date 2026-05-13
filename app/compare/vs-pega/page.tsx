import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Pega Alternative in India | Agile AI Chatbot Helpdesk',
    description: 'Compare SwanDesk vs Pegasystems. Deploy AI customer service in weeks, not years, with predictable pricing.',
    keywords: ['Pega Alternative', 'Pega vs SwanDesk', 'Agile Helpdesk'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-pega',
    },
}

export default function VsPegaPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Pega"
            heroTitle="SwanDesk vs Pega"
            heroSubtitle="Deploy AI customer service in weeks, not years. Escape the heavy monolithic architectures."
            aboutCompetitor={{
                description: "Pegasystems is a massive BPM (Business Process Management) platform that includes customer service modules for Fortune 500s.",
                strengths: [
                    "Complex workflow automation",
                    "Massive scale BPM",
                    "Fortune 500 pedigree"
                ]
            }}
            realityCheck={{
                title: "Monolithic BPM vs Agile Helpdesk",
                description: "Pega is designed to run the entire backend operations of a massive corporation. If you just need a state-of-the-art AI Helpdesk, Pega is drastically over-engineered."
            }}
            comparisonRows={[
                { feature: "Platform Focus", SwanDesk: "AI Helpdesk", competitor: "Full BPM Suite" },
                { feature: "Implementation", SwanDesk: "Weeks", competitor: "Years" },
                { feature: "Total Cost", SwanDesk: "Accessible", competitor: "Extremely High" },
                { feature: "Agility", SwanDesk: "High (No-Code)", competitor: "Low (Heavy Dev)" },
                { feature: "Voice AI", SwanDesk: "Included", competitor: "Add-on Module" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Extreme Agility",
                    description: "Make changes to your AI logic in seconds using our visual builder, rather than waiting weeks for IT to update your Pega instance."
                },
                {
                    title: "Fraction of the Cost",
                    description: "Pega requires massive capital expenditure. SwanDesk provides enterprise AI customer service at a predictable, flat SaaS price."
                },
                {
                    title: "Focused Tooling",
                    description: "Your agents will love SwanDesk's clean, intuitive inbox that is designed specifically for support, rather than a dense BPM interface."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You want enterprise-grade AI customer service without being forced to buy into a massive, monolithic Business Process Management ecosystem."
            faqs={[
                {
                    question: "Can SwanDesk trigger workflows?",
                    answer: "Yes, our native integrations can seamlessly trigger workflows in your existing backend systems without needing a full BPM platform."
                }
            ]}
        />
    );
}
