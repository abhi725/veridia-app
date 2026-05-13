import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Haptik Alternative in India | True On-Premise Voice AI',
    description: 'Compare SwanDesk vs Haptik. Upgrade to native voice AI, flat pricing, and an out-of-the-box omnichannel inbox.',
    keywords: ['Haptik Alternative', 'Haptik vs SwanDesk', 'Indian AI Helpdesk'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-haptik',
    },
}

export default function VsHaptikPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Haptik"
            heroTitle="SwanDesk vs Haptik"
            heroSubtitle="Upgrade from a chat-only platform to a true omnichannel suite featuring native Voice AI and a flat platform fee."
            aboutCompetitor="Haptik (by Jio) is one of India's earliest and most well-known conversational AI platforms."
            competitorStrengths="Strong Jio ecosystem backing, early pioneer in Indian AI, and deep WhatsApp capabilities."
            realityCheck="Haptik is primarily a bot building platform. While great for bots, your agents still need a solid backend. SwanDesk provides the AI bot AND the enterprise ticketing backend out-of-the-box."
            comparisonRows={[
                { feature: "Platform Scope", SwanDesk: "Unified AI + Ticketing Helpdesk", competitor: "Primarily AI Bot Platform" },
                { feature: "Voice AI", SwanDesk: "Native & Included", competitor: "Limited/Third-party" },
                { feature: "Pricing Model", SwanDesk: "Flat Monthly Fee", competitor: "Usage Based" },
                { feature: "Agent Inbox", SwanDesk: "Enterprise Grade", competitor: "Basic" },
                { feature: "Implementation", SwanDesk: "Days to Weeks", competitor: "Weeks to Months" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Native Voice AI",
                    description: "Move beyond text. SwanDesk includes native inbound/outbound Voice AI agents right alongside your chat bots."
                },
                {
                    title: "The Full Helpdesk",
                    description: "Don't pay for Haptik and then pay for Zendesk. SwanDesk gives you both the AI automation layer and the human agent inbox in one tool."
                },
                {
                    title: "Flat Pricing",
                    description: "Predictable flat pricing means you can scale your automation without watching your software bill explode."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You need a complete AI-first helpdesk solution (both the bot and the human inbox) with predictable pricing, rather than just an AI layer that sits on top of your existing tools."
            faqs={[
                {
                    question: "Can we migrate our WhatsApp number from Haptik?",
                    answer: "Yes, we can migrate your WABA number from Haptik with zero downtime and retain your Green Tick."
                }
            ]}
        />
    );
}
