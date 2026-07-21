"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';
import {
    Mic, Play, Pause, ArrowRight, Check,
    Headphones, BarChart, Shield, Zap, Globe,
    Building2, Stethoscope, ShoppingCart, Landmark, Plane, Users, Brain, Activity, Clock
} from 'lucide-react';
import FAQ from '@/components/ui/FAQ';
import IntegrationCloud from '@/components/ui/IntegrationCloud';

// --- Types & Data ---

const capabilities = [
    { icon: <Mic className="w-6 h-6" />, title: "Automatic Speech Recognition", desc: "Accurately converts spoken words into text, enabling real-time voice-driven interactions." },
    { icon: <Brain className="w-6 h-6" />, title: "Natural Language Understanding", desc: "Interprets intent and meaning behind speech to deliver contextually aware voice responses." },
    { icon: <Activity className="w-6 h-6" />, title: "Text-to-Speech (TTS)", desc: "Generates natural, human-like voices that make every automated conversation sound authentic." },
    { icon: <Clock className="w-6 h-6" />, title: "Real-Time Processing", desc: "Processes voice input instantly for latency-free AI conversations with users." }
];

const industries = [
    {
        id: 'finance', icon: <Landmark />, title: "Finance & Accounting",
        points: ["Automate invoice reminders effortlessly.", "Deliver instant balance updates via voice.", "Notify clients of policy changes in real time.", "Collect financial feedback from clients."]
    },
    {
        id: 'healthcare', icon: <Stethoscope />, title: "Healthcare",
        points: ["Schedule and confirm appointments with AI.", "Send automated prescription reminders.", "Share lab results securely via voice.", "Conduct post-consultation feedback surveys."]
    },
    {
        id: 'enterprise', icon: <Building2 />, title: "Small Business Ops",
        points: ["Manage routine staff or customer queries.", "Send appointment and payment updates instantly.", "Streamline follow-up calls.", "Handle vendor coordination automatically."]
    },
    {
        id: 'retail', icon: <ShoppingCart />, title: "Retail & E-Commerce",
        points: ["Assist customers with order placement & stock.", "Provide real-time shipping & delivery updates.", "Answer FAQs about pricing and policies.", "Support upselling based on purchase intent."]
    }
];

const demos = [
    { title: "Customer Support Agent", desc: "Resolve repetitive customer queries to complex issues in seconds with AI-driven human-like support 24/7.", time: "0:45" },
    { title: "Sales Voice Agent", desc: "Deliver instant, human-like conversations that qualify leads, handle objections, and boost more sales 24/7.", time: "1:12" },
    { title: "HR Voice Agent", desc: "Speed up the hiring process with automated pre-screening and candidate calling that sounds natural.", time: "0:58" },
    { title: "Payment Reminder Agent", desc: "Send timely payment reminders through AI voice interactions that reduce delays & clear dues on time.", time: "0:30" }
];

// --- Components ---

