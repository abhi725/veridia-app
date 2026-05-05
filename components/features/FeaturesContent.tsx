"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import {
    MessageSquare, Brain, Globe, BarChart3, Zap, Users, Shield, Settings,
    Code, Layers, Bot, Mic, Phone, Database, FileText, Headphones,
    Building2, ShoppingCart, Briefcase, Heart, Check, X, ChevronRight,
    MessageCircle, MapPin
} from 'lucide-react';

function useReveal() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 80);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return ref;
}

export default function FeaturesContent() {
    const [activeTab, setActiveTab] = useState('ai');
    
    const coreFeaturesRef = useReveal();
    const capabilitiesRef = useReveal();
    const knowledgeRef = useReveal();
    const voiceRef = useReveal();
    const languagesRef = useReveal();
    const useCasesRef = useReveal();
    const comparisonRef = useReveal();

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
            description: "Powered by cutting-edge LLMs including Gemini Pro/Ultra and Ollama (on-premises) or leading cloud LLMs for maximum flexibility.",
            features: [
                "Multi-turn conversational AI with context awareness",
                "Intent detection with 95%+ accuracy",
                "Entity extraction for names, dates, amounts, etc.",
                "Sentiment analysis in real-time",
                "Custom model training on your data",
                "10+ Indian languages natively supported",
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
            icon: <Headphones className="w-8 h-8" />,
            description: "Automate support inquiries with instant 24/7 responses across all channels.",
            stats: ["24/7 Availability", "Multi-channel", "AI-Powered"],
            benefits: ["FAQ automation", "Order tracking", "Complaint handling", "Appointment scheduling"],
            link: "/solutions/customer-service"
        },
        {
            title: "Banking & Finance",
            icon: <Building2 className="w-8 h-8" />,
            description: "RBI-compliant AI agents for account services, loan inquiries, and transaction support.",
            stats: ["100% data sovereignty", "DPDP 2023 compliant", "On-premise ready"],
            benefits: ["Balance inquiries", "Fund transfers", "Loan applications", "KYC assistance"],
            link: "/solutions/banking"
        },
        {
            title: "E-Commerce",
            icon: <ShoppingCart className="w-8 h-8" />,
            description: "Convert browsers to buyers with product recommendations, cart recovery, and order support.",
            stats: ["Cart Recovery", "Personalization", "24/7 Availability"],
            benefits: ["Product search", "Order status", "Returns & refunds", "Personalized offers"],
            link: "/solutions/retail"
        },
        {
            title: "HR & Employee Experience",
            icon: <Briefcase className="w-8 h-8" />,
            description: "Internal helpdesk for HR, IT, and operations. Empower employees with self-service.",
            stats: ["Self-Service", "Internal Automation", "Employee Enablement"],
            benefits: ["Leave requests", "Policy queries", "Onboarding", "IT support"],
            link: "/solutions/employee-experience"
        },
        {
            title: "Healthcare",
            icon: <Heart className="w-8 h-8" />,
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
        { feature: "10+ Indian Languages", swanDigitals: true, koreai: "Limited", yellowai: true, haptik: true, zendesk: "Limited", intercom: "Limited" },
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
        return <span className="text-slate-500 font-medium text-xs uppercase tracking-wider">{value}</span>;
    };

    return (
        <SiteLayout>
            <Hero
                badge="Platform Features"
                title="Everything You Need to Build Enterprise AI"
                subtitle="From no-code conversation builders to native voice AI. Deploy in days, scale to millions of conversations."
                primaryCTA={{ text: "Start Free Trial", href: "/demo" }}
                secondaryCTA={{ text: "Contact Sales", href: "/contact" }}
            />

            {/* Feature Tabs */}
            <section ref={coreFeaturesRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="reveal text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Features</h2>
                        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                            Built on modern AI with enterprise-grade infrastructure
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
                        {featureTabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-orange shadow-lg'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-100'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="reveal bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-orange-100/50 shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{featureDetails[activeTab].title}</h3>
                        <p className="text-lg text-slate-600 mb-8 max-w-4xl">{featureDetails[activeTab].description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {featureDetails[activeTab].features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-white hover:border-orange-200 transition-colors shadow-sm">
                                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Capabilities */}
            <section ref={capabilitiesRef} className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="reveal text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Platform Capabilities</h2>
                        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                            Enterprise-grade features that competitors charge extra for
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
                        {platformCapabilities.map((cap, i) => (
                            <div key={i} className="reveal bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-orange-200 transition-all cursor-default">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-5 shadow-orange">
                                    {cap.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{cap.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Knowledge Base Section */}
            <section ref={knowledgeRef} className="py-20 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="reveal">
                            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-6">
                                <Database className="w-4 h-4" />
                                Knowledge Base AI
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Turn Your Documents Into Intelligent Answers
                            </h2>
                            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                                Connect your existing knowledge sources – FAQs, PDFs, help articles, wikis, and databases.
                                Our AI retrieves and synthesizes accurate answers in natural language.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">Upload PDFs, Word docs, and spreadsheets</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">Connect to Confluence, SharePoint, Notion</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">Real-time sync with source updates</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">Citation & source attribution</span>
                                </li>
                            </ul>
                            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                                Learn More <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="reveal bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100 rounded-3xl p-10 flex items-center justify-center shadow-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
                            <div className="text-center relative z-10">
                                <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-orange-100">
                                    <Database className="w-14 h-14 text-orange-500" />
                                </div>
                                <p className="text-xl font-bold text-slate-900 mb-2">Unified Knowledge Graph</p>
                                <p className="text-slate-500 font-medium">All your data, one intelligent interface</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Voice AI Deep-Dive */}
            <section ref={voiceRef} className="py-20 lg:py-28 bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="reveal bg-white/5 backdrop-blur-md rounded-3xl p-10 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
                            <div className="relative z-10 text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-orange">
                                    <Phone className="w-10 h-10 text-white" />
                                </div>
                                <p className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mb-3 tracking-tight">&lt;500ms</p>
                                <p className="text-white/70 font-medium uppercase tracking-widest text-sm">Voice Response Latency</p>
                            </div>
                        </div>
                        <div className="reveal">
                            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-pink-400 bg-pink-400/10 border border-pink-400/20 rounded-full mb-6">
                                <Mic className="w-4 h-4" />
                                Voice AI — Not an Add-on
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                Replace Your IVR. Forever.
                            </h2>
                            <p className="text-lg text-white/70 mb-8 leading-relaxed">
                                Human-like phone conversations powered by AI. Handle inbound calls, make outbound campaigns,
                                and let customers talk naturally — no more "Press 1 for sales."
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-orange-400" />
                                    </div>
                                    <span className="text-white/90">Inbound & outbound calling automation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-orange-400" />
                                    </div>
                                    <span className="text-white/90">Real-time speech-to-text & natural TTS</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-orange-400" />
                                    </div>
                                    <span className="text-white/90">Call recording & full transcription</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-orange-400" />
                                    </div>
                                    <span className="text-white/90">Seamless transfer to human agents</span>
                                </li>
                            </ul>
                            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-orange">
                                See Voice AI Demo <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indian Languages Spotlight */}
            <section ref={languagesRef} className="py-20 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="reveal text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full mb-4">
                            <MapPin className="w-3.5 h-3.5" /> Built for India
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            Your Customers Speak Tamil.<br/>Your Bot Should Too.
                        </h2>
                        <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            Native NLU support for 10+ Indian languages. Not Google Translate bolted on —
                            real intent understanding, entity extraction, and context management in every language.
                        </p>
                    </div>
                    <div className="reveal grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12 stagger">
                        {['Hindi', 'Tamil', 'Telugu', 'Marathi', 'Bengali', 'Kannada', 'Malayalam', 'Gujarati', 'Punjabi', 'Odia', 'Hinglish', 'English'].map((lang, i) => (
                            <div key={i} className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hover:border-orange-200 transition-colors shadow-sm cursor-default">
                                <div className="text-slate-400 mb-2 flex justify-center"><MessageCircle className="w-6 h-6 text-orange-400" /></div>
                                <div className="font-semibold text-slate-900 text-sm">{lang}</div>
                            </div>
                        ))}
                    </div>
                    <div className="reveal bg-gradient-to-r from-orange-50 to-pink-50 p-8 md:p-10 rounded-3xl border border-orange-100/50 shadow-sm">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-white">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mx-auto mb-4">
                                    <Brain className="w-6 h-6" />
                                </div>
                                <div className="text-xl font-bold text-slate-900 mb-2">Native NLU</div>
                                <p className="text-slate-500 text-sm">Intent & entity recognition directly in regional languages</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-white">
                                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mx-auto mb-4">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div className="text-xl font-bold text-slate-900 mb-2">Code-Mixed</div>
                                <p className="text-slate-500 text-sm">Handles Hinglish and mixed scripts naturally and accurately</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-white">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                                    <Mic className="w-6 h-6" />
                                </div>
                                <div className="text-xl font-bold text-slate-900 mb-2">Voice + Text</div>
                                <p className="text-slate-500 text-sm">Regional language support seamless across chat and calls</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Use Cases */}
            <section ref={useCasesRef} className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="reveal text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Solutions for Every Team</h2>
                        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                            See how enterprises across industries use SwanDesk
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
                        {useCases.map((uc, i) => (
                            <div key={i} className="reveal bg-white p-8 rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-orange-200 border border-slate-100 transition-all">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-orange">
                                    {uc.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{uc.title}</h3>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{uc.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {uc.stats.map((stat, j) => (
                                        <span key={j} className="px-3 py-1 bg-orange-50 text-orange-700 border border-orange-100 rounded-full text-xs font-semibold">
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {uc.benefits.map((benefit, j) => (
                                        <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                                            <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={uc.link} className="inline-flex items-center gap-1 text-orange-600 font-bold text-sm hover:text-orange-500 transition-colors">
                                    Learn more <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive Competitor Comparison */}
            <section ref={comparisonRef} className="py-20 lg:py-28 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="reveal text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Feature Comparison</h2>
                        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                            See how SwanDesk compares to leading competitors
                        </p>
                    </div>
                    <div className="reveal overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
                        <table className="w-full border-collapse text-sm text-left">
                            <thead>
                                <tr className="border-b-2 border-slate-200 bg-slate-50">
                                    <th className="py-5 px-6 font-semibold text-slate-900 sticky left-0 bg-slate-50 z-10 w-1/4">Feature</th>
                                    <th className="py-5 px-4 text-center font-bold text-orange-600 bg-orange-50 w-[12.5%]">SwanDesk</th>
                                    <th className="py-5 px-4 text-center font-semibold text-slate-500 w-[12.5%]">Kore.ai</th>
                                    <th className="py-5 px-4 text-center font-semibold text-slate-500 w-[12.5%]">Yellow.ai</th>
                                    <th className="py-5 px-4 text-center font-semibold text-slate-500 w-[12.5%]">Haptik</th>
                                    <th className="py-5 px-4 text-center font-semibold text-slate-500 w-[12.5%]">Zendesk</th>
                                    <th className="py-5 px-4 text-center font-semibold text-slate-500 w-[12.5%]">Intercom</th>
                                </tr>
                            </thead>
                            <tbody>
                                {competitorComparison.map((row, i) => (
                                    <tr key={i} className={`border-b border-slate-100 hover:bg-slate-50/50 transition-colors ${i % 2 === 1 ? 'bg-slate-50/30' : ''}`}>
                                        <td className="py-4 px-6 font-medium text-slate-700 sticky left-0 bg-inherit z-10">{row.feature}</td>
                                        <td className="py-4 px-4 text-center bg-orange-50/50">{renderComparisonCell(row.swanDigitals)}</td>
                                        <td className="py-4 px-4 text-center">{renderComparisonCell(row.koreai)}</td>
                                        <td className="py-4 px-4 text-center">{renderComparisonCell(row.yellowai)}</td>
                                        <td className="py-4 px-4 text-center">{renderComparisonCell(row.haptik)}</td>
                                        <td className="py-4 px-4 text-center">{renderComparisonCell(row.zendesk)}</td>
                                        <td className="py-4 px-4 text-center">{renderComparisonCell(row.intercom)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="reveal text-center mt-10">
                        <Link href="/compare" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg">
                            View Detailed Comparisons <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to Explore the Platform?</h2>
                    <p className="text-xl text-slate-300 mb-10">Get hands-on with a free trial or schedule a personalized demo.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold text-sm shadow-orange hover:shadow-lg hover:-translate-y-0.5 transition-all">
                            Start Free Trial
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
