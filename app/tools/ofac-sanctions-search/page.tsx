import type { Metadata } from 'next';
import OFACSearchContent from '@/components/tools/OFACSearchContent';

export const metadata: Metadata = {
    title: 'Free OFAC Sanctions Search Tool | AML & KYC Compliance | SwanDigitals',
    description: 'Free instant search for OFAC SDN, BIS Entity List, and global sanctions. Powered by Moov Watchman. Essential for AML/KYC compliance in India & US.',
    keywords: ['OFAC Search Tool Free', 'Sanctions Screening Tool', 'SDN List Search', 'AML Compliance Tool Free', 'BIS Entity List Search'],
    alternates: {
        canonical: 'https://swandigitals.com/tools/ofac-sanctions-search',
    },
}

export default function OFACSearchPage() {
    return <OFACSearchContent />;
}
