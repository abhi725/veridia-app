"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Play, Monitor, MessageSquare, Users, Settings, TrendingUp } from 'lucide-react';

export default function DemoHubPage() {
    const demos = [
        {
            title: "Customer Service Bot",
            description: "See how Veridia handles complex support inquiries with context-aware responses",
            duration: "5 min",
            icon: <MessageSquare className="w-6 h-6" />,
            category: "Use Case"
        },
        {
            title: "Platform Walkthrough",
            description: "Full tour of the Veridia platform: builder, analytics, and deployment",
            duration: "10 min",
            icon: <Monitor className="w-6 h-6" />,
            category: "Platform"
        },
        {
            title: "Multi-Turn Conversations",
            description: "Watch how our NLU handles complex multi-turn dialogue with context",
            duration: "4 min",
            icon: <Users className="w-6 h-6" />,
            category: "Feature"
        },
        {
            title: "Integration Setup",
            description: "Connect Veridia to Zendesk, Salesforce, and Slack in minutes",
            duration: "6 min",
            icon: <Settings className="w-6 h-6" />,
            category: "Setup"
        },
        {
            title: "Analytics Dashboard",
            description: "Explore real-time metrics, conversation insights, and ROI tracking",
            duration: "5 min",
            icon: <TrendingUp className="w-6 h-6" />,
            category: "Feature"
        },
        {
            title: "Live Agent Handoff",
            description: "See seamless escalation from bot to human agent with full context",
            duration: "3 min",
            icon: <Users className="w-6 h-6" />,
            category: "Feature"
        }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🎬 Demo Hub"
                title="See Veridia in Action"
                subtitle="Interactive product demos and walkthroughs. No signup required."
                primaryCTA={{ text: "Book Live Demo", href: "/demo" }}
                secondaryCTA={{ text: "Start Free Trial", href: "/demo" }}
            />

            {/* Featured Demo */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-white/80 text-sm font-semibold">FEATURED DEMO</span>
                        <h2 className="text-3xl font-bold mt-2">Complete Platform Overview</h2>
                    </div>
                    <div className="bg-black/30 backdrop-blur-md rounded-2xl aspect-video flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                            <Play className="w-10 h-10 fill-white text-white ml-1" />
                        </div>
                    </div>
                    <p className="text-center mt-6 text-white/90">
                        10 minute walkthrough of the complete Veridia platform - from building your first bot to analyzing results.
                    </p>
                </div>
            </section>

            {/* All Demos */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Explore All Demos</h2>
                    <p className="text-slate-600 text-center mb-12">Watch interactive demos of specific features and use cases</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {demos.map((demo, i) => (
                            <div key={i} className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                                        {demo.icon}
                                    </div>
                                    <div>
                                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{demo.category}</span>
                                        <h3 className="font-bold text-lg mt-1">{demo.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm mb-4">{demo.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500">{demo.duration}</span>
                                    <button className="text-purple-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                        <Play className="w-4 h-4" />
                                        Watch Demo
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Want a Personalized Demo?</h2>
                    <p className="text-xl text-slate-600 mb-8">Schedule a live walkthrough with our team tailored to your use case</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Book Live Demo
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
