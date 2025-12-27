"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import { Server, Shield, Zap, Globe, Code, Database, Bot, BarChart3, Layers, Lock } from 'lucide-react';
import Link from 'next/link';

export default function PlatformPage() {
    const coreCapabilities = [
        { icon: <Bot className="w-6 h-6" />, title: "Multi-Agent Orchestration", description: "Deploy multiple specialized AI agents that work together seamlessly, like Kore.ai's platform but 10x faster to configure." },
        { icon: <Server className="w-6 h-6" />, title: "Scalable Architecture", description: "Handle 10M+ conversations monthly with auto-scaling infrastructure built for Fortune 500 demands." },
        { icon: <Shield className="w-6 h-6" />, title: "Enterprise Security", description: "SOC 2 Type II, ISO 27001, GDPR, HIPAA compliant. True on-premise deployment available." },
        { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", description: "Sub-200ms response times powered by edge computing and optimized Gemini AI models." },
        { icon: <Globe className="w-6 h-6" />, title: "Omnichannel", description: "Deploy across web, mobile, WhatsApp, Slack, Teams, voice, and 75+ other channels instantly." },
        { icon: <Code className="w-6 h-6" />, title: "Developer Friendly", description: "RESTful APIs, webhooks, SDKs in Python, Node.js, Java, and comprehensive documentation." }
    ];

    const platformPillars = [
        {
            title: "AI for Customer Service",
            icon: "🎧",
            description: "Automate 90% of support tickets with intelligent routing, sentiment analysis, and seamless human handoff.",
            stats: "90% automation rate",
            link: "/solutions/customer-service"
        },
        {
            title: "AI for Employee Experience",
            icon: "👥",
            description: "Internal HR, IT, and operations support that understands context and resolves queries instantly.",
            stats: "50% faster resolution",
            link: "/solutions/employee-experience"
        },
        {
            title: "AI for Process Automation",
            icon: "⚙️",
            description: "Connect to enterprise systems and automate complex workflows with conversational interfaces.",
            stats: "$2M+ avg savings/year",
            link: "/solutions/it-helpdesk"
        }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🏗️ Enterprise-Grade Platform"
                title="The Complete AI Platform for Enterprise"
                subtitle="Built with Gemini AI and modern architecture. Scale from 100 to 10 million conversations without breaking a sweat. Deploy in days, not months."
                primaryCTA={{ text: "Explore Platform", href: "/demo" }}
                secondaryCTA={{ text: "Read Docs", href: "/documentation" }}
            />

            {/* Three Pillars - Like Kore.ai */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">One Platform. Three Pillars.</h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        Like Kore.ai's AI for Work/Service/Process, but faster to deploy and easier to customize.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {platformPillars.map((pillar, index) => (
                            <Link
                                key={index}
                                href={pillar.link}
                                className="p-8 rounded-2xl border-2 border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all group"
                            >
                                <div className="text-5xl mb-4">{pillar.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-slate-600 mb-4">{pillar.description}</p>
                                <div className="text-orange-600 font-bold">{pillar.stats}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Architecture - Like Yellow.ai */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Platform Architecture</h2>
                        <p className="text-xl text-slate-600">Build, Deploy, Analyze - All in One Platform</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <Layers className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Build</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>✅ No-code conversation builder</li>
                                <li>✅ Pro-code SDK for developers</li>
                                <li>✅ Pre-built templates by industry</li>
                                <li>✅ Knowledge base integration</li>
                                <li>✅ Multi-turn dialog management</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <Server className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Deploy</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>✅ Cloud (AWS, Azure, GCP)</li>
                                <li>✅ On-premise deployment</li>
                                <li>✅ Hybrid configurations</li>
                                <li>✅ Air-gapped environments</li>
                                <li>✅ One-click channel deployment</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                                <BarChart3 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Analyze</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>✅ Real-time analytics dashboard</li>
                                <li>✅ Sentiment analysis</li>
                                <li>✅ Conversation insights</li>
                                <li>✅ ROI tracking</li>
                                <li>✅ Custom reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <FeatureGrid features={coreCapabilities} />

            {/* Comparison with Competitors */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How We Compare</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-2 border-slate-200 rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="px-6 py-4 text-left font-semibold">Capability</th>
                                    <th className="px-6 py-4 text-center font-semibold text-orange-600">Veridia</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Kore.ai</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Yellow.ai</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-t"><td className="px-6 py-3">Deployment Time</td><td className="px-6 py-3 text-center text-green-600 font-bold">2-4 weeks</td><td className="px-6 py-3 text-center">3-6 months</td><td className="px-6 py-3 text-center">4-8 weeks</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3">True On-Premise</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">❌</td></tr>
                                <tr className="border-t"><td className="px-6 py-3">No-Code Builder</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">Limited</td><td className="px-6 py-3 text-center">✅</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3">Modern AI (Gemini)</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">❌</td><td className="px-6 py-3 text-center">❌</td></tr>
                                <tr className="border-t"><td className="px-6 py-3">Starting Price</td><td className="px-6 py-3 text-center text-green-600 font-bold">$499/mo</td><td className="px-6 py-3 text-center">$5,000+/mo</td><td className="px-6 py-3 text-center">$3,000+/mo</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/why-veridia" className="text-orange-600 font-semibold hover:underline">
                            See detailed comparisons →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to See It in Action?</h2>
                    <p className="text-xl text-white/80 mb-8">Get a personalized demo and see how Veridia compares to your current solution.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Book Platform Demo
                        </Link>
                        <Link href="/documentation" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Explore Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
