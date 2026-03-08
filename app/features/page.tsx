
import type { Metadata } from 'next';
import FeaturesContent from '@/components/features/FeaturesContent';

export const metadata: Metadata = {
    title: 'AI Chatbot Features | Voice, WhatsApp, Analytics | India',
    description: 'Voice AI, WhatsApp Business API, 10+ Indian languages, sentiment analysis, live agent handoff. Built for India. Book demo: +91 7770070762.',
    keywords: ['AI Chatbot Features', 'WhatsApp AI India', 'Voice AI', 'Chatbot Analytics', 'Indian Language AI'],
    alternates: {
        canonical: 'https://swandigitals.com/features',
    },
}

export default function FeaturesPage() {
    return <FeaturesContent />;
}
