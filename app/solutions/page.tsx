"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Headphones, Users, Server, Briefcase, Building2, ShoppingCart, Stethoscope, Landmark } from 'lucide-react';

export default function SolutionsPage() {
    const useCases = [
        { icon: <Headphones className="w-8 h-8" />, title: "Customer Service", desc: "Automate 90% of support tickets with AI that understands context", link: "/solutions/customer-service", stats: "90% automation" },
        { icon: <Users className="w-8 h-8" />, title: "Employee Experience", desc: "HR, IT, and operations support for your internal teams", link: "/solutions/employee-experience", stats: "50% faster resolution" },
        { icon: <Server className="w-8 h-8" />, title: "IT Helpdesk", desc: "Password resets, ticket routing, and first-line support automation", link: "/solutions/it-helpdesk", stats: "$500K avg savings" },
        { icon: <Briefcase className="w-8 h-8" />, title: "Sales Assistant", desc: "Lead qualification, product recommendations, and meeting scheduling", link: "/solutions/sales", stats: "30% more leads" }
    ];

    const industries = [
        { icon: <Landmark className="w-8 h-8" />, title: "Banking & Finance", desc: "GDPR/PCI compliant chatbots with true on-premise deployment for regulated institutions", link: "/solutions/banking", color: "blue" },
        { icon: <Stethoscope className="w-8 h-8" />, title: "Healthcare", desc: "HIPAA compliant patient engagement, appointment scheduling, and symptom checking", link: "/solutions/healthcare", color: "green" },
        { icon: <ShoppingCart className="w-8 h-8" />, title: "Retail & E-commerce", desc: "Product discovery, order tracking, returns processing, and customer support at scale", link: "/solutions/retail", color: "purple" },
        { icon: <Building2 className="w-8 h-8" />, title: "Insurance", desc: "Claims processing, policy inquiries, and quote generation automation", link: "/solutions/banking", color: "orange" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="💡 Solutions"
                title="AI Solutions for Every Use Case"
                subtitle="Whether you're automating customer support, internal operations, or industry-specific workflows, Veridia has a purpose-built solution."
                primaryCTA={{ text: "Find Your Solution", href: "#use-cases" }}
                secondaryCTA={{ text: "Talk to Expert", href: "/demo" }}
            />

            {/* Stats Bar */}
            <section className="py-12 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">500+</div><div className="text-white/80">Enterprise Customers</div></div>
                        <div><div className="text-4xl font-bold">86%</div><div className="text-white/80">Avg Automation Rate</div></div>
                        <div><div className="text-4xl font-bold">$1.2M</div><div className="text-white/80">Avg Annual Savings</div></div>
                        <div><div className="text-4xl font-bold">21 days</div><div className="text-white/80">Avg Deployment</div></div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Solutions by Use Case</h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        Pre-built templates and industry best practices to get you live faster
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((uc, i) => (
                            <Link key={i} href={uc.link} className="group p-8 border-2 border-slate-200 rounded-2xl hover:border-orange-300 hover:shadow-xl transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                        {uc.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{uc.title}</h3>
                                        <p className="text-slate-600 mb-4">{uc.desc}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">{uc.stats}</span>
                                            <span className="text-orange-600 font-semibold">Learn more →</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Solutions by Industry</h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        Compliance-ready, industry-specific AI built for regulated environments
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((ind, i) => (
                            <Link key={i} href={ind.link} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                                <div className="flex items-start gap-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${ind.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                            ind.color === 'green' ? 'bg-green-100 text-green-600' :
                                                ind.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                                                    'bg-orange-100 text-orange-600'
                                        }`}>
                                        {ind.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-2">{ind.title}</h3>
                                        <p className="text-slate-600 mb-4">{ind.desc}</p>
                                        <span className="text-orange-600 font-semibold group-hover:underline">Explore solution →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How Our Solutions Work</h2>
                    <div className="space-y-8">
                        {[
                            { step: "1", title: "Discover", desc: "We analyze your current workflows, pain points, and automation opportunities in a free consultation." },
                            { step: "2", title: "Design", desc: "Our solution architects create a custom implementation plan with industry-specific templates." },
                            { step: "3", title: "Deploy", desc: "Go live in 2-4 weeks with full training and integration support included." },
                            { step: "4", title: "Optimize", desc: "Continuous improvement with analytics, A/B testing, and dedicated customer success." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Not Sure Which Solution Fits?</h2>
                    <p className="text-xl text-white/80 mb-8">Talk to our solution experts for a free assessment of your needs.</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get Free Consultation
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
