import type { Metadata } from 'next';
import HealthcareContent from './HealthcareContent';

export const metadata: Metadata = {
    title: 'Healthcare AI Chatbot India | Clinic & Hospital Automation',
    description: 'Empower your clinic or hospital with a 24/7 sovereign AI chatbot. Automated triage, patient scheduling, and SOAP notes. Fully HIPAA and DPDP compliant.',
    keywords: ['Healthcare AI Chatbot', 'Clinic Appointment Bot', 'Patient Triage AI', 'SOAP Note AI Generator', 'HIPAA Compliant Medical Bot'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/healthcare',
    },
};

export default function HealthcarePage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Solutions',
                item: 'https://swandigitals.com/solutions'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Healthcare',
                item: 'https://swandigitals.com/solutions/healthcare'
            }
        ]
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: "Is it difficult to set up? I'm not tech-savvy.",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Not at all. Our onboarding team handles the entire setup. You just answer 10 questions about your clinic, upload your FAQ document, and we do the rest. Most doctors are live within 48 hours without touching a single line of code."
                }
            },
            {
                '@type': 'Question',
                name: "Will it replace my front-desk staff?",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "No — it augments your staff. SwanDigitals handles the repetitive 80%: timings, fees, appointment requests, directions. Your front desk focuses on patients who are physically in the clinic and on tasks that truly need a human. They'll love it."
                }
            },
            {
                '@type': 'Question',
                name: "What if the AI gives wrong medical advice?",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "SwanDigitals is a communication and scheduling agent — not a diagnostic tool. It answers only from your pre-approved content. If a patient asks a medical question outside that scope, the agent politely refers them to book a consultation. You control what it knows and says."
                }
            },
            {
                '@type': 'Question',
                name: "Is patient data safe? What about DPDP compliance?",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Patient conversations are encrypted end-to-end and stored exclusively on India-based servers. We do not sell or share data with any third party. Our architecture is aligned with India's Digital Personal Data Protection (DPDP) Act. You remain the data controller at all times."
                }
            },
            {
                '@type': 'Question',
                name: "Which WhatsApp plan do I need?",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "We use the WhatsApp Business API (Meta partner). We help you get verified and set up in less than a week. The first 1,000 conversations per month are free via Meta's platform. After that, ultra-low per-conversation rates apply — we'll show you the exact cost estimate before you commit."
                }
            },
            {
                '@type': 'Question',
                name: "Can I customise the chatbot's language and personality?",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Absolutely. Growth and Enterprise plans include a custom AI persona — you can name the agent, set a warm or professional tone, choose default language, and even set greeting messages per channel. It sounds like your clinic, not a generic bot."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HealthcareContent />
        </>
    );
}
