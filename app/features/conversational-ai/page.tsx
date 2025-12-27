"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { MessageSquare, Brain, Zap, Users, Shield, Globe } from 'lucide-react';

export default function ConversationalAIPage() {
    const capabilities = [
        { icon: <MessageSquare className="w-6 h-6" />, title: "Multi-Turn Conversations", desc: "Remember context across 100+ message exchanges. Handle complex, multi-step interactions naturally." },
        { icon: <Brain className="w-6 h-6" />, title: "Context Awareness", desc: "Understand references to previous topics, maintain state across sessions, and personalize responses." },
        { icon: <Zap className="w-6 h-6" />, title: "Instant Responses", desc: "<100ms response latency. Feel as fast as talking to a human, even at scale." },
        { icon: <Users className="w-6 h-6" />, title: "Personality Customization", desc: "Define your brand voice, tone, and personality. Create consistent on-brand experiences." },
        { icon: <Shield className="w-6 h-6" />, title: "Safe Responses", desc: "Built-in guardrails prevent harmful outputs, hallucinations, and off-topic responses." },
        { icon: <Globe className="w-6 h-6" />, title: "100+ Languages", desc: "Native multilingual support with automatic language detection and translation." }
    ];

    const models = [
        { name: "Gemini Pro", desc: "Google's most capable model for complex reasoning and generation", use: "Enterprise conversations" },
        { name: "Gemini Flash", desc: "Optimized for speed and cost-efficiency", use: "High-volume support" },
        { name: "Rasa NLU", desc: "Open-source NLU for privacy-focused deployments", use: "On-premise setups" },
        { name: "Custom Models", desc: "Fine-tuned models for domain-specific terminology", use: "Specialized industries" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="💬 Conversational AI"
                title="AI That Actually Converses"
                subtitle="Powered by Gemini and Rasa. Multi-turn conversations that remember context, understand nuance, and feel natural."
                primaryCTA={{ text: "See It in Action", href: "/demo" }}
                secondaryCTA={{ text: "View All Features", href: "/features" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">&lt;100ms</div><div className="text-white/80">Response Time</div></div>
                        <div><div className="text-4xl font-bold">100+</div><div className="text-white/80">Turn Memory</div></div>
                        <div><div className="text-4xl font-bold">97%</div><div className="text-white/80">Accuracy Rate</div></div>
                        <div><div className="text-4xl font-bold">100+</div><div className="text-white/80">Languages</div></div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Conversational Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="p-6 border-2 border-slate-200 rounded-xl hover:border-purple-300 transition-colors">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                                    {cap.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                                <p className="text-slate-600">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Models */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Powered by Leading AI Models</h2>
                    <div className="space-y-6">
                        {models.map((model, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-lg">{model.name}</h3>
                                    <p className="text-slate-600">{model.desc}</p>
                                </div>
                                <span className="text-sm bg-purple-100 text-purple-700 px-4 py-2 rounded-full whitespace-nowrap">{model.use}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Example Conversation */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">See It in Action</h2>
                    <div className="bg-slate-900 rounded-2xl p-6 space-y-4">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <div className="bg-slate-800 rounded-lg p-3 text-white max-w-xs">Hi, I need to track my order #12345</div>
                        </div>
                        <div className="flex gap-3 justify-end">
                            <div className="bg-purple-500 rounded-lg p-3 text-white max-w-xs">I found your order! It shipped yesterday and is expected to arrive Thursday. Would you like me to send the tracking link?</div>
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex-shrink-0"></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <div className="bg-slate-800 rounded-lg p-3 text-white max-w-xs">Yes, and can you also tell me if my discount was applied?</div>
                        </div>
                        <div className="flex gap-3 justify-end">
                            <div className="bg-purple-500 rounded-lg p-3 text-white max-w-xs">Here's your tracking: track.veridia.ai/12345. And yes, your 10% loyalty discount saved you $24.50 on this order! 🎉</div>
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex-shrink-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Build Natural Conversations?</h2>
                    <p className="text-xl text-white/80 mb-8">See how our conversational AI handles your specific use cases</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get a Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
