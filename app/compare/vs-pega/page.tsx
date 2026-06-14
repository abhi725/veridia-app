import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Pega Alternative | Fast AI Customer Support',
    description: 'Compare SwanDigitals and Pegasystems. Deploy your AI helpdesk in weeks, not years, without heavy legacy systems.',
    keywords: ['Pega Alternative', 'Pega vs SwanDigitals', 'AI Helpdesk'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-pega',
    },
}

export default function VsPegaPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Pega"
            slug="vs-pega"
            heroTitle="SwanDigitals vs Pega"
            heroSubtitle="Launch your AI customer service in weeks, not years. Avoid heavy legacy software and complex systems."
            aboutCompetitor="Pegasystems is a massive business process tool designed for very large global corporations."
            competitorStrengths="Automating complex internal workflows, serving massive global companies."
            realityCheck="Pega is built to run the backend operations of huge corporations. If you just need a modern, fast AI Helpdesk, Pega is too big, too slow, and extremely complex to set up."
            comparisonRows={[
                { feature: "Core Focus", SwanDigitals: "Smart AI Helpdesk", competitor: "Complex Business Systems" },
                { feature: "Launch Time", SwanDigitals: "A few weeks", competitor: "Many months or years" },
                { feature: "Total Cost", SwanDigitals: "Fair and predictable", competitor: "Extremely high setups" },
                { feature: "Flexibility", SwanDigitals: "No-code updates in minutes", competitor: "Requires expert developers" },
                { feature: "Voice AI", SwanDigitals: "Included out of the box", competitor: "Sold as an expensive add-on" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Real Speed and Flexibility",
                    description: "Change your AI workflows in minutes with our visual builder. You do not need to wait weeks for your IT team to update the system."
                },
                {
                    title: "Predictable, Clear Costs",
                    description: "Pega costs massive amounts in setup and consulting fees. SwanDigitals offers enterprise-grade AI at a simple, flat rate."
                },
                {
                    title: "Focused and Clean Design",
                    description: "Your agents will love our clean inbox. It is built purely for fast customer support, not complicated corporate processes."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You want a modern, fast AI helpdesk without being forced into a massive, heavy business process platform."
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
