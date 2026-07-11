import type { Metadata } from 'next';
import VoiceAiContent from './VoiceAiContent';

export const metadata: Metadata = {
    title: 'Voice AI Agent | Indian Language Voice Bot for Business',
    description: 'Deploy voice AI agents that answer calls 24/7 in Hindi, Tamil, Telugu, Marathi and 8+ Indian languages. Works with SIP trunking and cloud voice APIs.',
    alternates: {
        canonical: 'https://swandigitals.com/features/voice-ai',
    },
};

export default function VoiceAiPage() {
    return <VoiceAiContent />;
}
