import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'DoubleTick Alternative in India | AI Sales Agent + Voice for SMEs',
    description: 'DoubleTick is a handy mobile sales-broadcast app. If you want an AI that qualifies leads 24/7 and calls them on +91 numbers, SwanDigitals is the SME-fit upgrade.',
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
            heroTitle="DoubleTick Alternative: Outgrow Mobile Broadcasts for Real Sales Automation"
            heroSubtitle="Move beyond a manual sales CRM app. Auto-qualify leads, book calendar slots via Calendly, and add +91 AI calling on flat rupee plans."
            aboutCompetitor="DoubleTick provides a mobile-first WhatsApp CRM built for small field sales teams to trigger broadcasts and chats."
            competitorStrengths="A highly refined mobile interface, simple lead tracking boards, and stable template broadcasting features."
            realityCheck="DoubleTick relies on human reps replying manually to WhatsApp leads. When a lead replies late at night, they wait until the next day, leaking pipeline value. DoubleTick has no built-in AI to score prospects or book slots automatically. SwanDigitals qualifies leads 24/7 and can even call them back on +91 numbers."
            reasonsToSwitch={[
                {
                    title: "24/7 Conversational AI Qualifier",
                    description: "Our AI responds within seconds to score incoming buyers on budget, requirement, and booking intent, in 10 Indian languages."
                },
                {
                    title: "Calendly Booking Sync",
                    description: "Connect Calendly natively. The AI schedules site visits or books a call the moment a prospect qualifies."
                },
                {
                    title: "WhatsApp + Voice Lead Capture",
                    description: "Stop ignoring non-WhatsApp traffic. Bring leads from web chat, Facebook, and +91 phone calls into one dashboard."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Focus", SwanDigitals: "AI Lead Qualification", competitor: "Mobile Sales Broadcasts" },
                { feature: "AI Agent", SwanDigitals: "Auto-trains on your site/docs", competitor: "Limited / Manual" },
                { feature: "Channels Supported", SwanDigitals: "WhatsApp, Facebook, Web, Voice", competitor: "WhatsApp Primarily" },
                { feature: "Automated Lead Scoring", SwanDigitals: true, competitor: false },
                { feature: "+91 Voice AI Calling", SwanDigitals: true, competitor: false }
            ]}
            targetPersona="your field sales team just wants a simple mobile-first app to text clients manually from their phones — DoubleTick does that neatly."
            verdict="you are an Indian SME that wants to auto-qualify leads 24/7, book them via Calendly, add +91 AI calling, and pay a flat rupee plan with no per-message markup."
            faqs={[
                {
                    question: "Can we migrate our WhatsApp Business account?",
                    answer: "Yes. We transfer your registered phone number, green badge, and template history to SwanDigitals with no service downtime."
                },
                {
                    question: "Does SwanDigitals connect to my CRM?",
                    answer: "Yes. We connect natively with HubSpot, and push qualified leads and chat transcripts to other tools via n8n workflows."
                },
                {
                    question: "How are Meta WhatsApp fees handled?",
                    answer: "You settle conversation rates directly with Meta. SwanDigitals charges a flat SaaS licensing rate with zero transactional markups."
                },
                {
                    question: "Where is my data hosted?",
                    answer: "Your customer data is hosted in India. SwanDigitals is built to be DPDP-2023 aware and processes payments securely via Razorpay, with no lock-in."
                }
            ]}
        />
    );
}

