import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Pega Alternative in India | Agile AI Chatbot Helpdesk',
    description: 'Compare SwanDigitals vs Pegasystems. Deploy AI customer service in weeks, not years, with predictable pricing.',
    keywords: ['Pega Alternative', 'Pega vs SwanDigitals', 'Agile Helpdesk'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-pega',
    },
}

export default function VsPegaPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Pega"
            heroTitle="SwanDigitals vs Pega"
            heroSubtitle="Deploy AI customer service in weeks, not years. Escape the heavy monolithic architectures."
            aboutCompetitor="Pegasystems is a massive BPM (Business Process Management) platform that includes customer service modules for Fortune 500s."
            competitorStrengths="Complex workflow automation, massive scale BPM, and Fortune 500 pedigree."
            realityCheck="Pega is designed to run the entire backend operations of a massive corporation. If you just need a state-of-the-art AI Helpdesk, Pega is drastically over-engineered."
            comparisonRows={[
                { feature: "Platform Focus", SwanDigitals: "AI Helpdesk", competitor: "Full BPM Suite" },
                { feature: "Implementation", SwanDigitals: "Weeks", competitor: "Years" },
                { feature: "Total Cost", SwanDigitals: "Accessible", competitor: "Extremely High" },
                { feature: "Agility", SwanDigitals: "High (No-Code)", competitor: "Low (Heavy Dev)" },
                { feature: "Voice AI", SwanDigitals: "Included", competitor: "Add-on Module" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Extreme Agility",
                    description: "Make changes to your AI logic in seconds using our visual builder, rather than waiting weeks for IT to update your Pega instance."
                },
                {
                    title: "Fraction of the Cost",
                    description: "Pega requires massive capital expenditure. SwanDigitals provides enterprise AI customer service at a predictable, flat SaaS price."
                },
                {
                    title: "Focused Tooling",
                    description: "Your agents will love SwanDigitals's clean, intuitive inbox that is designed specifically for support, rather than a dense BPM interface."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You want enterprise-grade AI customer service without being forced to buy into a massive, monolithic Business Process Management ecosystem."
            faqs={[
                {
                    question: "Can SwanDigitals trigger workflows?",
                    answer: "Yes, our native integrations can seamlessly trigger workflows in your existing backend systems without needing a full BPM platform."
                }
            ]}
        />
    );
}
