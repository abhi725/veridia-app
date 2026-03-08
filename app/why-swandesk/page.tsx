import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why SwanDesk? Here\'s the Honest Answer.',
    description: 'We know you\'re evaluating options. Here\'s why teams choose SwanDesk — and what we\'re still working on.',
    keywords: ['Why SwanDesk', 'SwanDesk vs Competitors', 'Customer Support Platform India', 'On-premise AI Advantages', 'Enterprise Support Comparison'],
    alternates: {
        canonical: 'https://swandigitals.com/why-swandesk',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import { Award, Zap, Shield, DollarSign, Clock, Code } from 'lucide-react';
import Link from 'next/link';

export default function WhySwanDeskPage() {
    const advantages = [
        { icon: <Zap className="w-6 h-6" />, title: "Live in 7 Days", description: "Connect WhatsApp, email, and web chat on day 1. Configure AI on day 2-3. Fully live by day 7. We help at every step." },
        { icon: <DollarSign className="w-6 h-6" />, title: "Flat Pricing, No Surprises", description: "No per-conversation billing. No per-seat tax. One monthly price whether you handle 1,000 or 100,000 messages." },
        { icon: <Shield className="w-6 h-6" />, title: "True On-Premise", description: "Your data center, your servers, zero external API calls. Ollama LLM + Whisper STT + Asterisk SIP — fully air-gapped, DPDP 2023 compliant." },
        { icon: <Code className="w-6 h-6" />, title: "AI That Reads Context", description: "SwanDesk AI remembers the full conversation, suggests replies, and auto-resolves FAQs in Hindi, Tamil, English, and 8 more Indian languages." },
        { icon: <Clock className="w-6 h-6" />, title: "Every Channel, One Inbox", description: "WhatsApp, Email, Web chat, Instagram, Telegram, Phone — your team sees everything in one place. No tab-switching." },
        { icon: <Award className="w-6 h-6" />, title: "Indian Team, Indian Hours", description: "We're based in Pune. We understand DPDP, RBI, BFSI compliance, and regional language nuances. Support in your timezone." }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="⭐ Why Choose SwanDesk"
                title="Why SwanDesk? Here's the Honest Answer."
                subtitle="We know you're evaluating options. Here's why teams choose SwanDesk — and what we're still working on."
                primaryCTA={{ text: "See the Difference", href: "/demo" }}
                secondaryCTA={{ text: "View Comparisons", href: "/compare/vs-kore" }}
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
                                    <th className="px-6 py-4 text-center font-semibold text-orange-600">SwanDesk</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Kore.ai</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Yellow.ai</th>
                                    <th className="px-6 py-4 text-center font-semibold text-slate-500">Freshdesk</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-t"><td className="px-6 py-3 font-medium">Deployment Time</td><td className="px-6 py-3 text-center text-green-600 font-bold">7 days</td><td className="px-6 py-3 text-center">3-6 months</td><td className="px-6 py-3 text-center">4-8 weeks</td><td className="px-6 py-3 text-center">2-4 weeks</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3 font-medium">Per-message billing</td><td className="px-6 py-3 text-center text-green-600 font-bold">No</td><td className="px-6 py-3 text-center">Yes</td><td className="px-6 py-3 text-center">Yes</td><td className="px-6 py-3 text-center">Per agent</td></tr>
                                <tr className="border-t"><td className="px-6 py-3 font-medium">True On-Premise</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">❌</td><td className="px-6 py-3 text-center">❌</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3 font-medium">10+ Indian Languages</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">Limited</td><td className="px-6 py-3 text-center">⚠️</td><td className="px-6 py-3 text-center">❌</td></tr>
                                <tr className="border-t"><td className="px-6 py-3 font-medium">DPDP 2023 Ready</td><td className="px-6 py-3 text-center">✅</td><td className="px-6 py-3 text-center">❌</td><td className="px-6 py-3 text-center">❌</td><td className="px-6 py-3 text-center">❌</td></tr>
                                <tr className="border-t bg-slate-50"><td className="px-6 py-3 font-medium">Annual Contract Required</td><td className="px-6 py-3 text-center text-green-600 font-bold">No</td><td className="px-6 py-3 text-center">Yes</td><td className="px-6 py-3 text-center">Yes</td><td className="px-6 py-3 text-center">Yes</td></tr>
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
                        <Link href="/compare/vs-kore" className="p-8 border-2 border-orange-200 rounded-2xl hover:border-orange-400 hover:shadow-lg transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600">vs Kore.ai</h3>
                            <ul className="space-y-2 text-slate-700 mb-4">
                                <li>✅ No per-conversation billing</li>
                                <li>✅ Setup in days, not months</li>
                                <li>✅ True on-premise (not dedicated VPC)</li>
                            </ul>
                            <span className="text-orange-600 font-semibold">See full comparison →</span>
                        </Link>
                        <Link href="/compare/vs-yellow" className="p-8 border-2 border-blue-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">vs Yellow.ai</h3>
                            <ul className="space-y-2 text-slate-700 mb-4">
                                <li>✅ Simpler to use — no AI PhD required</li>
                                <li>✅ Flat pricing, not usage-based</li>
                                <li>✅ Indian team, Indian support hours</li>
                            </ul>
                            <span className="text-blue-600 font-semibold">See full comparison →</span>
                        </Link>
                        <Link href="/compare/vs-intercom" className="p-8 border-2 border-purple-200 rounded-2xl hover:border-purple-400 hover:shadow-lg transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600">vs Intercom</h3>
                            <ul className="space-y-2 text-slate-700 mb-4">
                                <li>✅ Built for Indian languages & compliance</li>
                                <li>✅ On-premise option for BFSI</li>
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
                        "We evaluated four platforms. SwanDesk was live before the others finished their demos."
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900 text-lg">Operations Head</div>
                            <div className="text-slate-600">Mid-size NBFC, Mumbai</div>
                        </div>
                    </div>
                    <Link href="/case-studies" className="text-orange-600 font-semibold hover:underline">
                        Read more customer stories →
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to See the SwanDesk Difference?</h2>
                    <p className="text-xl text-white/80 mb-8">Sign up free. No credit card. No sales call required.</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Start Free Trial
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
