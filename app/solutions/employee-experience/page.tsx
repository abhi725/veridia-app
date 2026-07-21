import type { Metadata } from 'next';


import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Users, Briefcase, CreditCard, Calendar, FileText, HelpCircle, MessageSquare, Mail, Globe, Smartphone, Ticket, Wrench, Phone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'HR & Team Support AI Chatbot for Indian SMEs | Internal Helpdesk',
    description: 'AI-powered internal support for growing Indian businesses. HR policy answers, leave requests, and IT support on WhatsApp or web chat.',
    keywords: ['HR Chatbot India', 'Employee Helpdesk AI', 'Leave Management Bot', 'IT Support Automation', 'Internal Team Support AI'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/employee-experience',
    },
}

export default function EmployeeExperiencePage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Solutions',
                item: 'https://swandigitals.com/solutions'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Employee Experience',
                item: 'https://swandigitals.com/solutions/employee-experience'
            }
        ]
    };

    const useCases = [
        { icon: <Briefcase className="w-6 h-6" />, title: "HR Inquiries", desc: "PTO balance, benefits info, policy questions, onboarding", stat: "Mostly self-service" },
        { icon: <CreditCard className="w-6 h-6" />, title: "Payroll Support", desc: "Pay stubs, tax forms, direct deposit changes", stat: "Mostly automated" },
        { icon: <Calendar className="w-6 h-6" />, title: "Time Off Requests", desc: "Submit, approve, and track vacation requests", stat: "Instant approval" },
        { icon: <FileText className="w-6 h-6" />, title: "Expense Reports", desc: "Submit expenses, check reimbursement status", stat: "Faster processing" },
        { icon: <HelpCircle className="w-6 h-6" />, title: "IT Support", desc: "Password resets, software requests, troubleshooting", stat: "24/7 help" },
        { icon: <Users className="w-6 h-6" />, title: "Onboarding", desc: "New hire orientation, document collection, training", stat: "Seamless start" }
    ];

    const benefits = [
        { stat: "Faster", label: "Resolution" },
        { stat: "High", label: "Self-service rate" },
        { stat: "Improved", label: "Employee Experience" },
        { stat: "24/7", label: "Availability" }
    ];

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero
                badge="👥 Employee Experience"
                title="Employee Support AI for Growing Teams"
                subtitle="HR, IT, and operations support that works 24/7. Cut down repetitive internal questions and let your team focus on what matters."
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
                        {[
                            { name: 'WhatsApp', icon: <MessageSquare className="w-5 h-5" /> },
                            { name: 'Web Chat', icon: <Globe className="w-5 h-5" /> },
                            { name: 'Facebook', icon: <Users className="w-5 h-5" /> },
                            { name: 'Email', icon: <Mail className="w-5 h-5" /> },
                            { name: 'HubSpot', icon: <Ticket className="w-5 h-5" /> },
                            { name: 'Calendly', icon: <Smartphone className="w-5 h-5" /> },
                            { name: 'n8n', icon: <Wrench className="w-5 h-5" /> },
                            { name: 'Phone', icon: <Phone className="w-5 h-5" /> }
                        ].map((channel, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center gap-3">
                                <div className="text-blue-600 bg-blue-50 p-3 rounded-lg">
                                    {channel.icon}
                                </div>
                                <span className="font-medium text-slate-700">{channel.name}</span>
                            </div>
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
                            { step: "1", title: "Employee asks a question", desc: "Via WhatsApp, web chat, or email" },
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
                            Typical results: fewer repetitive IT/HR questions reaching your team within a few months. Results vary based on implementation.
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
