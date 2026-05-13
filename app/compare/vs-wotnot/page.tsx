import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'WotNot Alternative in India | White-Label Enterprise AI Helpdesk',
    description: 'WotNot is great for building simple bots. Upgrade your agency to SwanDesk for a full-stack, DPDP-compliant Enterprise AI Helpdesk with Voice capabilities.',
    keywords: ['WotNot alternative', 'WotNot vs SwanDesk', 'White label chatbot India', 'Agency Chatbot platform'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-wotnot',
    },
}

export default function VsWotNotPage() {
    return (
        <ComparisonPageTemplate
            competitorName="WotNot"
            heroTitle="WotNot Alternative in India"
            heroSubtitle="Upgrade your agency from selling simple bot templates to providing a unified, Enterprise-Grade AI Helpdesk."
            aboutCompetitor="WotNot is a platform highly focused on agencies, offering a comprehensive white-label program to build and resell chatbots under their own domain."
            competitorStrengths="Excellent visual bot builder, strong white-label reseller program, and a solid focus on lead generation for B2B websites."
            realityCheck="While WotNot is great for building a 'bot', modern enterprises demand a complete 'Helpdesk'. Selling a chatbot is no longer enough; your clients need an omnichannel unified inbox, deep SLA ticketing, and native Voice AI. Furthermore, as an agency, you need a backend that scales gracefully with advanced LLM (RAG) capabilities, rather than relying on massive decision trees."
            reasonsToSwitch={[
                {
                    title: "Helpdesk vs Chatbot",
                    description: "SwanDesk isn't just a widget you paste on a site. It's a complete CRM replacement that unifies WhatsApp, Email, Web, and Voice into one powerful inbox."
                },
                {
                    title: "Advanced Voice AI",
                    description: "Differentiate your agency offerings by selling Voice AI agents that can handle incoming phone calls 24/7 in local Indian languages."
                },
                {
                    title: "Enterprise Compliance",
                    description: "Win bigger deals. SwanDesk provides the strict DPDP compliance, data residency, and on-premise deployment options required by banks and hospitals."
                }
            ]}
            comparisonRows={[
                { feature: "Platform Scope", SwanDesk: "Unified CRM & Helpdesk", competitor: "Chatbot Builder" },
                { feature: "Native Voice AI", SwanDesk: true, competitor: false },
                { feature: "Advanced LLM Integration (RAG)", SwanDesk: "Deep Native", competitor: "Basic / Add-on" },
                { feature: "On-Premise Deployment", SwanDesk: "Available", competitor: "Limited" },
                { feature: "White-Label Reseller", SwanDesk: "Available", competitor: "Available" }
            ]}
            targetPersona="You are a small marketing agency looking to easily quickly spin up lead-gen bots for local real estate agents."
            verdict="You are a premium B2B SaaS agency or System Integrator looking to replace Zendesk or Intercom for your enterprise clients with a highly secure, AI-native platform."
            faqs={[
                {
                    question: "Does SwanDesk offer a white-label program like WotNot?",
                    answer: "Yes, we offer an exclusive Enterprise Partner Program allowing you to white-label the platform, use your own domain, and set your own pricing margins."
                }
            ]}
        />
    );
}
