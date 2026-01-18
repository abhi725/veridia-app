import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Complete Enterprise AI Orchestration Platform for Sovereign Data | SwanDigitals',
    description: 'Build, deploy, and manage AI agents that keep 100% of your data within your control. Trusted by 500+ enterprises across Banking, Healthcare, and Government.',
    keywords: ['Enterprise AI Orchestration Platform', 'Multi-Agent Orchestration', 'On-premise AI Platform', 'Sovereign AI', 'Air-Gapped AI'],
    alternates: {
        canonical: 'https://swandigitals.com/platform',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function PlatformPage() {
    return (
        <SiteLayout>
            {/* Hero Section */}
            <Hero
                badge="🚀 Platform"
                title="The Complete Enterprise AI Orchestration Platform for Sovereign Data"
                subtitle="Build, deploy, and manage AI agents that keep 100% of your data within your control. Trusted by 500+ enterprises across Banking, Healthcare, and Government."
                primaryCTA={{ text: "Book a Platform Demo", href: "/demo" }}
                secondaryCTA={{ text: "Explore Documentation", href: "/resources/documentation" }}
            />

            {/* Trust Highlights */}
            <section className="bg-slate-50 py-4">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🔒</span>
                            <span>AES-256 Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🇮🇳</span>
                            <span>India Data Residency</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🛡️</span>
                            <span>Air-Gapped Option</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Block */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">The Enterprise AI Dilemma (And Why Cloud-Only Fails)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
                            <h3 className="font-bold text-lg mb-3 text-red-900">❌ Data Sovereignty Concerns</h3>
                            <p className="text-slate-700">Your CISO blocks cloud AI due to data sovereignty concerns</p>
                        </div>
                        <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
                            <h3 className="font-bold text-lg mb-3 text-red-900">❌ Complex Coordination</h3>
                            <p className="text-slate-700">Multi-agent workflows are too complex to coordinate manually</p>
                        </div>
                        <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
                            <h3 className="font-bold text-lg mb-3 text-red-900">❌ Budget Bankruptcy</h3>
                            <p className="text-slate-700">Legacy platforms charge per conversation, bankrupting your budget</p>
                        </div>
                    </div>
                    <p className="text-center text-xl font-semibold text-slate-900">
                        SwanDigitals solves all three. Here's how:
                    </p>
                </div>
            </section>

            {/* Core Differentiators */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Data Sovereignty */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h2 className="text-2xl font-bold mb-4">Achieve 100% Data Sovereignty</h2>
                            <p className="text-slate-700 mb-4">Air-gapped deployment. On-premise LLMs. Zero data egress to third parties.</p>
                            <Link href="/platform/security" className="text-orange-600 font-semibold hover:text-orange-700">
                                View Security Architecture →
                            </Link>
                        </div>

                        {/* Multi-Agent Orchestration */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="text-5xl mb-4">🔗</div>
                            <h2 className="text-2xl font-bold mb-4">Multi-Agent Orchestration</h2>
                            <p className="text-slate-700 mb-4">Coordinate specialized AI agents (Sales, Support, HR) as one unified system.</p>
                            <Link href="/platform/features" className="text-orange-600 font-semibold hover:text-orange-700">
                                See Features →
                            </Link>
                        </div>

                        {/* No-Code Studio */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="text-5xl mb-4">🎨</div>
                            <h2 className="text-2xl font-bold mb-4">No-Code Studio</h2>
                            <p className="text-slate-700 mb-4">Build complex flows visually. No developers required.</p>
                            <Link href="/platform/features" className="text-orange-600 font-semibold hover:text-orange-700">
                                Try Builder →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Architecture */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Enterprise-Grade Architecture</h2>
                    <div className="bg-slate-900 text-white p-12 rounded-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl mb-3">💾</div>
                                <h3 className="font-bold mb-2">Data Layer</h3>
                                <p className="text-sm text-slate-300">Your Secure Environment</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-3">🧠</div>
                                <h3 className="font-bold mb-2">AI Layer</h3>
                                <p className="text-sm text-slate-300">SwanDigitals Orchestration Engine</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-3">📱</div>
                                <h3 className="font-bold mb-2">Channel Layer</h3>
                                <p className="text-sm text-slate-300">Omnichannel Deployment</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-3">🔌</div>
                                <h3 className="font-bold mb-2">Integration Layer</h3>
                                <p className="text-sm text-slate-300">CRM, ERP, ITSM Connectors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Ecosystem */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Works With Your Entire Stack</h2>
                    <p className="text-center text-slate-600 mb-12">100+ pre-built integrations, filterable by category</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white p-4 rounded-lg text-center font-semibold">CRM & Sales</div>
                        <div className="bg-white p-4 rounded-lg text-center font-semibold">Core Banking</div>
                        <div className="bg-white p-4 rounded-lg text-center font-semibold">ITSM & Helpdesk</div>
                        <div className="bg-white p-4 rounded-lg text-center font-semibold">HR & Payroll</div>
                    </div>
                    <div className="text-center">
                        <Link href="/platform/integrations" className="inline-block px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700">
                            Browse All Integrations →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Trusted by India's Leading Enterprises</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div className="text-center text-5xl">🏦</div>
                        <div className="text-center text-5xl">🏥</div>
                        <div className="text-center text-5xl">🛒</div>
                        <div className="text-center text-5xl">💼</div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-orange-600">500+</div>
                            <div className="text-slate-600">Enterprises</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600">10M+</div>
                            <div className="text-slate-600">Daily Conversations</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600">86%</div>
                            <div className="text-slate-600">Avg Automation</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Common Questions About the Platform</h2>
                    <div className="space-y-6">
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Can I deploy SwanDigitals fully offline?</summary>
                            <p className="mt-4 text-slate-700">Yes! We offer true air-gapped deployment where the entire platform runs offline with no internet dependency.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">What LLMs do you support?</summary>
                            <p className="mt-4 text-slate-700">We support Gemini, GPT, Claude, or you can bring your own fine-tuned models.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">How long does implementation take?</summary>
                            <p className="mt-4 text-slate-700">Average 21 days from kickoff to production deployment.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to See Your Use Case in Action?</h2>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Schedule a Live Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
