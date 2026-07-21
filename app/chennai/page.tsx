import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/ui/LocationPageTemplate';
import { Landmark, Building2, Stethoscope, Headphones, Users, Server, Briefcase, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
    title: "Industrial & Manufacturing AI Chatbots in Chennai | SwanDigitals",
    description: "Optimize dealer operations and supply chain logistics with custom AI chatbots in Chennai. Native support for Tamil and English.",
    keywords: ["AI Chatbot Chennai", "Chennai Manufacturing AI", "Tamil AI Voice Agent", "Supply Chain Chatbot"],
    alternates: {
        canonical: "https://swandigitals.com/chennai",
    },
};

export default function ChennaiPage() {
    const useCases = [
        {
            title: "Dealer Network Support",
            desc: "Automate parts availability inquiries, warranty registration status checks, and credit limit updates.",
            icon: <Server className="w-6 h-6" />
        },
        {
            title: "Logistics & Dispatch Bot",
            desc: "Provide instant updates on container tracking, custom clearances, and shipping schedules to partners.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            title: "Industrial Helpdesk",
            desc: "Enable factory workers to access standard operating procedures, safety guidelines, and shift schedules via chat.",
            icon: <Headphones className="w-6 h-6" />
        }
    ];

    const stats = [{"value": "10", "label": "Indian Languages"}, {"value": "Tamil", "label": "Native Support"}, {"value": "Flat", "label": "Monthly Pricing"}, {"value": "7 Days", "label": "To Go Live"}];

    return (
        <LocationPageTemplate
            city="Chennai"
            state="Tamil Nadu"
            ecosystemDesc="Chennai, the 'Detroit of India', is a hub for automotive manufacturing, hardware engineering, and industrial services. Streamlining dealer operations, supply chain logistics, and multilingual customer queries is key for SMEs here."
            industryFocus="manufacturing, logistics, and industrial SMEs"
            localTerm="Chennai industrial ecosystem"
            languageNotes="Tamil and English"
            painPoint="managing dealer communications, parts dispatch requests, and supply chain updates across distributed, multilingual networks"
            stats={stats}
            useCases={useCases}
        />
    );
}
