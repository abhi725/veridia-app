import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/ui/LocationPageTemplate';
import { Landmark, Building2, Stethoscope, Headphones, Users, Server, Briefcase, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
    title: "Sovereign BFSI AI Chatbots in Mumbai | SwanDigitals",
    description: "Secure, compliance-ready AI chatbots and voice assistants for Mumbai banks, insurance firms, and fintechs. Deploy on-premise or sovereign private cloud.",
    keywords: ["AI Chatbot Mumbai", "Sovereign AI Mumbai", "BFSI Chatbot Mumbai", "RBI Compliant Chatbot"],
    alternates: {
        canonical: "https://swandigitals.com/mumbai",
    },
};

export default function MumbaiPage() {
    const useCases = [
        {
            title: "RBI Compliant Chatbots",
            desc: "Deploy custom virtual assistants hosted locally in AWS/GCP Mumbai regions to resolve account inquiries securely.",
            icon: <Server className="w-6 h-6" />
        },
        {
            title: "Automated Claims",
            desc: "Guide policyholders through insurance claim filing, document validation, and status check workflows instantly.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            title: "Lead Qualification",
            desc: "Engage high-intent mutual fund and loan prospects with automated agents before seamless human routing.",
            icon: <Headphones className="w-6 h-6" />
        }
    ];

    const stats = [{"value": "100%", "label": "Indian Residency"}, {"value": "RBI", "label": "Compliance Ready"}, {"value": "DPDP", "label": "Aligned"}, {"value": "Air-Gap", "label": "On-Premise Option"}];

    return (
        <LocationPageTemplate
            city="Mumbai"
            state="Maharashtra"
            ecosystemDesc="As India's financial capital, Mumbai hosts the nation's largest banking, insurance, and investment institutions in BKC, Nariman Point, and Lower Parel. For financial firms, data security, compliance, and zero cross-border data replication are absolute mandates."
            industryFocus="banking, financial services, and insurance (BFSI)"
            localTerm="Mumbai BFSI sector"
            languageNotes="Marathi, Hindi, and Gujarati"
            painPoint="maintaining strict compliance with RBI circulars and the DPDP Act 2023 while automating millions of customer account queries"
            stats={stats}
            useCases={useCases}
        />
    );
}
