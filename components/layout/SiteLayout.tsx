"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/ui/AnnouncementBar';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <AnnouncementBar />
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

