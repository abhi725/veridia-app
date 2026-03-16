"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import { Bot, Zap, Shield, BarChart3, Globe, Headphones, Briefcase, Settings, Mic, Link2, Lock, Cpu, Phone, Package, FileText, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import FAQ from '@/components/ui/FAQ';
import IntegrationCloud from '@/components/ui/IntegrationCloud';
import { useState } from 'react';
import JsonLd from '@/components/seo/JsonLd';

export default function HomePageContent() {
    const [activeUseCase, setActiveUseCase] = useState(0);

    const features = [
        {
            icon: <Bot className="w-6 h-6" />,
            title: "AI That Actually Reads Context",
            description: "Your customers don't repeat themselves. SwanDesk AI remembers the full conversation, suggests replies, and auto-resolves FAQs — in Hindi, Tamil, or English."
        },
        {
            icon: <Mic className="w-6 h-6" />,
            title: "Voice Bot for Phone Support",
            description: "Answer calls 24/7 in Hindi, Tamil, Telugu, and 8 more Indian languages. Works with Retell AI, Twilio, or fully offline (on-prem with Whisper + Ollama)."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Up and Running in a Week",
            description: "Sign up, connect your WhatsApp and email, configure your AI — and you're live. Most teams are fully onboarded in 7 days. We help with setup."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Your Data Stays Yours",
            description: "On-premise mode: your servers, your control, zero external calls. Cloud mode: we still don't read or store your customer conversations."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Every Channel in One Inbox",
            description: "WhatsApp, Email, Web chat, Instagram, Telegram, Phone — your team sees everything in one place. No tab-switching. No missed messages."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Reports That Actually Tell You Something",
            description: "Response times, resolution rates, AI automation rate, agent performance — all in one dashboard. Know what's working before your manager asks."
        }
    ];

    const useCases = [
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "Customer Support",
            description: "Handle support requests across WhatsApp, email, and web — all in one inbox. AI resolves FAQs automatically.",
            stats: ["24/7 AI", "Multi-channel", "Auto-resolve"],
            link: "/solutions/customer-service"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Sales & Lead Capture",
            description: "Capture leads from your website chat widget, qualify them with AI, and route to the right sales rep.",
            stats: ["Lead scoring", "CRM sync", "Auto-routing"],
            link: "/solutions/sales"
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "BFSI & Compliance",
            description: "Air-gapped deployment for banks and NBFCs. Full data sovereignty. RBI-compliant infrastructure.",
            stats: ["On-premise", "DPDP ready", "Audit logs"],
            link: "/solutions/it-helpdesk"
        }
    ];

    const problems = [
        {
            icon: <AlertTriangle className="w-8 h-8" />,
            title: "Too many tools, too many tabs",
            description: "Your team uses WhatsApp on one phone, email on another, and some other tool for tickets. Customers fall through the gaps. Every. Single. Day."
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Your AI bot sounds like a robot",
            description: "Most chatbots only handle FAQs. The moment a customer says something slightly different, it breaks. Your team ends up handling everything manually anyway."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Pricing that punishes growth",
            description: "Per-conversation pricing sounds cheap until you scale. Suddenly your support costs grow 10x with your customer base. There's a better model."
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "BFSI compliance is a headache",
            description: "Your CISO won't approve a cloud vendor that stores customer conversations. RBI and DPDP have opinions. Data sovereignty isn't optional in banking."
        }
    ];

    const solutions = [
        {
            icon: <Link2 className="w-10 h-10" />,
            title: "One inbox. Every channel.",
            description: "WhatsApp messages, emails, web chats, Instagram DMs — your team handles them all from a single screen. Assign, reply, resolve. Done. No more forwarding WhatsApp screenshots in a group chat."
        },
        {
            icon: <Lock className="w-10 h-10" />,
            title: "AI that helps, not replaces.",
            description: "SwanDesk AI suggests replies, auto-tags conversations, and resolves repetitive questions without human help. Your agents focus on complex issues — the AI handles the rest."
        },
        {
            icon: <Cpu className="w-10 h-10" />,
            title: "Flat pricing. No surprises.",
            description: "One monthly price covers unlimited conversations. Your costs are predictable whether you handle 1,000 or 100,000 messages. Scale without a CFO intervention."
        },
        {
            icon: <Shield className="w-10 h-10" />,
            title: "On-prem for banks and hospitals.",
            description: "Full air-gapped deployment. Ollama LLM, Whisper STT, Coqui TTS — all on your servers. No internet required. Audit logs your CISO will actually like. DPDP 2023 ready."
        }
    ];

    return (
        <SiteLayout>
            <JsonLd />
            {/* Hero Section */}
            <Hero
                badge="🚀 SwanDesk is Live — Book a Demo"
                title="Customer Support That Doesn't Need a 10-Person Team"
                subtitle="SwanDesk is an AI-powered inbox for Indian businesses. Handle WhatsApp, email, and web chat in one place — with an AI that actually helps your team, not replaces it."
                primaryCTA={{ text: "Book a Demo", href: "/demo" }}
                secondaryCTA={{ text: "Sign Up Now →", href: "https://chat.swandigitals.com", external: true }}
            />

            {/* Features Grid */}
            <FeatureGrid features={features} />

            {/* The Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Sound Familiar?</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">These are the problems that made us build SwanDesk differently.</p>
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

            {/* How SwanDesk Solves Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Here's How SwanDesk Fixes This</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            SwanDesk isn't just another chatbot. It's a complete customer support platform — your team's daily inbox, with AI already inside.
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
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">From Signup to First Resolved Ticket — in 7 Days</h2>
                    <p className="text-center text-slate-600 mb-16 max-w-3xl mx-auto">We don't sell you software and disappear. You sign up, we help you set up.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                            <div className="text-5xl mb-6 mt-4">📞</div>
                            <h3 className="text-xl font-bold mb-2">Sign up & connect channels</h3>
                            <p className="text-slate-500 text-sm mb-2">Day 1</p>
                            <p className="text-slate-600">Create your SwanDesk account, connect WhatsApp Business, email, and web chat. Takes about 30 minutes.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                            <div className="text-5xl mb-6 mt-4">🛠️</div>
                            <h3 className="text-xl font-bold mb-2">Configure your AI</h3>
                            <p className="text-slate-500 text-sm mb-2">Days 2-5</p>
                            <p className="text-slate-600">Pick your LLM (Gemini, Claude, Ollama for on-prem), upload your knowledge base, set up escalation rules. We walk you through it.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                            <div className="text-5xl mb-6 mt-4">🚀</div>
                            <h3 className="text-xl font-bold mb-2">Go live & scale</h3>
                            <p className="text-slate-500 text-sm mb-2">Days 6-7</p>
                            <p className="text-slate-600">Your team starts resolving tickets through SwanDesk. AI handles the repetitive ones. You track everything in the dashboard.</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/demo" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                            Book a Demo →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Capability Stats */}
            <section className="py-16 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2">6</div>
                            <div className="text-white/90">Indian Languages</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">50+</div>
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
                    <p className="text-center text-slate-600 mb-12">See how businesses use SwanDesk across teams</p>

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

            {/* Why SwanDesk - Competitor Comparison */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">The Honest Comparison</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border-2 border-orange-200 rounded-2xl bg-white">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">vs Kore.ai</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li>✅ No per-conversation billing</li>
                                <li>✅ Setup in days, not months</li>
                                <li>✅ True on-premise (not dedicated VPC)</li>
                            </ul>
                            <Link href="/compare/vs-kore" className="text-orange-500 font-semibold mt-4 inline-block hover:underline">See full comparison →</Link>
                        </div>
                        <div className="p-8 border-2 border-blue-200 rounded-2xl bg-white">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">vs Yellow.ai</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li>✅ Simpler to use — no AI PhD required</li>
                                <li>✅ Flat pricing, not usage-based</li>
                                <li>✅ Indian team, Indian support hours</li>
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
                { name: 'HubSpot', color: '#FF7A59', image: '/integrations/hubspot.png', category: 'CRM' },
                { name: 'Google Analytics', color: '#E37400', image: '/integrations/google-analytics.png', category: 'Analytics' },
                { name: 'Shopify', color: '#96bf48', image: '/integrations/shopify.png', category: 'Commerce' },
                { name: 'WooCommerce', color: '#96588a', image: '/integrations/woocommerce.png', category: 'Commerce' },
                { name: 'Zoho', color: '#E42527', image: '/integrations/zoho.png', category: 'CRM' },
                { name: 'Razorpay', color: '#0066FF', image: '/integrations/razorpay.png', category: 'Payment' },
                { name: 'Stripe', color: '#635BFF', image: '/integrations/stripe.png', category: 'Payment' }
            ]} note="More integrations coming — request yours" />

            {/* FAQ */}
            <FAQ items={[
                {
                    question: "Is this just another chatbot?",
                    answer: "No. SwanDesk is a full customer support platform — like Intercom or Freshdesk, but built for Indian businesses with AI already inside. It's an inbox your team works from every day, not a chatbot widget you set and forget."
                },
                {
                    question: "How long does setup take?",
                    answer: "Most teams connect WhatsApp and email on day 1, configure AI on day 2-3, and are fully live by day 7. We help. You're not alone."
                },
                {
                    question: "Can we deploy fully on-premises?",
                    answer: "Yes. True on-premise — your data center, your servers. No external API calls required. We use Ollama for the LLM, Whisper for voice transcription, and Asterisk for SIP routing. Air-gapped, DPDP compliant."
                },
                {
                    question: "What happens when the AI can't answer?",
                    answer: "The conversation routes to a human agent with full context. No dead ends. No 'I didn't understand that' loops."
                },
                {
                    question: "Which Indian languages are supported?",
                    answer: "Hindi, Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam, Gujarati, Punjabi, Odia, and Hinglish. Native support — not just translation."
                },
                {
                    question: "How is pricing different from Freshdesk or Intercom?",
                    answer: "Flat monthly fee per plan — not per seat, not per conversation. You grow, your price doesn't explode."
                }
            ]} />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to fix your customer support?</h2>
                    <p className="text-xl text-white/80 mb-8">See SwanDesk in action. We'll walk you through the platform in under 30 minutes.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://chat.swandigitals.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
                            Sign Up Now — It's Free
                        </a>
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Book a Demo
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Talk to us
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
