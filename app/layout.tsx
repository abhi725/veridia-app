import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'SwanDigitals | Enterprise AI Workforces for Indian Business',
    description: 'Deploy private, air-gapped AI Agents that automate Loan Collections, KYC Verification, and Patient Triage. DPDP 2023 Compliant. Hosted locally in Pune, India.',
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
