"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function AboutPage() {
    const team = [
        { name: "Alex Rivera", role: "CEO & Co-Founder", bio: "Previously VP of AI at Salesforce. Built AI products used by 10M+ users." },
        { name: "Sarah Chen", role: "CTO & Co-Founder", bio: "Former Google AI researcher. PhD from Stanford in NLP." },
        { name: "Michael Park", role: "VP Engineering", bio: "Ex-Amazon. Scaled systems to handle 1B+ daily requests." },
        { name: "Emily Johnson", role: "VP Customer Success", bio: "Led customer success at Zendesk. 500+ enterprise deployments." }
    ];

    const values = [
        { emoji: "🚀", title: "Ship Fast", desc: "We believe good enough today beats perfect next year. Deploy in weeks, not months." },
        { emoji: "🤝", title: "Customer-First", desc: "Every decision starts with 'how does this help our customers succeed?'" },
        { emoji: "🔓", title: "Open & Honest", desc: "Transparent pricing, no hidden fees, no lock-in. What you see is what you get." },
        { emoji: "🧠", title: "Thoughtful Innovation", desc: "We use the latest AI responsibly. Privacy and ethics aren't afterthoughts." }
    ];

    const timeline = [
        { year: "2021", event: "Founded in San Francisco by AI engineers from Google and Salesforce" },
        { year: "2022", event: "First 50 enterprise customers. $10M Series A led by Sequoia" },
        { year: "2023", event: "Launched true on-premise deployment. 200+ customers, $5M ARR" },
        { year: "2024", event: "500+ customers, Gartner recognition, $50M Series B" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="👋 About Veridia"
                title="Building AI That Actually Ships"
                subtitle="We're the team behind the 10x faster way to deploy enterprise AI chatbots. No fluff, no enterprise sales theater, just software that works."
                primaryCTA={{ text: "Join Our Team", href: "/careers" }}
                secondaryCTA={{ text: "Contact Us", href: "/contact" }}
            />

            {/* Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-2xl text-slate-700 leading-relaxed">
                        To make enterprise AI <span className="text-orange-600 font-bold">accessible, affordable, and actually deployable</span> for every company—not just Fortune 100s with million-dollar budgets and 12-month timelines.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-orange-600 mb-2">500+</div>
                            <div className="text-slate-600">Enterprise Customers</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-orange-600 mb-2">85</div>
                            <div className="text-slate-600">Team Members</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-orange-600 mb-2">$60M</div>
                            <div className="text-slate-600">Total Funding</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-orange-600 mb-2">3</div>
                            <div className="text-slate-600">Global Offices</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl mb-4">{value.emoji}</div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-slate-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                    <div className="space-y-8">
                        {timeline.map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="text-2xl font-bold text-orange-600 w-20 flex-shrink-0">{item.year}</div>
                                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                                    <p className="text-lg text-slate-700">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((person, i) => (
                            <div key={i} className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-bold">{person.name}</h3>
                                <p className="text-orange-600 font-medium mb-2">{person.role}</p>
                                <p className="text-sm text-slate-600">{person.bio}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/leadership" className="text-orange-600 font-semibold hover:underline">
                            View full team →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Want to Join Us?</h2>
                    <p className="text-xl text-white/80 mb-8">We're always looking for talented people who want to ship amazing AI products.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/careers" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            View Open Positions
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
