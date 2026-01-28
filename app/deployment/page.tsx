import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Deployment Options | SwanDigitals',
    description: 'On-premise or cloud deployment options for SwanDigitals AI platform.',
}

export default function DeploymentPage() {
    redirect('/platform#deployment');
}
