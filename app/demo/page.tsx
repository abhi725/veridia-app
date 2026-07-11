import type { Metadata } from 'next';
import DemoContent from './DemoContent';

export const metadata: Metadata = {
    title: 'Book a Live Demo | See SwanDigitals AI Platform in Action',
    description: 'Schedule a personalized 30-minute demo of SwanDigitals. See live AI conversations, voice bot, and analytics dashboard tailored to your industry. No commitment required.',
    keywords: ['SwanDigitals demo', 'AI chatbot demo India', 'book AI demo', 'SwanDigitals live demo'],
    alternates: {
        canonical: 'https://swandigitals.com/demo',
    },
    openGraph: {
        title: 'Book a Live Demo | SwanDigitals AI Platform',
        description: 'Get a 30-minute personalized demo. See real AI conversations, ROI projections, and deployment options for your business.',
        url: 'https://swandigitals.com/demo',
    },
};

export default function DemoPage() {
    return <DemoContent />;
}
