import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Linkedin, Github, Globe, Rocket, Award, Code, Database, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Leadership — SwanDigitals',
    description: 'Meet the leaders of SwanDigitals: Swati Gaikwad (Co-Founder & CEO) and Kiran Shelke (Co-Founder & CTO). Building robust, DPDP compliant customer support AI for Indian enterprises.',
    keywords: ['SwanDigitals Leadership', 'Swati Gaikwad', 'Kiran Shelke', 'AI Founders Pune', 'Sovereign AI India'],
    alternates: {
        canonical: 'https://swandigitals.com/leadership',
    },
}

export default function LeadershipPage() {
    const teamSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': 'https://swandigitals.com/leadership#swati-gaikwad',
                name: 'Swati Gaikwad',
                jobTitle: 'Co-Founder & CEO',
                url: 'https://swandigitals.com/leadership',
                worksFor: {
                    '@type': 'Organization',
                    '@id': 'https://swandigitals.com/#organization',
                    name: 'SwanDigitals',
                },
                knowsAbout: ['Customer Success', 'Business Operations', 'AI Support', 'SaaS'],
                alumniOf: {
                    '@type': 'Organization',
                    name: 'Pune, Maharashtra',
                },
            },
            {
                '@type': 'Person',
                '@id': 'https://swandigitals.com/leadership#kiran-shelke',
                name: 'Kiran Shelke',
                jobTitle: 'Co-Founder & CTO',
                url: 'https://swandigitals.com/leadership',
                worksFor: {
                    '@type': 'Organization',
                    '@id': 'https://swandigitals.com/#organization',
                    name: 'SwanDigitals',
                },
                knowsAbout: ['AI Engineering', 'Full Stack Development', 'Sovereign LLMs', 'Data Compliance'],
                alumniOf: {
                    '@type': 'Organization',
                    name: 'Pune, Maharashtra',
                },
            }
        ]
    };

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
            />
            <Hero
                badge="👥 Leadership"
                title="Meet Our Leadership Team"
                subtitle="Guided by a customer-first mindset and building secure, sovereign AI technologies for India."
                primaryCTA={{ text: "Schedule a Demo", href: "/demo" }}
                secondaryCTA={{ text: "Contact Team", href: "/contact" }}
            />

            {/* Leadership Profiles */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                        
                        {/* Swati Gaikwad */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <div className="w-40 h-40 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-md">
                                    SG
                                </div>
                                <h2 className="text-3xl font-bold text-center text-slate-900 mb-1">Swati Gaikwad</h2>
                                <p className="text-lg text-orange-600 font-semibold text-center mb-6">Co-Founder & CEO</p>
                                
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                    Swati co-founded SwanDigitals with a commitment to empower Indian businesses with state-of-the-art support operations. Drawing from years of customer relations expertise, she aligns our engineering capabilities directly with real-world enterprise needs.
                                </p>
                                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                    Her focus is on driving business scaling, operations, and ensuring every merchant gets first-class assistance, compliance satisfaction, and high ROI.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-3 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 text-xs mb-1">🚀 Operations</h4>
                                    <p className="text-[11px] text-slate-500">Optimizing scaling, sales, and localized deployment metrics.</p>
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 text-xs mb-1">🤝 Customer Success</h4>
                                    <p className="text-[11px] text-slate-500">Helping enterprises achieve 85%+ support automation.</p>
                                </div>
                            </div>
                        </div>

                        {/* Kiran Shelke */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-md">
                                    KS
                                </div>
                                <h2 className="text-3xl font-bold text-center text-slate-900 mb-1">Kiran Shelke</h2>
                                <p className="text-lg text-purple-600 font-semibold text-center mb-6">Co-Founder & CTO</p>
                                
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                    Kiran directs our technical framework and product development. He is passionate about deploying local, secure cloud and on-premise AI LLM nodes that adhere strictly to DPDP Act specifications and sovereign data practices.
                                </p>
                                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                    With robust full-stack expertise, he specializes in building low-latency speech pipelines, robust APIs, and high-performance communication systems.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-3 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 text-xs mb-1">💻 System Design</h4>
                                    <p className="text-[11px] text-slate-500">Next-gen speech channels and full-stack enterprise structures.</p>
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 text-xs mb-1">🔒 Data Privacy</h4>
                                    <p className="text-[11px] text-slate-500">DPDP Act alignment and air-gapped on-prem deployments.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Leadership Philosophy */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Philosophy</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Innovation First</h3>
                            <p className="text-slate-600">Exploring sovereign models and low-latency speech engines to push boundaries.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Data-Driven</h3>
                            <p className="text-slate-600">Every design choice is engineered for DPDP compliance and security metrics.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">User-Centric</h3>
                            <p className="text-slate-600">Creating natural voice and messaging touchpoints that customers love to use.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
                    <p className="text-xl text-white/80 mb-8">Empower your customer support with India's secure enterprise chatbot.</p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:scale-105">
                            Book a Demo
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}

