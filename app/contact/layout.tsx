import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact SwanDigitals Pune | +91 7770070762 | Support',
    description: 'Reach SwanDigitals in Pune, India. Email: support@swandigitals.com | Phone: +91 7770070762. Book a demo or discuss your AI chatbot project.',
    keywords: ['Contact SwanDigitals', 'Pune AI Company Contact', 'AI Chatbot Support India'],
    alternates: {
        canonical: 'https://swandigitals.com/contact',
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
