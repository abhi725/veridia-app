import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Security',
    description: 'Enterprise security features for SwanDigitals AI platform.',
}

export default function SecurityPage() {
    redirect('/platform#security');
}
