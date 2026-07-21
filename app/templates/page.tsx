import type { Metadata } from 'next';
import TemplatesContent from './TemplatesContent';

export const metadata: Metadata = {
    title: 'AI Chatbot Templates | Pre-Built SwanDigitals Workflows',
    description: 'Browse ready-to-deploy AI chatbot templates for customer service, retail, clinics, loan agents, real estate, and more Indian SME use cases.',
    alternates: {
        canonical: 'https://swandigitals.com/templates',
    },
};

export default function TemplatesPage() {
    return <TemplatesContent />;
}
