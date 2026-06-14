import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Kasisto Alternative | Smart Banking AI for India',
    description: 'Compare SwanDigitals and Kasisto. Simple, secure banking AI built for Indian languages and local data hosting.',
    keywords: ['Kasisto Alternative', 'Kasisto vs SwanDigitals', 'Banking AI India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-kasisto',
    },
}

export default function VsKasistoPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Kasisto"
            slug="vs-kasisto"
            heroTitle="SwanDigitals vs Kasisto"
            heroSubtitle="Smart banking AI built for Indian languages and local data hosting. Stop struggling with tools designed only for US banks."
            aboutCompetitor="Kasisto is a US company that builds AI for large financial institutions in America."
            competitorStrengths="Strong US banking integrations, compliance with US laws, and finance models built for American users."
            realityCheck="Kasisto is built for US banks. But for Indian teams, it lacks real understanding of local languages like Hindi, Tamil, or Marathi. It also struggles with unique Indian banking rules and local data privacy laws."
            comparisonRows={[
                { feature: "Primary Market", SwanDigitals: "India and emerging markets", competitor: "USA and Europe" },
                { feature: "Indian Languages", SwanDigitals: "Native understanding (Hindi, Tamil, etc.)", competitor: "Basic translation only" },
                { feature: "Local Hosting", SwanDigitals: "Fully offline on your own servers", competitor: "Cloud or hybrid only" },
                { feature: "Voice AI", SwanDigitals: "Handles Indian accents naturally", competitor: "Requires third-party tools" },
                { feature: "Pricing Plan", SwanDigitals: "Simple, flat subscription", competitor: "Expensive US rates" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Built for Indian Compliance",
                    description: "We follow RBI guidelines and local data laws from day one. You do not need to adapt US rules to fit Indian systems."
                },
                {
                    title: "Real Indian Language NLU",
                    description: "Customers often mix Hindi, English, and regional words. SwanDigitals understands this natural way of speaking perfectly."
                },
                {
                    title: "Total Data Ownership",
                    description: "Store everything on your own secure servers. Your customer financial data never leaves your company network."
                }
            ]}
            targetPersona="Enterprise"
            verdict="You are an Indian bank or financial firm that needs smart AI, local compliance, and native Indian language support."
            faqs={[
                {
                    question: "Where is my data stored?",
                    answer: "All your data stays inside India. We support hosting on secure local cloud servers, or we can install the system directly on your own private company servers."
                },
                {
                    question: "Can we pay Meta directly for WhatsApp messages?",
                    answer: "Yes. You connect your own payment method to Meta. SwanDigitals does not add any extra fees or charges to your WhatsApp costs."
                },
                {
                    question: "Can we keep our existing WhatsApp Business number?",
                    answer: "Yes. You can move your current WhatsApp Business API number to SwanDigitals with zero downtime. You will keep your green verification badge."
                },
                {
                    question: "Can we import our past ticket history?",
                    answer: "Yes. We can migrate your complete past support tickets and history from your old systems, so your agents do not lose any context."
                }
            ]}
        />
    );
}
