import type { Metadata } from 'next';
import NluContent from './NluContent';

export const metadata: Metadata = {
    title: 'Natural Language Understanding | SwanDigitals AI NLU Engine',
    description: 'SwanDigitals NLU engine understands customer intent, tone, and urgency in 10 Indian languages. Handles code-switching and Hinglish natively.',
    alternates: {
        canonical: 'https://swandigitals.com/features/nlu',
    },
};

export default function NluPage() {
    return <NluContent />;
}
