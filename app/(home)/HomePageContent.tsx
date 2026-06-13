"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import {
    Bot, Zap, Shield, BarChart3, Globe, Headphones,
    Briefcase, Settings, Mic, Link2, Lock, Cpu,
    Phone, AlertTriangle, Check, ArrowRight,
    MessageSquare, Clock, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import FAQ from '@/components/ui/FAQ';
import IntegrationCloud from '@/components/ui/IntegrationCloud';
import { useState, useEffect, useRef } from 'react';

import DashboardMockup from '@/components/ui/DashboardMockup';

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

export default function HomePageContent() {
    const [activeUseCase, setActiveUseCase] = useState(0);
    const problemsRef = useReveal();
    const solutionsRef = useReveal();
    const stepsRef = useReveal();
    const statsRef = useReveal();
    const useCasesRef = useReveal();
    const compareRef = useReveal();
    const ctaRef = useReveal();

    // Crawler Simulator State
    const [crawlUrl, setCrawlUrl] = useState("https://www.prestigebuilders.in");
    const [crawlStep, setCrawlStep] = useState(0); // 0: idle, 1: crawling, 2: embedding, 3: completed/chat
    const [crawlProgress, setCrawlProgress] = useState(0);
    const [crawledPages, setCrawledPages] = useState<string[]>([]);
    const [chatHistory, setChatHistory] = useState([
        { sender: 'bot', text: "Hi! I've crawled prestigebuilders.in and synthesized a property database. Try asking me something like 'What configurations are available?' or 'Book a site visit'!" }
    ]);
    const [chatInputText, setChatInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (crawlStep !== 1) return;
        
        const samplePages = [
            "/projects/sunrise-residences",
            "/projects/sunrise-residences/amenities",
            "/projects/sunrise-residences/pricing-plans",
            "/projects/sunrise-residences/location-map",
            "/projects/sunrise-residences/floor-layouts",
            "/faqs",
            "/contact-us",
            "/brochure-download.pdf"
        ];
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 4;
            setCrawlProgress(Math.min(progress, 100));
            
            const pageIndex = Math.floor(progress / 12);
            if (pageIndex < samplePages.length) {
                const page = samplePages[pageIndex];
                setCrawledPages(prev => {
                    if (prev.includes(page)) return prev;
                    return [...prev, page];
                });
            }
            
            if (progress >= 100) {
                clearInterval(interval);
                setCrawlStep(2);
                setTimeout(() => {
                    setCrawlStep(3);
                }, 1200);
            }
        }, 85);
        
        return () => clearInterval(interval);
    }, [crawlStep]);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;
        
        setChatHistory(prev => [...prev, { sender: 'user', text }]);
        setChatInputText("");
        setIsTyping(true);
        
        setTimeout(() => {
            let reply = "I'm sorry, I couldn't find that specific information on prestigebuilders.in. Can you try asking about amenities, BHK layouts, or booking a visit?";
            const normalizedText = text.toLowerCase();
            
            if (normalizedText.includes("bhk") || normalizedText.includes("config") || normalizedText.includes("price") || normalizedText.includes("cost") || normalizedText.includes("start")) {
                reply = "Prestige Sunrise offers premium 2BHK (1,250 sq.ft) and 3BHK (1,850 sq.ft) luxury apartments starting from ₹1.5 Cr in Whitefield.";
            } else if (normalizedText.includes("amenit") || normalizedText.includes("pool") || normalizedText.includes("gym") || normalizedText.includes("club")) {
                reply = "The project includes a 25,000 sq.ft clubhouse, infinity swimming pool, fully equipped gymnasium, jogging track, rooftop gardens, and 24/7 security.";
            } else if (normalizedText.includes("book") || normalizedText.includes("visit") || normalizedText.includes("schedul")) {
                reply = "I can help with that! Site visits are available daily from 10 AM to 6 PM. Would you like to book for this Saturday at 11 AM?";
            }
            
            setChatHistory(prev => [...prev, { sender: 'bot', text: reply }]);
            setIsTyping(false);
        }, 800);
    };

    const features = [
        { icon: <Bot className="w-5 h-5" />, title: "AI That Actually Reads Context", description: "Your customers don't repeat themselves. SwanDigitals AI remembers full conversations, suggests replies, and auto-resolves FAQs — in Hindi, Tamil, or English." },
        { icon: <Mic className="w-5 h-5" />, title: "Voice Bot for Phone Support", description: "Answer calls 24/7 in Hindi, Tamil, Telugu, and 8 more Indian languages. Works with advanced cloud voice providers, standard SIP trunking, or fully offline on-premises with private speech models." },
        { icon: <Zap className="w-5 h-5" />, title: "Up and Running in a Week", description: "Sign up, connect your WhatsApp and email, configure your AI — and you're live. Most teams are fully onboarded in 7 days. We help with setup." },
        { icon: <Shield className="w-5 h-5" />, title: "Your Data Stays Yours", description: "On-premise mode: your servers, your control, zero external calls. Cloud mode: we still don't read or store your customer conversations." },
        { icon: <Globe className="w-5 h-5" />, title: "Every Channel in One Inbox", description: "WhatsApp, Email, Web chat, Instagram, Telegram, Phone — your team sees everything in one place. No tab-switching. No missed messages." },
        { icon: <BarChart3 className="w-5 h-5" />, title: "Reports That Actually Tell You Something", description: "Response times, resolution rates, AI automation rate, agent performance — all in one dashboard. Know what's working before your manager asks." },
    ];

    const problems = [
        { icon: <AlertTriangle className="w-6 h-6" />, title: "Too many tools, too many tabs", description: "Your team uses WhatsApp on one phone, email on another. Customers fall through the gaps every single day." },
        { icon: <MessageSquare className="w-6 h-6" />, title: "Your AI bot sounds like a robot", description: "Most chatbots only handle FAQs. The moment a customer says something slightly different, it breaks." },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Pricing that punishes growth", description: "Per-conversation pricing sounds cheap until you scale. Suddenly your support costs grow 10x with your customer base." },
        { icon: <Lock className="w-6 h-6" />, title: "BFSI compliance is a headache", description: "Your CISO won't approve a cloud vendor that stores customer conversations. RBI and DPDP have strong opinions." },
    ];

    const solutions = [
        { icon: <Link2 className="w-6 h-6" />, title: "One inbox. Every channel.", description: "WhatsApp messages, emails, web chats, Instagram DMs — your team handles them all from a single screen. Assign, reply, resolve." },
        { icon: <Bot className="w-6 h-6" />, title: "AI that helps, not replaces.", description: "SwanDigitals AI suggests replies, auto-tags conversations, and resolves repetitive questions without human help. Agents focus on complex issues." },
        { icon: <Cpu className="w-6 h-6" />, title: "Flat pricing. No surprises.", description: "One monthly price covers unlimited conversations. Your costs are predictable whether you handle 1,000 or 100,000 messages." },
        { icon: <Shield className="w-6 h-6" />, title: "On-prem for banks and hospitals.", description: "Full air-gapped deployment. Secure local LLMs, offline speech-to-text, and voice synthesis — all on your servers. DPDP 2023 ready." },
    ];

    const steps = [
        { num: 1, icon: <Phone className="w-7 h-7" />, title: "Sign up & connect channels", day: "Day 1", description: "Create your SwanDigitals account, connect WhatsApp Business, email, and web chat. Takes about 30 minutes." },
        { num: 2, icon: <Settings className="w-7 h-7" />, title: "Configure your AI", day: "Days 2–5", description: "Choose your model (secure cloud LLMs or local LLMs for on-premise), upload your knowledge base, set up escalation rules." },
        { num: 3, icon: <Zap className="w-7 h-7" />, title: "Go live & scale", day: "Days 6–7", description: "Your team starts resolving tickets through SwanDigitals. AI handles the repetitive ones. Track everything in the dashboard." },
    ];

    const useCases = [
        { icon: <Headphones className="w-5 h-5" />, title: "Customer Support", description: "Handle support requests across WhatsApp, email, and web — all in one inbox. AI resolves FAQs automatically.", stats: ["24/7 AI", "Multi-channel", "Auto-resolve"], link: "/solutions/customer-service" },
        { icon: <Briefcase className="w-5 h-5" />, title: "Sales & Lead Capture", description: "Capture leads from your website chat widget, qualify them with AI, and route to the right sales rep.", stats: ["Lead scoring", "CRM sync", "Auto-routing"], link: "/solutions/sales" },
        { icon: <Settings className="w-5 h-5" />, title: "BFSI & Compliance", description: "Air-gapped deployment for banks and NBFCs. Full data sovereignty. RBI-compliant infrastructure.", stats: ["On-premise", "DPDP ready", "Audit logs"], link: "/solutions/it-helpdesk" },
        { icon: <Globe className="w-5 h-5" />, title: "Real Estate Builders", description: "Instantly capture and qualify luxury project buyer leads from WhatsApp and Instagram. Qualify budgets, BHK configurations, and book site visits 24/7.", stats: ["Site visits booked", "WhatsApp & Insta DMs", "Context sync"], link: "http://localhost:8080/chatbot/real-estate/index.html" },
    ];

    const stats = [
        { value: "6", label: "Indian Languages" },
        { value: "50+", label: "Integrations" },
        { value: "<500ms", label: "Voice Latency" },
        { value: "7 Days", label: "To Go Live" },
    ];

    return (
        <SiteLayout>

            {/* Hero */}
            <Hero
                badge="SwanDigitals is Live — Book a Demo"
                title="Customer Support That Doesn't Need a 10-Person Team"
                subtitle="SwanDigitals is an AI-powered inbox for Indian businesses. Handle WhatsApp, email, and web chat in one place — with an AI that actually helps your team, not replaces it."
                primaryCTA={{ text: "Book a Demo", href: "/demo" }}
                secondaryCTA={{ text: "Sign Up Free →", href: "https://chat.swandigitals.com", external: true }}
                showMockup={true}
            />

            {/* Trust Marquee */}
            <section className="py-4 border-y border-slate-100 bg-white overflow-hidden">
                <div className="marquee-container">
                    <div className="marquee-inner">
                        {[...Array(2)].map((_, set) => (
                            <div key={set} className="flex items-center gap-10 px-5">
                                {["DPDP 2023 READY", "RBI COMPLIANT", "ON-PREMISE DEPLOYMENT", "ZERO DATA RETENTION", "AIR-GAPPED MODE", "SOC 2 ALIGNED", "AES-256 ENCRYPTION", "MADE IN INDIA"].map((item) => (
                                    <span key={item} className="flex items-center gap-3 text-xs font-semibold tracking-widest text-slate-400 uppercase whitespace-nowrap">
                                        <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <FeatureGrid
                features={features}
                sectionLabel="Why SwanDigitals"
                heading="AI That Actually Reads Context."
                subheading="No more robotic replies. SwanDigitals understands tone, intent, and urgency — then acts on it."
            />

            {/* Problem Section — Visual */}
            <section ref={problemsRef} className="py-20 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="reveal inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-rose-600 bg-rose-50 border border-rose-100 rounded-full mb-4">The Problem</span>
                        <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900 mb-3">Sound Familiar?</h2>
                        <p className="reveal text-lg text-slate-500 max-w-xl mx-auto">These are the pain points that made us build SwanDigitals differently.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
                        {problems.map((p, i) => (
                            <div key={i} className="reveal group flex gap-5 bg-rose-50/50 border border-rose-100 rounded-2xl p-7 hover:border-rose-200 hover:shadow-sm transition-all cursor-default">
                                <div className="w-12 h-12 bg-white border border-rose-100 rounded-2xl flex items-center justify-center text-rose-500 flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                                    {p.icon}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-rose-300 text-2xl font-black leading-none">{`0${i+1}`}</span>
                                        <h3 className="font-bold text-slate-800">{p.title}</h3>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section — Visual before/after */}
            <section ref={solutionsRef} className="py-20 lg:py-28 bg-slate-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="reveal inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-400 bg-orange-400/10 border border-orange-400/20 rounded-full mb-4">The Solution</span>
                        <h2 className="reveal text-3xl md:text-4xl font-bold text-white mb-3">Here's How SwanDigitals Fixes This</h2>
                        <p className="reveal text-lg text-slate-400 max-w-2xl mx-auto">One platform. AI inside. Your team's inbox — not a chatbot widget.</p>
                    </div>
                    {/* Visual before→after row */}
                    <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mb-10">
                        {/* Before */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-4">❌ Before SwanDigitals</p>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="flex gap-2"><span className="text-rose-500 mt-0.5">✕</span>5 browser tabs open</li>
                                <li className="flex gap-2"><span className="text-rose-500 mt-0.5">✕</span>WhatsApp on phone, email on desktop</li>
                                <li className="flex gap-2"><span className="text-rose-500 mt-0.5">✕</span>Customers waiting hours for replies</li>
                                <li className="flex gap-2"><span className="text-rose-500 mt-0.5">✕</span>No visibility into what's resolved</li>
                                <li className="flex gap-2"><span className="text-rose-500 mt-0.5">✕</span>Per-conversation billing kills scale</li>
                            </ul>
                        </div>
                        {/* Arrow */}
                        <div className="hidden md:flex items-center justify-center">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-orange text-white text-xl font-black">→</div>
                                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">SwanDigitals</span>
                            </div>
                        </div>
                        {/* After */}
                        <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-2xl p-6">
                            <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4">✓ After SwanDigitals</p>
                            <ul className="space-y-3 text-sm text-white/80">
                                <li className="flex gap-2"><span className="text-green-400 mt-0.5">✓</span>One inbox: WhatsApp, email, web chat</li>
                                <li className="flex gap-2"><span className="text-green-400 mt-0.5">✓</span>AI replies in &lt;2 seconds, 24/7</li>
                                <li className="flex gap-2"><span className="text-green-400 mt-0.5">✓</span>87% tickets resolved automatically</li>
                                <li className="flex gap-2"><span className="text-green-400 mt-0.5">✓</span>Full dashboard: who did what, when</li>
                                <li className="flex gap-2"><span className="text-green-400 mt-0.5">✓</span>Flat pricing — grow without fear</li>
                            </ul>
                        </div>
                    </div>
                    {/* Solution cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
                        {solutions.map((s, i) => (
                            <div key={i} className="reveal group bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-orange-500/20 transition-all cursor-default">
                                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform shadow-orange">{s.icon}</div>
                                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section ref={stepsRef} className="py-20 lg:py-28 bg-white">
                <div className="max-w-5xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="reveal inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                            How It Works
                        </span>
                        <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900 mb-3">Signup to First Resolved Ticket in 7 Days</h2>
                        <p className="reveal text-lg text-slate-500 max-w-xl mx-auto">We don't sell you software and disappear. You sign up, we help you set up.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger relative">
                        {/* Connecting line desktop */}
                        <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" aria-hidden="true" />
                        {steps.map((step, i) => (
                            <div key={i} className="reveal flex flex-col items-center text-center p-6">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 bg-orange-50 border-2 border-orange-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:border-amber-300 transition-colors">
                                        {step.icon}
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-orange">
                                        {step.num}
                                    </span>
                                </div>
                                <span className="text-xs font-semibold text-orange-600 mb-2">{step.day}</span>
                                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="reveal text-center mt-10">
                        <Link href="/demo" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer">
                            Book a Demo
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section ref={statsRef} className="py-14 bg-gradient-to-r from-orange-500 to-pink-500">
                <div className="max-w-5xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger">
                        {stats.map((s, i) => (
                            <div key={i} className="reveal">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-1">{s.value}</div>
                                <div className="text-sm text-white/80 font-medium">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section ref={useCasesRef} className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="reveal inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                            Use Cases
                        </span>
                        <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900 mb-3">Built for Your Industry</h2>
                        <p className="reveal text-lg text-slate-500">See how businesses use SwanDigitals across teams</p>
                    </div>

                    <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
                        {useCases.map((uc, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveUseCase(i)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${activeUseCase === i
                                    ? 'bg-orange-500 text-white shadow-orange'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                            >
                                {uc.icon}
                                {uc.title}
                            </button>
                        ))}
                    </div>

                    <div className="reveal bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-card">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{useCases[activeUseCase].title}</h3>
                                <p className="text-slate-500 mb-6 leading-relaxed">{useCases[activeUseCase].description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {useCases[activeUseCase].stats.map((stat, i) => (
                                        <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                                            <Check className="w-3 h-3" />
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                                {useCases[activeUseCase].link.startsWith('http') ? (
                                    <a href={useCases[activeUseCase].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition-all cursor-pointer">
                                        View Real Estate Demo
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                ) : (
                                    <Link href={useCases[activeUseCase].link} className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition-all cursor-pointer">
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                            <div className="flex items-center justify-center relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 min-h-[350px]">
                                {activeUseCase === 3 ? (
                                    <div className="w-full bg-[#efeae2] p-4 flex flex-col justify-between font-sans min-h-[350px] relative">
                                        {/* Header */}
                                        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">S</div>
                                                <div className="text-left">
                                                    <div className="font-semibold text-xs text-slate-800">Swan AI — Real Estate</div>
                                                    <div className="text-[9px] text-emerald-600 font-medium">online</div>
                                                </div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        </div>
                                        
                                        {/* Messages list */}
                                        <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto pr-1 text-xs text-left">
                                            <div className="bg-white rounded-lg p-2.5 max-w-[85%] self-start shadow-sm text-slate-800">
                                                <span className="font-semibold text-[10px] text-emerald-600 block mb-0.5 text-left">Swan AI</span>
                                                Hi Amit! Welcome to Prestige Sunrise. Are you looking for a 2BHK or 3BHK configuration?
                                            </div>
                                            <div className="bg-[#d9fdd3] rounded-lg p-2.5 max-w-[85%] self-end shadow-sm text-slate-800">
                                                Looking for 3BHK. What is the starting price?
                                            </div>
                                            <div className="bg-white rounded-lg p-2.5 max-w-[85%] self-start shadow-sm text-slate-800">
                                                <span className="font-semibold text-[10px] text-emerald-600 block mb-0.5 text-left">Swan AI</span>
                                                3BHK premium residences (1,850 sq.ft) start at ₹1.5 Cr. Would you like me to send the floor plans on WhatsApp?
                                            </div>
                                            <div className="bg-[#d9fdd3] rounded-lg p-2.5 max-w-[85%] self-end shadow-sm text-slate-800">
                                                Yes please. Also is it RERA registered?
                                            </div>
                                            <div className="bg-white rounded-lg p-2.5 max-w-[85%] self-start shadow-sm text-slate-800">
                                                <span className="font-semibold text-[10px] text-emerald-600 block mb-0.5 text-left">Swan AI</span>
                                                Yes, it is fully RERA registered. I have sent the layout brochure. Would you like to book a site visit for Saturday?
                                            </div>
                                        </div>
                                        
                                        {/* Input footer */}
                                        <div className="mt-3 pt-2 border-t border-slate-200 flex items-center gap-2">
                                            <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[11px] text-slate-400 border border-slate-200 text-left">Type a message...</div>
                                            <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white text-xs">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <img src="/dashboard-screenshot.png" alt="SwanDigitals Dashboard" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crawler Onboarding Section */}
            <section className="py-20 lg:py-28 bg-slate-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-400 bg-orange-400/10 border border-orange-400/20 rounded-full mb-4">
                            Effortless Onboarding
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Your Website Already Has the Answers
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Our system crawls your website, gets to know your inventory, and builds a custom AI knowledge base automatically. No manual training required.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left column: 3 Steps */}
                        <div className="lg:col-span-5 space-y-8 text-left">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold shrink-0">1</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Enter Your Website URL</h3>
                                    <p className="text-sm text-slate-400">Just paste your company or project address. That's all we need to get started.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold shrink-0">2</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">We Crawl Up to 50 Pages</h3>
                                    <p className="text-sm text-slate-400">Our system automatically reads property layouts, pricing sheet PDFs, amenities, and FAQs.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold shrink-0">3</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Your AI Assistant Is Ready</h3>
                                    <p className="text-sm text-slate-400">Instantly test the generated knowledge base, refine settings, and deploy it to WhatsApp or Web chat.</p>
                                </div>
                            </div>
                            
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-xs text-slate-500 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                                    Supports dynamic SPAs, static HTML pages, and PDFs.
                                </p>
                            </div>
                        </div>

                        {/* Right column: Interactive Simulator Panel */}
                        <div className="lg:col-span-7">
                            <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 shadow-xl relative min-h-[420px] flex flex-col justify-between">
                                {crawlStep === 0 && (
                                    <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6 py-6">
                                        <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                                            <Globe className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-2 max-w-md">
                                            <h4 className="text-white font-semibold text-lg">Test the Website Crawler</h4>
                                            <p className="text-xs text-slate-400">Enter a website URL and see our crawler build a knowledge base in real-time.</p>
                                        </div>
                                        <div className="flex w-full max-w-md gap-2">
                                            <input 
                                                type="text" 
                                                value={crawlUrl}
                                                onChange={(e) => setCrawlUrl(e.target.value)}
                                                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                                            />
                                            <button 
                                                onClick={() => { setCrawlStep(1); setCrawlProgress(0); setCrawledPages([]); }}
                                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-colors shrink-0"
                                            >
                                                Crawl Site
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {crawlStep === 1 && (
                                    <div className="flex-1 flex flex-col justify-center space-y-6 py-6">
                                        <div className="space-y-2 text-left">
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-orange-400 font-medium">Crawling {crawlUrl}...</span>
                                                <span className="text-white font-semibold">{crawlProgress}%</span>
                                            </div>
                                            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                                                <div className="bg-orange-500 h-full transition-all duration-150" style={{ width: `${crawlProgress}%` }}></div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900 rounded-xl p-4 h-48 overflow-y-auto font-mono text-[10px] text-slate-400 flex flex-col gap-1.5 scrollbar-thin text-left">
                                            <div className="text-emerald-400 font-semibold">[START] Initializing crawler node...</div>
                                            <div className="text-slate-500">User-Agent: SwanBot/2.0 (RealEstate Crawler)</div>
                                            {crawledPages.map((page, idx) => (
                                                <div key={idx} className="flex gap-2">
                                                    <span className="text-emerald-500">✓</span>
                                                    <span className="text-slate-300">GET {page}</span>
                                                    <span className="text-slate-500">(200 OK)</span>
                                                </div>
                                            ))}
                                            {crawlProgress < 100 && <div className="text-orange-400 animate-pulse">Scanning pages...</div>}
                                        </div>
                                    </div>
                                )}

                                {crawlStep === 2 && (
                                    <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4 py-12">
                                        <div className="w-12 h-12 rounded-full border-2 border-orange-500 border-t-transparent animate-spin"></div>
                                        <div className="space-y-1">
                                            <h4 className="text-white font-semibold text-sm">Building Knowledge Base...</h4>
                                            <p className="text-xs text-slate-400">Generating vector embeddings and training context rules.</p>
                                        </div>
                                    </div>
                                )}

                                {crawlStep === 3 && (
                                    <div className="flex-1 flex flex-col justify-between font-sans">
                                        {/* Chat Interface */}
                                        <div className="flex items-center justify-between border-b border-slate-700 pb-2.5 mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-semibold text-xs">AI</div>
                                                <div className="text-left">
                                                    <div className="font-semibold text-xs text-white">Project Assistant</div>
                                                    <div className="text-[9px] text-emerald-400 font-medium">Synced with prestigebuilders.in</div>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => setCrawlStep(0)}
                                                className="text-[10px] text-slate-500 hover:text-white transition-colors"
                                            >
                                                Reset
                                            </button>
                                        </div>

                                        {/* Messages */}
                                        <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto max-h-[220px] pr-1 text-xs mb-3 text-left">
                                            {chatHistory.map((msg, idx) => (
                                                <div 
                                                    key={idx} 
                                                    className={`rounded-xl p-2.5 max-w-[85%] shadow-sm ${
                                                        msg.sender === 'bot' 
                                                            ? 'bg-slate-900 text-slate-300 self-start border border-slate-850' 
                                                            : 'bg-orange-500 text-white self-end'
                                                    }`}
                                                >
                                                    {msg.text}
                                                </div>
                                            ))}
                                            {isTyping && (
                                                <div className="bg-slate-900 text-slate-400 border border-slate-800 rounded-xl p-2.5 self-start flex gap-1 items-center">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"></span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse delay-75"></span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse delay-150"></span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Pre-suggested options */}
                                        {chatHistory.length <= 1 && !isTyping && (
                                            <div className="flex flex-wrap gap-1.5 mb-3 justify-start">
                                                {[
                                                    "What configurations are available?",
                                                    "What amenities do they have?",
                                                    "Book a site visit"
                                                ].map((q, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleSendMessage(q)}
                                                        className="bg-slate-900 hover:bg-slate-850 text-[10px] text-orange-400 border border-slate-800 rounded-full px-3 py-1 text-left transition-colors"
                                                    >
                                                        {q}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {/* Input bar */}
                                        <div className="pt-2.5 border-t border-slate-700/50 flex items-center gap-2">
                                            <input 
                                                type="text" 
                                                placeholder="Ask another question..."
                                                value={chatInputText}
                                                onChange={(e) => setChatInputText(e.target.value)}
                                                onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(chatInputText); }}
                                                className="flex-1 bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-white focus:outline-none focus:border-orange-500"
                                            />
                                            <button 
                                                onClick={() => handleSendMessage(chatInputText)}
                                                className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0 hover:bg-orange-600 transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitor Comparison */}
            <section ref={compareRef} className="py-20 lg:py-28 bg-slate-50/60">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="reveal inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                            Compare
                        </span>
                        <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900">The Honest Comparison</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
                        {[
                            {
                                title: "vs Kore.ai", color: "amber",
                                points: ["No per-conversation billing", "Setup in days, not months", "True on-premise (not dedicated VPC)"],
                                link: "/compare/vs-kore"
                            },
                            {
                                title: "vs Yellow.ai", color: "blue",
                                points: ["Simpler to use — no AI PhD required", "Flat pricing, not usage-based", "Indian team, Indian support hours"],
                                link: "/compare/vs-yellow"
                            }
                        ].map((c, i) => (
                            <div key={i} className={`reveal bg-white border rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${c.color === 'amber' ? 'border-orange-100 hover:border-orange-200' : 'border-blue-100 hover:border-blue-200'}`}>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">{c.title}</h3>
                                <ul className="space-y-2.5 mb-5">
                                    {c.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                                            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${c.color === 'amber' ? 'text-orange-600' : 'text-blue-500'}`} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={c.link} className={`text-sm font-semibold hover:underline transition-colors ${c.color === 'amber' ? 'text-orange-600' : 'text-blue-600'}`}>
                                    See full comparison →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <IntegrationCloud
                integrations={[
                    { name: 'WhatsApp', color: '#25D366', image: '/integrations/whatsapp.png', category: 'Messaging' },
                    { name: 'Slack', color: '#4A154B', image: '/integrations/slack.png', category: 'Chat' },
                    { name: 'Teams', color: '#6264A7', category: 'Chat' },
                    { name: 'Zendesk', color: '#03363D', image: '/integrations/zendesk.png', category: 'Support' },
                    { name: 'Freshdesk', color: '#00A65A', image: '/integrations/freshdesk.png', category: 'Support' },
                    { name: 'HubSpot', color: '#FF7A59', image: '/integrations/hubspot.png', category: 'CRM' },
                    { name: 'Google Analytics', color: '#E37400', image: '/integrations/google-analytics.png', category: 'Analytics' },
                    { name: 'Shopify', color: '#96bf48', image: '/integrations/shopify.png', category: 'Commerce' },
                    { name: 'WooCommerce', color: '#96588a', image: '/integrations/woocommerce.png', category: 'Commerce' },
                    { name: 'Zoho', color: '#E42527', image: '/integrations/zoho.png', category: 'CRM' },
                    { name: 'Razorpay', color: '#0066FF', image: '/integrations/razorpay.png', category: 'Payment' },
                    { name: 'Stripe', color: '#635BFF', image: '/integrations/stripe.png', category: 'Payment' },
                ]}
                note="More integrations coming — request yours"
            />

            {/* FAQ */}
            <FAQ items={[
                { question: "Is this just another chatbot?", answer: "No. SwanDigitals is a full customer support platform — like Intercom or Freshdesk, but built for Indian businesses with AI already inside. It's an inbox your team works from every day, not a chatbot widget you set and forget." },
                { question: "How long does setup take?", answer: "Most teams connect WhatsApp and email on day 1, configure AI on day 2-3, and are fully live by day 7. We help. You're not alone." },
                { question: "Can we deploy fully on-premises?", answer: "Yes. True on-premise — your data center, your servers. No external API calls required. We deploy secure local LLMs for text, offline transcription nodes for voice, and standard SIP trunking. Fully air-gapped, DPDP compliant." },
                { question: "What happens when the AI can't answer?", answer: "The conversation routes to a human agent with full context. No dead ends. No 'I didn't understand that' loops." },
                { question: "Which Indian languages are supported?", answer: "Hindi, Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam, Gujarati, Punjabi, Odia, and Hinglish. Native support — not just translation." },
                { question: "How is pricing different from Freshdesk or Intercom?", answer: "Flat monthly fee per plan — not per seat, not per conversation. You grow, your price doesn't explode." },
            ]} />

            {/* Final CTA */}
            <section ref={ctaRef} className="py-20 lg:py-28 bg-slate-900">
                <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
                    <h2 className="reveal text-3xl md:text-4xl font-bold text-white mb-4">Ready to fix your customer support?</h2>
                    <p className="reveal text-lg text-slate-400 mb-10">See SwanDigitals in action. We'll walk you through the platform in under 30 minutes.</p>
                    <div className="reveal flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://chat.swandigitals.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-900 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                        >
                            Sign Up Free
                        </a>
                        <Link
                            href="/demo"
                            className="px-7 py-3.5 bg-orange-500 hover:bg-orange-500 text-white rounded-full font-semibold text-sm shadow-orange hover:shadow-orange-lg transition-all duration-200 flex items-center gap-2 justify-center cursor-pointer"
                        >
                            Book a Demo
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
