import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'SwanDigitals | Sovereign AI & Enterprise Chatbots India',
        template: '%s | SwanDigitals'
    },
    description: 'Deploy private, air-gapped AI Agents that automate Customer Support, KYC Verification, and IT Helpdesk. DPDP 2023 Compliant. Hosted locally in Pune, India.',
    keywords: ['Sovereign AI India', 'Enterprise AI Chatbot', 'On-premise LLM', 'DPDP Compliant AI', 'Private Cloud AI', 'Generative AI for Business India', 'SwanDigitals', 'Abhishek Ambad'],
    authors: [{ name: 'Abhishek Ambad', url: 'https://swandigitals.com/leadership' }],
    creator: 'SwanDigitals',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://swandigitals.com',
        title: 'SwanDigitals | Sovereign AI & Enterprise Chatbots India',
        description: 'Automate business workflows with 100% data sovereignty. True on-premise AI agents for Indian Banking, Healthcare, and Enterprise.',
        siteName: 'SwanDigitals',
        images: [
            {
                url: '/og-image.jpg', // Ensure this image exists in public folder
                width: 1200,
                height: 630,
                alt: 'SwanDigitals Sovereign AI Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SwanDigitals | Sovereign AI for Indian Enterprise',
        description: 'Deploy private, air-gapped AI agents. DPDP compliant and hosted in India.',
        creator: '@swandigitals',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://swandigitals.com',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://swandigitals.com/#organization',
                name: 'SwanDigitals',
                url: 'https://swandigitals.com',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://swandigitals.com/logo.png',
                },
                description: 'Enterprise AI Platform for Sovereign Data - On-premise chatbots and voice agents for Indian businesses',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Tapodham, Warje',
                    addressLocality: 'Pune',
                    postalCode: '411038',
                    addressRegion: 'Maharashtra',
                    addressCountry: 'IN',
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+91-7770070762',
                    contactType: 'customer service',
                    email: 'Abhishek@swandigitals.com',
                    areaServed: 'IN',
                    availableLanguage: ['en', 'hi'],
                },
                founder: {
                    '@type': 'Person',
                    name: 'Abhishek Ambad',
                },
                sameAs: [
                    'https://linkedin.com/company/swandigitals',
                    'https://twitter.com/swandigitals',
                ],
            },
            {
                '@type': 'WebSite',
                '@id': 'https://swandigitals.com/#website',
                url: 'https://swandigitals.com',
                name: 'SwanDigitals',
                publisher: {
                    '@id': 'https://swandigitals.com/#organization',
                },
                inLanguage: 'en-IN',
            },
            {
                '@type': 'SoftwareApplication',
                name: 'SwanDigitals AI Platform',
                operatingSystem: 'Web, On-Premise',
                applicationCategory: 'BusinessApplication',
                offers: {
                    '@type': 'Offer',
                    price: 'Contact for pricing',
                    priceCurrency: 'INR',
                },
                featureList: [
                    'Air-gapped deployment',
                    'Multi-agent orchestration',
                    'Voice AI in 10+ Indian languages',
                    'WhatsApp Business integration',
                    'Banking & healthcare compliance',
                ],
            },
        ],
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={inter.className}>
                <noscript>
                    <div style={{
                        padding: '20px',
                        textAlign: 'center',
                        backgroundColor: '#fffbeb',
                        border: '2px solid #f59e0b',
                        margin: '20px',
                        borderRadius: '8px'
                    }}>
                        <h1>JavaScript Required</h1>
                        <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser settings.</p>
                        <p><strong>SwanDigitals</strong> - Enterprise AI Platform for India</p>
                        <p>Contact: +91 7770070762 | Email: Abhishek@swandigitals.com</p>
                    </div>
                </noscript>
                {children}
            </body>
        </html>
    )
}
