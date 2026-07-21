'use client';

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Download, FileText, TrendingUp, Shield } from 'lucide-react';

export default function WhitepapersContent() {
    const whitepapers = [
        {
            title: "The SME Guide to WhatsApp Automation 2024",
            description: "A practical guide to setting up WhatsApp, Facebook, and web chat in one inbox for a small business",
            downloads: "Free guide",
            pages: 50,
            category: "Strategy",
            featured: true
        },
        {
            title: "ROI of AI Customer Engagement for Small Business",
            description: "A simple breakdown of time savings and follow-up improvements from automating chat and calls",
            downloads: "Free guide",
            pages: 25,
            category: "Business"
        },
        {
            title: "Data & Privacy Basics for Indian SMEs",
            description: "A plain-language look at DPDP Act 2023 basics and what it means for handling customer data",
            downloads: "Free guide",
            pages: 35,
            category: "Security"
        },
        {
            title: "Choosing a Customer Engagement Platform: A Buyer's Checklist",
            description: "What to look for — pricing, languages, WhatsApp support, and lock-in — when comparing providers",
            downloads: "Free guide",
            pages: 20,
            category: "Comparison"
        },
        {
            title: "Building Better Conversations: A Practical Guide",
            description: "Tips for designing WhatsApp and voice conversation flows that actually help your customers",
            downloads: "Free guide",
            pages: 40,
            category: "Technical"
        },
        {
            title: "Getting Started with SwanVoice: A Setup Playbook",
            description: "Step-by-step guide to setting up inbound reception and outbound follow-up calls on your +91 number",
            downloads: "Free guide",
            pages: 30,
            category: "Technical"
        }
    ];

    const featured = whitepapers.find(w => w.featured);

    return (
        <SiteLayout>
            <Hero
                badge="📄 Whitepapers"
                title="Practical Guides for Indian SMEs"
                subtitle="Straightforward guides on WhatsApp automation, AI calling, ROI, and getting started — written for small business owners, not enterprise IT"
                primaryCTA={{ text: "Browse Whitepapers", href: "#whitepapers" }}
            />

            {/* Featured */}
            {featured && (
                <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-40 h-52 bg-white rounded-lg shadow-xl flex items-center justify-center flex-shrink-0">
                                <FileText className="w-20 h-20 text-blue-600" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold mb-2">FEATURED WHITEPAPER</div>
                                <h2 className="text-3xl font-bold mb-4">{featured.title}</h2>
                                <p className="text-white/90 mb-4">{featured.description}</p>
                                <div className="flex gap-4 text-sm text-white/80 mb-6">
                                    <span>{featured.pages} pages</span>
                                    <span>•</span>
                                    <span>{featured.downloads}</span>
                                </div>
                                <button className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download Free
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* All Whitepapers */}
            <section id="whitepapers" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">All Whitepapers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whitepapers.map((wp, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-16 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{wp.category}</span>
                                        <h3 className="font-bold mt-2">{wp.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm mb-4">{wp.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="text-xs text-slate-500">
                                        {wp.pages} pages • {wp.downloads}
                                    </div>
                                    <button className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                        <Download className="w-4 h-4" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Browse by Topic</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: <TrendingUp className="w-6 h-6" />, name: "Strategy", count: 2 },
                            { icon: <Shield className="w-6 h-6" />, name: "Security", count: 1 },
                            { icon: <FileText className="w-6 h-6" />, name: "Technical", count: 2 },
                            { icon: <Download className="w-6 h-6" />, name: "Business", count: 1 }
                        ].map((cat, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-3">
                                    {cat.icon}
                                </div>
                                <h3 className="font-bold">{cat.name}</h3>
                                <p className="text-sm text-slate-500">{cat.count} guide{cat.count === 1 ? '' : 's'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}

