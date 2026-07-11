import type { Metadata } from 'next';
import WebinarsContent from './WebinarsContent';

export const metadata: Metadata = {
    title: 'SwanDigitals Webinars | AI for Indian Business Live Sessions',
    description: 'Join live and on-demand webinars about AI customer support, WhatsApp automation, and DPDP compliance for Indian enterprises.',
    alternates: {
        canonical: 'https://swandigitals.com/webinars',
    },
};

export default function WebinarsPage() {
    return <WebinarsContent />;
}
