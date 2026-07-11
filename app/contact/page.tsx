import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
    title: 'Contact SwanDigitals | Talk to Our Team',
    description: 'Get in touch with the SwanDigitals team. Sales, support, enterprise inquiries — we respond within 4 hours. Call +91 7770070762 or email support@swandigitals.com.',
    keywords: ['Contact SwanDigitals', 'SwanDigitals support', 'AI chatbot sales India', 'SwanDigitals Pune office'],
    alternates: {
        canonical: 'https://swandigitals.com/contact',
    },
    openGraph: {
        title: 'Contact SwanDigitals | Talk to Our Team',
        description: 'Reach our sales or support team. We respond within 4 hours on business days.',
        url: 'https://swandigitals.com/contact',
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
