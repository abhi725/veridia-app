import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Deployment | Cloud SaaS, Hosted in India',
    description: 'SwanDigitals runs as a hosted cloud SaaS platform for Indian SMEs, with data hosted in India. Live in days, no infrastructure to manage.',
    alternates: {
        canonical: 'https://swandigitals.com/deployment',
    },
}

export default function DeploymentPage() {
    redirect('/platform#deployment');
}
