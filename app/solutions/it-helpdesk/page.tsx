"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Key, Monitor, Wifi, HelpCircle, Settings, Ticket } from 'lucide-react';

export default function ITHelpdeskPage() {
    const useCases = [
        { icon: <Key className="w-6 h-6" />, title: "Password Resets", desc: "Self-service password reset with MFA verification", stat: "3 min avg" },
        { icon: <Monitor className="w-6 h-6" />, title: "Software Requests", desc: "Request, approve, and provision software automatically", stat: "80% automated" },
        { icon: <Wifi className="w-6 h-6" />, title: "Connectivity Issues", desc: "Troubleshoot network, VPN, and connectivity problems", stat: "First-line support" },
        { icon: <Ticket className="w-6 h-6" />, title: "Ticket Creation", desc: "Create and route tickets to the right team automatically", stat: "Smart routing" },
        { icon: <Settings className="w-6 h-6" />, title: "Hardware Support", desc: "Request equipment, report issues, track repairs", stat: "Full lifecycle" },
        { icon: <HelpCircle className="w-6 h-6" />, title: "KB Search", desc: "Instant answers from your knowledge base and docs", stat: "AI-powered" }
    ];


    return (
        <SiteLayout>
            <Hero
                badge="🔧 IT Helpdesk"
                title="Automate Tier 1 IT Support"
                subtitle="Password resets, software requests, and connectivity troubleshooting—automated 24/7. Free your IT team for strategic work."
                primaryCTA={{ text: "See IT Demo", href: "/demo" }}
                secondaryCTA={{ text: "View Employee Experience", href: "/solutions/employee-experience" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">72%</div><div className="text-white/80">Ticket Deflection</div></div>
                        <div><div className="text-4xl font-bold">3 min</div><div className="text-white/80">Password Reset</div></div>
                        <div><div className="text-4xl font-bold">24/7</div><div className="text-white/80">Availability</div></div>
                        <div><div className="text-4xl font-bold">$500K</div><div className="text-white/80">Annual Savings</div></div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">IT Helpdesk Use Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((uc, i) => (
                            <div key={i} className="p-6 border-2 border-slate-200 rounded-xl hover:border-slate-400 transition-colors">
                                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-4">
                                    {uc.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
                                <p className="text-slate-600 mb-4">{uc.desc}</p>
                                <span className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{uc.stat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Partners */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12">ITSM Integrations</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {['ServiceNow', 'Jira Service', 'Freshservice', 'Zendesk', 'BMC Remedy', 'Ivanti', 'ManageEngine', 'SysAid'].map((partner, i) => (
                            <span key={i} className="px-6 py-3 bg-white rounded-full font-medium shadow-sm">{partner}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Why IT Teams Love Veridia</h2>
                    <div className="space-y-6">
                        {[
                            { title: "Deflect 72% of Tickets", desc: "Common issues like password resets and software questions handled automatically" },
                            { title: "24/7 First-Line Support", desc: "Employees get help anytime without waiting for business hours" },
                            { title: "Knowledge Base Integration", desc: "AI searches your docs and provides accurate answers instantly" },
                            { title: "Smart Escalation", desc: "Complex issues routed to the right team with full troubleshooting context" },
                            { title: "Continuous Learning", desc: "AI improves from every interaction, getting smarter over time" }
                        ].map((benefit, i) => (
                            <div key={i} className="flex gap-4 items-start bg-slate-50 p-6 rounded-xl">
                                <span className="text-green-600 text-xl">✓</span>
                                <div>
                                    <h3 className="font-bold mb-1">{benefit.title}</h3>
                                    <p className="text-slate-600">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Automate IT Support?</h2>
                    <p className="text-xl text-white/80 mb-8">See how we can deflect 72% of your IT tickets</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get IT Helpdesk Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
