import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/ui/LocationPageTemplate';
import { Landmark, Building2, Stethoscope, Headphones, Users, Server, Briefcase, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
    title: "E-Commerce & Retail AI Chatbots in Delhi NCR | SwanDigitals",
    description: "Scale your e-commerce store or retail brand in Delhi, Noida, or Gurgaon with our high-conversion AI chatbots. 24/7 customer support.",
    keywords: ["AI Chatbot Delhi", "E-commerce AI Gurgaon", "Noida Customer Support Bot", "Hindi AI Voice Agent"],
    alternates: {
        canonical: "https://swandigitals.com/delhi",
    },
};

export default function DelhiPage() {
    const useCases = [
        {
            title: "D2C Customer Support",
            desc: "Instantly answer where-is-my-order queries, manage refund requests, and process cancellations on WhatsApp.",
            icon: <Server className="w-6 h-6" />
        },
        {
            title: "Conversational Selling",
            desc: "Recommend products based on user preferences and schedule fittings or consulting calls directly from chat.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            title: "Omnichannel Inbox",
            desc: "Consolidate inquiries from WhatsApp, Instagram, Email, and Web Chat into a single dashboard for fast resolution.",
            icon: <Headphones className="w-6 h-6" />
        }
    ];

    const stats = [{"value": "10", "label": "Indian Languages"}, {"value": "24/7", "label": "AI Support"}, {"value": "Fast", "label": "Resolution Time"}, {"value": "7 Days", "label": "To Go Live"}];

    return (
        <LocationPageTemplate
            city="Delhi NCR"
            state="Delhi"
            ecosystemDesc="The Delhi National Capital Region (including Gurgaon and Noida) represents India's largest retail, logistics, and e-commerce consumer market. Direct consumer brands require scalable, fast conversational support that resolves issues in seconds."
            industryFocus="retail, e-commerce, and direct-to-consumer (D2C)"
            localTerm="Delhi NCR retail market"
            languageNotes="Hindi, Punjabi, and English"
            painPoint="handling massive ticket volumes during peak sales events while maintaining consistent service quality and high conversion"
            stats={stats}
            useCases={useCases}
        />
    );
}
