import type { Metadata } from 'next';
import WhitepapersContent from './WhitepapersContent';

export const metadata: Metadata = {
    title: 'AI Whitepapers & Research | SwanDigitals Insights',
    description: 'Download in-depth whitepapers on AI customer support for BFSI, healthcare, and enterprise India. Research-backed insights for decision makers.',
    alternates: {
        canonical: 'https://swandigitals.com/whitepapers',
    },
};

export default function WhitepapersPage() {
    return <WhitepapersContent />;
}
