"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Target, MessageSquare, Calendar, TrendingUp, FileText, Zap } from 'lucide-react';

export default function SalesPage() {
    const useCases = [
        { icon: <Target className="w-6 h-6" />, title: "Lead Qualification", desc: "Score and qualify leads 24/7 with intelligent questions", stat: "30% more SQLs" },
        { icon: <MessageSquare className="w-6 h-6" />, title: "Product Inquiries", desc: "Answer pricing, features, and comparison questions instantly", stat: "Instant response" },
        { icon: <Calendar className="w-6 h-6" />, title: "Meeting Scheduling", desc: "Book demos and meetings directly from chat", stat: "50% more booked" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Product Recommendations", desc: "AI suggests products based on needs and preferences", stat: "Higher AOV" },
        { icon: <FileText className="w-6 h-6" />, title: "Quote Generation", desc: "Generate and send quotes without human intervention", stat: "Automated" },
        { icon: <Zap className="w-6 h-6" />, title: "CRM Sync", desc: "All conversations logged to Salesforce/HubSpot automatically", stat: "Real-time sync" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="💼 Sales Assistant"
                title="AI That Qualifies and Converts"
                subtitle="Turn website visitors into qualified leads 24/7. AI handles product questions, qualifies prospects, and books meetings—while you sleep."
                primaryCTA={{ text: "See Sales AI Demo", href: "/demo" }}
                secondaryCTA={{ text: "View ROI Calculator", href: "/roi-calculator" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">30%</div><div className="text-white/80">More SQLs</div></div>
                        <div><div className="text-4xl font-bold">50%</div><div className="text-white/80">More Meetings</div></div>
                        <div><div className="text-4xl font-bold">24/7</div><div className="text-white/80">Lead Capture</div></div>
                        <div><div className="text-4xl font-bold">&lt;5 sec</div><div className="text-white/80">Response Time</div></div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Sales AI Use Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((uc, i) => (
                            <div key={i} className="p-6 border-2 border-slate-200 rounded-xl hover:border-green-300 transition-colors">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                                    {uc.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
                                <p className="text-slate-600 mb-4">{uc.desc}</p>
                                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{uc.stat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How Sales AI Works</h2>
                    <div className="space-y-8">
                        {[
                            { step: "1", title: "Visitor arrives on your site", desc: "AI engages proactively based on behavior and page context" },
                            { step: "2", title: "Qualification questions", desc: "Natural conversation uncovers needs, budget, timeline, authority" },
                            { step: "3", title: "Product education", desc: "AI explains features, pricing, and addresses objections" },
                            { step: "4", title: "Meeting scheduled", desc: "Qualified leads book directly on your calendar" },
                            { step: "5", title: "Synced to CRM", desc: "Full conversation and qualification data in Salesforce/HubSpot" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
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

            {/* CRM Integrations */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12">CRM Integrations</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics', 'Freshsales', 'Close', 'Copper'].map((crm, i) => (
                            <span key={i} className="px-6 py-3 bg-slate-100 rounded-full font-medium">{crm}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Pipeline?</h2>
                    <p className="text-xl text-white/80 mb-8">See how AI can qualify leads and book meetings 24/7</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get Sales AI Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
