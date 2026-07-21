import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import GlossaryClient from './GlossaryClient';

// Phase 2 SEO: Metadata was completely missing — this page had zero title/description in HTML head
export const metadata: Metadata = {
    title: 'AI Chatbot & Compliance Glossary India | SwanDigitals',
    description: 'Plain-English definitions for AI chatbots, NLP, RAG, DPDP Act 2023, RBI cloud guidelines, WhatsApp Business API, and more. Built for Indian small and medium businesses.',
    keywords: ['AI chatbot glossary India', 'DPDP Act explained', 'RBI cloud guidelines', 'WhatsApp Business API India', 'NLP terms', 'RAG definition'],
    alternates: {
        canonical: 'https://swandigitals.com/ai-glossary',
    },
};

// Phase 2 Schema: DefinedTermSet signals to Google that this is an authoritative reference page
const glossarySchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': 'https://swandigitals.com/ai-glossary',
            url: 'https://swandigitals.com/ai-glossary',
            name: 'AI Chatbot & Compliance Glossary India',
            dateModified: new Date().toISOString().split('T')[0],
            inLanguage: 'en-IN',
            isPartOf: { '@id': 'https://swandigitals.com/#website' },
            author: { '@id': 'https://swandigitals.com/#organization' },
        },
        {
            '@type': 'DefinedTermSet',
            name: 'AI Chatbot & Compliance Glossary for Indian Businesses',
            url: 'https://swandigitals.com/ai-glossary',
            inLanguage: 'en-IN',
            publisher: { '@id': 'https://swandigitals.com/#organization' },
        },
    ],
};

export default function AIGlossaryPage() {
    return (
        <SiteLayout>
            {/* Phase 2 Schema: DefinedTermSet + WebPage JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
            />
            <GlossaryClient />
        </SiteLayout>
    );
}
