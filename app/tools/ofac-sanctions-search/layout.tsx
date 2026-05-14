import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free OFAC Sanctions Search Tool',
    description: 'Free OFAC sanctions list checker. Instantly screen names against SDN, BIS Entity List & global sanctions databases. AML compliance tool for KYC screening.',
    keywords: ['OFAC search', 'sanctions screening', 'AML compliance', 'KYC tool', 'SDN list check', 'sanctions list checker', 'free OFAC search', 'AML sanctions list checker', 'KYC compliance tool'],
    openGraph: {
        title: 'Free OFAC Sanctions Search Tool',
        description: 'Free OFAC sanctions screening tool. Instantly check names against SDN list, BIS Entity List & global sanctions databases for AML/KYC compliance.',
        type: 'website',
        url: 'https://SwanDigitals.com/tools/ofac-sanctions-search',
        siteName: 'SwanDigitals',
        images: [
            {
                url: '/og-ofac-tool.png',
                width: 1200,
                height: 630,
                alt: 'SwanDigitals OFAC Sanctions Search Tool'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free OFAC Sanctions Search Tool',
        description: 'Free OFAC sanctions screening tool for AML/KYC compliance. Screen names against SDN list & global sanctions databases.'
    },
    alternates: {
        canonical: 'https://SwanDigitals.com/tools/ofac-sanctions-search'
    },
    robots: {
        index: true,
        follow: true
    }
};

// JSON-LD Schema for SoftwareApplication
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'SwanDigitals OFAC Sanctions Search',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'Web',
    'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
    },
    'description': 'Free online OFAC sanctions screening tool. Search names against SDN list, BIS Entity List, and global sanctions databases for AML and KYC compliance.',
    'provider': {
        '@type': 'Organization',
        'name': 'SwanDigitals',
        'url': 'https://SwanDigitals.com'
    },
    'featureList': [
        'OFAC SDN List Search',
        'BIS Entity List Search',
        'Denied Persons List Search',
        'Fuzzy name matching',
        'Real-time results',
        'Free to use'
    ]
};

export default function OFACSearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
