"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { MessageSquare, FileText, Users, Award, Video, HelpCircle } from 'lucide-react';

export default function CommunityPage() {
    const communities = [
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Discord Server",
            description: "Join 5,000+ developers and builders. Get help, share projects, and connect with the Veridia team.",
            members: "5,000+",
            cta: "Join Discord",
            color: "bg-indigo-500"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Slack Community",
            description: "Enterprise-focused discussions, best practices, and direct support from our solutions team.",
            members: "1,200+",
            cta: "Join Slack",
            color: "bg-purple-500"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "GitHub Discussions",
            description: "Open-source contributions, bug reports, and feature requests.",
            members: "800+",
            cta: "View GitHub",
            color: "bg-slate-800"
        }
    ];

    const resources = [
        { icon: <Video className="w-6 h-6" />, title: "Tutorial Videos", desc: "Step-by-step guides", link: "/videos" },
        { icon: <FileText className="w-6 h-6" />, title: "Documentation", desc: "Full API reference", link: "/documentation" },
        { icon: <HelpCircle className="w-6 h-6" />, title: "Help Center", desc: "FAQs & troubleshooting", link: "/documentation" },
        { icon: <Award className="w-6 h-6" />, title: "Certification", desc: "Get certified", link: "/ai-guide" }
    ];

    const topContributors = [
        { name: "Alex M.", contributions: 156, badge: "🏆" },
        { name: "Priya S.", contributions: 134, badge: "🥈" },
        { name: "Jordan K.", contributions: 98, badge: "🥉" },
        { name: "Sam T.", contributions: 87, badge: "⭐" }
    ];

    const upcomingEvents = [
        { title: "Weekly Office Hours", date: "Every Thursday 11 AM PT", type: "Live Q&A" },
        { title: "Building Multi-Turn Bots Workshop", date: "Jan 20, 2025", type: "Workshop" },
        { title: "Veridia Community Summit", date: "Feb 15, 2025", type: "Conference" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🤝 Community"
                title="Join the Veridia Community"
                subtitle="Connect with 7,000+ developers, builders, and AI enthusiasts. Get help, share your projects, and learn from experts."
                primaryCTA={{ text: "Join Discord", href: "#communities" }}
                secondaryCTA={{ text: "View Events", href: "#events" }}
            />

            {/* Stats */}
            <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">7,000+</div><div className="text-white/80">Members</div></div>
                        <div><div className="text-4xl font-bold">50+</div><div className="text-white/80">Countries</div></div>
                        <div><div className="text-4xl font-bold">10K+</div><div className="text-white/80">Messages/Month</div></div>
                        <div><div className="text-4xl font-bold">24/7</div><div className="text-white/80">Active Support</div></div>
                    </div>
                </div>
            </section>

            {/* Community Platforms */}
            <section id="communities" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Join a Community</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {communities.map((comm, i) => (
                            <div key={i} className="border-2 border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                                <div className={`w-16 h-16 ${comm.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                                    {comm.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{comm.title}</h3>
                                <p className="text-slate-600 mb-4">{comm.description}</p>
                                <p className="text-sm text-slate-500 mb-6">{comm.members} members</p>
                                <button className={`w-full py-3 ${comm.color} text-white rounded-full font-semibold hover:opacity-90 transition-opacity`}>
                                    {comm.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section id="events" className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
                    <div className="space-y-4">
                        {upcomingEvents.map((event, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between shadow-sm">
                                <div>
                                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{event.type}</span>
                                    <h3 className="font-bold text-lg mt-2">{event.title}</h3>
                                    <p className="text-slate-500 text-sm">{event.date}</p>
                                </div>
                                <button className="mt-4 md:mt-0 px-6 py-2 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition-colors">
                                    Register
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Contributors */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Top Contributors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {topContributors.map((contributor, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-2">{contributor.badge}</div>
                                <h4 className="font-bold">{contributor.name}</h4>
                                <p className="text-sm text-slate-500">{contributor.contributions} contributions</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Community Resources</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {resources.map((res, i) => (
                            <Link key={i} href={res.link} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mx-auto mb-3">
                                    {res.icon}
                                </div>
                                <h4 className="font-bold">{res.title}</h4>
                                <p className="text-sm text-slate-500">{res.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
                    <p className="text-xl text-white/80 mb-8">Start building with Veridia today and connect with the community</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Free Trial
                        </Link>
                        <button className="px-8 py-4 bg-indigo-500 text-white rounded-full font-semibold text-lg hover:bg-indigo-400 transition-all">
                            Join Discord
                        </button>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
