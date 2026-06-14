import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'AiSensy Alternative in India | D2C Retargeting & AI Helpdesk',
    description: 'Stop using basic broadcast tools for customer support. Migrate from AiSensy to SwanDigitals for a complete omnichannel AI Helpdesk with flat pricing and DPDP compliance.',
    keywords: ['AiSensy alternative', 'AiSensy vs SwanDigitals', 'WhatsApp Broadcast India', 'D2C Customer Support AI'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-aisensy',
    },
}

export default function VsAiSensyPage() {
    return (
        <ComparisonPageTemplate
            competitorName="AiSensy"
            slug="vs-aisensy"
            heroTitle="AiSensy Alternative in India: Omnichannel AI Support Without WhatsApp Silos"
            heroSubtitle="Upgrade from basic broadcast retargeting to a true customer support workspace. Consolidate WhatsApp, Email, Web Chat, and Voice AI in a single flat-rate dashboard."
            aboutCompetitor="AiSensy is a popular marketing gateway for blasting bulk WhatsApp broadcast campaigns and managing abandoned cart sequences."
            competitorStrengths="A simplified campaign setup panel, quick meta green badge application, and ready-to-go integrations with platforms like Shopify and WooCommerce."
            realityCheck="AiSensy operates primarily as a promotional broadcasting portal. When customers reply to your marketing campaigns with complex questions, keyword rules fall short. Human agents end up managing threads in a basic inbox without ticketing flows or context history. SwanDigitals unifies broadcast automation and helpdesk ticket resolution in one place."
            reasonsToSwitch={[
                {
                    title: "Helpdesk Ticketing + Campaigns",
                    description: "SwanDigitals schedules your WhatsApp campaigns and automates the incoming support tickets they generate under one unified dashboard."
                },
                {
                    title: "Vernacular Hinglish AI (RAG)",
                    description: "Our AI understands regional Hinglish queries natively. Stop relying on rigid keyword builders that confuse buyers."
                },
                {
                    title: "Flat SaaS Pricing",
                    description: "Say goodbye to tiered pricing and subscriber-limit penalties. Pay a flat platform rate and configure unlimited agent seats."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Focus", SwanDigitals: "AI Support & Helpdesk", competitor: "Broadcast Marketing" },
                { feature: "Channels Supported", SwanDigitals: "WhatsApp, Web, Email, Voice", competitor: "WhatsApp Only" },
                { feature: "Generative AI Resolution", SwanDigitals: "Native (RAG Architecture)", competitor: "Basic Dialogflow/Keywords" },
                { feature: "Ticketing & SLA", SwanDigitals: "Enterprise Grade", competitor: "Basic Inbox" },
                { feature: "Pricing Predictability", SwanDigitals: "Flat SaaS Model", competitor: "Tiered / Volume Based" }
            ]}
            targetPersona="small retailers whose sole goal is to blast promo templates to lists of users and who do not require multi-channel inbox sync."
            verdict="you want to resolve incoming support tickets automatically, consolidate email and web chat, and manage campaigns under a predictable flat monthly rate."
            faqs={[
                {
                    question: "Can we migrate our WhatsApp Business API profile from AiSensy?",
                    answer: "Yes. We migrate your WABA profile and official Meta green tick status cleanly without service interruption or setup downtime."
                },
                {
                    question: "Does SwanDigitals mark up Meta template charges?",
                    answer: "No. You pay Meta directly for conversation fees using your own linked card, and you pay us a flat software rate. We charge zero markups."
                },
                {
                    question: "Can we import historic customer logs and CRM keys?",
                    answer: "Yes. Our systems sync directly with Shopify, HubSpot, and custom APIs, bringing your customer profiles and history into SwanDigitals."
                },
                {
                    question: "How is user data protected?",
                    answer: "SwanDigitals guarantees 100% local hosting in Mumbai, aligning your customer support communications with DPDP 2023 guidelines."
                }
            ]}
        />
    );
}
