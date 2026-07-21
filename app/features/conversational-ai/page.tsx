import type { Metadata } from 'next';
import ConversationalAiContent from './ConversationalAiContent';

export const metadata: Metadata = {
    title: 'Conversational AI Engine | SwanDigitals NLP Platform India',
    description: 'Advanced conversational AI with multi-turn dialogue, intent recognition, and context memory. Supports 10 Indian languages including Hindi, Tamil, Telugu.',
    alternates: {
        canonical: 'https://swandigitals.com/features/conversational-ai',
    },
};

export default function ConversationalAiPage() {
    return <ConversationalAiContent />;
}
