"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function VideosPage() {
    const categories = [
        { name: "Product Demos", count: 12 },
        { name: "Tutorials", count: 18 },
        { name: "Customer Stories", count: 8 },
        { name: "Expert Talks", count: 6 }
    ];

    const featuredVideo = {
        title: "Veridia Platform Overview - 3 Minute Demo",
        description: "See how easy it is to build, deploy, and scale AI chatbots with Veridia",
        duration: "3:24"
    };

    const videos = [
        { title: "Getting Started with Veridia", category: "Tutorial", duration: "8:45", views: "5.2K" },
        { title: "Building Your First Chatbot", category: "Tutorial", duration: "12:30", views: "4.1K" },
        { title: "FinanceOne Customer Story", category: "Customer Story", duration: "4:20", views: "2.8K" },
        { title: "Advanced NLU Training", category: "Tutorial", duration: "15:10", views: "1.9K" },
        { title: "Integrating with Salesforce", category: "Tutorial", duration: "10:45", views: "3.2K" },
        { title: "Analytics Dashboard Walkthrough", category: "Demo", duration: "6:30", views: "2.4K" },
        { title: "HealthPlus HIPAA Implementation", category: "Customer Story", duration: "5:15", views: "1.5K" },
        { title: "Deploying to WhatsApp", category: "Tutorial", duration: "7:20", views: "2.1K" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🎬 Video Library"
                title="Learn Veridia Through Video"
                subtitle="Product demos, tutorials, customer stories, and expert talks to help you succeed"
                primaryCTA={{ text: "Browse Videos", href: "#videos" }}
                secondaryCTA={{ text: "YouTube Channel", href: "https://youtube.com" }}
            />

            {/* Featured Video */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8">
                        <div className="aspect-video bg-black/50 rounded-xl mb-6 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                                <span className="text-4xl ml-1">▶</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-white/80 text-sm">{featuredVideo.duration}</span>
                            <h2 className="text-2xl font-bold mt-2">{featuredVideo.title}</h2>
                            <p className="text-white/80 mt-2">{featuredVideo.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-medium">All ({videos.length})</button>
                        {categories.map((cat, i) => (
                            <button key={i} className="px-6 py-2 bg-slate-100 text-slate-700 rounded-full font-medium hover:bg-slate-200 transition-colors">
                                {cat.name} ({cat.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Grid */}
            <section id="videos" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {videos.map((video, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl mb-3 relative overflow-hidden group-hover:shadow-lg transition-shadow">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-white text-lg ml-0.5">▶</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        {video.duration}
                                    </div>
                                </div>
                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{video.category}</span>
                                <h3 className="font-bold mt-2 group-hover:text-orange-600 transition-colors">{video.title}</h3>
                                <p className="text-sm text-slate-500 mt-1">{video.views} views</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Want a Personalized Walkthrough?</h2>
                    <p className="text-xl text-slate-600 mb-8">Schedule a live demo with our team</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Book a Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
