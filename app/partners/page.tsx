"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Users, Zap, Globe, Code } from 'lucide-react';

export default function PartnersPage() {
    const partnerTypes = [
        { icon: <Code className="w-8 h-8" />, title: "Technology Partners", desc: "Build integrations with SwanDigitals APIs" },
        { icon: <Globe className="w-8 h-8" />, title: "Integration Partners", desc: "Connect SwanDigitals with your platform" },
        { icon: <Users className="w-8 h-8" />, title: "Reseller Partners", desc: "Distribute SwanDigitals to your clients" },
        { icon: <Zap className="w-8 h-8" />, title: "Implementation Partners", desc: "Help clients deploy SwanDigitals" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🤝 Partner Program"
                title="Building Our Partner Ecosystem"
                subtitle="We're in the early stages of building partnerships with technology companies and implementation specialists. Interested in collaborating? Let's talk."
                primaryCTA={{ text: "Express Interest", href: "#apply" }}
                secondaryCTA={{ text: "Contact Us", href: "/contact" }}
            />

            {/* Honest Intro */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">We're Building This Together</h2>
                    <p className="text-lg text-slate-600 mb-4">
                        SwanDigitals is built by Swati Gaikwad and Kiran Shelke. We're actively seeking partners who want to integrate with our platform, implement solutions for their clients, or resell to their networks.
                    </p>
                    <p className="text-lg text-slate-600">
                        If you're interested in partnering with us as we grow, we'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Partnership Opportunities */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {partnerTypes.map((type, i) => (
                            <div key={i} className="p-8 bg-white border-2 border-slate-200 rounded-2xl hover:border-orange-300 transition-colors">
                                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                                    {type.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                                <p className="text-slate-600">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">What We Can Offer Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-slate-50 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-orange-600">Technical Documentation</h3>
                            <p className="text-slate-600">Complete API documentation and integration guides</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-orange-600">Direct Support</h3>
                            <p className="text-slate-600">Work directly with our engineering team for technical questions</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-orange-600">Flexible Terms</h3>
                            <p className="text-slate-600">We're open to discussing revenue share and partnership models</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-orange-600">Co-Marketing</h3>
                            <p className="text-slate-600">Collaborative opportunities as our partnership grows</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apply Form */}
            <section id="apply" className="py-20 bg-slate-50">
                <div className="max-w-2xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Express Your Interest</h2>
                    <p className="text-center text-slate-600 mb-8">
                        Tell us about your organization and how you envision partnering with SwanDigitals
                    </p>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium mb-2">First Name *</label>
                                <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block font-medium mb-2">Last Name *</label>
                                <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" required />
                            </div>
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Company Name *</label>
                            <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" required />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Work Email *</label>
                            <input type="email" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" required />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Partnership Type *</label>
                            <select className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" required>
                                <option value="">Select type</option>
                                <option value="technology">Technology Partner</option>
                                <option value="integration">Integration Partner</option>
                                <option value="reseller">Reseller Partner</option>
                                <option value="implementation">Implementation Partner</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Tell us about your company and partnership idea</label>
                            <textarea rows={4} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
                            Submit Application
                        </button>
                    </form>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
                    <p className="text-xl text-white/80 mb-8">Reach out directly to discuss partnership opportunities</p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all">
                        Contact Us
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
