import type { Metadata } from 'next';
import CommunityContent from './CommunityContent';

export const metadata: Metadata = {
    title: 'SwanDigitals Community | Join 7,000+ Developers & AI Builders',
    description: 'Join the SwanDigitals developer community on Discord, Slack, and GitHub. Get help, share projects, attend workshops, and connect with AI enthusiasts across India.',
    keywords: ['SwanDigitals community', 'AI chatbot developers India', 'SwanDigitals Discord'],
    alternates: {
        canonical: 'https://swandigitals.com/community',
    },
};

export default function CommunityPage() {
    return <CommunityContent />;
}
