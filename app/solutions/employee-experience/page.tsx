import type { Metadata } from 'next';


import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Users, Briefcase, CreditCard, Calendar, FileText, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'HR & Employee Experience AI Agents | SwanDigitals',
    description: 'Internal helpdesk automation for Indian Enterprises. HR policy answers, leave management, and IT support via Slack/Teams. 100% Private.',
    keywords: ['HR Chatbot India', 'Employee Helpdesk AI', 'Leave Management Bot', 'IT Support Automation', 'Internal Enterprise AI'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/employee-experience',
    },
}

export default function EmployeeExperiencePage() {
    const useCases = [
        { icon: <Briefcase className="w-6 h-6" />, title: "HR Inquiries", desc: "PTO balance, benefits info, policy questions, onboarding", stat: "70% self-service" },
        { icon: <CreditCard className="w-6 h-6" />, title: "Payroll Support", desc: "Pay stubs, tax forms, direct deposit changes", stat: "80% automated" },
        { icon: <Calendar className="w-6 h-6" />, title: "Time Off Requests", desc: "Submit, approve, and track vacation requests", stat: "Instant approval" },
        { icon: <FileText className="w-6 h-6" />, title: "Expense Reports", desc: "Submit expenses, check reimbursement status", stat: "50% faster" },
        { icon: <HelpCircle className="w-6 h-6" />, title: "IT Support", desc: "Password resets, software requests, troubleshooting", stat: "24/7 help" },
        { icon: <Users className="w-6 h-6" />, title: "Onboarding", desc: "New hire orientation, document collection, training", stat: "Seamless start" }
    ];

    const benefits = [
        { stat: "Up to 50%", label: "Faster resolution" },
        { stat: "60-80%", label: "Self-service rate" },
        { stat: "Improved", label: "Employee NPS" },
        { stat: "24/7", label: "Availability" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="👥 Employee Experience"
                title="Enterprise Employee Experience AI Platform"
                subtitle="HR, IT, and operations support that works 24/7. Reduce internal ticket volume by 70% and let your teams focus on strategic work."
                primaryCTA={{ text: "See Internal AI Demo", href: "/demo" }}
                secondaryCTA={{ text: "View IT Helpdesk", href: "/solutions/it-helpdesk" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {benefits.map((b, i) => (
                            <div key={i}><div className="text-4xl font-bold">{b.stat}</div><div className="text-white/80">{b.label}</div></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Employee Use Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((uc, i) => (
                            <div key={i} className="p-6 border-2 border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                    {uc.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
                                <p className="text-slate-600 mb-4">{uc.desc}</p>
                                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{uc.stat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Channels */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Where Your Employees Work</h2>
                    <p className="text-xl text-slate-600 mb-12">Deploy AI support in tools they already use</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['💼 Microsoft Teams', '💬 Slack', '📧 Email', '🌐 Intranet', '📱 Mobile App', '🎫 ServiceNow', '🔧 Jira', '📞 Phone'].map((channel, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm">{channel}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="space-y-8">
                        {[
                            { step: "1", title: "Employee asks a question", desc: "Via Slack, Teams, email, or your intranet portal" },
                            { step: "2", title: "AI understands and responds", desc: "Instant answers from your knowledge base, policy docs, and systems" },
                            { step: "3", title: "Actions are automated", desc: "Submit requests, create tickets, update records automatically" },
                            { step: "4", title: "Handoff when needed", desc: "Complex issues routed to the right person with full context" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
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

            {/* What Internal Teams Automate */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-12 rounded-2xl">
                        <div className="text-sm font-semibold mb-4">WHAT TEAMS AUTOMATE</div>
                        <h3 className="text-3xl font-bold mb-6">Common Internal Support Use Cases</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                "Password resets and account unlocks",
                                "PTO balance and leave requests",
                                "Benefits and policy questions",
                                "Expense report submissions",
                                "Software access requests",
                                "New hire onboarding tasks"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/90">
                                    <span className="text-blue-300">✓</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-white/70 text-sm">
                            Typical results: 50-70% reduction in IT/HR tickets within 3 months. Results vary based on implementation.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Employee Support?</h2>
                    <p className="text-xl text-white/80 mb-8">See how AI can help your internal teams</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get Employee AI Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
