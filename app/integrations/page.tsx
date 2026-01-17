import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Check, X, Zap, Gift, BadgePercent, MessageSquare, Phone, Users, Shield, Building2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Integrations | SwanDigitals',
    description: 'This page has been removed as per user request.',
};

export default function IntegrationsPage() {
    return (
        <SiteLayout>
            <div className="max-w-4xl mx-auto py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">Integrations Page Removed</h1>
                <p className="text-lg text-slate-600">The integrations page is no longer available.</p>
                <Link href="/" className="mt-6 inline-block text-orange-500 hover:underline">Return to Home</Link>
            </div>
        </SiteLayout>
    );
}
