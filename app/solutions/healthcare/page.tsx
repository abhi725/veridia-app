import type { Metadata } from 'next';


import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { Stethoscope, Calendar, FileText, Shield, Clock, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: 'HIPAA Compliant AI Chatbots for Healthcare | Patient Engagement | Veridia',
    description: 'Automate patient intake, scheduling, & triage with HIPAA compliant AI. On-premise deployment for full PHI protection. Trusted by HealthPlus.',
}

export default function HealthcarePage() {
    const useCases = [
        { icon: <Calendar className="w-6 h-6" />, title: "Appointment Scheduling", desc: "Book, reschedule, and cancel appointments with automated reminders", stat: "60% less no-shows" },
        { icon: <FileText className="w-6 h-6" />, title: "Patient Intake", desc: "Pre-visit questionnaires, insurance verification, consent forms", stat: "70% faster intake" },
        { icon: <Stethoscope className="w-6 h-6" />, title: "Symptom Checker", desc: "AI-guided symptom assessment with triage recommendations", stat: "24/7 available" },
        { icon: <Heart className="w-6 h-6" />, title: "Post-Care Follow-up", desc: "Medication reminders, recovery check-ins, care instructions", stat: "40% better adherence" },
        { icon: <Shield className="w-6 h-6" />, title: "Insurance Queries", desc: "Coverage verification, claims status, billing questions", stat: "90% self-service" },
        { icon: <Clock className="w-6 h-6" />, title: "Wait Time Updates", desc: "Real-time queue information, estimated wait times", stat: "Higher satisfaction" }
    ];

    const complianceFeatures = [
        { title: "HIPAA Compliant", desc: "Full compliance with Health Insurance Portability and Accountability Act requirements" },
        { title: "PHI Protection", desc: "Protected Health Information is encrypted and handled according to strict protocols" },
        { title: "On-Premise Option", desc: "Deploy in your own data center for complete control over patient data" },
        { title: "Audit Logging", desc: "Comprehensive logs for compliance audits and regulatory requirements" },
        { title: "BAA Available", desc: "Business Associate Agreement for covered entities and business associates" },
        { title: "Role-Based Access", desc: "Granular permissions to ensure only authorized staff access patient data" }
    ];

    const faqItems = [
        { question: "Is Veridia HIPAA compliant?", answer: "Yes. We are fully HIPAA compliant and can sign a Business Associate Agreement (BAA). Our platform meets all technical safeguards required for handling Protected Health Information (PHI)." },
        { question: "Can the AI provide medical advice?", answer: "Our AI is designed for administrative tasks and symptom checking for triage purposes only. It always directs patients to qualified healthcare providers for medical advice and clearly states it's not a substitute for professional care." },
        { question: "How do you handle PHI?", answer: "All PHI is encrypted at rest and in transit. We support on-premise deployment where data never leaves your network. We also offer data anonymization and masking features for analytics." },
        { question: "Can we integrate with our EHR system?", answer: "Yes. We have pre-built integrations with Epic, Cerner, Allscripts, and other major EHR systems. Custom integrations are also available through our REST APIs." }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🏥 Healthcare"
                title="HIPAA Compliant AI for Healthcare"
                subtitle="AI-powered patient communication that meets the strictest healthcare compliance requirements. From scheduling to follow-up, automate with confidence."
                primaryCTA={{ text: "Talk to Healthcare Expert", href: "/demo" }}
                secondaryCTA={{ text: "View HIPAA Details", href: "/security" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">HIPAA</div><div className="text-white/80">Fully Compliant</div></div>
                        <div><div className="text-4xl font-bold">91%</div><div className="text-white/80">Automation Rate</div></div>
                        <div><div className="text-4xl font-bold">60%</div><div className="text-white/80">Less No-Shows</div></div>
                        <div><div className="text-4xl font-bold">24/7</div><div className="text-white/80">Patient Access</div></div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Healthcare Use Cases</h2>
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

            {/* Compliance */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Healthcare Compliance Built-In</h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        Every feature designed with HIPAA and patient privacy in mind
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {complianceFeatures.map((feature, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-lg font-bold mb-2 text-green-600">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-12 rounded-2xl">
                        <div className="text-sm font-semibold mb-4">CASE STUDY</div>
                        <h3 className="text-3xl font-bold mb-4">HealthPlus Reduces No-Shows by 60%</h3>
                        <p className="text-xl text-white/90 mb-6">
                            "HIPAA compliance was critical. Veridia's on-premise deployment met all our requirements while dramatically improving patient engagement and reducing missed appointments."
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-white/20 rounded-full"></div>
                            <div>
                                <div className="font-bold text-lg">Dr. Michael Lee</div>
                                <div className="text-white/80">COO, HealthPlus Medical Group</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div><div className="text-2xl font-bold">91%</div><div className="text-white/80 text-sm">Automation</div></div>
                            <div><div className="text-2xl font-bold">$890K</div><div className="text-white/80 text-sm">Saved/Year</div></div>
                            <div><div className="text-2xl font-bold">4 weeks</div><div className="text-white/80 text-sm">Deployment</div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={faqItems} />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready for HIPAA Compliant AI?</h2>
                    <p className="text-xl text-white/80 mb-8">Talk to our healthcare specialists about your compliance needs</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Schedule Healthcare Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
