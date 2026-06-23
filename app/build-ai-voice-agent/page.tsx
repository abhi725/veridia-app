import type { Metadata } from 'next';
import VoiceAgentContent from './VoiceAgentContent';

export const metadata: Metadata = {
    title: 'Build Your AI Voice Agent | AI Voice Agent Development',
    description: 'Automate customer interactions with real-time, human-like AI voice agents. Deploy cutting-edge AI for support, sales, and lead qualification in India.',
    keywords: ['AI Voice Agent', 'Voice AI Development', 'AI Call Center India', 'Voicebot India', 'AI Voice Assistant'],
    alternates: {
        canonical: 'https://swandigitals.com/build-ai-voice-agent',
    },
};

export default function BuildVoiceAgentPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Build AI Voice Agent',
                item: 'https://swandigitals.com/build-ai-voice-agent'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <VoiceAgentContent />
        </>
    );
}
