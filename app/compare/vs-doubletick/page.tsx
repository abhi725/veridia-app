import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'DoubleTick Alternative in India | AI Sales Agent & CRM Sync',
    description: 'DoubleTick is a great mobile app for sales broadcasts. But if you need an enterprise AI that qualifies leads 24/7, SwanDesk is the ultimate upgrade.',
    keywords: ['DoubleTick alternative', 'DoubleTick vs SwanDesk', 'WhatsApp Sales CRM', 'Lead Gen AI Chatbot'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-doubletick',
    },
}

export default function VsDoubleTickPage() {
    return (
        <ComparisonPageTemplate
            competitorName="DoubleTick"
            heroTitle="DoubleTick Alternative in India"
            heroSubtitle="Upgrade your sales team from a mobile broadcasting app to a 24/7 AI Sales Agent that qualifies leads automatically."
            aboutCompetitor="DoubleTick is designed as a mobile-first WhatsApp CRM. It is incredibly popular among field sales teams who need to send bulk broadcasts and manage leads directly from their smartphones."
            competitorStrengths="Excellent mobile app experience, seamless WhatsApp broadcasting capabilities, and simple lead pipeline management for small teams."
            realityCheck="DoubleTick relies entirely on your human sales reps. If a lead replies at 11 PM, they wait until morning. DoubleTick lacks a deeply integrated Generative AI layer to engage, ask BANT questions (Budget, Authority, Need, Timeline), and book meetings while your sales team sleeps."
            reasonsToSwitch={[
                {
                    title: "24/7 Lead Qualification",
                    description: "SwanDesk's AI engages leads instantly, asking qualifying questions and updating the CRM without human intervention."
                },
                {
                    title: "Automated Meeting Booking",
                    description: "Unlike basic WhatsApp CRMs, our AI integrates with your calendar to automatically book discovery calls when a lead is qualified."
                },
                {
                    title: "Beyond Mobile-First",
                    description: "While mobile apps are great for field reps, scaling enterprises need a robust desktop interface with deep analytics, SLAs, and omnichannel visibility."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Focus", SwanDesk: "AI Lead Qualification", competitor: "Mobile Sales Broadcasts" },
                { feature: "Generative AI Agent", SwanDesk: "Native (LLM)", competitor: "Limited / Manual" },
                { feature: "Omnichannel Support", SwanDesk: "Web, Email, IG, WhatsApp", competitor: "WhatsApp Primarily" },
                { feature: "Automated BANT Scoring", SwanDesk: true, competitor: false },
                { feature: "Voice AI for Inbound", SwanDesk: true, competitor: false }
            ]}
            targetPersona="You are a 5-person real estate team that just wants an easy mobile app to blast WhatsApp messages to purchased lead lists."
            verdict="You are a scaling B2B or B2C enterprise that wants to completely automate the top of your sales funnel, qualifying leads and booking meetings 24/7 with zero human effort."
            faqs={[
                {
                    question: "Can SwanDesk integrate with my primary CRM?",
                    answer: "Yes! While SwanDesk has a built-in CRM, we natively integrate with Salesforce, HubSpot, and Zoho to push qualified leads directly to your sales team."
                }
            ]}
        />
    );
}
