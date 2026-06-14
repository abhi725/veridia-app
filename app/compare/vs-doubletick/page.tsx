import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'DoubleTick Alternative in India | AI Sales Agent & CRM Sync',
    description: 'DoubleTick is a great mobile app for sales broadcasts. But if you need an enterprise AI that qualifies leads 24/7, SwanDigitals is the ultimate upgrade.',
    keywords: ['DoubleTick alternative', 'DoubleTick vs SwanDigitals', 'WhatsApp Sales CRM', 'Lead Gen AI Chatbot'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-doubletick',
    },
}

export default function VsDoubleTickPage() {
    return (
        <ComparisonPageTemplate
            competitorName="DoubleTick"
            slug="vs-doubletick"
            heroTitle="DoubleTick Alternative: Outgrow Mobile Broadcasts for True Sales Automation"
            heroSubtitle="Upgrade from a manual sales CRM app. Automate lead qualification, schedule calendar bookings, and route inquiries with flat-rate platform fees."
            aboutCompetitor="DoubleTick provides a mobile-first WhatsApp CRM built for small field sales teams to trigger broadcasts and chats."
            competitorStrengths="A highly refined mobile interface, simple lead tracking boards, and stable template broadcasting features."
            realityCheck="DoubleTick relies on human reps replying manually to WhatsApp leads. When a lead replies late at night, they wait until the next day, leaking pipeline value. DoubleTick does not offer a native conversational AI layer to score prospects or book discovery slots automatically. SwanDigitals qualifiers leads 24/7."
            reasonsToSwitch={[
                {
                    title: "24/7 Conversational AI Qualifier",
                    description: "Our AI responds within seconds to score incoming buyers on budget, configuration preference, and booking intent."
                },
                {
                    title: "Automated Calendar Sync",
                    description: "Connect natively with your team calendars. The AI schedules site visits or calls the moment a prospect qualifies."
                },
                {
                    title: "Omnichannel Lead Capture",
                    description: "Stop ignoring non-WhatsApp traffic. Bring leads from Web Chat, Instagram DMs, Email, and Phone Calls into one dashboard."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Focus", SwanDigitals: "AI Lead Qualification", competitor: "Mobile Sales Broadcasts" },
                { feature: "Generative AI Agent", SwanDigitals: "Native (LLM)", competitor: "Limited / Manual" },
                { feature: "Omnichannel Support", SwanDigitals: "Web, Email, IG, WhatsApp", competitor: "WhatsApp Primarily" },
                { feature: "Automated BANT Scoring", SwanDigitals: true, competitor: false },
                { feature: "Voice AI for Inbound", SwanDigitals: true, competitor: false }
            ]}
            targetPersona="small merchant agencies seeking a basic mobile-first messaging CRM to text clients manually."
            verdict="you want to automate top-of-funnel lead qualification, sync scheduled events to calendars, and scale without seat fees."
            faqs={[
                {
                    question: "Can we migrate our WhatsApp Business account?",
                    answer: "Yes. We transfer your registered phone number, green badge, and template history to SwanDigitals with no service downtime."
                },
                {
                    question: "Does SwanDigitals connect to Salesforce or HubSpot?",
                    answer: "Yes. Our webhook workflows push qualified leads and chat transcripts to Salesforce, HubSpot, Zoho, or custom ERP systems."
                },
                {
                    question: "How are Meta WhatsApp fees handled?",
                    answer: "You settle conversation rates directly with Meta. SwanDigitals charges a flat SaaS licensing rate with zero transactional markups."
                },
                {
                    question: "Is the platform DPDP 2023 compliant?",
                    answer: "Yes. We host all enterprise customer data inside Indian borders on Mumbai servers, offering complete audit logs."
                }
            ]}
        />
    );
}

