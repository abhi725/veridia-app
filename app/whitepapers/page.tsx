import type { Metadata } from 'next';
import WhitepapersContent from './WhitepapersContent';

export const metadata: Metadata = {
    title: 'Guides & Whitepapers | SwanDigitals Insights',
    description: 'Practical guides on WhatsApp automation, AI calling, and customer engagement for Indian small and medium businesses.',
    alternates: {
        canonical: 'https://swandigitals.com/whitepapers',
    },
};

export default function WhitepapersPage() {
    return <WhitepapersContent />;
}
