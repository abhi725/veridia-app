import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resources & Documentation | SwanDigitals',
    description: 'Technical documentation, setup guides, and API references for SwanDigitals. Learn how to deploy on-premise AI agents and integrate with your stack.',
    keywords: ['SwanDigitals Documentation', 'AI Chatbot Guides', 'On-premise Deployment Guide', 'API Reference', 'Developer Resources'],
    alternates: {
        canonical: 'https://swandigitals.com/resources',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { BookOpen, FileText, Video, Phone, Download } from 'lucide-react';

export default function ResourcesPage() {
    return (
        <SiteLayout>
            <Hero
                badge="Resources"
                title="Documentation & Guides"
                subtitle="Everything you need to get started with SwanDigitals"
                primaryCTA={{ text: "View Documentation", href: "/documentation" }}
                secondaryCTA={{ text: "Contact Support", href: "/contact" }}
            />

            {/* Documentation Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Explore Resources</h2>
                    <p className="text-slate-600 text-center mb-12">Technical guides and tutorials to help you get the most out of SwanDigitals</p>

                    {/* Documentation Card */}
                    <div className="max-w-2xl mx-auto">
                        <Link href="/documentation" className="block group p-8 border-2 border-slate-200 rounded-2xl hover:border-orange-300 hover:shadow-xl transition-all bg-white">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-600">Documentation</h3>
                            <p className="text-slate-600 mb-4">Technical guides, setup instructions, and tutorials for integrating SwanDigitals chatbots and voice agents.</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full">Getting Started</span>
                                <span className="text-orange-600 font-semibold">View Docs →</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Quick Links</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/documentation" className="p-6 bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all text-center">
                            <FileText className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                            <h3 className="font-semibold mb-1">Setup Guide</h3>
                            <p className="text-sm text-slate-500">Get started in 15 minutes</p>
                        </Link>
                        <Link href="/contact" className="p-6 bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all text-center">
                            <Phone className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                            <h3 className="font-semibold mb-1">Contact Support</h3>
                            <p className="text-sm text-slate-500">Get help from our team</p>
                        </Link>
                        <Link href="/demo" className="p-6 bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all text-center">
                            <Video className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                            <h3 className="font-semibold mb-1">Book a Demo</h3>
                            <p className="text-sm text-slate-500">See it in action</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Need Help Getting Started?</h2>
                    <p className="text-white/90 mb-8">Our team is here to help you set up and get the most out of SwanDigitals</p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all">
                        Contact Us
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
