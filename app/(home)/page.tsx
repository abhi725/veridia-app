"use client";

import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import { Bot, Zap, Shield, BarChart3, Globe, Headphones, Briefcase, Settings, Mic, Link2, Lock, Cpu, Phone, Package, FileText, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import FAQ from '@/components/ui/FAQ';
import IntegrationCloud from '@/components/ui/IntegrationCloud';
import { useState } from 'react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'AI Chatbot India | On-Premise Voice AI | SwanDigitals',
    description: 'Deploy sovereign AI chatbots & voice agents in India. 100% data privacy, on-premise deployment. ₹10k pilot. Banking, healthcare, IT helpdesk automation.',
    keywords: ['AI Chatbot India', 'On-Premise AI', 'Voice AI India', 'Data Privacy', 'WhatsApp Chatbot India', 'Banking AI', 'Customer Service AI'],
    alternates: {
        canonical: 'https://swandigitals.com',
    },
};

export default function HomePage() {
    const [activeUseCase, setActiveUseCase] = useState(0);

    const features = [
        {
            icon: <Bot className="w-6 h-6" />,
            title: "Conversational AI",
            description: "Natural, multi-turn conversations in 10+ Indian languages. Context-aware understanding of intent and sentiment."
        },
        {
            icon: <Mic className="w-6 h-6" />,
            title: "Voice AI Agents",
            description: "Human-like phone conversations with <500ms latency. Replace your IVR with intelligent voice automation."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "1-Week Deployment",
            description: "We build your personalized AI agent in days, not months. No DIY frustration — we do it with you."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Zero Data Collection",
            description: "Your data stays yours. Even on our cloud hosting, we never collect or store your conversation data."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Omnichannel Platform",
            description: "WhatsApp, Web, Voice, Slack, Teams, Instagram — one bot handles all channels in one dashboard."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Real-Time Analytics",
            description: "Track conversations, sentiment, and performance with comprehensive dashboards and custom reports."
        }
    ];

    const useCases = [
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "Customer Service",
            description: "Automate support inquiries with instant 24/7 responses across all channels.",
            stats: ["24/7 Availability", "Multi-channel", "AI-Powered"],
            link: "/solutions/customer-service"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Employee Experience",
            description: "HR, IT, and operations support for internal teams with self-service automation.",
            stats: ["Self-Service", "Internal Helpdesk", "HR Automation"],
            link: "/solutions/employee-experience"
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "IT Helpdesk",
            description: "Password resets, software requests, troubleshooting — automated and intelligent.",
            stats: ["Ticket Deflection", "24/7 Support", "System Integration"],
            link: "/solutions/it-helpdesk"
        }
    ];

    const problems = [
        {
            icon: <AlertTriangle className="w-8 h-8" />,
            title: "6-Month Implementations",
            description: "Most chatbot platforms take months to deploy. By then, requirements have changed and budgets are exhausted."
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Data Leaves Your Control",
            description: "Cloud-only vendors store your conversations on their servers. Regulators aren't happy. Your CISO isn't either."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "English-First, Hindi-Later",
            description: "Your customers speak Tamil. Telugu. Marathi. But your bot only speaks American English. Disconnect."
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Per-Conversation Pricing",
            description: "Volume scales. Bills explode. CFO calls a meeting. Enterprise ROI becomes a nightmare."
        }
    ];

    const solutions = [
        {
            icon: <Link2 className="w-10 h-10" />,
            title: "One Bot. Every Channel. Zero Fragmentation.",
            description: "Your customers reach you on WhatsApp, Email, Phone, Instagram, Web chat. Most companies use 5 different tools. That's 5 dashboards, 5 data silos, 5 points of failure. SwanDigitals unifies everything. One AI agent handles all channels."
        },
        {
            icon: <Lock className="w-10 h-10" />,
            title: "We Don't Touch Your Data. Ever.",
            description: "On-premise? Your data never leaves your building. Our cloud? We still don't collect or store your conversation data. No training on your data. No selling insights. Your conversations are YOUR asset."
        },
        {
            icon: <Cpu className="w-10 h-10" />,
            title: "More Than Chat. A Complete AI Agent.",
            description: "This isn't a simple FAQ bot. SwanDigitals agents make calls, check inventory, analyze resource availability, process transactions, and generate custom reports — all in one conversation."
        },
        {
            icon: <Shield className="w-10 h-10" />,
            title: "Built for 2026. When Data is the New Gold.",
            description: "True air-gapped deployment. AES-256 encryption. Your security policies, your audit logs, your control. DPDP 2023 and RBI-ready architecture. Data sovereignty isn't optional — it's survival."
        }
    ];

    return (
        <SiteLayout>
            <JsonLd />
            {/* Hero Section */}
            <Hero
                badge="🚀 Launch Your AI Agent in 1 Week"
                title="Your Business Deserves an AI That Speaks Your Language"
                subtitle="We build personalized AI chatbots and voice agents for Indian enterprises. On-premise, cloud, or hybrid. 10+ Indian languages. WhatsApp, Web, and Phone — all in one week."
                primaryCTA={{ text: "Book a Strategy Call", href: "/demo" }}
                secondaryCTA={{ text: "See How It Works", href: "#how-it-works" }}
            />

            {/* Features Grid */}
            <FeatureGrid features={features} />

            {/* The Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Why Enterprise AI Projects Fail</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">These are the problems that made us build SwanDigitals differently.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {problems.map((problem, i) => (
                            <div key={i} className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4">
                                    {problem.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-red-900">{problem.title}</h3>
                                <p className="text-slate-700 text-sm">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How SwanDigitals Solves Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Your Security Is Our First Priority</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            SwanDigitals isn't just another chatbot. It's a complete AI platform built for enterprises who can't compromise on data security or operational flexibility.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6">
                                    {solution.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                                <p className="text-white/80">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section id="how-it-works" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">From First Call to Live Bot — In 7 Days</h2>
                    <p className="text-center text-slate-600 mb-16 max-w-3xl mx-auto">We don't just license software and leave you with documentation. We build your AI agent with you.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                            <div className="text-5xl mb-6 mt-4">📞</div>
                            <h3 className="text-xl font-bold mb-2">Strategy Call</h3>
                            <p className="text-slate-500 text-sm mb-2">Day 1</p>
                            <p className="text-slate-600">We understand your use case, channels, and integration needs. No generic demos — we focus on your specific requirements.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                            <div className="text-5xl mb-6 mt-4">🛠️</div>
                            <h3 className="text-xl font-bold mb-2">Bot Building</h3>
                            <p className="text-slate-500 text-sm mb-2">Days 2-5</p>
                            <p className="text-slate-600">Our team builds your personalized AI agent. You review, we iterate. Flows, integrations, language training — all handled.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                            <div className="text-5xl mb-6 mt-4">🚀</div>
                            <h3 className="text-xl font-bold mb-2">Go Live</h3>
                            <p className="text-slate-500 text-sm mb-2">Days 6-7</p>
                            <p className="text-slate-600">Deploy to WhatsApp, Web, or Voice. Training and handoff included. Your AI agent is live and ready to serve.</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/demo" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Book Your Strategy Call →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Capability Stats */}
            <section className="py-16 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2">10+</div>
                            <div className="text-white/90">Indian Languages</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">100+</div>
                            <div className="text-white/90">Integrations</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">&lt;500ms</div>
                            <div className="text-white/90">Voice Latency</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">7 Days</div>
                            <div className="text-white/90">To Go Live</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Tabs */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Use Cases</h2>
                    <p className="text-center text-slate-600 mb-12">See how enterprises use SwanDigitals across departments</p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {useCases.map((uc, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveUseCase(i)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeUseCase === i
                                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                                    }`}
                            >
                                {uc.icon}
                                {uc.title}
                            </button>
                        ))}
                    </div>

                    {/* Active Tab Content */}
                    <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">{useCases[activeUseCase].title}</h3>
                                <p className="text-xl text-slate-600 mb-6">{useCases[activeUseCase].description}</p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {useCases[activeUseCase].stats.map((stat, i) => (
                                        <span key={i} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">{stat}</span>
                                    ))}
                                </div>
                                <Link href={useCases[activeUseCase].link} className="inline-block px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                                    Learn More →
                                </Link>
                            </div>
                            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl h-64 flex items-center justify-center">
                                <div className="text-6xl">{activeUseCase === 0 ? '🎧' : activeUseCase === 1 ? '👥' : '🔧'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SwanDigitals - Competitor Comparison */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">The Honest Comparison</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border-2 border-orange-200 rounded-2xl bg-white">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">vs Kore.ai</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li>✅ 1 week deployment vs 3-6 months</li>
                                <li>✅ We build WITH you (not DIY)</li>
                                <li>✅ Flat pricing vs per-conversation</li>
                            </ul>
                            <Link href="/compare/vs-kore" className="text-orange-500 font-semibold mt-4 inline-block hover:underline">See full comparison →</Link>
                        </div>
                        <div className="p-8 border-2 border-blue-200 rounded-2xl bg-white">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">vs Yellow.ai</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li>✅ True on-premise (not dedicated VPC)</li>
                                <li>✅ Zero data collection on our cloud</li>
                                <li>✅ No vendor lock-in</li>
                            </ul>
                            <Link href="/compare/vs-yellow" className="text-blue-500 font-semibold mt-4 inline-block hover:underline">See full comparison →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* IntegrationCloud */}
            <IntegrationCloud integrations={[
                { name: 'WhatsApp', color: '#25D366', image: '/integrations/whatsapp.png', category: 'Messaging' },
                { name: 'Slack', color: '#4A154B', image: '/integrations/slack.png', category: 'Chat' },
                { name: 'Teams', color: '#6264A7', category: 'Chat' },
                { name: 'Zendesk', color: '#03363D', image: '/integrations/zendesk.png', category: 'Support' },
                { name: 'Freshdesk', color: '#00A65A', image: '/integrations/freshdesk.png', category: 'Support' },
                { name: 'Salesforce', color: '#00A1E0', image: '/integrations/salesforce.png', category: 'CRM' },
                { name: 'HubSpot', color: '#FF7A59', image: '/integrations/hubspot.png', category: 'CRM' },
                { name: 'Intercom', color: '#000000', image: '/integrations/intercom_new.png', category: 'Support' },
                { name: 'Google Analytics', color: '#E37400', image: '/integrations/google-analytics.png', category: 'Analytics' },
                { name: 'Magento', color: '#F16422', image: '/integrations/magento.png', category: 'Commerce' },
                { name: 'Shopify', color: '#96bf48', image: '/integrations/shopify.png', category: 'Commerce' },
                { name: 'WooCommerce', color: '#96588a', image: '/integrations/woocommerce.png', category: 'Commerce' },
                { name: 'Zoho', color: '#E42527', image: '/integrations/zoho.png', category: 'CRM' },
                { name: 'Razorpay', color: '#0066FF', image: '/integrations/razorpay.png', category: 'Payment' },
                { name: 'Stripe', color: '#635BFF', image: '/integrations/stripe.png', category: 'Payment' },
                { name: 'ServiceNow', color: '#293e40', image: '/integrations/servicenow.png', category: 'ITSM' },
                { name: 'Infosys Finacle', color: '#007cc3', image: '/integrations/infosys-finacle.png', category: 'Banking' },
                { name: 'Temenos', color: '#003366', image: '/integrations/temenos.png', category: 'Banking' }
            ]} />

            {/* FAQ */}
            <FAQ items={[
                {
                    question: "You're new. Why should we trust you?",
                    answer: "Fair question. We can't show you 500 case studies. What we can show you: working demos, transparent architecture, and a pilot program with dedicated support. Low risk, high accountability. Be among the first to experience what we've built."
                },
                {
                    question: "How long does implementation really take?",
                    answer: "7 days for standard deployments. Complex integrations with legacy systems may take 2-3 weeks. We'll tell you upfront — no surprises."
                },
                {
                    question: "Do you offer on-premise deployment?",
                    answer: "Yes. True on-premise deployment in your data center. Not a 'dedicated VPC' that still lives in someone else's cloud. Complete data sovereignty with air-gapped option."
                },
                {
                    question: "What happens if the bot gets stuck?",
                    answer: "Seamless handoff to your human agents with full conversation context. We don't believe in AI-only dead ends — your customers always get the help they need."
                },
                {
                    question: "Do you support Hindi and regional languages?",
                    answer: "Yes. Hindi, Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam, Gujarati, Punjabi, Odia, and more. Native NLU support, not Google Translate bolted on."
                },
                {
                    question: "What's the pricing model?",
                    answer: "Flat platform licensing. No per-conversation fees. No surprises when your volume grows. Talk to us for a custom quote based on your requirements."
                }
            ]} />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Let's Build Something That Works</h2>
                    <p className="text-xl text-white/80 mb-8">No 6-month RFPs. No death-by-PowerPoint. Just a conversation about what you need.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Book Your Free Strategy Call
                        </Link>
                        <Link href="/platform" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Explore the Platform
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
