import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Gupshup Alternative in India | Best Conversational AI',
    description: 'Compare SwanDigitals vs Gupshup. Move beyond a messaging API and get a complete out-of-the-box AI Helpdesk.',
    keywords: ['Gupshup Alternative', 'Gupshup vs SwanDigitals', 'Conversational AI'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-gupshup',
    },
}

export default function VsGupshupPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Gupshup"
            heroTitle="SwanDigitals vs Gupshup"
            heroSubtitle="Move beyond a messaging API. Get a complete out-of-the-box AI Helpdesk with an enterprise agent inbox."
            aboutCompetitor="Gupshup is an Indian unicorn that provides massive-scale messaging infrastructure and basic bot templates."
            competitorStrengths="Massive messaging volume, strong telecom infrastructure, and widespread global reach."
            realityCheck="Gupshup is primarily a pipe for sending messages. If you want an actual Helpdesk for your human agents to work in, alongside advanced Generative AI, you need SwanDigitals."
            comparisonRows={[
                { feature: "Primary Focus", SwanDigitals: "Enterprise AI Helpdesk", competitor: "Messaging Infrastructure" },
                { feature: "Agent UI", SwanDigitals: "Advanced Ticketing", competitor: "Basic/Requires own UI" },
                { feature: "AI Capabilities", SwanDigitals: "Deep Generative RAG", competitor: "Basic Templates" },
                { feature: "Deployment", SwanDigitals: "SaaS or On-Premise", competitor: "Cloud API" },
                { feature: "Target User", SwanDigitals: "Support/CX Teams", competitor: "Developers" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Ready-to-Use UI",
                    description: "Don't spend months building a custom frontend for your support team. SwanDigitals provides an enterprise-grade shared inbox on day one."
                },
                {
                    title: "Next-Gen AI",
                    description: "Move past basic bot templates. Deploy custom LLMs that actually understand context and complex customer queries."
                },
                {
                    title: "Total Deployment Control",
                    description: "For banks and healthcare, SwanDigitals offers true air-gapped on-premise deployments, unlike cloud-only API providers."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You want a complete, fully-managed software solution for your support team, rather than a developer API that requires you to build the interface yourself."
            faqs={[
                {
                    question: "Can I use Gupshup with SwanDigitals?",
                    answer: "Yes, if you have an existing Gupshup WABA account, you can plug it into SwanDigitals's integration layer to use our UI while keeping Gupshup as your provider."
                }
            ]}
        />
    );
}
