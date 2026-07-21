import type { Metadata } from 'next';
import CommunityContent from './CommunityContent';

export const metadata: Metadata = {
    title: 'SwanDigitals Community | SME Owners & Operators',
    description: 'Join the SwanDigitals community on Discord, Slack, and GitHub. Get help, share tips, attend workshops, and connect with other Indian SME owners and operators.',
    keywords: ['SwanDigitals community', 'WhatsApp business owners India', 'SwanDigitals Discord'],
    alternates: {
        canonical: 'https://swandigitals.com/community',
    },
};

export default function CommunityPage() {
    return <CommunityContent />;
}