export default function VoiceAgentContent() {
    const [activeIndustry, setActiveIndustry] = useState(industries[0]);
    const [playingDemo, setPlayingDemo] = useState<number | null>(null);

    const togglePlay = (index: number) => {
        setPlayingDemo(playingDemo === index ? null : index);
    };

    return (
        <SiteLayout>
            {/* 1. Hero Section with Glow and Wow Movement */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-5 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6"
                        >
                            SwanDigitals Voice AI
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight"
                        >
                            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">AI Voice Agent</span> in Minutes
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            Automate customer interactions with real-time, human-like conversations using advanced speech recognition and natural language models.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link href="/demo" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1">
                                Book a Demo
                            </Link>
                            <Link href="#demos" className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full font-bold backdrop-blur-md transition-all hover:-translate-y-1">
                                Listen to Demos
                            </Link>
                        </motion.div>
                    </div>

                    {/* Stats Marquee style */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {[
                            { label: "Natural, Human-Like Voice", val: "10 Languages" },
                            { label: "Call Handling", val: "Inbound + Outbound" },
                            { label: "Availability", val: "24/7" },
                            { label: "Missed Calls", val: "Zero" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm text-center hover:bg-white/10 transition-colors">
                                <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-pink-500 mb-2">{stat.val}</div>
                                <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 2. Interactive Audio Demos */}
            <section id="demos" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Experience Live AI Voice Agent Demos</h2>
                        <p className="text-lg text-slate-500">Across All Domains & Use-Cases</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {demos.map((demo, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{demo.title}</h3>
                                    <p className="text-sm text-slate-500 mb-8 leading-relaxed">{demo.desc}</p>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <button
                                        onClick={() => togglePlay(i)}
                                        className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${playingDemo === i ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/40 scale-110' : 'bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-orange-600'}`}
                                    >
                                        {playingDemo === i ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                                    </button>
                                    <div className="flex items-center gap-2">
                                        {/* Fake Audio Waveform */}
                                        <div className="flex items-center gap-0.5 h-6">
                                            {[...Array(6)].map((_, j) => (
                                                <motion.div
                                                    key={j}
                                                    animate={playingDemo === i ? { height: ["20%", "100%", "40%", "80%", "30%"] } : { height: "20%" }}
                                                    transition={playingDemo === i ? { repeat: Infinity, duration: 0.8, delay: j * 0.1 } : {}}
                                                    className={`w-1 rounded-full ${playingDemo === i ? 'bg-orange-500' : 'bg-slate-200'}`}
                                                    style={{ height: "20%" }}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 font-mono ml-2">{playingDemo === i ? 'Live' : demo.time}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Industry Specific Agents (Tabbed Layout) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full mb-6">
                            Tailored For You
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 max-w-3xl mx-auto">Optimize Operations with Industry-Specific AI Voice Agents</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Tabs Sidebar */}
                        <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
                            {industries.map((ind) => (
                                <button
                                    key={ind.id}
                                    onClick={() => setActiveIndustry(ind)}
                                    className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all whitespace-nowrap lg:whitespace-normal ${activeIndustry.id === ind.id
                                        ? 'bg-slate-900 text-white shadow-xl'
                                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                        }`}
                                >
                                    <div className={`p-2 rounded-lg ${activeIndustry.id === ind.id ? 'bg-white/10' : 'bg-white'}`}>
                                        {ind.icon}
                                    </div>
                                    <span className="font-bold text-sm md:text-base">{ind.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="w-full lg:w-2/3 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                            <motion.div
                                key={activeIndustry.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                                    {activeIndustry.icon}
                                </div>
                                <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8">AI Voice Agent for {activeIndustry.title}</h3>
                                <ul className="space-y-4 mb-10">
                                    {activeIndustry.points.map((pt, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-4 text-slate-700"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 font-bold" />
                                            </div>
                                            <span className="text-lg">{pt}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <Link href="/demo" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:-translate-y-1">
                                    Get a Free Demo <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Capabilities Grid */}
            <section className="py-24 bg-slate-950 text-white">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Powered by Cutting-Edge AI</h2>
                        <p className="text-lg text-slate-400">Everything you need to deliver human-like conversations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6">
                                    {cap.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. How to Build (4 Steps) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Deploy in 4 Simple Steps</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-100 via-orange-300 to-pink-100 -translate-y-1/2 hidden lg:block" />

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
                            {[
                                { title: "Define the Purpose", desc: "Choose what your agent will handle: booking, support, lead qualification, or FAQs." },
                                { title: "Build the Agent", desc: "Use the builder to create the conversation flow. Add questions, replies, and actions." },
                                { title: "Connect Tools", desc: "Link your CRM and calendar with tools like HubSpot and Calendly seamlessly." },
                                { title: "Deploy & Monitor", desc: "Test thoroughly and go live. Monitor call transcripts to refine operations." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xl shadow-slate-100 text-center relative"
                                >
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-black mb-6 border-4 border-white shadow-lg">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Integrations */}
            <IntegrationCloud
                integrations={[
                    { name: 'HubSpot', color: '#FF7A59', image: '/integrations/hubspot.png', category: 'CRM' },
                    { name: 'Calendly', color: '#006BFF', image: '/integrations/calendly.png', category: 'Scheduling' },
                    { name: 'Razorpay', color: '#0C2451', image: '/integrations/razorpay.png', category: 'Payments' },
                    { name: 'n8n', color: '#EA4B71', image: '/integrations/n8n.png', category: 'Automation' },
                    { name: 'SIP Telephony', color: '#F22F46', category: 'Voice' },
                ]}
                note="Native Integrations, Plus n8n Workflows for Everything Else"
            />

            {/* 7. FAQs */}
            <FAQ items={[
                { question: "What exactly are AI Voice Agents?", answer: "AI voice agents are autonomous, intelligent systems that use artificial intelligence to engage in natural, human-like voice conversations to perform complex tasks. Unlike simple chatbots, they adapt to context and make independent decisions." },
                { question: "Can I integrate my own voice?", answer: "Yes, you can integrate your own voice through voice cloning. You upload audio, and the AI model generates speech in your unique tone." },
                { question: "What happens if the AI can't answer?", answer: "When it encounters something it can't handle, it smoothly hands off the conversation to a live human agent with the full conversation context." },
                { question: "How long does it take to build?", answer: "Simple voice assistants can be ready in a few days, while advanced, fully integrated solutions take a few weeks. We work with you to ensure rapid deployment." }
            ]} />

            {/* 8. Final CTA */}
            <section className="py-24 bg-gradient-to-br from-orange-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Build Your Own AI Voice Agent?</h2>
                    <p className="text-xl text-white/90 mb-10">Start building your real-time application today. Fast, secure, and incredibly human.</p>
                    <Link href="/demo" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 shadow-2xl">
                        Book a Free Consultation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
