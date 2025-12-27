"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Users, Award, Globe, Building2 } from 'lucide-react';

export default function PartnersPage() {
    const partnerTypes = [
        { icon: <Building2 className="w-8 h-8" />, title: "Technology Partners", desc: "Integrate Veridia into your product suite", partners: ['Salesforce', 'Microsoft', 'AWS', 'Google Cloud'] },
        { icon: <Users className="w-8 h-8" />, title: "Solution Partners", desc: "Implement Veridia for your clients", partners: ['Accenture', 'Deloitte', 'EY', 'McKinsey Digital'] },
        { icon: <Globe className="w-8 h-8" />, title: "Reseller Partners", desc: "Distribute Veridia in your region", partners: ['Regional partners worldwide'] },
        { icon: <Award className="w-8 h-8" />, title: "Referral Partners", desc: "Earn commissions for referrals", partners: ['Open to all'] }
    ];

    const benefits = [
        { title: "Revenue Share", desc: "Up to 30% recurring commission on referred deals" },
        { title: "Partner Portal", desc: "Dedicated dashboard for lead tracking and resources" },
        { title: "Training & Certification", desc: "Full product training and certification program" },
        { title: "Sales Enablement", desc: "Pitch decks, demos, and sales materials" },
        { title: "Co-Marketing", desc: "Joint webinars, case studies, and PR opportunities" },
        { title: "Dedicated Support", desc: "Partner account manager and priority support" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🤝 Partner Program"
                title="Grow Your Business with Veridia"
                subtitle="Join 100+ partners building the future of enterprise AI. Earn revenue, get certified, and delight your customers."
                primaryCTA={{ text: "Become a Partner", href: "#apply" }}
                secondaryCTA={{ text: "View Partner Directory", href: "#directory" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">100+</div><div className="text-white/80">Global Partners</div></div>
                        <div><div className="text-4xl font-bold">30%</div><div className="text-white/80">Revenue Share</div></div>
                        <div><div className="text-4xl font-bold">$10M+</div><div className="text-white/80">Partner Revenue</div></div>
                        <div><div className="text-4xl font-bold">25</div><div className="text-white/80">Countries</div></div>
                    </div>
                </div>
            </section>

            {/* Partner Types */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {partnerTypes.map((type, i) => (
                            <div key={i} className="p-8 border-2 border-slate-200 rounded-2xl hover:border-blue-300 transition-colors">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                    {type.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                                <p className="text-slate-600 mb-4">{type.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {type.partners.map((p, j) => (
                                        <span key={j} className="text-sm bg-slate-100 px-3 py-1 rounded-full">{p}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Partner Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-blue-600">{benefit.title}</h3>
                                <p className="text-slate-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Apply Form */}
            <section id="apply" className="py-20 bg-white">
                <div className="max-w-2xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Apply to Partner Program</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium mb-2">First Name *</label>
                                <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block font-medium mb-2">Last Name *</label>
                                <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 outline-none" required />
                            </div>
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Company Name *</label>
                            <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 outline-none" required />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Work Email *</label>
                            <input type="email" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 outline-none" required />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Partnership Type *</label>
                            <select className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 outline-none" required>
                                <option value="">Select type</option>
                                <option value="technology">Technology Partner</option>
                                <option value="solution">Solution Partner</option>
                                <option value="reseller">Reseller Partner</option>
                                <option value="referral">Referral Partner</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Tell us about your company</label>
                            <textarea rows={4} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 outline-none resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
                            Submit Application
                        </button>
                    </form>
                </div>
            </section>
        </SiteLayout>
    );
}
