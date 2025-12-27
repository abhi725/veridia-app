"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function LeadershipPage() {
    const executives = [
        { name: "Alex Rivera", role: "CEO & Co-Founder", bio: "Previously VP of AI at Salesforce. Built AI products used by 10M+ users. Stanford CS, MIT MBA.", linkedin: "#" },
        { name: "Sarah Chen", role: "CTO & Co-Founder", bio: "Former Google AI researcher. Led teams at DeepMind. PhD Stanford in NLP.", linkedin: "#" },
        { name: "Michael Park", role: "VP Engineering", bio: "Ex-Amazon Principal Engineer. Scaled systems to 1B+ daily requests. Carnegie Mellon CS.", linkedin: "#" },
        { name: "Emily Johnson", role: "VP Customer Success", bio: "Led customer success at Zendesk. 500+ enterprise deployments. Northwestern MBA.", linkedin: "#" }
    ];

    const team = [
        { name: "David Chen", role: "VP Product", bio: "Former Product Lead at Intercom" },
        { name: "Jennifer Lee", role: "VP Sales", bio: "Ex-Oracle Enterprise Sales Director" },
        { name: "Robert Kim", role: "VP Security", bio: "Former CISO at major fintech" },
        { name: "Maria Garcia", role: "VP Marketing", bio: "Built marketing at Series B unicorn" },
        { name: "James Wilson", role: "VP Operations", bio: "Ex-McKinsey, scaled startups 10x" },
        { name: "Lisa Thompson", role: "VP HR", bio: "Former CHRO at tech unicorn" }
    ];

    const advisors = [
        { name: "Dr. Andrew Ng", role: "AI Advisor", affiliation: "Stanford / Coursera" },
        { name: "John Smith", role: "GTM Advisor", affiliation: "Former CRO Salesforce" },
        { name: "Jane Doe", role: "Board Member", affiliation: "Partner, Sequoia Capital" }
    ];

    const investors = ['Sequoia Capital', 'Andreessen Horowitz', 'Accel', 'General Catalyst'];

    return (
        <SiteLayout>
            <Hero
                badge="👥 Leadership"
                title="Meet Our Team"
                subtitle="We're 85 people across 15 countries building the future of enterprise AI. Here's our leadership team."
                primaryCTA={{ text: "Join Us", href: "/careers" }}
                secondaryCTA={{ text: "About Veridia", href: "/about" }}
            />

            {/* Executive Team */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Executive Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {executives.map((exec, i) => (
                            <div key={i} className="text-center">
                                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4"></div>
                                <h3 className="text-xl font-bold">{exec.name}</h3>
                                <p className="text-orange-600 font-medium mb-2">{exec.role}</p>
                                <p className="text-sm text-slate-600 mb-3">{exec.bio}</p>
                                <a href={exec.linkedin} className="text-blue-600 text-sm hover:underline">LinkedIn →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex-shrink-0"></div>
                                <div>
                                    <h3 className="font-bold">{member.name}</h3>
                                    <p className="text-sm text-orange-600">{member.role}</p>
                                    <p className="text-xs text-slate-500 mt-1">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisors */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Advisors & Board</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {advisors.map((advisor, i) => (
                            <div key={i} className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full mx-auto mb-4"></div>
                                <h3 className="font-bold">{advisor.name}</h3>
                                <p className="text-sm text-orange-600">{advisor.role}</p>
                                <p className="text-xs text-slate-500">{advisor.affiliation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investors */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12">Backed By</h2>
                    <div className="flex flex-wrap gap-8 justify-center">
                        {investors.map((inv, i) => (
                            <div key={i} className="px-8 py-4 bg-white rounded-xl shadow-sm font-bold text-slate-700">
                                {inv}
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-600 mt-8">$60M raised to date</p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
                    <p className="text-xl text-white/80 mb-8">We're hiring across engineering, product, sales, and more</p>
                    <Link href="/careers" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        View Open Roles
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
