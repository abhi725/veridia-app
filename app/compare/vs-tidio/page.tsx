import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Tidio Alternative in India | Smart Chat & Voice AI for SMEs',
    description: 'Tidio is fine for basic widgets. SwanDigitals adds self-training AI, native +91 voice, and 10 Indian languages, on flat rupee pricing.',
    keywords: ['Tidio alternative', 'Tidio vs SwanDigitals', 'Live chat automation India', 'SME AI Agent'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-tidio',
    },
}

export default function VsTidioPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Tidio"
            slug="vs-tidio"
            heroTitle="Stop Building Rigid Chat Flowcharts"
            heroSubtitle="Tidio keeps you in basic templates. Upgrade to AI that trains on your content, plus native +91 voice, in 10 Indian languages."
            aboutCompetitor="Tidio is a simple web chat tool, popular for Shopify and WordPress stores, with drag-and-drop flow templates for bots."
            competitorStrengths="Very fast to set up, clean design, and cheap starting prices for small online shops."
            realityCheck="Tidio relies on strict templates, so a slightly different or multi-part question can break the flow, and it lacks phone support for a growing team. SwanDigitals auto-trains on your content, adds native +91 voice, and handles 10 Indian languages, on flat rupee pricing. Where Tidio may fit better: very small shops that only need a simple chat widget for a few visitors a day."
            reasonsToSwitch={[
                {
                    title: "Smart AI vs Flowcharts",
                    description: "You do not need to build dozens of bot flows. SwanDigitals reads your website and help files and answers complex questions instantly."
                },
                {
                    title: "Native Phone Call AI",
                    description: "Tidio only handles text. SwanDigitals runs smart +91 voice agents to answer and make calls from the same dashboard."
                },
                {
                    title: "Local Indian Languages",
                    description: "Our AI understands Hinglish and 10 Indian languages natively, without slow translation plug-ins."
                }
            ]}
            comparisonRows={[
                { feature: "AI Automation Style", SwanDigitals: "Trains on your content", competitor: "Rigid Flow Templates" },
                { feature: "Native Voice AI", SwanDigitals: true, competitor: false },
                { feature: "Target Customer", SwanDigitals: "Growing Indian SMEs", competitor: "Very small shops" },
                { feature: "Indian Languages", SwanDigitals: "10 Indian languages", competitor: "Plugin-based translation" },
                { feature: "Data Hosting", SwanDigitals: "Hosted in India", competitor: "Global Servers" }
            ]}
            targetPersona="You are a very small shop that only needs a basic chat box to talk to a few visitors a day."
            verdict="You are a growing Indian SME that needs real AI automation plus voice across chat and phone, not rigid template flows."
            faqs={[
                {
                    question: "Where is my customer data stored and how is it secured?",
                    answer: "We host all customer data on servers in India, kept aware of India's DPDP Act 2023. Data is encrypted in transit and at rest, payments run through Razorpay, and there is no lock-in."
                },
                {
                    question: "How does Meta direct billing work for WhatsApp conversations?",
                    answer: "Instead of adding markup fees on your chats, we connect you directly to Meta's billing. You pay Meta directly at actual cost for your WhatsApp Business API conversations. We do not charge extra per message."
                },
                {
                    question: "Can I port my existing WhatsApp Business API number to SwanDigitals?",
                    answer: "Yes, you can easily port your existing WhatsApp number to our platform. There is no downtime. Your business profile, green tick status, and phone number remain exactly the same during the transition."
                },
                {
                    question: "How do we migrate our existing chats and ticket history from our previous CRM?",
                    answer: "Our team helps you import all your contact lists, historical chat logs, and support tickets from your previous tool. We make sure the migration is smooth and your agents do not lose any context during the switch."
                }
            ]}
        />
    );
}
