import type { Metadata } from 'next';
import CookiesContent from './CookiesContent';

export const metadata: Metadata = {
    title: 'Cookie Policy | SwanDigitals',
    description: 'Understand how we use cookies and how you can control your cookie preferences on SwanDigitals corporate website.',
    keywords: ['SwanDigitals cookies', 'cookie preference settings', 'website tracking cookies'],
    alternates: {
        canonical: 'https://swandigitals.com/cookies',
    },
};

export default function CookiesPage() {
    return <CookiesContent />;
}
