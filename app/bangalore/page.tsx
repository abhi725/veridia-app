import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/ui/LocationPageTemplate';
import { Landmark, Building2, Stethoscope, Headphones, Users, Server, Briefcase, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
    title: "API-First AI Chatbots in Bangalore | SwanDigitals",
    description: "Scale your Bangalore SaaS or tech startup with our developer-friendly, API-first AI chatbot platform. Complete n8n and database integration.",
    keywords: ["AI Chatbot Bangalore", "Bangalore Tech AI Support", "SaaS Chatbot Bangalore", "n8n Chatbot integration"],
    alternates: {
        canonical: "https://swandigitals.com/bangalore",
    },
};

export default function BangalorePage() {
    const useCases = [
        {
            title: "SaaS Support Automation",
            desc: "Resolve API issues, guide users through billing queries, and deflect documentation tickets in real time.",
            icon: <Server className="w-6 h-6" />
        },
        {
            title: "E-commerce Operations",
            desc: "Connect with inventory databases to automate order tracking, returns, and personalized product recommendations.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            title: "CRM & Database Sync",
            desc: "Sync lead information directly to HubSpot or custom databases via pre-built n8n webhooks.",
            icon: <Headphones className="w-6 h-6" />
        }
    ];

    const stats = [{"value": "5 Min", "label": "API Setup"}, {"value": "7", "label": "Real Integrations"}, {"value": "10", "label": "Indian Languages"}, {"value": "7 Days", "label": "To Go Live"}];

    return (
        <LocationPageTemplate
            city="Bangalore"
            state="Karnataka"
            ecosystemDesc="India's Silicon Valley, Bangalore (Bengaluru) leads the country in SaaS innovation, developer activity, and global product engineering. Startups and growing SaaS companies here want customizable, API-first AI agents that integrate with their existing tools."
            industryFocus="SaaS, e-commerce, and growing technology businesses"
            localTerm="Bangalore tech ecosystem"
            languageNotes="Kannada, Hindi, and English"
            painPoint="resolving customer support queries efficiently while integrating with their own tools via n8n and maintaining high CSAT scores"
            stats={stats}
            useCases={useCases}
        />
    );
}
