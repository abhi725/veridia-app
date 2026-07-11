import type { Metadata } from 'next';
import AiGuideContent from './AiGuideContent';

export const metadata: Metadata = {
    title: 'AI Guide for Indian Businesses | SwanDigitals Learning Hub',
    description: 'Learn how to implement AI customer support for your Indian business. Guides on WhatsApp bots, voice AI, DPDP compliance, and ROI calculation.',
    alternates: {
        canonical: 'https://swandigitals.com/ai-guide',
    },
};

export default function AiGuidePage() {
    return <AiGuideContent />;
}
