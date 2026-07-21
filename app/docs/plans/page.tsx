import { redirect } from 'next/navigation';

// Pricing lives on a single source of truth (/pricing) to avoid conflicting numbers.
export default function SwanPlansPage() {
    redirect('/pricing');
}
