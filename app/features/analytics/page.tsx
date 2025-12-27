"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { BarChart3, PieChart, TrendingUp, Users, Clock, Download } from 'lucide-react';

export default function AnalyticsPage() {
    const dashboards = [
        { icon: <TrendingUp className="w-6 h-6" />, title: "Performance Overview", desc: "Total conversations, automation rate, and resolution times at a glance" },
        { icon: <BarChart3 className="w-6 h-6" />, title: "Intent Analytics", desc: "See what users are asking about, trending topics, and gaps in your bot" },
        { icon: <PieChart className="w-6 h-6" />, title: "Sentiment Tracking", desc: "Monitor customer satisfaction and sentiment trends over time" },
        { icon: <Users className="w-6 h-6" />, title: "Agent Metrics", desc: "Handoff rates, human agent performance, and resolution quality" },
        { icon: <Clock className="w-6 h-6" />, title: "Real-Time Monitoring", desc: "Live conversation feed, active users, and system health" },
        { icon: <Download className="w-6 h-6" />, title: "Custom Reports", desc: "Build custom reports and schedule automated exports" }
    ];

    const kpis = [
        { value: "86%", label: "Automation Rate" },
        { value: "2.3 min", label: "Avg Resolution" },
        { value: "4.7/5", label: "CSAT Score" },
        { value: "$1.2M", label: "Savings" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="📊 Analytics Dashboard"
                title="Measure What Matters"
                subtitle="Real-time insights into conversations, automation rates, sentiment, and ROI. Make data-driven decisions with our comprehensive analytics."
                primaryCTA={{ text: "See Analytics Demo", href: "/demo" }}
                secondaryCTA={{ text: "View All Features", href: "/features" }}
            />

            {/* Sample KPIs */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="text-sm font-semibold text-white/80">SAMPLE DASHBOARD VIEW</div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {kpis.map((kpi, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                                <div className="text-4xl font-bold">{kpi.value}</div>
                                <div className="text-white/80">{kpi.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Analytics Dashboards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dashboards.map((dash, i) => (
                            <div key={i} className="p-6 border-2 border-slate-200 rounded-xl hover:border-green-300 transition-colors">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                                    {dash.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{dash.title}</h3>
                                <p className="text-slate-600">{dash.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Track Key Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { category: "Automation", metrics: ["Self-service rate", "Containment rate", "Bot resolution rate", "Fallback rate"] },
                            { category: "Experience", metrics: ["CSAT score", "NPS", "Sentiment trends", "User satisfaction"] },
                            { category: "Performance", metrics: ["Response time", "Resolution time", "First contact resolution", "Handoff rate"] },
                            { category: "Business", metrics: ["Cost per conversation", "ROI", "Revenue generated", "Tickets deflected"] }
                        ].map((group, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-green-600 mb-4">{group.category}</h3>
                                <ul className="space-y-2">
                                    {group.metrics.map((metric, j) => (
                                        <li key={j} className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span>{metric}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-8">Export & Integrate</h2>
                    <p className="text-xl text-slate-600 mb-12">Connect analytics to your existing BI tools</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {['Tableau', 'Power BI', 'Looker', 'Google Data Studio', 'Snowflake', 'BigQuery'].map((tool, i) => (
                            <span key={i} className="px-6 py-3 bg-slate-100 rounded-full font-medium">{tool}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to See Your ROI?</h2>
                    <p className="text-xl text-white/80 mb-8">Get a personalized analytics dashboard demo</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get a Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
