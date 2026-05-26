import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book a Demo | SwanDigitals AI Chatbot',
    description: 'See how SwanDigitals can automate up to 90% of your customer support and internal helpdesk. Schedule a personalized demo with our AI experts.',
    keywords: ['SwanDigitals demo', 'AI chatbot demo', 'Customer support automation', 'Book AI demo', 'Enterprise chatbot India'],
    alternates: {
        canonical: 'https://swandigitals.com/demo',
    },
}

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
