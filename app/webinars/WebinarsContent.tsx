'use client';

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function WebinarsContent() {
    const upcomingWebinars = [
        { title: "Designing WhatsApp Conversations That Resolve Queries Faster", date: "April 15, 2026", time: "11:00 AM IST", speaker: "Swati Gaikwad, Co-Founder @ SwanDigitals", type: "Strategy" },
        { title: "Cloud Hosting Explained: Where Your Data Actually Lives", date: "April 22, 2026", time: "10:00 AM IST", speaker: "Kiran Shelke, Co-Founder @ SwanDigitals", type: "Technical" },
        { title: "2026 AI Customer Engagement Trends for Indian SMEs", date: "May 5, 2026", time: "11:00 AM IST", speaker: "SwanDigitals Team", type: "Industry" }
    ];

    const recordings = [
        { title: "Building Multi-Turn Conversations That Convert", duration: "45 min", views: "Watch now", category: "Technical" },
        { title: "ROI Calculator: Measure Your AI Impact", duration: "30 min", views: "Watch now", category: "Business" },
        { title: "DPDP 2023 Basics for Customer Support Chatbots", duration: "60 min", views: "Watch now", category: "Compliance" },
        { title: "Getting Started with HubSpot & Calendly", duration: "40 min", views: "Watch now", category: "Technical" },
        { title: "Getting Started with WhatsApp Automation for Your Business", duration: "55 min", views: "Watch now", category: "Technical" },
        { title: "Customer Engagement Automation Best Practices", duration: "35 min", views: "Watch now", category: "Strategy" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🎙️ Webinars"
                title="Learn from the Experts"
                subtitle="Live and on-demand sessions on AI implementation, best practices, and customer success stories"
                primaryCTA={{ text: "View Upcoming", href: "#upcoming" }}
                secondaryCTA={{ text: "Watch Recordings", href: "#recordings" }}
            />

            {/* Upcoming */}
            <section id="upcoming" className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Upcoming Webinars</h2>
                    <div className="space-y-6">
                        {upcomingWebinars.map((webinar, i) => (
                            <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{webinar.type}</span>
                                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">LIVE</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                                    <p className="text-slate-600">{webinar.speaker}</p>
                                    <p className="text-sm text-slate-500 mt-2">{webinar.date} • {webinar.time}</p>
                                </div>
                                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold whitespace-nowrap hover:shadow-lg transition-all">
                                    Register Free
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recordings */}
            <section id="recordings" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">On-Demand Recordings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recordings.map((rec, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                                <div className="h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                                    <span className="text-4xl">🎬</span>
                                </div>
                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{rec.category}</span>
                                <h3 className="font-bold mt-3 mb-2">{rec.title}</h3>
                                <div className="flex justify-between text-sm text-slate-500">
                                    <span>{rec.duration}</span>
                                    <span>{rec.views}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Want a Private Session?</h2>
                    <p className="text-xl text-slate-600 mb-8">Schedule a personalized demo for your team</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                        Book a Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}

