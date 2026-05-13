import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Linkedin, Github, Globe, Rocket, Award, Code, Database, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Meet the Founder: Abhishek Ambad | SwanDigitals',
    description: 'Meet Abhishek Ambad, Founder of SwanDigitals. Digital Growth Strategist and Tech Entrepreneur building India\'s Sovereign AI workforce.',
    keywords: ['Abhishek Ambad', 'SwanDigitals Founder', 'Digital Growth Strategist', 'Tech Entrepreneur Pune'],
    alternates: {
        canonical: 'https://swandigitals.com/leadership',
    },
}

export default function LeadershipPage() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://swandigitals.com/leadership#abhishek-ambad',
        name: 'Abhishek Ambad',
        jobTitle: 'Founder & CEO',
        url: 'https://swandigitals.com/leadership',
        sameAs: [
            'https://www.linkedin.com/in/abhishek-ambad-964207147/',
            'https://github.com/abhi725',
            'https://about.me/abhishekambad',
        ],
        worksFor: {
            '@type': 'Organization',
            '@id': 'https://swandigitals.com/#organization',
            name: 'SwanDigitals',
        },
        knowsAbout: ['AI Chatbots', 'Customer Support Automation', 'Digital Marketing', 'Voice AI', 'SaaS'],
        alumniOf: {
            '@type': 'Organization',
            name: 'Pune, Maharashtra',
        },
    };

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <Hero
                badge="👥 Leadership"
                title="Meet The Founder"
                subtitle="Driven by a passion for innovation and 6+ years of experience in digital transformation."
                primaryCTA={{ text: "Connect on LinkedIn", href: "https://www.linkedin.com/in/abhishek-ambad-964207147/" }}
                secondaryCTA={{ text: "View Portfolio", href: "https://about.me/abhishekambad" }}
            />

            {/* Founder Profile */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/3 text-center">
                            <div className="w-64 h-64 bg-slate-200 rounded-full mx-auto mb-8 overflow-hidden border-4 border-orange-100 shadow-xl relative">
                                {/* Placeholder for user image if they have one, otherwise a stylized avatar */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-400 to-pink-500 text-white text-6xl font-bold">
                                    AA
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Abhishek Ambad</h2>
                            <p className="text-xl text-orange-600 font-medium mb-6">Founder & Growth Strategist</p>

                            <div className="flex gap-4 justify-center">
                                <a href="https://www.linkedin.com/in/abhishek-ambad-964207147/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://github.com/abhi725" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full hover:bg-[#333] hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://about.me/abhishekambad" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                                    <Globe className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">About Me</h3>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                I am Abhishek Ambad, the founder of SwanDigitals. With over <strong className="text-slate-900">6 years of experience</strong> in digital marketing and growth strategy, I specialize in building scalable digital solutions that drive real business results.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                My expertise spans across full-stack web development, SEO/SEM, and marketing automation. I'm passionate about leveraging technology to solve complex problems and helping improved digital presence for businesses.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Award className="w-5 h-5 text-orange-500" />
                                        <h4 className="font-bold text-slate-900">Digital Marketing</h4>
                                    </div>
                                    <p className="text-sm text-slate-600">SEO, SEM, Content Strategy, and Lead Generation expert.</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Code className="w-5 h-5 text-blue-500" />
                                        <h4 className="font-bold text-slate-900">Development</h4>
                                    </div>
                                    <p className="text-sm text-slate-600">Webflow, Shopify, WordPress, and Full-stack solutions.</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Rocket className="w-5 h-5 text-purple-500" />
                                        <h4 className="font-bold text-slate-900">Automation</h4>
                                    </div>
                                    <p className="text-sm text-slate-600">HubSpot, Make.com, and Email Marketing workflows.</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <TrendingUp className="w-5 h-5 text-green-500" />
                                        <h4 className="font-bold text-slate-900">Growth</h4>
                                    </div>
                                    <p className="text-sm text-slate-600">Data-driven strategies to scale business operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values/Philosophy */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12">My Philosophy</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Innovation First</h3>
                            <p className="text-slate-600">Constantly exploring new technologies to stay ahead of the curve.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Data-Driven</h3>
                            <p className="text-slate-600">Every decision is backed by analytics and measurable KPIs.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">User-Centric</h3>
                            <p className="text-slate-600">Building solutions that truly solve user problems and add value.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
                    <p className="text-xl text-white/80 mb-8">Open to collaborations and new opportunities.</p>
                    <div className="flex gap-4 justify-center">
                        <a href="https://calendly.com/abhishek-ambad7/15min" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg transition-all">
                            Schedule a Call
                        </a>
                        <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
