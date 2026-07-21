import type { Metadata } from 'next';
import WebinarsContent from './WebinarsContent';

export const metadata: Metadata = {
    title: 'SwanDigitals Webinars | AI for Indian Small Business',
    description: 'Join live and on-demand sessions about WhatsApp automation, AI calling, and data privacy basics for Indian small and medium businesses.',
    alternates: {
        canonical: 'https://swandigitals.com/webinars',
    },
};

export default function WebinarsPage() {
    return <WebinarsContent />;
}
