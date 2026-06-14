import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'WotNot Alternative in India | White-Label Enterprise AI Helpdesk',
    description: 'WotNot is great for building simple bots. Upgrade your agency to SwanDigitals for a full-stack, DPDP-compliant Enterprise AI Helpdesk with Voice capabilities.',
    keywords: ['WotNot alternative', 'WotNot vs SwanDigitals', 'White label chatbot India', 'Agency Chatbot platform'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-wotnot',
    },
}

export default function VsWotNotPage() {
    return (
        <ComparisonPageTemplate
            competitorName="WotNot"
            slug="vs-wotnot"
            heroTitle="WotNot Alternative: Full-Stack Helpdesk AI Over Flow Chart Builders"
            heroSubtitle="Upgrade from visual chatbot trees. Deliver white-labeled customer support channels featuring native Voice AI, secure databases, and flat platform pricing."
            aboutCompetitor="WotNot provides a block-based visual canvas to build lead generation widgets and WhatsApp flows for websites."
            competitorStrengths="A highly visual builder canvas, white-label customization for agency partners, and template setups for web capture."
            realityCheck="WotNot functions well as a web chatbot builder, but leaves businesses needing a separate customer support inbox. Managing disconnected bots and ticketing queues splits customer logs. SwanDigitals unifies the automated virtual agent and the agent ticketing workspace natively."
            reasonsToSwitch={[
                {
                    title: "Unified Support Workspace",
                    description: "Avoid pasting standalone widget codes. Get a complete ticketing system that unifies WhatsApp, Web, Email, and Voice."
                },
                {
                    title: "Indic Voice AI Calling",
                    description: "Deploy voice assistant systems speaking Hindi, Tamil, Telugu, and 7 more languages natively with sub-500ms response latency."
                },
                {
                    title: "Sovereign Mumbai Cloud Hosting",
                    description: "Close high-value enterprise accounts. Keep all customer communications on Indian server instances, meeting DPDP guidelines."
                }
            ]}
            comparisonRows={[
                { feature: "Platform Scope", SwanDigitals: "Unified CRM & Helpdesk", competitor: "Chatbot Builder" },
                { feature: "Native Voice AI", SwanDigitals: true, competitor: false },
                { feature: "Advanced LLM Integration (RAG)", SwanDigitals: "Deep Native", competitor: "Basic / Add-on" },
                { feature: "On-Premise Deployment", SwanDigitals: "Available", competitor: "Limited" },
                { feature: "White-Label Reseller", SwanDigitals: "Available", competitor: "Available" }
            ]}
            targetPersona="small agencies seeking to assemble simple visual menu widgets for local business websites."
            verdict="you want to offer your clients a secure, white-labeled support workspace that combines automated RAG bots and human agent queues."
            faqs={[
                {
                    question: "Can we white-label SwanDigitals with our brand?",
                    answer: "Yes. Our partner plans allow you to host the platform on custom domains and apply your logo assets."
                },
                {
                    question: "How does the AI ingest client information?",
                    answer: "Instead of mapping massive flowchart trees, you upload documents or input client URLs. The RAG engine builds the knowledge base dynamically."
                },
                {
                    question: "Can we sync client leads with external CRMs?",
                    answer: "Yes. Natively connect leads, conversation transcripts, and outcomes to HubSpot, Salesforce, and custom endpoints."
                },
                {
                    question: "Where is client conversation history stored?",
                    answer: "We store conversation data locally on Indian cloud servers, ensuring compliance with DPDP 2023 guidelines."
                }
            ]}
        />
    );
}
