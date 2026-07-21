import type { Metadata } from 'next';
import VideosContent from './VideosContent';

export const metadata: Metadata = {
    title: 'SwanDigitals Video Library | Tutorials & Demos',
    description: 'Watch SwanDigitals tutorial videos and product demos. Learn to set up your WhatsApp inbox, configure your voice agent, and connect integrations step by step.',
    alternates: {
        canonical: 'https://swandigitals.com/videos',
    },
};

export default function VideosPage() {
    return <VideosContent />;
}
