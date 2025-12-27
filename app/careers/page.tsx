"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { useState } from 'react';

export default function CareersPage() {
    const [filter, setFilter] = useState('all');

    const jobs = [
        { title: "Senior Software Engineer", dept: "engineering", location: "San Francisco / Remote", type: "Full-time" },
        { title: "Machine Learning Engineer", dept: "engineering", location: "San Francisco / Remote", type: "Full-time" },
        { title: "Frontend Engineer (React)", dept: "engineering", location: "Remote", type: "Full-time" },
        { title: "DevOps Engineer", dept: "engineering", location: "San Francisco / Remote", type: "Full-time" },
        { title: "Product Manager", dept: "product", location: "San Francisco", type: "Full-time" },
        { title: "Product Designer", dept: "product", location: "Remote", type: "Full-time" },
        { title: "Enterprise Account Executive", dept: "sales", location: "New York / Remote", type: "Full-time" },
        { title: "Solutions Engineer", dept: "sales", location: "Remote", type: "Full-time" },
        { title: "Customer Success Manager", dept: "customer", location: "Remote", type: "Full-time" },
        { title: "Technical Support Engineer", dept: "customer", location: "Remote", type: "Full-time" },
        { title: "Content Marketing Manager", dept: "marketing", location: "Remote", type: "Full-time" },
        { title: "Growth Marketing Lead", dept: "marketing", location: "Remote", type: "Full-time" }
    ];

    const departments = [
        { id: 'all', label: 'All Teams', count: jobs.length },
        { id: 'engineering', label: 'Engineering', count: 4 },
        { id: 'product', label: 'Product', count: 2 },
        { id: 'sales', label: 'Sales', count: 2 },
        { id: 'customer', label: 'Customer Success', count: 2 },
        { id: 'marketing', label: 'Marketing', count: 2 }
    ];

    const filtered = filter === 'all' ? jobs : jobs.filter(j => j.dept === filter);

    const benefits = [
        { emoji: "💰", title: "Competitive Salary", desc: "Top-of-market compensation benchmarked quarterly" },
        { emoji: "📈", title: "Equity", desc: "Meaningful ownership stake in a fast-growing company" },
        { emoji: "🏥", title: "Health Insurance", desc: "Premium medical, dental, and vision for you and family" },
        { emoji: "🏖️", title: "Unlimited PTO", desc: "Take the time you need to recharge and be your best" },
        { emoji: "🏠", title: "Remote-First", desc: "Work from anywhere. Optional SF office for those who want it" },
        { emoji: "📚", title: "Learning Budget", desc: "$2,000/year for courses, conferences, and books" },
        { emoji: "💻", title: "Equipment", desc: "Top-of-line MacBook, monitor, and WFH setup allowance" },
        { emoji: "🎉", title: "Team Offsites", desc: "Quarterly all-hands in exciting destinations" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🚀 Join Us"
                title="Build the Future of Enterprise AI"
                subtitle="We're on a mission to make AI accessible to every business. Join our team of 85 talented people building the next generation of conversational AI."
                primaryCTA={{ text: "View Open Roles", href: "#jobs" }}
                secondaryCTA={{ text: "About Us", href: "/about" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">85</div><div className="text-white/80">Team Members</div></div>
                        <div><div className="text-4xl font-bold">$60M</div><div className="text-white/80">Funding Raised</div></div>
                        <div><div className="text-4xl font-bold">15</div><div className="text-white/80">Countries</div></div>
                        <div><div className="text-4xl font-bold">12</div><div className="text-white/80">Open Roles</div></div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Work at Veridia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-xl text-center">
                                <div className="text-4xl mb-4">{benefit.emoji}</div>
                                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                                <p className="text-slate-600 text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs */}
            <section id="jobs" className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>

                    {/* Filter */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        {departments.map(dept => (
                            <button
                                key={dept.id}
                                onClick={() => setFilter(dept.id)}
                                className={`px-4 py-2 rounded-full font-medium transition-all ${filter === dept.id
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-white text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                {dept.label} ({dept.count})
                            </button>
                        ))}
                    </div>

                    {/* Job List */}
                    <div className="space-y-4">
                        {filtered.map((job, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="font-bold text-lg">{job.title}</h3>
                                    <div className="text-slate-500 text-sm">{job.location} • {job.type}</div>
                                </div>
                                <Link href={`/careers/${job.title.toLowerCase().replace(/ /g, '-')}`} className="px-6 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors text-center">
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Ship Fast", desc: "We bias for action. Good enough today beats perfect next year." },
                            { title: "Customer Obsession", desc: "Every decision starts with 'how does this help our customers succeed?'" },
                            { title: "Transparency", desc: "Open communication, honest feedback, and no hidden agendas." },
                            { title: "Continuous Learning", desc: "We're all students. Stay curious, embrace feedback, grow together." }
                        ].map((value, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-xl text-left">
                                <h3 className="font-bold text-xl mb-2 text-orange-600">{value.title}</h3>
                                <p className="text-slate-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Don't See Your Role?</h2>
                    <p className="text-xl text-white/80 mb-8">We're always looking for talented people. Send us your resume.</p>
                    <a href="mailto:careers@veridia.ai" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all">
                        Send Resume
                    </a>
                </div>
            </section>
        </SiteLayout>
    );
}
