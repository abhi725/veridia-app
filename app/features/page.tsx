
import type { Metadata } from 'next';
import FeaturesContent from '@/components/features/FeaturesContent';

export const metadata: Metadata = {
    title: 'Enterprise AI Features: Voice, Vernacular & No-Code | SwanDigitals',
    description: 'Explore our features: 95% NLU accuracy, 10+ Indian languages, WhatsApp integration, and <500ms voice latency. Built for Indian Enterprises.',
    keywords: ['AI Chatbot Features', 'Voice AI Latency', 'Multilingual NLU', 'No-code Bot Builder', 'Whatsapp Integration'],
    alternates: {
        canonical: 'https://swandigitals.com/features',
    },
}

export default function FeaturesPage() {
    return <FeaturesContent />;
}
