"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { useState } from 'react';
import {
    MessageSquare, Brain, Globe, BarChart3, Zap, Users, Shield, Settings,
    Code, Layers, Bot, Mic, Phone, Database, FileText, Headphones,
    Building2, ShoppingCart, Briefcase, Heart, Check, X, ChevronRight
} from 'lucide-react';

export default function FeaturesContent() {
    const [activeTab, setActiveTab] = useState('ai');

    const featureTabs = [
        { id: 'ai', label: 'AI & NLU', icon: <Brain className="w-5 h-5" /> },
        { id: 'channels', label: 'Channels', icon: <Globe className="w-5 h-5" /> },
        { id: 'voice', label: 'Voice AI', icon: <Mic className="w-5 h-5" /> },
        { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
        { id: 'security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
    ];

    const featureDetails: Record<string, { title: string; description: string; features: string[] }> = {
        ai: {
            title: "Advanced AI & Natural Language Understanding",
            description: "Powered by cutting-edge LLMs including Gemini Pro/Ultra and Rasa open-source NLU for maximum flexibility.",
            features: [
                "Multi-turn conversational AI with context awareness",
                "Intent detection with 95%+ accuracy",
                "Entity extraction for names, dates, amounts, etc.",
                "Sentiment analysis in real-time",
                "Custom model training on your data",
                "10+ Indian language support (Hindi, Tamil, Telugu, Marathi, etc.)",
                "Fallback handling with graceful escalation",
                "Active learning from human corrections"
            ]
        },
        channels: {
            title: "Omnichannel Deployment",
            description: "Deploy once, reach customers everywhere. Unified inbox for all conversations.",
            features: [
                "WhatsApp Business API (Official Partner)",
                "Web chat widget (customizable)",
                "Facebook Messenger & Instagram DMs",
                "Slack & Microsoft Teams for internal bots",
                "Telegram Bot API",
                "SMS integration",
                "Mobile SDK (iOS & Android)",
                "Email automation"
            ]
        },
        voice: {
            title: "Native Voice AI",
            description: "Human-like phone conversations with <500ms latency. Not an add-on – built into the platform.",
            features: [
                "Inbound & outbound calling",
                "Real-time speech-to-text",
                "Natural text-to-speech (multiple voices)",
                "Call recording & transcription",
                "IVR replacement / modernization",
                "Call transfer to human agents",
                "DTMF tone handling",
                "Integration with existing PBX/SIP systems"
            ]
        },
        analytics: {
            title: "Real-Time Analytics Dashboard",
            description: "Track every conversation, measure ROI, and optimize continuously.",
            features: [
                "Conversation volume & trends",
                "Resolution rate & CSAT scores",
                "Agent performance metrics",
                "Intent & entity analytics",
                "Sentiment distribution",
                "Funnel & drop-off analysis",
                "Custom report builder",
                "Export to BI tools (Power BI, Tableau)"
            ]
        },
        security: {
            title: "Enterprise-Grade Security",
            description: "Built for regulated industries. DPDP 2023 & RBI compliant.",
            features: [
                "True on-premise / air-gapped deployment",
                "100% data residency in India",
                "AES-256 encryption at rest & in transit",
                "SOC 2 Type II certified",
                "GDPR, HIPAA, PCI DSS compliant",
                "Role-based access control (RBAC)",
                "SSO with SAML 2.0 / OAuth 2.0",
                "Audit logging & compliance reports"
            ]
        }
    };

    const platformCapabilities = [
        {
            title: "No-Code Conversation Builder",
            desc: "Visual drag-and-drop interface. Build complex flows without writing code. Business users can create and update bots independently.",
            icon: <Layers className="w-8 h-8" />
        },
        {
            title: "Pro-Code SDK & APIs",
            desc: "Full REST API access for developers. Extend functionality, build custom integrations, and automate workflows programmatically.",
            icon: <Code className="w-8 h-8" />
        },
        {
            title: "AI Training Studio",
            desc: "Continuously improve accuracy with active learning. Review misunderstood intents, add training data, and watch accuracy improve.",
            icon: <Brain className="w-8 h-8" />
        },
        {
            title: "Multi-Agent Orchestration",
            desc: "Deploy specialized agents for different departments. Route conversations intelligently based on intent, sentiment, or customer profile.",
            icon: <Bot className="w-8 h-8" />
        },
        {
            title: "Knowledge Base Integration",
            desc: "Connect to your documents, FAQs, PDFs, and databases. AI retrieves and synthesizes accurate answers from your knowledge sources.",
            icon: <Database className="w-8 h-8" />
        },
        {
            title: "Live Agent Handoff",
            desc: "Seamless transfer to human agents with full context. Agents see entire conversation history, customer data, and AI suggestions.",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: "Workflow Automation",
            desc: "Trigger actions in external systems. Create tickets, update CRM, process payments, send notifications – all from conversations.",
            icon: <Settings className="w-8 h-8" />
        },
        {
            title: "Document Processing",
            desc: "Extract data from uploaded documents. Handle ID verification, form processing, and document classification automatically.",
            icon: <FileText className="w-8 h-8" />
        }
    ];

    const useCases = [
        {
            title: "Customer Service",
            icon: <Headphones className="w-10 h-10" />,
            description: "Automate 90% of support inquiries. Instant responses 24/7 across all channels.",
            stats: ["90% automation rate", "60% cost reduction", "<2s average response"],
            benefits: ["FAQ automation", "Order tracking", "Complaint handling", "Appointment scheduling"],
            link: "/solutions/customer-service"
        },
        {
            title: "Banking & Finance",
            icon: <Building2 className="w-10 h-10" />,
            description: "RBI-compliant AI agents for account services, loan inquiries, and transaction support.",
            stats: ["100% data sovereignty", "DPDP 2023 compliant", "On-premise ready"],
            benefits: ["Balance inquiries", "Fund transfers", "Loan applications", "KYC assistance"],
            link: "/solutions/banking"
        },
        {
            title: "E-Commerce",
            icon: <ShoppingCart className="w-10 h-10" />,
            description: "Convert browsers to buyers. Product recommendations, cart recovery, and order support.",
            stats: ["30% cart recovery", "2x engagement", "24/7 availability"],
            benefits: ["Product search", "Order status", "Returns & refunds", "Personalized offers"],
            link: "/solutions/ecommerce"
        },
        {
            title: "HR & Employee Experience",
            icon: <Briefcase className="w-10 h-10" />,
            description: "Internal helpdesk for HR, IT, and operations. Empower employees with self-service.",
            stats: ["70% self-service", "50% faster resolution", "+40 eNPS"],
            benefits: ["Leave requests", "Policy queries", "Onboarding", "IT support"],
            link: "/solutions/employee-experience"
        },
        {
            title: "Healthcare",
            icon: <Heart className="w-10 h-10" />,
            description: "HIPAA-compliant patient engagement. Appointment scheduling, symptom triage, and follow-ups.",
            stats: ["HIPAA compliant", "24/7 patient support", "Reduced no-shows"],
            benefits: ["Appointment booking", "Prescription refills", "Lab results", "Care reminders"],
            link: "/solutions/healthcare"
        }
    ];

    // Comprehensive competitor comparison
    const competitorComparison = [
        { feature: "No-Code Builder", swanDigitals: true, koreai: "Limited", yellowai: true, haptik: true, zendesk: "Limited", intercom: true },
        { feature: "Native Voice AI", swanDigitals: true, koreai: "Add-on", yellowai: "Add-on", haptik: "Limited", zendesk: false, intercom: false },
        { feature: "On-Premise Deployment", swanDigitals: true, koreai: true, yellowai: false, haptik: false, zendesk: false, intercom: false },
        { feature: "100% India Data Residency", swanDigitals: true, koreai: "On Request", yellowai: "On Request", haptik: "Limited", zendesk: false, intercom: false },
        { feature: "Indian Language Support (10+)", swanDigitals: true, koreai: "Limited", yellowai: true, haptik: true, zendesk: "Limited", intercom: "Limited" },
        { feature: "WhatsApp Business API", swanDigitals: true, koreai: true, yellowai: true, haptik: true, zendesk: true, intercom: true },
        { feature: "Live Agent Handoff", swanDigitals: true, koreai: true, yellowai: true, haptik: true, zendesk: true, intercom: true },
        { feature: "Knowledge Base AI", swanDigitals: true, koreai: true, yellowai: true, haptik: "Limited", zendesk: true, intercom: true },
        { feature: "Multi-Agent Orchestration", swanDigitals: true, koreai: true, yellowai: true, haptik: "Limited", zendesk: false, intercom: false },
        { feature: "Conversation Analytics", swanDigitals: true, koreai: true, yellowai: true, haptik: "Limited", zendesk: true, intercom: true },
        { feature: "DPDP 2023 Compliance", swanDigitals: true, koreai: "On Request", yellowai: "On Request", haptik: "Partial", zendesk: false, intercom: false },
        { feature: "RBI Guidelines Ready", swanDigitals: true, koreai: "On Request", yellowai: "On Request", haptik: "Partial", zendesk: false, intercom: false },
        { feature: "Setup in Days (not months)", swanDigitals: true, koreai: false, yellowai: false, haptik: true, zendesk: true, intercom: true },
        { feature: "Flat Platform Pricing", swanDigitals: true, koreai: false, yellowai: false, haptik: false, zendesk: false, intercom: false },
        { feature: "Dedicated CSM (Enterprise)", swanDigitals: true, koreai: true, yellowai: true, haptik: "Premium", zendesk: "Premium", intercom: "Premium" },
    ];

    const renderComparisonCell = (value: boolean | string) => {
        if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
        if (value === false) return <X className="w-5 h-5 text-red-400 mx-auto" />;
        return <span className="text-yellow-600 text-xs">{value}</span>;
    };

    return (
        <SiteLayout>
            <Hero
                badge="⚡ Platform Features"
                title="Everything You Need to Build Enterprise AI"
                subtitle="From no-code conversation builders to native voice AI. Deploy in days, scale to millions of conversations."
                primaryCTA={{ text: "Start Free Trial", href: "/demo" }}
                secondaryCTA={{ text: "Contact Sales", href: "/contact" }}
            />

            {/* Feature Tabs */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Core Features</h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        Built on modern AI with enterprise-grade infrastructure
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {featureTabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{featureDetails[activeTab].title}</h3>
                        <p className="text-lg text-slate-600 mb-8">{featureDetails[activeTab].description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {featureDetails[activeTab].features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Capabilities */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Platform Capabilities</h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        Enterprise-grade features that competitors charge extra for
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {platformCapabilities.map((cap, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-4">
                                    {cap.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                                <p className="text-slate-600 text-sm">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Knowledge Base Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                                <Database className="w-4 h-4" />
                                Knowledge Base AI
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Turn Your Documents Into Intelligent Answers
                            </h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Connect your existing knowledge sources – FAQs, PDFs, help articles, wikis, and databases.
                                Our AI retrieves and synthesizes accurate answers in natural language.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-500" />
                                    <span>Upload PDFs, Word docs, and spreadsheets</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-500" />
                                    <span>Connect to Confluence, SharePoint, Notion</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-500" />
                                    <span>Real-time sync with source updates</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-500" />
                                    <span>Citation & source attribution</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-500" />
                                    <span>Multi-language knowledge retrieval</span>
                                </li>
                            </ul>
                            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                                Learn More <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 flex items-center justify-center">
                            <div className="text-center">
                                <Database className="w-24 h-24 text-purple-500 mx-auto mb-4" />
                                <p className="text-lg font-semibold text-slate-700">Unified Knowledge Graph</p>
                                <p className="text-slate-500">All your data, one intelligent interface</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Use Cases</h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        See how enterprises across industries use SwanDigitals
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((uc, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4">
                                    {uc.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{uc.title}</h3>
                                <p className="text-slate-600 text-sm mb-4">{uc.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {uc.stats.map((stat, j) => (
                                        <span key={j} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                                <ul className="space-y-1 mb-4">
                                    {uc.benefits.map((benefit, j) => (
                                        <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={uc.link} className="text-orange-600 font-semibold text-sm hover:underline">
                                    Learn more →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive Competitor Comparison */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Feature Comparison</h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        See how SwanDigitals compares to leading competitors
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white text-sm">
                            <thead>
                                <tr className="border-b-2 border-slate-200">
                                    <th className="py-4 px-3 text-left font-semibold text-slate-700 sticky left-0 bg-white">Feature</th>
                                    <th className="py-4 px-3 text-center font-bold text-orange-600 bg-orange-50">SwanDigitals</th>
                                    <th className="py-4 px-3 text-center font-semibold text-slate-500">Kore.ai</th>
                                    <th className="py-4 px-3 text-center font-semibold text-slate-500">Yellow.ai</th>
                                    <th className="py-4 px-3 text-center font-semibold text-slate-500">Haptik</th>
                                    <th className="py-4 px-3 text-center font-semibold text-slate-500">Zendesk</th>
                                    <th className="py-4 px-3 text-center font-semibold text-slate-500">Intercom</th>
                                </tr>
                            </thead>
                            <tbody>
                                {competitorComparison.map((row, i) => (
                                    <tr key={i} className={`border-b border-slate-100 ${i % 2 === 1 ? 'bg-slate-50' : ''}`}>
                                        <td className="py-3 px-3 font-medium text-slate-700 sticky left-0 bg-inherit">{row.feature}</td>
                                        <td className="py-3 px-3 text-center bg-orange-50">{renderComparisonCell(row.swanDigitals)}</td>
                                        <td className="py-3 px-3 text-center">{renderComparisonCell(row.koreai)}</td>
                                        <td className="py-3 px-3 text-center">{renderComparisonCell(row.yellowai)}</td>
                                        <td className="py-3 px-3 text-center">{renderComparisonCell(row.haptik)}</td>
                                        <td className="py-3 px-3 text-center">{renderComparisonCell(row.zendesk)}</td>
                                        <td className="py-3 px-3 text-center">{renderComparisonCell(row.intercom)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/compare" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                            View Detailed Comparisons <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Explore the Platform?</h2>
                    <p className="text-xl text-white/80 mb-8">Get hands-on with a free trial or schedule a personalized demo.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Start Free Trial
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
