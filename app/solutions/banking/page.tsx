"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { Shield, Lock, FileCheck, Clock, Zap, Headphones } from 'lucide-react';

export default function BankingPage() {
    const challenges = [
        { problem: "Strict compliance requirements (PCI DSS, SOX, GDPR)", solution: "Full compliance with all major regulations, certified audits" },
        { problem: "Customer data must stay on-premise", solution: "True on-premise deployment in your data center, air-gapped option" },
        { problem: "High support volume during business hours", solution: "24/7 AI handles 90% of queries, instant response times" },
        { problem: "Complex product inquiries (loans, mortgages, accounts)", solution: "AI trained on your product catalog with accurate, compliant answers" },
        { problem: "Fraud detection and security concerns", solution: "Real-time fraud alerts, suspicious activity detection, secure handoffs" }
    ];

    const useCases = [
        { icon: <Headphones className="w-6 h-6" />, title: "Account Inquiries", desc: "Balance checks, transaction history, account details", stat: "60% of queries" },
        { icon: <FileCheck className="w-6 h-6" />, title: "Loan Applications", desc: "Pre-qualification, application status, document collection", stat: "40% faster" },
        { icon: <Lock className="w-6 h-6" />, title: "Card Services", desc: "Block/unblock cards, dispute transactions, limit changes", stat: "24/7 instant" },
        { icon: <Clock className="w-6 h-6" />, title: "Branch Appointments", desc: "Schedule meetings, find locations, queue management", stat: "80% digital" },
        { icon: <Zap className="w-6 h-6" />, title: "Quick Transfers", desc: "Initiate transfers, pay bills, set up recurring payments", stat: "Secure & fast" },
        { icon: <Shield className="w-6 h-6" />, title: "Fraud Alerts", desc: "Suspicious activity notifications, verification workflows", stat: "Real-time" }
    ];

    const faqItems = [
        { question: "Is Veridia PCI DSS compliant?", answer: "Yes. We are PCI DSS Level 1 certified, the highest level of payment card security. This means we meet all 12 PCI DSS requirements for handling cardholder data." },
        { question: "Can we deploy fully on-premise?", answer: "Absolutely. Unlike Yellow.ai which only offers cloud VPCs, we provide true on-premise deployment where your data never leaves your infrastructure. We also support air-gapped environments for maximum security." },
        { question: "How do you handle sensitive banking data?", answer: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We support data masking for PII, role-based access controls, and comprehensive audit logging for compliance." },
        { question: "What's the typical ROI for banking chatbots?", answer: "Our banking customers see an average 70% reduction in call center volume and $1.2M annual savings. BankSafe Credit Union achieved 93% automation within 30 days of deployment." }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🏦 Banking & Finance"
                title="AI for Regulated Financial Services"
                subtitle="PCI DSS, SOX, GDPR compliant chatbots with true on-premise deployment. Built for banks, credit unions, and financial institutions that can't compromise on security."
                primaryCTA={{ text: "Talk to Banking Expert", href: "/demo" }}
                secondaryCTA={{ text: "Download Security Whitepaper", href: "/whitepapers" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">93%</div><div className="text-white/80">Automation Rate</div></div>
                        <div><div className="text-4xl font-bold">PCI DSS</div><div className="text-white/80">Level 1 Certified</div></div>
                        <div><div className="text-4xl font-bold">70%</div><div className="text-white/80">Cost Reduction</div></div>
                        <div><div className="text-4xl font-bold">100%</div><div className="text-white/80">On-Premise Option</div></div>
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Banking Challenges We Solve</h2>
                    <div className="space-y-4">
                        {challenges.map((item, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-slate-50 rounded-xl">
                                <div className="text-red-600 font-medium">❌ {item.problem}</div>
                                <div className="text-green-600 font-medium">✅ {item.solution}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Banking Use Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((uc, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                    {uc.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
                                <p className="text-slate-600 mb-4">{uc.desc}</p>
                                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{uc.stat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 rounded-2xl">
                        <div className="text-sm font-semibold mb-4">CASE STUDY</div>
                        <h3 className="text-3xl font-bold mb-4">BankSafe Credit Union Achieves 93% Automation</h3>
                        <p className="text-xl text-white/90 mb-6">
                            "Full data sovereignty was non-negotiable for us. Veridia's air-gapped deployment met all our compliance requirements while delivering enterprise-grade AI."
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-white/20 rounded-full"></div>
                            <div>
                                <div className="font-bold text-lg">Robert Kim</div>
                                <div className="text-white/80">CISO, BankSafe Credit Union</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div><div className="text-2xl font-bold">93%</div><div className="text-white/80 text-sm">Automation</div></div>
                            <div><div className="text-2xl font-bold">Air-Gapped</div><div className="text-white/80 text-sm">Deployment</div></div>
                            <div><div className="text-2xl font-bold">100%</div><div className="text-white/80 text-sm">Compliance</div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={faqItems} />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready for Compliant AI?</h2>
                    <p className="text-xl text-white/80 mb-8">Talk to our banking specialists about your compliance requirements</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Schedule Banking Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
