import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Tawk.to Alternative in India | AI Chat & Voice for SMEs',
    description: 'Tawk.to is free but basic. SwanDigitals adds self-training AI, native +91 voice, and one inbox for chat and calls, on flat rupee pricing.',
    keywords: ['Tawk.to alternative', 'Tawk.to vs SwanDigitals', 'AI Live Chat India', 'AI Chatbot India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-tawkto',
    },
}

export default function VsTawktoPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Tawk.to"
            slug="vs-tawkto"
            heroTitle="The Real Cost of 'Free' Chat Widgets"
            heroSubtitle="Tawk.to is free but relies on your team staying online. Switch to AI that trains on your content and native +91 voice, in one inbox."
            aboutCompetitor="Tawk.to is a popular, free live chat widget. It makes money by charging to remove branding or by renting out agents to run your chat."
            competitorStrengths="Free to start, with a basic chat window you can add to your website in a few minutes."
            realityCheck="Tawk.to depends on your team being online, and when agents go offline customers get a form, not answers. Its automation is basic and it has no phone support. SwanDigitals adds self-training AI, native +91 voice and one inbox for every channel. Where Tawk.to may fit better: a small site or blog on zero budget that just needs a simple chat bubble."
            reasonsToSwitch={[
                {
                    title: "AI That Trains on Your Content",
                    description: "Stop spending staff time on repeat questions. Our AI reads your documents and answers routine customer chats instantly."
                },
                {
                    title: "A Cleaner Brand Experience",
                    description: "Get a clean, white-labeled chat widget that matches your design and builds trust, instead of ad-supported branding."
                },
                {
                    title: "One Inbox for Every Channel",
                    description: "Tawk.to only handles website chat. SwanDigitals brings WhatsApp, Facebook, web chat and +91 voice into one dashboard."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Value", SwanDigitals: "AI + human, chat + voice", competitor: "Free Manual Live Chat" },
                { feature: "AI Capabilities", SwanDigitals: "Trains on your content", competitor: "None / Very Basic" },
                { feature: "Brand Experience", SwanDigitals: "White-Labeled", competitor: "Ad-Supported" },
                { feature: "Native Voice AI", SwanDigitals: true, competitor: false },
                { feature: "WhatsApp Integration", SwanDigitals: "Deep Native Connection", competitor: "Limited / Add-On" }
            ]}
            targetPersona="You are a small blog or personal site on zero budget that just needs a simple chat bubble."
            verdict="You are a growing Indian SME that wants AI automation, voice and a clean brand experience across every channel."
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
