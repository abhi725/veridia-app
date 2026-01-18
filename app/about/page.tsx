import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About SwanDigitals - Building Sovereign AI for India | Abhishek Ambad',
    description: 'Founded by Abhishek Ambad to bring enterprise-grade AI solutions with 100% data sovereignty to Indian businesses. Built in India, for India.',
    keywords: ['About SwanDigitals', 'Indian AI Company', 'Sovereign AI Vision', 'Pune Tech Company', 'Abhishek Ambad'],
    alternates: {
        canonical: 'https://swandigitals.com/about',
    },
}

export default function AboutPage() {
    return (
        <SiteLayout>
            <Hero
                badge="👋 About SwanDigitals"
                title="Building Sovereign AI for India"
                subtitle="Founded by Abhishek Ambad to empower Indian enterprises with AI that respects data sovereignty and regulatory requirements."
                primaryCTA={{ text: "Get in Touch", href: "/contact" }}
                secondaryCTA={{ text: "View Platform", href: "/platform" }}
            />

            {/* Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-2xl text-slate-700 leading-relaxed">
                            To democratize enterprise AI for Indian businesses by providing <span className="text-orange-600 font-bold">100% data-sovereign,
                                on-premise AI solutions</span> that meet the strictest regulatory requirements while remaining accessible and affordable.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
                        <p className="text-lg text-slate-700 leading-relaxed text-center">
                            To be India's most trusted AI platform for regulated industries — where banks, healthcare providers,
                            and government agencies can harness the power of AI without compromising on data security,
                            compliance, or sovereignty.
                        </p>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl mb-2">🇮🇳</div>
                                <h4 className="font-bold mb-1">Made in India</h4>
                                <p className="text-sm text-slate-600">Built for Indian regulations</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-2">🔒</div>
                                <h4 className="font-bold mb-1">Data Sovereignty</h4>
                                <p className="text-sm text-slate-600">Your data stays in your control</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-2">⚡</div>
                                <h4 className="font-bold mb-1">Fast Deployment</h4>
                                <p className="text-sm text-slate-600">Live in weeks, not months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Founder</h2>
                    <div className="bg-white p-10 rounded-3xl shadow-lg max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-shrink-0">
                                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                                    AA
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Abhishek Ambad</h3>
                                <p className="text-lg text-orange-600 font-semibold mb-4">Founder & CEO</p>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Abhishek founded SwanDigitals with a vision to bring enterprise-grade AI solutions to Indian
                                    businesses while ensuring complete data sovereignty. With deep expertise in AI systems and
                                    a strong understanding of India's regulatory landscape, he is committed to building
                                    technology that empowers organizations without compromising their data security.
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Based in Pune, Abhishek works directly with enterprise clients to ensure SwanDigitals
                                    delivers solutions that truly meet the needs of Indian businesses in banking, healthcare,
                                    and government sectors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">🇮🇳</div>
                            <h3 className="text-xl font-bold mb-3">India First</h3>
                            <p className="text-slate-600">Built for Indian compliance, regulations, and data sovereignty requirements.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold mb-3">Security Always</h3>
                            <p className="text-slate-600">Your data security is non-negotiable. On-premise, air-gapped, and encrypted.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold mb-3">Customer Success</h3>
                            <p className="text-slate-600">We succeed when you succeed. Direct support from the founder.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold mb-3">Fast Execution</h3>
                            <p className="text-slate-600">Deploy in weeks with instant support. No enterprise sales theater.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We're Different */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Why SwanDigitals is Different</h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        We're not trying to be the biggest AI company. We're focused on being the most trusted
                        AI partner for Indian enterprises that take data sovereignty seriously.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">✅ True On-Premise</h3>
                            <p className="text-white/80 text-sm">Not just "India cloud hosting" — fully air-gapped deployment in your datacenter.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">✅ Founder-Led Support</h3>
                            <p className="text-white/80 text-sm">Work directly with Abhishek, not a sales team or support tickets.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">✅ Transparent Pricing</h3>
                            <p className="text-white/80 text-sm">No hidden costs, no per-conversation fees. Simple, predictable licensing.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">✅ Compliance Ready</h3>
                            <p className="text-white/80 text-sm">Designed for RBI, DPDP Act, and India's data localization requirements.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Let's discuss how SwanDigitals can help your organization with data-sovereign AI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Schedule a Call
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-semibold text-lg hover:bg-slate-200 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
