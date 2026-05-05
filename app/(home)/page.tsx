import type { Metadata } from 'next';
import HomePageContent from './HomePageContent';

export const metadata: Metadata = {
    title: 'AI Chatbot India | On-Premise Voice AI | SwanDigitals',
    description: 'Deploy sovereign AI chatbots & voice agents in India. 100% data privacy, on-premise deployment. ₹10k pilot. Banking, healthcare, IT helpdesk automation.',
    keywords: ['AI Chatbot India', 'On-Premise AI', 'Voice AI India', 'Data Privacy', 'WhatsApp Chatbot India', 'Banking AI', 'Customer Service AI'],
    alternates: {
        canonical: 'https://swandigitals.com',
    },
};

export default function HomePage() {
    return <HomePageContent />;
}


