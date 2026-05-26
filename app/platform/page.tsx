import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SwanDigitals Platform | AI Customer Support | Multi-Channel Inbox | India',
    description: 'SwanDigitals AI platform: visual flow builder, voice AI, WhatsApp API, analytics. Cloud + on-premise. 100% data sovereignty for Indian enterprises.',
    keywords: ['AI Platform India', 'Chatbot Platform', 'On-Premise AI', 'Low-Code Chatbot', 'Enterprise AI India'],
    alternates: {
        canonical: 'https://swandigitals.com/platform',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import {
    Lock, MapPin, Shield, Key, ClipboardList, Landmark,
    XCircle, Link2, Palette, Building2, Cloud,
    Database, Brain, Smartphone, Plug, Building, HeartPulse, ShieldCheck
} from 'lucide-react';

export default function PlatformPage() {
    const securityFeatures = [
        { icon: <Lock className="w-8 h-8 mx-auto" />, title: 'AES-256 Encryption', desc: 'Bank-grade encryption at rest and in transit' },
        { icon: <MapPin className="w-8 h-8 mx-auto" />, title: 'India Data Residency', desc: 'Full data hosting within India' },
        { icon: <Shield className="w-8 h-8 mx-auto" />, title: 'Air-Gapped Option', desc: 'True offline deployment capability' },
        { icon: <Key className="w-8 h-8 mx-auto" />, title: 'RBAC & SSO', desc: 'Role-based access with SAML 2.0/OIDC' },
        { icon: <ClipboardList className="w-8 h-8 mx-auto" />, title: 'Audit Logging', desc: 'Complete activity logs for compliance' },
        { icon: <Landmark className="w-8 h-8 mx-auto" />, title: 'DPDP 2023 Ready', desc: "Architecture designed for India's data protection law" }
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
                badge="Platform"
                title="Enterprise AI Orchestration Platform"
                subtitle="Build, deploy, and manage AI agents with 100% data control. On-premise or cloud — we never collect or store your conversation data."
                primaryCTA={{ text: "Book a Platform Demo", href: "/demo" }}
                secondaryCTA={{ text: "Explore Features", href: "/features" }}
            />

            {/* Trust Highlights */}
            <section className="bg-slate-50 py-4 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-orange-500" />
                            <span>AES-256 Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            <span>India Data Residency</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-orange-500" />
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
                        <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100">
                            <div className="flex items-center gap-2 mb-4 text-rose-600">
                                <XCircle className="w-5 h-5 flex-shrink-0" />
                                <h3 className="font-bold text-lg">Data Sovereignty Concerns</h3>
                            </div>
                            <p className="text-slate-600">Your CISO blocks cloud AI due to data sovereignty concerns</p>
                        </div>
                        <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100">
                            <div className="flex items-center gap-2 mb-4 text-rose-600">
                                <XCircle className="w-5 h-5 flex-shrink-0" />
                                <h3 className="font-bold text-lg">Complex Coordination</h3>
                            </div>
                            <p className="text-slate-600">Multi-agent workflows are too complex to coordinate manually</p>
                        </div>
                        <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100">
                            <div className="flex items-center gap-2 mb-4 text-rose-600">
                                <XCircle className="w-5 h-5 flex-shrink-0" />
                                <h3 className="font-bold text-lg">Budget Bankruptcy</h3>
                            </div>
                            <p className="text-slate-600">Legacy platforms charge per conversation, bankrupting your budget</p>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-orange">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-slate-900">100% Data Sovereignty</h2>
                            <p className="text-slate-600 mb-4">Air-gapped deployment. On-premise LLMs. Zero data egress to third parties — even when using our cloud.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-orange">
                                <Link2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-slate-900">Multi-Agent Orchestration</h2>
                            <p className="text-slate-600 mb-4">Coordinate specialized AI agents (Sales, Support, HR) as one unified system.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-orange">
                                <Palette className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-slate-900">No-Code Studio</h2>
                            <p className="text-slate-600 mb-4">Build complex flows visually. No developers required.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deployment Options - No Hybrid */}
            <section id="deployment" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Deploy Your Way</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">Two deployment options, one promise: we never collect or store your customer conversation data.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* On-Premise */}
                        <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl border-2 border-orange-200 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
                                Most Popular for Enterprises
                            </div>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 mb-6 mx-auto shadow-sm">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4 text-slate-900">On-Premise</h3>
                            <p className="text-slate-600 text-center mb-6">Deploy entirely in your data center. Full data control.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">✓</span>
                                    <span className="text-slate-700">Your servers, your rules</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">✓</span>
                                    <span className="text-slate-700">Air-gapped option available</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">✓</span>
                                    <span className="text-slate-700">Zero external dependencies</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">✓</span>
                                    <span className="text-slate-700">Your security policies apply</span>
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 text-center pt-4 border-t border-orange-100">Best for: Banks, Healthcare, Government</p>
                        </div>

                        {/* Cloud SaaS */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-600 mb-6 mx-auto shadow-sm border border-slate-100">
                                <Cloud className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4 text-slate-900">Cloud (SaaS)</h3>
                            <p className="text-slate-600 text-center mb-6">Hosted on our infrastructure — but we never touch your data.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="text-slate-400 font-bold">✓</span>
                                    <span className="text-slate-700">Deploy in hours</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-slate-400 font-bold">✓</span>
                                    <span className="text-slate-700">Auto-scaling & managed updates</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 font-bold mt-0.5">✓</span>
                                    <span className="font-semibold text-orange-600">Zero data collection — we don't store your conversations</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-slate-400 font-bold">✓</span>
                                    <span className="text-slate-700">99.9% SLA uptime</span>
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 text-center pt-4 border-t border-slate-200">Best for: Startups, fast deployment needs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Architecture */}
            <section id="security" className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Security Architecture</h2>
                    <p className="text-center text-slate-400 mb-12">Built from the ground up for regulated industries</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
                        {securityFeatures.map((feature, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl text-center border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="text-orange-400 mb-4">{feature.icon}</div>
                                <div className="font-bold text-white mb-2 text-sm">{feature.title}</div>
                                <div className="text-xs text-slate-400 leading-relaxed">{feature.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* vs Yellow.ai Comparison */}
                    <div className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10">
                        <h3 className="text-2xl font-bold text-center mb-6">True On-Premise vs "Dedicated Cloud"</h3>
                        <p className="text-center text-slate-400 mb-10">See how SwanDigitals compares to Yellow.ai's "dedicated VPC"</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="border-b border-white/10 text-slate-400">
                                        <th className="py-4 px-4 font-semibold">Feature</th>
                                        <th className="py-4 px-4 font-bold text-orange-400">SwanDigitals</th>
                                        <th className="py-4 px-4 font-semibold">Yellow.ai VPC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-4 text-slate-300">{row.feature}</td>
                                            <td className="py-4 px-4 font-medium text-white">{row.swan}</td>
                                            <td className="py-4 px-4 text-slate-500">{row.competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Architecture */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Enterprise-Grade Architecture</h2>
                    <div className="bg-white border border-slate-200 p-10 md:p-16 rounded-3xl shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-5">
                                    <Database className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Data Layer</h3>
                                <p className="text-sm text-slate-500">Your Secure Environment</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-5">
                                    <Brain className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">AI Layer</h3>
                                <p className="text-sm text-slate-500">SwanDigitals AI Engine</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-5">
                                    <Smartphone className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Channel Layer</h3>
                                <p className="text-sm text-slate-500">Omnichannel Deployment</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-5">
                                    <Plug className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Integration Layer</h3>
                                <p className="text-sm text-slate-500">CRM, ERP, ITSM Connectors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Ecosystem */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Works With Your Entire Stack</h2>
                    <p className="text-center text-slate-600 mb-12">100+ pre-built integrations, filterable by category</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center font-medium text-slate-700 hover:border-orange-200 transition-colors cursor-default">CRM & Sales</div>
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center font-medium text-slate-700 hover:border-orange-200 transition-colors cursor-default">Core Banking</div>
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center font-medium text-slate-700 hover:border-orange-200 transition-colors cursor-default">ITSM & Helpdesk</div>
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center font-medium text-slate-700 hover:border-orange-200 transition-colors cursor-default">HR & Payroll</div>
                    </div>
                    <div className="text-center">
                        <Link href="/integrations" className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-orange">
                            Browse All Integrations →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Built for Regulated Industries</h2>
                    <p className="text-center text-slate-600 mb-12">Where data sovereignty isn't optional — it's mandatory.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-orange">
                                <Building className="w-7 h-7" />
                            </div>
                            <div className="font-bold text-slate-900 mb-2">Banking & NBFC</div>
                            <div className="text-sm text-slate-500">RBI-ready architecture</div>
                        </div>
                        <div className="text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-orange">
                                <HeartPulse className="w-7 h-7" />
                            </div>
                            <div className="font-bold text-slate-900 mb-2">Healthcare</div>
                            <div className="text-sm text-slate-500">HIPAA-compliant design</div>
                        </div>
                        <div className="text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-orange">
                                <Landmark className="w-7 h-7" />
                            </div>
                            <div className="font-bold text-slate-900 mb-2">Government</div>
                            <div className="text-sm text-slate-500">Air-gapped deployment</div>
                        </div>
                        <div className="text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-orange">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <div className="font-bold text-slate-900 mb-2">Insurance</div>
                            <div className="text-sm text-slate-500">DPDP 2023 ready</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Common Questions</h2>
                    <div className="space-y-4">
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="font-semibold text-lg text-slate-900 flex justify-between items-center">
                                Can I deploy SwanDigitals fully offline?
                                <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 leading-relaxed pt-4 border-t border-slate-200">Yes! We offer true air-gapped deployment where the entire platform runs offline with no internet dependency.</p>
                        </details>
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="font-semibold text-lg text-slate-900 flex justify-between items-center">
                                Do you collect my customer data on your cloud offering?
                                <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 leading-relaxed pt-4 border-t border-slate-200">No. Even on our cloud/SaaS option, we never collect, store, or train on your customer conversation data. Your data flows through our system but is never retained.</p>
                        </details>
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="font-semibold text-lg text-slate-900 flex justify-between items-center">
                                What LLMs do you support?
                                <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 leading-relaxed pt-4 border-t border-slate-200">We support Gemini, GPT, Claude, or you can bring your own fine-tuned models.</p>
                        </details>
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="font-semibold text-lg text-slate-900 flex justify-between items-center">
                                How long does implementation take?
                                <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 leading-relaxed pt-4 border-t border-slate-200">Typically 7 days for standard deployments. Complex integrations may take 2-3 weeks. We'll tell you upfront.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to See Your Use Case in Action?</h2>
                    <p className="text-xl text-white/90 mb-10">No 6-month RFPs. No death-by-PowerPoint. Just a conversation about what you need.</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Schedule a Live Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
