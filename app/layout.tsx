import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Enterprise AI Chatbot Platform | On-Premise & Data Sovereign | Veridia',
    description: 'Deploy enterprise-grade AI chatbots in days, not months. Veridia offers 100% data sovereignty, on-premise deployment, and air-gapped security for banking and healthcare. Book a demo.',
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
