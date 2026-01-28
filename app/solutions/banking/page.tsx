import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Banking AI Chatbot India - KYC Automation & Fraud Detection | SwanDigitals',
    description: 'The deepest conversational AI for Indian Banking. From Video KYC to fraud detection—automate every customer touchpoint while keeping 100% of data in India.',
    keywords: ['Banking AI Chatbot India', 'KYC Automation', 'Video KYC', 'Banking Fraud Detection', 'RBI Compliant AI', 'DPDP Act Banking'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/banking',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function BankingPage() {
    return (
        <SiteLayout>
            {/* Hero Section */}
            <Hero
                badge="🏦 Banking & Finance"
                title="The Deepest Conversational AI for Indian Banking"
                subtitle="From Video KYC to fraud detection—automate every customer touchpoint while keeping 100% of data in India."
                primaryCTA={{ text: "Book a Banking-Specific Demo", href: "/demo" }}
                secondaryCTA={{ text: "View Case Study", href: "/case-studies" }}
            />

            {/* Trust Highlights */}
            <section className="bg-blue-600 text-white py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🇮🇳</span>
                            <span>India Data Residency</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🔒</span>
                            <span>Bank-Grade Encryption</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🏦</span>
                            <span>Built for RBI Guidelines</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banking-Specific Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Automate Every Critical Banking Workflow</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Video KYC */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all">
                            <div className="text-5xl mb-4">📹</div>
                            <h3 className="text-xl font-bold mb-3">Video KYC Automation</h3>
                            <p className="text-slate-700 mb-4">Reduce onboarding time from 5 days to 20 minutes</p>
                            <p className="text-sm text-slate-600 mb-4">AI face matching + document verification + liveliness detection</p>
                            <Link href="/demo" className="text-blue-600 font-semibold hover:text-blue-700">
                                See Video KYC Demo →
                            </Link>
                        </div>

                        {/* Transaction Intelligence */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all">
                            <div className="text-5xl mb-4">💸</div>
                            <h3 className="text-xl font-bold mb-3">Transaction Intelligence</h3>
                            <p className="text-slate-700 mb-4">Enable fund transfers and balance checks via WhatsApp</p>
                            <p className="text-sm text-slate-600">OTP verification + transaction limits + session timeout</p>
                        </div>

                        {/* Fraud Detection */}
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold mb-3">Fraud Detection Guardrails</h3>
                            <p className="text-slate-700 mb-4">Real-time pattern recognition for suspicious activity</p>
                            <p className="text-sm text-slate-600">Flags transactions in new geo-locations or unusual amounts</p>
                        </div>

                        {/* Loan Origination */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all">
                            <div className="text-5xl mb-4">📄</div>
                            <h3 className="text-xl font-bold mb-3">Loan Origination</h3>
                            <p className="text-slate-700 mb-4">Pre-qualify loans in 5 minutes via chat</p>
                            <p className="text-sm text-slate-600">Income verification → Credit score check → Instant eligibility</p>
                        </div>

                        {/* Card Services */}
                        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl border-2 border-yellow-200 hover:shadow-xl transition-all">
                            <div className="text-5xl mb-4">💳</div>
                            <h3 className="text-xl font-bold mb-3">Card Services</h3>
                            <p className="text-slate-700 mb-4">Block/unblock cards, dispute charges, request PIN reset</p>
                        </div>

                        {/* Investment Advisory */}
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-xl transition-all">
                            <div className="text-5xl mb-4">📈</div>
                            <h3 className="text-xl font-bold mb-3">Investment Advisory</h3>
                            <p className="text-slate-700 mb-4">Personalized mutual fund and fixed deposit recommendations</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banking Integration Ecosystem */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Secure Integration with Core Banking Systems</h2>
                    <p className="text-center text-slate-600 mb-12">All API calls encrypted and signed with bank certificates</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl text-center font-semibold shadow-sm">Finacle</div>
                        <div className="bg-white p-6 rounded-xl text-center font-semibold shadow-sm">Temenos</div>
                        <div className="bg-white p-6 rounded-xl text-center font-semibold shadow-sm">Oracle FLEXCUBE</div>
                        <div className="bg-white p-6 rounded-xl text-center font-semibold shadow-sm">TCS BaNCS</div>
                    </div>
                    <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-6 text-center">
                        <p className="text-blue-900 font-semibold">Meets RBI cybersecurity framework requirements</p>
                    </div>
                </div>
            </section>

            {/* What Banks Typically Automate */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-12 rounded-3xl">
                        <div className="text-sm font-semibold text-orange-400 mb-4">WHAT BANKS AUTOMATE</div>
                        <h2 className="text-3xl font-bold mb-6">Most Common Banking Workflows We Automate</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {[
                                "Account balance and statement requests",
                                "Video KYC for new account opening",
                                "Card blocking and unblocking",
                                "Loan eligibility and EMI calculators",
                                "Transaction disputes and chargebacks",
                                "Bill payment reminders and alerts"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/90">
                                    <span className="text-orange-400">✓</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-white/70 text-sm mb-6">
                            Typical results: 60-85% automation rate within 3 months. Results vary based on workflow complexity and training data.
                        </p>
                        <Link href="/demo" className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600">
                            See a Demo for Your Use Case →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Security & Compliance Block */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Architected for Banking Regulations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                            <h3 className="font-bold text-lg mb-2">🇮🇳 Data Localization</h3>
                            <p className="text-slate-700">All data stored in Indian data centers</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                            <h3 className="font-bold text-lg mb-2">📋 Audit Trails</h3>
                            <p className="text-slate-700">Complete transaction logging with 7-year retention</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                            <h3 className="font-bold text-lg mb-2">✅ Customer Consent</h3>
                            <p className="text-slate-700">Built-in consent management for DPDP Act</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-2 border-slate-200">
                            <h3 className="font-bold text-lg mb-2">🔐 Authentication</h3>
                            <p className="text-slate-700">Mandatory 2FA + biometric options</p>
                        </div>
                    </div>
                    <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                        <p className="text-sm text-slate-700">
                            <strong>Note:</strong> Designed to meet RBI cybersecurity framework requirements.
                            Compliance certification roadmap available on request.
                        </p>
                    </div>
                    <div className="text-center mt-6">
                        <Link href="/platform/security" className="text-blue-600 font-semibold hover:underline">
                            Request Banking Security Architecture Document →
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Banking-Specific Questions</h2>
                    <div className="space-y-6">
                        <details className="bg-slate-50 p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Is it safe to do financial transactions via chatbot?</summary>
                            <p className="mt-4 text-slate-700">Yes, with OTP + biometric verification for all high-value transactions.</p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">What happens if the bot makes a mistake?</summary>
                            <p className="mt-4 text-slate-700">Human verification is mandatory for high-value transactions. All actions are logged and reversible.</p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Can it work in regional languages?</summary>
                            <p className="mt-4 text-slate-700">Yes, supports English, Hindi, Tamil, Telugu, Bengali, Marathi, and Hinglish with native NLU.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Banking Experience?</h2>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Book a Banking-Specific Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
