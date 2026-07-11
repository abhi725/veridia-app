import type { Metadata } from 'next';
import VideosContent from './VideosContent';

export const metadata: Metadata = {
    title: 'SwanDigitals Video Library | AI Platform Tutorials & Demos',
    description: 'Watch SwanDigitals tutorial videos and product demos. Learn to build AI chatbots, configure voice agents, and set up integrations step by step.',
    alternates: {
        canonical: 'https://swandigitals.com/videos',
    },
};

export default function VideosPage() {
    return <VideosContent />;
}
