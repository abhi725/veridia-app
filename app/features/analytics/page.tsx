import type { Metadata } from 'next';
import AnalyticsContent from './AnalyticsContent';

export const metadata: Metadata = {
    title: 'AI Analytics Dashboard | SwanDigitals Conversation Intelligence',
    description: 'Real-time analytics for AI conversations. Track resolution rates, response times, agent performance, and customer satisfaction scores.',
    alternates: {
        canonical: 'https://swandigitals.com/features/analytics',
    },
};

export default function AnalyticsPage() {
    return <AnalyticsContent />;
}
