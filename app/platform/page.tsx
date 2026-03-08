import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Chatbot Platform India | Low-Code + On-Premise',
    description: 'SwanDigitals AI platform: visual flow builder, voice AI, WhatsApp API, analytics. Cloud + on-premise. 100% data sovereignty for Indian enterprises.',
    keywords: ['AI Platform India', 'Chatbot Platform', 'On-Premise AI', 'Low-Code Chatbot', 'Enterprise AI India'],
    alternates: {
        canonical: 'https://swandigitals.com/platform',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function PlatformPage() {
    const securityFeatures = [
        { icon: '🔒', title: 'AES-256 Encryption', desc: 'Bank-grade encryption at rest and in transit' },
        { icon: '🇮🇳', title: 'India Data Residency', desc: 'Full data hosting within India' },
        { icon: '🛡️', title: 'Air-Gapped Option', desc: 'True offline deployment capability' },
        { icon: '🔐', title: 'RBAC & SSO', desc: 'Role-based access with SAML 2.0/OIDC' },
        { icon: '📋', title: 'Audit Logging', desc: 'Complete activity logs for compliance' },
        { icon: '🏛️', title: 'DPDP 2023 Ready', desc: "Architecture designed for India's data protection law" }
    ];

    const comparisonData = [
        { feature: 'Data Location', swan: 'Your data center OR our cloud (zero collection)', competitor: 'Their cloud infrastructure' },
        { feature: 'External Network Access', swan: 'None required (on-prem)', competitor: 'Always required' },
        { feature: 'Air-gapped Deployment', swan: '✓ Fully supported', competitor: '✗ Not supported' },
        { feature: 'Customer Data Collection', swan: 'Zero — we never store your data', competitor: 'Stores conversation data' },
        { feature: 'Security Policies', swan: 'Full customer control', competitor: 'Vendor-dependent' },
        { feature: 'Regulatory Compliance', swan: 'Maximum flexibility', competitor: 'Limited by vendor' }
    ];

    return (
        <SiteLayout>
            {/* Hero Section */}
            <Hero
                badge="🚀 Platform"
                title="Enterprise AI Orchestration Platform"
                subtitle="Build, deploy, and manage AI agents with 100% data control. On-premise or cloud — we never collect or store your conversation data."
                primaryCTA={{ text: "Book a Platform Demo", href: "/demo" }}
                secondaryCTA={{ text: "Explore Features", href: "/features" }}
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
                            <span>Zero Data Collection</span>
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
                        SwanDesk solves all three. Here's how:
                    </p>
                </div>
            </section>

            {/* Core Differentiators */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h2 className="text-2xl font-bold mb-4">100% Data Sovereignty</h2>
                            <p className="text-slate-700 mb-4">Air-gapped deployment. On-premise LLMs. Zero data egress to third parties — even when using our cloud.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="text-5xl mb-4">🔗</div>
                            <h2 className="text-2xl font-bold mb-4">Multi-Agent Orchestration</h2>
                            <p className="text-slate-700 mb-4">Coordinate specialized AI agents (Sales, Support, HR) as one unified system.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="text-5xl mb-4">🎨</div>
                            <h2 className="text-2xl font-bold mb-4">No-Code Studio</h2>
                            <p className="text-slate-700 mb-4">Build complex flows visually. No developers required.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deployment Options - No Hybrid */}
            <section id="deployment" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Deploy Your Way</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">Two deployment options, one promise: we never collect or store your customer conversation data.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* On-Premise */}
                        <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl border-2 border-orange-300 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                Most Popular for Enterprises
                            </div>
                            <div className="text-5xl mb-4 text-center">🏢</div>
                            <h3 className="text-2xl font-bold text-center mb-4">On-Premise</h3>
                            <p className="text-slate-600 text-center mb-6">Deploy entirely in your data center. Full data control.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Your servers, your rules</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Air-gapped option available</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Zero external dependencies</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Your security policies apply</span>
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 text-center">Best for: Banks, Healthcare, Government</p>
                        </div>

                        {/* Cloud SaaS */}
                        <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-200">
                            <div className="text-5xl mb-4 text-center">☁️</div>
                            <h3 className="text-2xl font-bold text-center mb-4">Cloud (SaaS)</h3>
                            <p className="text-slate-600 text-center mb-6">Hosted on our infrastructure — but we never touch your data.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Deploy in hours</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Auto-scaling & managed updates</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span className="font-semibold text-orange-600">Zero data collection — we don't store your conversations</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>99.9% SLA uptime</span>
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 text-center">Best for: Startups, fast deployment needs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Architecture */}
            <section id="security" className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Security Architecture</h2>
                    <p className="text-center text-white/80 mb-12">Built from the ground up for regulated industries</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                        {securityFeatures.map((feature, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20">
                                <div className="text-4xl mb-3">{feature.icon}</div>
                                <div className="font-bold text-white mb-1">{feature.title}</div>
                                <div className="text-xs text-white/70">{feature.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* vs Yellow.ai Comparison */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                        <h3 className="text-2xl font-bold text-center mb-6">True On-Premise vs "Dedicated Cloud"</h3>
                        <p className="text-center text-white/70 mb-8">See how SwanDigitals compares to Yellow.ai's "dedicated VPC"</p>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="text-left py-4 px-4">Feature</th>
                                        <th className="text-center py-4 px-4 text-orange-400">SwanDigitals</th>
                                        <th className="text-center py-4 px-4 text-slate-400">Yellow.ai VPC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="border-b border-white/10">
                                            <td className="py-4 px-4">{row.feature}</td>
                                            <td className="py-4 px-4 text-center text-green-400">{row.swan}</td>
                                            <td className="py-4 px-4 text-center text-slate-400">{row.competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                        <Link href="/integrations" className="inline-block px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700">
                            Browse All Integrations →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Built for Regulated Industries</h2>
                    <p className="text-center text-slate-600 mb-12">Where data sovereignty isn't optional — it's mandatory.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div className="text-center p-6 rounded-xl bg-slate-50">
                            <div className="text-5xl mb-3">🏦</div>
                            <div className="font-bold">Banking & NBFC</div>
                            <div className="text-sm text-slate-500">RBI-ready architecture</div>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-slate-50">
                            <div className="text-5xl mb-3">🏥</div>
                            <div className="font-bold">Healthcare</div>
                            <div className="text-sm text-slate-500">HIPAA-compliant design</div>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-slate-50">
                            <div className="text-5xl mb-3">🏛️</div>
                            <div className="font-bold">Government</div>
                            <div className="text-sm text-slate-500">Air-gapped deployment</div>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-slate-50">
                            <div className="text-5xl mb-3">🛡️</div>
                            <div className="font-bold">Insurance</div>
                            <div className="text-sm text-slate-500">DPDP 2023 ready</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
                    <div className="space-y-6">
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Can I deploy SwanDigitals fully offline?</summary>
                            <p className="mt-4 text-slate-700">Yes! We offer true air-gapped deployment where the entire platform runs offline with no internet dependency.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Do you collect my customer data on your cloud offering?</summary>
                            <p className="mt-4 text-slate-700">No. Even on our cloud/SaaS option, we never collect, store, or train on your customer conversation data. Your data flows through our system but is never retained.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">What LLMs do you support?</summary>
                            <p className="mt-4 text-slate-700">We support Gemini, GPT, Claude, or you can bring your own fine-tuned models.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">How long does implementation take?</summary>
                            <p className="mt-4 text-slate-700">Typically 7 days for standard deployments. Complex integrations may take 2-3 weeks. We'll tell you upfront.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to See Your Use Case in Action?</h2>
                    <p className="text-xl text-white/80 mb-8">No 6-month RFPs. No death-by-PowerPoint. Just a conversation about what you need.</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Schedule a Live Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
