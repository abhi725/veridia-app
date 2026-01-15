"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { MessageSquare, Brain, Globe, BarChart3, Zap, Users, Shield, Settings, Code, Layers, Bot, Sparkles } from 'lucide-react';

export default function FeaturesPage() {
    const coreFeatures = [
        { icon: <MessageSquare className="w-6 h-6" />, title: "Conversational AI", desc: "Natural multi-turn conversations powered by advanced AI models", link: "/features/conversational-ai" },
        { icon: <Brain className="w-6 h-6" />, title: "Natural Language Understanding", desc: "Intent detection, entity extraction, and sentiment analysis", link: "/features/nlu" },
        { icon: <BarChart3 className="w-6 h-6" />, title: "Analytics Dashboard", desc: "Real-time metrics, conversation insights, and ROI tracking", link: "/features/analytics" },
        { icon: <Globe className="w-6 h-6" />, title: "Omnichannel Deployment", desc: "Web, mobile, WhatsApp, Slack, Teams, and more channels", link: "/integrations" },
        { icon: <Shield className="w-6 h-6" />, title: "Enterprise Security", desc: "DPDP 2023, RBI compliant with on-premise option", link: "/security" }
    ];

    const capabilities = [
        { title: "No-Code Builder", desc: "Visual conversation designer for business users. Build complex flows without writing code.", icon: <Layers className="w-8 h-8" /> },
        { title: "Pro-Code SDK", desc: "Full API access for developers. Extend, customize, and integrate with any system.", icon: <Code className="w-8 h-8" /> },
        { title: "AI Training Studio", desc: "Continuously improve accuracy with active learning and human-in-the-loop training.", icon: <Brain className="w-8 h-8" /> },
        { title: "Multi-Agent Orchestration", desc: "Deploy specialized agents that work together. Route conversations intelligently.", icon: <Bot className="w-8 h-8" /> },
        { title: "Knowledge Base", desc: "Connect to documents, FAQs, and databases. AI retrieves and synthesizes answers.", icon: <Settings className="w-8 h-8" /> },
        { title: "Live Agent Handoff", desc: "Seamless transfer to human agents with full conversation context preserved.", icon: <Users className="w-8 h-8" /> }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="⚡ Platform Features"
                title="Everything You Need to Build Enterprise AI"
                subtitle="From no-code conversation builders to pro-code APIs. Deploy in days, scale to millions of conversations."
                primaryCTA={{ text: "Start Free Trial", href: "/demo" }}
                secondaryCTA={{ text: "View Docs", href: "/documentation" }}
            />

            {/* Core Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Core Features</h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        Built on modern AI (Gemini, Rasa) with enterprise-grade infrastructure
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, i) => (
                            <Link key={i} href={feature.link} className="group p-6 border-2 border-slate-200 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600">{feature.title}</h3>
                                <p className="text-slate-600 mb-4">{feature.desc}</p>
                                <span className="text-orange-600 font-semibold">Learn more →</span>
                            </Link>
                        ))}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6">
                                    {cap.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                                <p className="text-slate-600">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-orange-600">AI & NLU</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Gemini Pro & Ultra models</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Rasa open-source NLU</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> 100+ language support</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Custom model training</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Real-time sentiment analysis</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-orange-600">Infrastructure</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> 99.9% uptime SLA</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> &lt;100ms p99 latency</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Auto-scaling to 10M+ requests</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Multi-region deployment</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> On-premise & air-gapped</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-orange-600">Integrations</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> 75+ pre-built connectors</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> REST API & webhooks</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> OAuth 2.0 & SAML SSO</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Custom integration support</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Real-time event streaming</li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-orange-600">Security</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> SOC 2 Type II certified</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> GDPR, HIPAA, PCI DSS</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> AES-256 encryption</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Role-based access control</li>
                                <li className="flex items-start gap-3"><span className="text-green-600">✓</span> Audit logging & compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white border-collapse">
                            <thead>
                                <tr className="border-b-2 border-slate-200">
                                    <th className="py-4 px-4 text-left font-semibold text-slate-700">Feature</th>
                                    <th className="py-4 px-4 text-center font-semibold text-orange-600">SwanDigitals</th>
                                    <th className="py-4 px-4 text-center font-semibold text-slate-500">Kore.ai</th>
                                    <th className="py-4 px-4 text-center font-semibold text-slate-500">Yellow.ai</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">No-Code Builder</td>
                                    <td className="py-3 px-4 text-center text-green-600">Yes</td>
                                    <td className="py-3 px-4 text-center text-yellow-600">Limited</td>
                                    <td className="py-3 px-4 text-center text-green-600">Yes</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">On-Premise Deployment</td>
                                    <td className="py-3 px-4 text-center text-green-600">Yes</td>
                                    <td className="py-3 px-4 text-center text-green-600">Yes</td>
                                    <td className="py-3 px-4 text-center text-red-500">No</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Voice AI Calling</td>
                                    <td className="py-3 px-4 text-center text-green-600">Included</td>
                                    <td className="py-3 px-4 text-center text-yellow-600">Add-on</td>
                                    <td className="py-3 px-4 text-center text-yellow-600">Add-on</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Indian Language Support</td>
                                    <td className="py-3 px-4 text-center text-green-600">10+ Languages</td>
                                    <td className="py-3 px-4 text-center text-yellow-600">Limited</td>
                                    <td className="py-3 px-4 text-center text-green-600">Good</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium">Setup Fees</td>
                                    <td className="py-3 px-4 text-center text-green-600">None</td>
                                    <td className="py-3 px-4 text-center text-red-500">High</td>
                                    <td className="py-3 px-4 text-center text-red-500">High</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50">
                                    <td className="py-3 px-4 font-medium">Data Residency (India)</td>
                                    <td className="py-3 px-4 text-center text-green-600">Pune Hosting</td>
                                    <td className="py-3 px-4 text-center text-yellow-600">On Request</td>
                                    <td className="py-3 px-4 text-center text-yellow-600">On Request</td>
                                </tr>
                            </tbody>
                        </table>
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
                        <Link href="/documentation" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Read Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
