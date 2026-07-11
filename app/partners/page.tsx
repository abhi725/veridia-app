import type { Metadata } from 'next';
import PartnersContent from './PartnersContent';

export const metadata: Metadata = {
    title: 'SwanDigitals Partner Program | Resellers & Technology Partners',
    description: 'Join the SwanDigitals partner ecosystem. Reseller program, technology integrations, and co-sell opportunities for Indian businesses.',
    alternates: {
        canonical: 'https://swandigitals.com/partners',
    },
};

export default function PartnersPage() {
    return <PartnersContent />;
}
