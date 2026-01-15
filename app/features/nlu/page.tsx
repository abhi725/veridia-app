"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Brain, Target, MessageSquare, Smile, Languages, Zap } from 'lucide-react';

export default function NLUPage() {
    const capabilities = [
        { icon: <Target className="w-6 h-6" />, title: "Intent Detection", desc: "Accurately identify what users want to accomplish from their natural language input" },
        { icon: <MessageSquare className="w-6 h-6" />, title: "Entity Extraction", desc: "Pull out key information like dates, names, products, and custom entities" },
        { icon: <Smile className="w-6 h-6" />, title: "Sentiment Analysis", desc: "Detect user emotions and satisfaction levels in real-time" },
        { icon: <Languages className="w-6 h-6" />, title: "Language Detection", desc: "Automatically detect and respond in the user's language" },
        { icon: <Brain className="w-6 h-6" />, title: "Contextual Understanding", desc: "Understand references to previous messages and conversation context" },
        { icon: <Zap className="w-6 h-6" />, title: "Disambiguation", desc: "Handle ambiguous inputs by asking clarifying questions naturally" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🧠 Natural Language Understanding"
                title="Understand What Users Really Mean"
                subtitle="Advanced NLU powered by Gemini and Rasa. 97%+ accuracy in intent detection across 100+ languages."
                primaryCTA={{ text: "See NLU Demo", href: "/demo" }}
                secondaryCTA={{ text: "View All Features", href: "/features" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">97%+</div><div className="text-white/80">Intent Accuracy</div></div>
                        <div><div className="text-4xl font-bold">100+</div><div className="text-white/80">Languages</div></div>
                        <div><div className="text-4xl font-bold">50+</div><div className="text-white/80">Entity Types</div></div>
                        <div><div className="text-4xl font-bold">&lt;50ms</div><div className="text-white/80">Processing Time</div></div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">NLU Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="p-6 border-2 border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                    {cap.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                                <p className="text-slate-600">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How NLU Works</h2>
                    <div className="bg-white rounded-2xl p-8">
                        <div className="space-y-6">
                            <div className="p-4 bg-slate-100 rounded-lg">
                                <div className="text-sm text-slate-500 mb-2">User Input:</div>
                                <div className="font-mono">"I want to cancel my subscription starting next month"</div>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-2xl">↓</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <div className="text-sm text-blue-600 font-semibold mb-2">Intent</div>
                                    <div className="font-mono text-sm">cancel_subscription</div>
                                    <div className="text-xs text-slate-500 mt-1">Confidence: 98.2%</div>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <div className="text-sm text-green-600 font-semibold mb-2">Entities</div>
                                    <div className="font-mono text-sm">start_date: next_month</div>
                                    <div className="text-xs text-slate-500 mt-1">Type: relative_date</div>
                                </div>
                                <div className="p-4 bg-orange-50 rounded-lg">
                                    <div className="text-sm text-orange-600 font-semibold mb-2">Sentiment</div>
                                    <div className="font-mono text-sm">Neutral</div>
                                    <div className="text-xs text-slate-500 mt-1">Score: 0.45</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Easy Model Training</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                                <div>
                                    <h3 className="font-bold mb-1">Define Intents</h3>
                                    <p className="text-slate-600 text-sm">Create intents for each user goal (e.g., "track_order", "cancel_subscription")</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                                <div>
                                    <h3 className="font-bold mb-1">Add Training Examples</h3>
                                    <p className="text-slate-600 text-sm">Provide sample phrases users might say for each intent</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                                <div>
                                    <h3 className="font-bold mb-1">Train & Deploy</h3>
                                    <p className="text-slate-600 text-sm">One-click training with automatic deployment</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                                <div>
                                    <h3 className="font-bold mb-1">Continuous Improvement</h3>
                                    <p className="text-slate-600 text-sm">Active learning suggests improvements from real conversations</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 rounded-xl p-6 flex items-center justify-center">
                            <div className="text-6xl">🧠</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready for 97%+ Accuracy?</h2>
                    <p className="text-xl text-white/80 mb-8">See how our NLU handles your specific domain</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get a Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
