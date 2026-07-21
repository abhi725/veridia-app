import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why SwanDigitals? Here\'s the Honest Answer.',
    description: 'We know you\'re evaluating options. Here\'s why teams choose SwanDigitals — and what we\'re still working on.',
    keywords: ['Why SwanDigitals', 'SwanDigitals vs Competitors', 'Customer Support Platform India', 'AI Chatbot Comparison', 'SME Support Comparison'],
    alternates: {
        canonical: 'https://swandigitals.com/why-swandigitals',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import { Award, Zap, Shield, DollarSign, Clock, Code } from 'lucide-react';
import Link from 'next/link';

export default function WhySwanDigitalsPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Why SwanDigitals',
                item: 'https://swandigitals.com/why-swandigitals'
            }
        ]
    };

    const advantages = [
        { icon: <Zap className="w-6 h-6" />, title: "Live in 7 Days", description: "Connect WhatsApp, email, and web chat on day 1. Configure AI on day 2-3. Fully live by day 7. We help at every step." },
        { icon: <DollarSign className="w-6 h-6" />, title: "Flat Pricing, No Surprises", description: "No per-conversation billing. No per-seat tax. One monthly price whether you handle 1,000 or 100,000 messages." },
        { icon: <Shield className="w-6 h-6" />, title: "Data Hosted in India", description: "Secure cloud infrastructure hosted in India, built to be DPDP-2023 aware, with payments secured via Razorpay. No lock-in." },
        { icon: <Code className="w-6 h-6" />, title: "AI That Reads Context", description: "SwanDigitals AI remembers the full conversation, suggests replies, and auto-resolves FAQs in 10 Indian languages, including Hindi, Tamil, and English." },
        { icon: <Clock className="w-6 h-6" />, title: "Every Channel, One Inbox", description: "WhatsApp, Email, Web chat, Instagram, Telegram, Phone — your team sees everything in one place. No tab-switching." },
        { icon: <Award className="w-6 h-6" />, title: "Indian Team, Indian Hours", description: "We're based in Pune. We understand the DPDP Act, regional language nuances, and Indian SME budgets. Support in your timezone." }
    ];

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero
                badge="⭐ Why Choose SwanDigitals"
                title="Why SwanDigitals? Here's the Honest Answer."
                subtitle="We know you're evaluating options. Here's why teams choose SwanDigitals — and what we're still working on."
                primaryCTA={{ text: "See the Difference", href: "/demo" }}
                secondaryCTA={{ text: "View Comparisons", href: "/compare" }}
            />

            {/* Core Advantages */}
            <FeatureGrid features={advantages} />

            {/* Competitor Comparison Summary */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How We Stack Up</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-2 border-slate-200 rounded-xl overflow-hidden bg-white">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="px-6 py-4 text-left font-semibold">Factor</th>
                                    <th className="px-6 py-4 text-center font-semibold text-orange-600">SwanDigitals</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Wati</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">AiSensy</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Interakt</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-t"><td className="px-6 py-3 font-medium">Go-live Time</td><td className="px-6 py-3 text-center text-green-600 font-bold">In days</td><td className="px-6 py-3 text-center">1-2 weeks</td><td className="px-6 py-3 text-center">1-2 weeks</td><td className="px-6 py-3 text-center">1-2 weeks</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3 font-medium">Per-message markup</td><td className="px-6 py-3 text-center text-green-600 font-bold">No</td><td className="px-6 py-3 text-center">Yes</td><td className="px-6 py-3 text-center">Yes</td><td className="px-6 py-3 text-center">Yes</td></tr>
                                <tr className="border-t"><td className="px-6 py-3 font-medium">Voice calling (+91 in/out)</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">❌</td><td className="px-6 py-3 text-center">❌</td><td className="px-6 py-3 text-center">❌</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3 font-medium">Indian languages (10)</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">Limited</td><td className="px-6 py-3 text-center">Limited</td><td className="px-6 py-3 text-center">Limited</td></tr>
                                <tr className="border-t"><td className="px-6 py-3 font-medium">Data hosted in India</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">⚠️</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">⚠️</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3 font-medium">Annual Contract Required</td><td className="px-6 py-3 text-center text-green-600 font-bold">No</td><td className="px-6 py-3 text-center">Varies</td><td className="px-6 py-3 text-center">Varies</td><td className="px-6 py-3 text-center">Varies</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Individual Comparisons */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Detailed Competitor Comparisons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href="/compare/vs-wati" className="p-8 border-2 border-orange-200 rounded-2xl hover:border-orange-400 hover:shadow-lg transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600">vs Wati</h3>
                            <ul className="space-y-2 text-slate-700 mb-4">
                                <li>✅ Voice calling built in, not just WhatsApp</li>
                                <li>✅ No per-message markup</li>
                                <li>✅ Auto-trains on your website & docs</li>
                            </ul>
                            <span className="text-orange-600 font-semibold">See full comparison →</span>
                        </Link>
                        <Link href="/compare/vs-aisensy" className="p-8 border-2 border-blue-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">vs AiSensy</h3>
                            <ul className="space-y-2 text-slate-700 mb-4">
                                <li>✅ Chat + voice in one inbox</li>
                                <li>✅ Flat INR pricing, no usage surprises</li>
                                <li>✅ Indian team, Indian support hours</li>
                            </ul>
                            <span className="text-blue-600 font-semibold">See full comparison →</span>
                        </Link>
                        <Link href="/compare/vs-intercom" className="p-8 border-2 border-purple-200 rounded-2xl hover:border-purple-400 hover:shadow-lg transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600">vs Intercom</h3>
                            <ul className="space-y-2 text-slate-700 mb-4">
                                <li>✅ Built for 10 Indian languages</li>
                                <li>✅ Data hosted in India, DPDP-2023 aware</li>
                                <li>✅ Fraction of the cost</li>
                            </ul>
                            <span className="text-purple-600 font-semibold">See full comparison →</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        "We evaluated four platforms. SwanDigitals was live before the others finished their demos."
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900 text-lg">Operations Head</div>
                            <div className="text-slate-600">Retail Chain, Mumbai</div>
                        </div>
                    </div>
                    <Link href="/pricing" className="text-orange-600 font-semibold hover:underline">
                        See Pricing & Plans →
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to See the SwanDigitals Difference?</h2>
                    <p className="text-xl text-white/80 mb-8">Sign up free. No credit card. No sales call required.</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Start Free Trial
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
