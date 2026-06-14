import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Tidio Alternative in India | Smart AI Support Automation',
    description: 'Tidio is fine for basic Shopify widgets. Switch to SwanDigitals for an AI Helpdesk that actually understands your customers in 10+ Indian languages.',
    keywords: ['Tidio alternative', 'Tidio vs SwanDigitals', 'Live chat automation India', 'E-commerce AI Agent'],
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
            heroSubtitle="Tidio keeps you trapped in basic templates. Upgrade to a smart AI Helpdesk built for real support and complex customer questions."
            aboutCompetitor="Tidio is a simple web chat tool, popular for Shopify and WordPress stores. It offers basic templates where you drag and drop options to build a bot."
            competitorStrengths="It is very fast to set up, has a clean design, and offers cheap starting prices for very small online shops."
            realityCheck="Tidio relies on strict templates. If a customer asks a slightly different or multi-part question, the system breaks. You have to build dozens of flows manually. Tidio also lacks phone call support and the strong ticket systems required as your team grows. It is a starter tool that you will soon outgrow."
            reasonsToSwitch={[
                {
                    title: "Smart AI vs Flowcharts",
                    description: "You do not need to build 50 bot flows. SwanDigitals reads your website and help files, answering complex questions instantly without manual rules."
                },
                {
                    title: "Native Phone Call AI",
                    description: "Tidio only handles text. SwanDigitals allows you to run smart voice agents to answer phone calls in the same dashboard."
                },
                {
                    title: "Local Indian Languages",
                    description: "Our AI understands Hinglish and 10+ Indian languages natively. Global tools fail here because they rely on slow translation plug-ins."
                }
            ]}
            comparisonRows={[
                { feature: "AI Automation Style", SwanDigitals: "Smart Document Reading AI", competitor: "Rigid Flow Templates" },
                { feature: "Native Voice AI", SwanDigitals: true, competitor: false },
                { feature: "Target Customer", SwanDigitals: "Growing Brands & Teams", competitor: "Very Small Shopify Stores" },
                { feature: "Indian Language NLP", SwanDigitals: "Native & Highly Accurate", competitor: "Plugin-Based Translation" },
                { feature: "Data Residency", SwanDigitals: "100% India", competitor: "Global Servers" }
            ]}
            targetPersona="You are a single seller who just started a store and only needs a basic chat box to talk to a few visitors a day."
            verdict="You are a growing business that needs to handle thousands of complex questions automatically using real AI, not strict rules."
            faqs={[
                {
                    question: "Where is my customer data stored and how is it secured?",
                    answer: "We store all customer data on secure servers in India. This keeps your business compliant with local laws like the DPDP Act. We use AES-256 encryption for data at rest and TLS for data in transit to keep your files safe."
                },
                {
                    question: "How does Meta direct billing work for WhatsApp conversations?",
                    answer: "Instead of adding extra markup fees on your chats, we connect you directly to Meta's billing. You pay Meta directly at actual cost for your WhatsApp Business API conversations. We do not charge extra fees per message."
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
