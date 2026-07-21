import type { Metadata } from 'next';
import NewsroomContent from './NewsroomContent';

export const metadata: Metadata = {
    title: 'SwanDigitals Newsroom | Latest News & Press Releases',
    description: 'Latest news, press releases, and media coverage about SwanDigitals — customer engagement AI for Indian small and medium businesses.',
    alternates: {
        canonical: 'https://swandigitals.com/newsroom',
    },
};

export default function NewsroomPage() {
    return <NewsroomContent />;
}
