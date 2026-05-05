"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Book, Zap, HelpCircle, FileText, Phone, Brain, Settings, GitBranch, CreditCard, Code } from 'lucide-react';

export default function DocumentationPage() {
    const sections = [
        { icon: <Zap className="w-6 h-6" />, title: "Quick Start", desc: "Get your first chatbot running in 5 minutes", link: "/docs/quickstart", time: "5 min" },
        { icon: <Book className="w-6 h-6" />, title: "Platform Guide", desc: "Complete guide to all platform features", link: "/docs/platform", time: "30 min" },
        { icon: <FileText className="w-6 h-6" />, title: "Integration Guides", desc: "Connect with WhatsApp, Email, Zendesk, and more", link: "/docs/integrations", time: "15 min each" },
        { icon: <Phone className="w-6 h-6" />, title: "Voice AI", desc: "AI-powered voice agents with Twilio/Retell", link: "/docs/voice", time: "20 min" },
        { icon: <Brain className="w-6 h-6" />, title: "AI Training", desc: "Build knowledge base with RAG and multilingual support", link: "/docs/ai-training", time: "25 min" },
        { icon: <Settings className="w-6 h-6" />, title: "Automation", desc: "Macros, labels, SwanAI bot, and handoff rules", link: "/docs/automation", time: "15 min" },
        { icon: <GitBranch className="w-6 h-6" />, title: "n8n Workflows", desc: "Connect with 200+ apps via workflow automation", link: "/docs/workflows", time: "20 min" },
        { icon: <CreditCard className="w-6 h-6" />, title: "SwanPlans", desc: "Compare PILOT, GROWTH, PROFESSIONAL, ENTERPRISE", link: "/docs/plans", time: "10 min" },
        { icon: <Code className="w-6 h-6" />, title: "Custom Attributes", desc: "Lead scoring, segmentation, and custom fields", link: "/docs/attributes", time: "10 min" },
        { icon: <HelpCircle className="w-6 h-6" />, title: "Troubleshooting", desc: "Common issues and how to resolve them", link: "/docs/troubleshooting", time: "As needed" }
    ];

    const popularGuides = [
        { title: "Creating Your First Chatbot", category: "Getting Started" },
        { title: "Connecting to Zendesk", category: "Integrations" },
        { title: "Training Custom Intents", category: "NLU" },
        { title: "Setting Up Webhooks", category: "API" },
        { title: "Deploying to WhatsApp", category: "Channels" },
        { title: "Building Conversation Flows", category: "Platform" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="📖 Documentation"
                title="Learn SwanDigitals"
                subtitle="Comprehensive guides, API reference, and tutorials to help you build, deploy, and scale AI chatbots"
                primaryCTA={{ text: "Quick Start Guide", href: "/docs/quickstart" }}
                secondaryCTA={{ text: "Platform Guide", href: "/docs/platform" }}
            />

            {/* Search */}
            <section className="py-12 bg-white border-b border-slate-200">
                <div className="max-w-2xl mx-auto px-6 lg:px-8">
                    <input
                        type="text"
                        placeholder="Search documentation..."
                        className="w-full px-6 py-4 rounded-full border-2 border-slate-300 focus:border-orange-500 outline-none text-lg"
                    />
                </div>
            </section>

            {/* Documentation Sections */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Documentation Sections</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.map((section, i) => (
                            <Link key={i} href={section.link} className="group p-6 border-2 border-slate-200 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600">{section.title}</h3>
                                <p className="text-slate-600 mb-4">{section.desc}</p>
                                <span className="text-sm text-slate-500">{section.time}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Guides */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Popular Guides</h2>
                    <div className="space-y-4">
                        {popularGuides.map((guide, i) => (
                            <Link key={i} href="#" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="font-semibold text-slate-900">{guide.title}</h3>
                                    <span className="text-sm text-slate-500">{guide.category}</span>
                                </div>
                                <span className="text-orange-600">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
                    <p className="text-xl text-slate-600 mb-8">Our support team is here to help you succeed</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                            Contact Support
                        </Link>
                        <a href="https://community.swandigitals.com" className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-900 rounded-full font-semibold hover:border-orange-300 transition-all">
                            Join Community
                        </a>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
