"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import { Shield, Lock, Server, FileCheck, Globe, Eye } from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
    const certifications = [
        { logo: '🛡️', name: 'SOC 2 Type II', desc: 'Annual audit of security controls and processes' },
        { logo: '🇪🇺', name: 'GDPR Compliant', desc: 'Full EU data protection regulation compliance' },
        { logo: '🏥', name: 'HIPAA Compliant', desc: 'Healthcare data protection for US providers' },
        { logo: '🔒', name: 'ISO 27001', desc: 'Information security management certification' },
        { logo: '🏦', name: 'PCI DSS', desc: 'Payment card industry data security standard' },
        { logo: '📋', name: 'CCPA Compliant', desc: 'California consumer privacy act compliance' }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🔒 Enterprise Security"
                title="Security That Banks Trust"
                subtitle="SOC 2, GDPR, HIPAA compliant with true on-premise deployment. Unlike Yellow.ai, your data never leaves your infrastructure."
                primaryCTA={{ text: "Download Security Whitepaper", href: "/whitepapers" }}
                secondaryCTA={{ text: "Talk to Security Team", href: "/contact" }}
            />

            {/* Certifications Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Enterprise Certifications</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {certifications.map((cert, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-3">{cert.logo}</div>
                                <div className="font-bold text-slate-900 mb-1">{cert.name}</div>
                                <div className="text-xs text-slate-500">{cert.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deployment Options */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Deployment Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Cloud (SaaS)</h3>
                            <p className="text-slate-600 mb-4">Deploy on our secure AWS/Azure/GCP infrastructure with 99.9% SLA.</p>
                            <ul className="text-sm text-slate-500 space-y-1">
                                <li>• Automatic updates</li>
                                <li>• Managed scaling</li>
                                <li>• Multi-region</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-orange-300">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">On-Premise</h3>
                            <p className="text-slate-600 mb-4">Deploy entirely in your data center. Zero external dependencies.</p>
                            <ul className="text-sm text-slate-500 space-y-1">
                                <li>• Full data sovereignty</li>
                                <li>• Your security policies</li>
                                <li>• Air-gapped support</li>
                            </ul>
                            <div className="mt-4 text-xs text-orange-600 font-semibold">⭐ Most Popular for Banking</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Hybrid</h3>
                            <p className="text-slate-600 mb-4">AI runs in cloud, sensitive data stays on your servers.</p>
                            <ul className="text-sm text-slate-500 space-y-1">
                                <li>• Best of both worlds</li>
                                <li>• Flexible architecture</li>
                                <li>• Compliance friendly</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Security Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Lock className="w-6 h-6" />, title: "End-to-End Encryption", desc: "AES-256 encryption at rest, TLS 1.3 in transit. Bank-grade security for all data." },
                            { icon: <Eye className="w-6 h-6" />, title: "Role-Based Access", desc: "Granular permissions with SSO integration (SAML 2.0, OIDC). Audit logs for compliance." },
                            { icon: <Shield className="w-6 h-6" />, title: "DDoS Protection", desc: "Cloudflare Enterprise protection against attacks. 24/7 security monitoring." },
                            { icon: <Server className="w-6 h-6" />, title: "Data Residency", desc: "Choose where your data lives. EU, US, APAC regions available." },
                            { icon: <FileCheck className="w-6 h-6" />, title: "Penetration Testing", desc: "Annual third-party pen tests. Bug bounty program with responsible disclosure." },
                            { icon: <Globe className="w-6 h-6" />, title: "99.9% Uptime SLA", desc: "Enterprise SLA with financial credits. Real-time status page." }
                        ].map((feature, i) => (
                            <div key={i} className="p-6 border border-slate-200 rounded-xl">
                                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* vs Yellow.ai Comparison */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">True On-Premise vs "Dedicated Cloud"</h2>
                    <p className="text-center text-slate-600 mb-12">Yellow.ai offers "dedicated VPC" but your data still lives in their cloud. Here's the difference:</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="px-6 py-4 text-left font-semibold">Security Feature</th>
                                    <th className="px-6 py-4 text-center font-semibold text-orange-600">Veridia On-Premise</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Yellow.ai VPC</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-t"><td className="px-6 py-3">Data location</td><td className="px-6 py-3 text-center text-green-600">Your data center</td><td className="px-6 py-3 text-center">Their cloud</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3">External network access</td><td className="px-6 py-3 text-center text-green-600">None required</td><td className="px-6 py-3 text-center">Required</td></tr>
                                <tr className="border-t"><td className="px-6 py-3">Air-gapped deployment</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">❌</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3">Your security policies</td><td className="px-6 py-3 text-center">✅ Full control</td><td className="px-6 py-3 text-center">⚠️ Limited</td></tr>
                                <tr className="border-t"><td className="px-6 py-3">Regulatory compliance</td><td className="px-6 py-3 text-center text-green-600">Maximum</td><td className="px-6 py-3 text-center">Vendor-dependent</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/compare/vs-yellow" className="text-orange-600 font-semibold hover:underline">
                            See full Yellow.ai comparison →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Need to Talk Security?</h2>
                    <p className="text-xl text-white/80 mb-8">Our security team is ready to answer your questions and support your compliance requirements.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/whitepapers" className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all">
                            Download Security Whitepaper
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Contact Security Team
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
