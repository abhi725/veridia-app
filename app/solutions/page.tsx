import type { Metadata } from 'next';
import SolutionsContent from './SolutionsContent';

export const metadata: Metadata = {
    title: 'Enterprise AI Solutions India — Chatbot & Voicebot Platforms | SwanDigitals',
    description: 'Explore SwanDigitals AI Chatbot and Voicebot Agent solutions. Tailored for customer support, IT helpdesks, banking, healthcare, retail, and sales. DPDP 2023 & RBI ready.',
    keywords: ['Enterprise AI solutions', 'Text Chatbot India', 'Voicebot Agent India', 'Customer support automation', 'IT helpdesk AI', 'Sovereign AI platform'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions',
    },
    openGraph: {
        title: 'Enterprise AI Solutions India — Text Chatbot & Voicebot Platforms',
        description: 'Differentiate Text Chatbots and Voicebot Agents. Explore industry solutions for banking, healthcare, e-commerce, IT helpdesk, and sales.',
        url: 'https://swandigitals.com/solutions',
    },
};

export default function SolutionsPage() {
    return <SolutionsContent />;
}
