import type { Metadata } from 'next';
import FeaturesContent from '@/components/features/FeaturesContent';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'SwanDigitals Features | AI Chatbot & Voice AI Helpdesk Platform',
    description: 'Explore SwanDigitals features: Unified omnichannel inbox (WhatsApp, Facebook, Web Chat), fast and natural Voice AI in 10 Indian languages, NLU intent models, and robust knowledge integrations.',
    keywords: ['AI Chatbot Features', 'WhatsApp Business API India', 'Voice AI Support', 'Omnichannel Helpdesk', 'Indian Language NLP', 'RAG Customer Support'],
    alternates: {
        canonical: 'https://swandigitals.com/features',
    },
};

export default function FeaturesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
                    <p className="text-slate-400 font-medium">Loading SwanDigitals Features...</p>
                </div>
            </div>
        }>
            <FeaturesContent />
        </Suspense>
    );
}
