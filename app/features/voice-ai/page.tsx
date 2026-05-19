"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import { Phone, Mic, Languages, Clock, BarChart3, Zap, PhoneCall, Users, Settings, Globe } from 'lucide-react';
import Link from 'next/link';

export default function VoiceAIPage() {
    const features = [
        {
            icon: <Mic className="w-8 h-8" />,
            title: "Human-Like Conversations",
            description: "Natural voice with <500ms latency. Handles interruptions, understands context, and responds like a human agent."
        },
        {
            icon: <Languages className="w-8 h-8" />,
            title: "10+ Indian Languages",
            description: "Native support for Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati, Kannada, Malayalam, and more with regional accents."
        },
        {
            icon: <PhoneCall className="w-8 h-8" />,
            title: "Inbound & Outbound",
            description: "Handle incoming customer calls 24/7 and automate outbound campaigns for collections, surveys, and notifications."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Batch Calling",
            description: "Scale outreach with 100s of simultaneous calls. Perfect for collections, announcements, and lead qualification."
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "Real-Time Actions",
            description: "Transfer to agents, book appointments, fetch data, and execute transactions — all during the call."
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Call Analytics",
            description: "Automatic transcripts, call summaries, sentiment analysis, and recordings for every conversation."
        }
    ];

    const useCases = [
        {
            title: "Customer Support",
            description: "24/7 phone support without hiring night shifts. Handle FAQs, order status, and troubleshooting.",
            stats: "70% call deflection"
        },
        {
            title: "Collections",
            description: "Automated payment reminders with personalized, polite conversations. Schedule callbacks when needed.",
            stats: "40% recovery rate increase"
        },
        {
            title: "Appointment Booking",
            description: "Patients and customers can book, reschedule, or cancel appointments via natural phone conversations.",
            stats: "90% booking completion"
        },
        {
            title: "Lead Qualification",
            description: "Qualify inbound leads instantly. Ask qualifying questions, score leads, route to sales.",
            stats: "3x qualified leads"
        },
        {
            title: "Surveys & Feedback",
            description: "Conduct post-call surveys and NPS collection with higher response rates than SMS or email.",
            stats: "50% higher response"
        },
        {
            title: "Banking & Finance",
            description: "Balance inquiries, fund transfers, card blocks, loan status — secure voice banking.",
            stats: "Bank-grade security"
        }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🎙️ Voice AI Platform"
                title="AI Voice Agents That Sound Human"
                subtitle="Forget robotic IVRs. SwanDigitals's voice agents have natural conversations with <500ms latency, speak 10+ Indian languages, and handle real transactions."
                primaryCTA={{ text: "Hear a Demo Call", href: "/demo" }}
                secondaryCTA={{ text: "See Pricing", href: "/pricing" }}
            />

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">&lt;500ms</div>
                            <div className="text-white/90">Response Latency</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">10+</div>
                            <div className="text-white/90">Indian Languages</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">100s</div>
                            <div className="text-white/90">Concurrent Calls</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-white/90">Availability</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Voice AI Capabilities</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        Everything you need to automate phone conversations at enterprise scale
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">How Voice AI Works</h2>
                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Calls Your Number</h3>
                                <p className="text-slate-600">Calls are routed through secure SIP trunking to SwanDigitals's voice engine. The AI picks up instantly — no hold times.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Natural Conversation Begins</h3>
                                <p className="text-slate-600">Speech-to-text converts audio in real-time. The AI understands intent, extracts entities, and formulates a response in under 500ms.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Actions Are Executed</h3>
                                <p className="text-slate-600">Book appointments, check order status, transfer funds, or escalate to humans — all in real-time during the conversation.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">4</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Analytics & Follow-up</h3>
                                <p className="text-slate-600">Every call is transcribed, summarized, and analyzed. Trigger follow-up workflows automatically based on call outcomes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Voice AI Use Cases</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        See real-world applications across industries
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((uc, i) => (
                            <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{uc.title}</h3>
                                <p className="text-slate-600 mb-4">{uc.description}</p>
                                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                                    {uc.stats}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Phone Lines?</h2>
                    <p className="text-xl text-white/80 mb-8">
                        Schedule a demo and hear SwanDigitals's voice AI in action
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            🎙️ Hear a Demo Call
                        </Link>
                        <Link href="/pricing" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
