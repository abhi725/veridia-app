import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/ui/LocationPageTemplate';
import { Landmark, Building2, Stethoscope, Headphones, Users, Server, Briefcase, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
    title: "Healthcare & Tech AI Chatbots in Hyderabad | SwanDigitals",
    description: "Deploy HIPAA-ready AI chatbots and voice agents in Hyderabad. Automate patient booking, triage, and IT support securely.",
    keywords: ["AI Chatbot Hyderabad", "Healthcare AI Hyderabad", "HITEC City Support AI", "Telugu AI Agent"],
    alternates: {
        canonical: "https://swandigitals.com/hyderabad",
    },
};

export default function HyderabadPage() {
    const useCases = [
        {
            title: "Patient Triage & Booking",
            desc: "Enable patients to check symptoms, schedule clinical visits, and receive prescription reminders 24/7.",
            icon: <Server className="w-6 h-6" />
        },
        {
            title: "Pharma Ops Support",
            desc: "Streamline supply chain logistics queries, vendor inquiries, and compliance checklist distributions.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            title: "Internal IT Helpdesk",
            desc: "Resolve password resets, configure network access, and deflect standard employee tickets automatically.",
            icon: <Headphones className="w-6 h-6" />
        }
    ];

    const stats = [{"value": "HIPAA", "label": "Compliance Ready"}, {"value": "90%", "label": "Support Deflection"}, {"value": "24/7", "label": "Patient Booking"}, {"value": "Zero", "label": "Data Leaks"}];

    return (
        <LocationPageTemplate
            city="Hyderabad"
            state="Telangana"
            ecosystemDesc="Hyderabad's technology and pharma sectors are expanding rapidly across HITEC City and Gachibowli. Regulated healthcare providers and tech firms require robust, highly secure AI systems that maintain customer trust and data privacy."
            industryFocus="healthcare, pharmaceuticals, and technology"
            localTerm="Hyderabad tech and pharma hub"
            languageNotes="Telugu, Urdu, and English"
            painPoint="automating patient engagement and customer onboarding workflows while adhering to strict healthcare privacy requirements"
            stats={stats}
            useCases={useCases}
        />
    );
}
