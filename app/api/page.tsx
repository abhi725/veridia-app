import type { Metadata } from 'next';
import ApiContent from './ApiContent';

export const metadata: Metadata = {
    title: 'SwanDigitals API Reference | Developer Documentation',
    description: 'Explore the SwanDigitals REST API. Connect your applications to our AI platform with webhooks, chatbot APIs, and voice agent endpoints.',
    alternates: {
        canonical: 'https://swandigitals.com/api',
    },
};

export default function ApiPage() {
    return <ApiContent />;
}
