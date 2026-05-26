import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'On-Premise & Cloud Deployment | Air-Gapped AI for BFSI',
    description: 'Deploy SwanDigitals on-premise, private cloud, or SaaS. Air-gapped deployment for banks and regulated industries. 100% India data residency.',
    alternates: {
        canonical: 'https://swandigitals.com/deployment',
    },
}

export default function DeploymentPage() {
    redirect('/platform#deployment');
}
