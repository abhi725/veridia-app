"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function NewsroomPage() {
    const featuredNews = {
        title: "SwanDesk Launches: AI-Powered Customer Support Platform for Indian Businesses",
        date: "March 2026",
        excerpt: "Pune-based SwanDigitals launches SwanDesk, bringing enterprise-grade AI customer support to Indian SMBs and enterprises. Available now at chat.swandigitals.com.",
        category: "Product Launch"
    };

    const pressReleases = [
        { title: "SwanDesk Now Supports On-Premises Deployment for BFSI", date: "March 2026", category: "Product", excerpt: "SwanDesk's air-gapped on-premises mode — using secure local LLMs, offline speech-to-text models, and enterprise SIP trunking — is now available for banks and financial institutions requiring full data sovereignty under DPDP 2023." },
        { title: "Voice Bot Support Added: Hindi, Tamil, Telugu, and 8 More Indian Languages", date: "February 2026", category: "Product", excerpt: "SwanDesk Voice Bot now supports 10+ Indian languages via advanced cloud voice processors and private offline speech-to-text/synthesis engines, enabling phone support for Indian enterprises in their customers' native language." }
    ];

    const mediaKit = [
        { name: "Logo Pack", format: "PNG, SVG" },
        { name: "Product Screenshots", format: "PNG" },
        { name: "Company Fact Sheet", format: "PDF" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="📰 Newsroom"
                title="News & Press"
                subtitle="The latest news, press releases, and media resources from SwanDigitals"
                primaryCTA={{ text: "Press Inquiries", href: "/contact" }}
            />

            {/* Featured News */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <span className="text-white/80 text-sm font-semibold">{featuredNews.category.toUpperCase()}</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{featuredNews.title}</h2>
                    <p className="text-white/90 text-lg mb-4">{featuredNews.excerpt}</p>
                    <div className="flex items-center gap-4">
                        <span className="text-white/70">{featuredNews.date}</span>
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
                    <div className="space-y-6">
                        {pressReleases.map((pr, i) => (
                            <div key={i} className="flex flex-col p-6 border-2 border-slate-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{pr.category}</span>
                                        <span className="text-sm text-slate-500">{pr.date}</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{pr.title}</h3>
                                    <p className="text-slate-600 text-sm">{pr.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Kit */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Media Kit</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {mediaKit.map((item, i) => (
                            <div key={i} className="bg-slate-50 p-4 rounded-lg text-center hover:bg-slate-100 transition-colors cursor-pointer">
                                <div className="text-3xl mb-2">📁</div>
                                <h4 className="font-bold text-sm">{item.name}</h4>
                                <p className="text-xs text-slate-500">{item.format}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
                            Download Media Kit
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Press Contact</h2>
                    <p className="text-xl text-white/80 mb-8">For media inquiries, interviews, and press opportunities</p>
                    <div className="flex flex-col gap-2">
                        <a href="/contact" className="text-2xl font-bold text-orange-400 hover:underline">Contact Press Team</a>
                        <p className="text-white/70">Response within 24 hours</p>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
