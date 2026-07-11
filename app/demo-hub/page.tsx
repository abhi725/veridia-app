import type { Metadata } from 'next';
import DemoHubContent from './DemoHubContent';

export const metadata: Metadata = {
    title: 'Demo Hub | Watch SwanDigitals Product Demos',
    description: 'Explore interactive demos of SwanDigitals AI platform. Customer service bots, voice agents, analytics dashboard, integration setup — no signup required.',
    keywords: ['SwanDigitals demo hub', 'AI chatbot demo videos', 'product walkthrough India'],
    alternates: {
        canonical: 'https://swandigitals.com/demo-hub',
    },
};

export default function DemoHubPage() {
    return <DemoHubContent />;
}
