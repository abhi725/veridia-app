"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import FAQ from '@/components/ui/FAQ';
import { Headphones, TrendingUp, Clock, Users, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function CustomerServicePage() {
    const benefits = [
        { icon: <Headphones className="w-6 h-6" />, title: "90% Ticket Automation", description: "Resolve 9 out of 10 customer queries without human intervention using AI-powered responses." },
        { icon: <TrendingUp className="w-6 h-6" />, title: "40% CSAT Increase", description: "Faster resolution times and 24/7 availability dramatically improve customer satisfaction." },
        { icon: <Clock className="w-6 h-6" />, title: "< 2 Second Response", description: "Instant responses powered by edge computing and optimized AI models." },
        { icon: <Users className="w-6 h-6" />, title: "Seamless Handoff", description: "Smart routing transfers complex issues to the right agent with full context." },
        { icon: <Zap className="w-6 h-6" />, title: "60% Cost Reduction", description: "Slash operational costs by automating repetitive queries and reducing agent workload." },
        { icon: <BarChart3 className="w-6 h-6" />, title: "Real-Time Analytics", description: "Track resolution rates, sentiment, and identify improvement opportunities." }
    ];

    const faqItems = [
        { question: "How does Veridia handle complex queries?", answer: "Our AI uses multi-turn conversation management and context retention to handle complex queries. When needed, it seamlessly hands off to human agents with full conversation history." },
        { question: "Can it integrate with our existing helpdesk?", answer: "Yes! We have pre-built integrations with Zendesk, Freshdesk, Salesforce Service Cloud, Intercom, and 50+ other platforms. Custom integrations are also available." },
        { question: "What languages are supported?", answer: "Veridia supports 100+ languages out of the box, with automatic language detection and culturally-aware responses." },
        { question: "How long does implementation take?", answer: "Most customer service deployments go live in 2-4 weeks, including training and integration. Compare this to 3-6 months with Kore.ai." }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🎧 Customer Service Automation"
                title="Slash Support Costs by 60%"
                subtitle="Automate 90% of customer queries with AI that truly understands. Like Yellow.ai's customer service solution, but with true on-premise deployment for regulated industries."
                primaryCTA={{ text: "See Demo", href: "/demo" }}
                secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
            />

            {/* Stats Section - Like Yellow.ai */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
                            <div className="text-slate-600">Automation Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
                            <div className="text-slate-600">Cost Reduction</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">40%</div>
                            <div className="text-slate-600">CSAT Increase</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">&lt;2s</div>
                            <div className="text-slate-600">Response Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Customer Service Challenges We Solve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { challenge: "High support ticket volume overwhelming agents", solution: "Automate 90% of repetitive queries" },
                            { challenge: "Long wait times frustrating customers", solution: "Instant 24/7 AI-powered responses" },
                            { challenge: "Inconsistent answers across agents", solution: "Unified knowledge base with AI consistency" },
                            { challenge: "Rising support costs eroding margins", solution: "60% cost reduction through automation" },
                            { challenge: "Lack of after-hours support", solution: "24/7 availability without hiring night shifts" },
                            { challenge: "Poor visibility into customer sentiment", solution: "Real-time sentiment analysis and alerts" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="text-red-500 font-medium mb-2">❌ {item.challenge}</div>
                                <div className="text-green-600 font-medium">✅ {item.solution}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <FeatureGrid features={benefits} />

            {/* Case Study Embed */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="text-sm text-orange-600 font-semibold mb-2">CASE STUDY</div>
                        <h3 className="text-2xl font-bold mb-4">FinanceOne Achieves 85% Automation in 30 Days</h3>
                        <p className="text-lg text-slate-600 mb-6">
                            "We switched from Kore.ai after 6 months of struggling with implementation. Veridia was live in 3 weeks and hit 85% automation rate within the first month. Our CSAT jumped from 72% to 91%."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                            <div>
                                <div className="font-bold">Sarah Johnson</div>
                                <div className="text-slate-600">CTO, FinanceOne</div>
                            </div>
                        </div>
                        <Link href="/case-studies" className="inline-block mt-6 text-orange-600 font-semibold hover:underline">
                            Read full case study →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Works With Your Existing Tools</h2>
                    <p className="text-xl text-slate-600 mb-12">Pre-built integrations with leading helpdesk and CRM platforms</p>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                        {['Zendesk 🎫', 'Freshdesk 🟢', 'Salesforce ☁️', 'Intercom 💬', 'HubSpot 🔶', 'ServiceNow 🔧'].map((tool, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-lg text-center font-medium">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <Link href="/integrations" className="inline-block mt-8 text-orange-600 font-semibold hover:underline">
                        View all 75+ integrations →
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={faqItems} />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
                    <p className="text-xl text-white/80 mb-8">See how Veridia can automate 90% of your support tickets</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get Your Free Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
