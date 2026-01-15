"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Headphones, ShoppingCart, Stethoscope, Landmark, Users, Settings, Briefcase, MessageSquare } from 'lucide-react';

export default function TemplatesPage() {
    const templates = [
        {
            icon: <Headphones className="w-8 h-8" />,
            title: "Customer Support Bot",
            description: "Handle FAQ, ticket creation, order status, and escalation to agents",
            category: "Customer Service",
            intents: 50,
            rating: "4.9",
            users: "200+"
        },
        {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "E-commerce Assistant",
            description: "Product recommendations, order tracking, returns, and checkout help",
            category: "Retail",
            intents: 45,
            rating: "4.8",
            users: "150+"
        },
        {
            icon: <Stethoscope className="w-8 h-8" />,
            title: "Healthcare Intake Bot",
            description: "Appointment scheduling, symptom triage, insurance verification",
            category: "Healthcare",
            intents: 35,
            rating: "4.9",
            users: "80+"
        },
        {
            icon: <Landmark className="w-8 h-8" />,
            title: "Banking Assistant",
            description: "Account inquiries, transaction history, fraud alerts, loan applications",
            category: "Finance",
            intents: 55,
            rating: "4.7",
            users: "100+"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "HR Helpdesk",
            description: "PTO requests, benefits questions, onboarding, policy information",
            category: "Employee",
            intents: 40,
            rating: "4.8",
            users: "120+"
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "IT Support Bot",
            description: "Password resets, software requests, troubleshooting, ticket routing",
            category: "IT",
            intents: 35,
            rating: "4.9",
            users: "180+"
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Sales Qualification Bot",
            description: "Lead qualification, meeting scheduling, product info, pricing inquiries",
            category: "Sales",
            intents: 30,
            rating: "4.6",
            users: "90+"
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "General FAQ Bot",
            description: "Customizable FAQ handler with smart fallback and human handoff",
            category: "General",
            intents: 25,
            rating: "4.7",
            users: "300+"
        }
    ];

    const categories = ["All", "Customer Service", "Retail", "Healthcare", "Finance", "Employee", "IT", "Sales"];

    return (
        <SiteLayout>
            <Hero
                badge="📦 Template Marketplace"
                title="Pre-Built Chatbot Templates"
                subtitle="Launch 10x faster with industry-specific templates. Customize and deploy in under a week."
                primaryCTA={{ text: "Browse Templates", href: "#templates" }}
                secondaryCTA={{ text: "Book a Demo", href: "/demo" }}
            />

            {/* Stats */}
            <section className="py-12 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">15+</div><div className="text-white/80">Templates</div></div>
                        <div><div className="text-4xl font-bold">500+</div><div className="text-white/80">Pre-built Intents</div></div>
                        <div><div className="text-4xl font-bold">1 Week</div><div className="text-white/80">Avg Deployment</div></div>
                        <div><div className="text-4xl font-bold">4.8★</div><div className="text-white/80">Avg Rating</div></div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat, i) => (
                            <button key={i} className={`px-5 py-2 rounded-full font-medium transition-colors ${i === 0 ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Grid */}
            <section id="templates" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {templates.map((template, i) => (
                            <div key={i} className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer">
                                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                    {template.icon}
                                </div>
                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{template.category}</span>
                                <h3 className="font-bold text-lg mt-2 mb-2">{template.title}</h3>
                                <p className="text-slate-600 text-sm mb-4">{template.description}</p>
                                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                                    <span>{template.intents} intents</span>
                                    <span>⭐ {template.rating}</span>
                                    <span>{template.users} users</span>
                                </div>
                                <button className="w-full py-2 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors">
                                    Use Template
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: "1", title: "Choose a Template", desc: "Browse our library and select a template for your use case" },
                            { step: "2", title: "Customize", desc: "Add your brand, modify intents, connect integrations" },
                            { step: "3", title: "Deploy", desc: "Go live on web, mobile, WhatsApp, and more" }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Need a Custom Template?</h2>
                    <p className="text-xl text-white/80 mb-8">Our team can build a custom template for your specific industry or use case</p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Request Custom Template
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
