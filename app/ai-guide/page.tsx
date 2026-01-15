"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { BookOpen, Target, Zap, Brain, MessageSquare, BarChart3 } from 'lucide-react';

export default function AIGuidePage() {
    const chapters = [
        { icon: <BookOpen className="w-6 h-6" />, num: 1, title: "Introduction to AI Chatbots", desc: "What are AI chatbots, how do they work, and why do businesses need them?", time: "15 min" },
        { icon: <Brain className="w-6 h-6" />, num: 2, title: "Understanding NLU", desc: "Intent detection, entity extraction, and how AI understands language", time: "25 min" },
        { icon: <MessageSquare className="w-6 h-6" />, num: 3, title: "Conversation Design", desc: "Building natural dialog flows that users love", time: "30 min" },
        { icon: <Zap className="w-6 h-6" />, num: 4, title: "Deployment Strategies", desc: "Cloud vs on-premise, channels, and scaling considerations", time: "20 min" },
        { icon: <Target className="w-6 h-6" />, num: 5, title: "Measuring Success", desc: "KPIs, analytics, and continuous improvement", time: "20 min" },
        { icon: <BarChart3 className="w-6 h-6" />, num: 6, title: "ROI & Business Impact", desc: "Calculating and maximizing the value of AI chatbots", time: "25 min" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="📚 AI Guide"
                title="The Complete Guide to AI Chatbots"
                subtitle="From beginner to expert. Everything you need to know about building, deploying, and scaling AI chatbots for enterprise."
                primaryCTA={{ text: "Start Learning", href: "#chapters" }}
                secondaryCTA={{ text: "Download PDF", href: "#" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">6</div><div className="text-white/80">Chapters</div></div>
                        <div><div className="text-4xl font-bold">2+ hrs</div><div className="text-white/80">Content</div></div>
                        <div><div className="text-4xl font-bold">Free</div><div className="text-white/80">Forever</div></div>
                        <div><div className="text-4xl font-bold">10K+</div><div className="text-white/80">Readers</div></div>
                    </div>
                </div>
            </section>

            {/* Chapters */}
            <section id="chapters" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Course Chapters</h2>
                    <div className="space-y-4">
                        {chapters.map((chapter, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                                        {chapter.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-purple-600 font-semibold">CHAPTER {chapter.num}</div>
                                        <h3 className="text-lg font-bold">{chapter.title}</h3>
                                        <p className="text-slate-600 text-sm">{chapter.desc}</p>
                                    </div>
                                    <div className="text-sm text-slate-500 whitespace-nowrap">{chapter.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "How AI chatbots work under the hood",
                            "Building conversation flows users love",
                            "Training AI to understand your domain",
                            "Choosing between cloud and on-premise",
                            "Integrating with existing systems",
                            "Measuring ROI and business impact",
                            "Scaling from 100 to 10M conversations",
                            "Best practices from 500+ deployments"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                                <span className="text-green-600 text-xl">✓</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Build Your First Chatbot?</h2>
                    <p className="text-xl text-white/80 mb-8">Put your learning into practice with a free trial</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Start Free Trial
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
