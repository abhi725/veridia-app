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
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
