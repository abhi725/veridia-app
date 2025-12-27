"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function NewsroomPage() {
    const featuredNews = {
        title: "Veridia Raises $40M Series B to Accelerate Enterprise AI Adoption",
        date: "December 15, 2024",
        excerpt: "Funding led by Sequoia Capital will fuel product development and global expansion...",
        category: "Funding"
    };

    const pressReleases = [
        { title: "Veridia Named Leader in Gartner Magic Quadrant for Conversational AI", date: "Dec 10, 2024", category: "Recognition" },
        { title: "Veridia Launches True On-Premise Deployment for Regulated Industries", date: "Nov 28, 2024", category: "Product" },
        { title: "FinanceOne Achieves 85% Automation with Veridia AI", date: "Nov 15, 2024", category: "Customer" },
        { title: "Veridia Expands to European Market with Frankfurt Data Center", date: "Oct 30, 2024", category: "Expansion" },
        { title: "New Partnership with AWS to Deliver Scalable AI Solutions", date: "Oct 15, 2024", category: "Partnership" },
        { title: "Veridia Wins G2 Best AI Platform Award Q3 2024", date: "Sep 28, 2024", category: "Recognition" }
    ];

    const mediaKit = [
        { name: "Logo Pack", format: "PNG, SVG" },
        { name: "Product Screenshots", format: "PNG" },
        { name: "Executive Photos", format: "JPG" },
        { name: "Company Fact Sheet", format: "PDF" }
    ];

    const inTheNews = [
        { title: "How Veridia is Disrupting the $15B Chatbot Market", source: "TechCrunch", date: "Dec 2024" },
        { title: "The Rise of On-Premise AI: Veridia's Unique Approach", source: "Forbes", date: "Nov 2024" },
        { title: "10 AI Startups to Watch in 2025", source: "Wired", date: "Nov 2024" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="📰 Newsroom"
                title="News & Press"
                subtitle="The latest news, press releases, and media resources from Veridia"
                primaryCTA={{ text: "Press Inquiries", href: "mailto:press@veridia.ai" }}
            />

            {/* Featured News */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <span className="text-white/80 text-sm font-semibold">{featuredNews.category.toUpperCase()}</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{featuredNews.title}</h2>
                    <p className="text-white/90 text-lg mb-4">{featuredNews.excerpt}</p>
                    <div className="flex items-center gap-4">
                        <span className="text-white/70">{featuredNews.date}</span>
                        <Link href="#" className="text-white font-semibold hover:underline">Read More →</Link>
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
                    <div className="space-y-6">
                        {pressReleases.map((pr, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 border-2 border-slate-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all cursor-pointer">
                                <div>
                                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{pr.category}</span>
                                    <h3 className="font-bold text-lg mt-2">{pr.title}</h3>
                                </div>
                                <div className="flex items-center gap-4 mt-3 md:mt-0">
                                    <span className="text-sm text-slate-500">{pr.date}</span>
                                    <span className="text-purple-600 font-semibold text-sm">Read →</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* In The News */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">In The News</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {inTheNews.map((article, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-xs text-slate-500 mb-2">{article.source} • {article.date}</p>
                                <h3 className="font-bold">{article.title}</h3>
                                <Link href="#" className="text-purple-600 text-sm font-semibold mt-3 inline-block hover:underline">Read Article →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Kit */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Media Kit</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                        <a href="mailto:press@veridia.ai" className="text-2xl font-bold text-orange-400 hover:underline">press@veridia.ai</a>
                        <p className="text-white/70">Response within 24 hours</p>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
