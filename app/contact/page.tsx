import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact SwanDigitals Pune | +91 7770070762 | Support',
    description: 'Reach SwanDigitals in Pune, India. Email: support@swandigitals.com | Phone: +91 7770070762. Book a demo or discuss your AI chatbot project.',
    keywords: ['Contact SwanDigitals', 'Pune AI Company Contact', 'AI Chatbot Support India'],
    alternates: {
        canonical: 'https://swandigitals.com/contact',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <SiteLayout>
            <Hero
                badge="📧 Get in Touch"
                title="We'd Love to Hear From You"
                subtitle="Whether you have a question about features, pricing, or anything else, our team is ready to answer"
                primaryCTA={{ text: "Schedule a Call", href: "/demo" }}
            />

            {/* Contact Options */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="p-8 border-2 border-slate-200 rounded-2xl text-center hover:border-orange-300 transition-colors">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sales Inquiries</h3>
                            <p className="text-slate-600 mb-4">Talk to our team about enterprise solutions</p>
                            <a href="mailto:support@swandigitals.com" className="text-orange-600 font-semibold hover:underline">support@swandigitals.com</a>
                        </div>
                        <div className="p-8 border-2 border-slate-200 rounded-2xl text-center hover:border-orange-300 transition-colors">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                            <p className="text-slate-600 mb-4">Get help with your existing account</p>
                            <a href="mailto:support@swandigitals.com" className="text-orange-600 font-semibold hover:underline">support@swandigitals.com</a>
                        </div>
                        <div className="p-8 border-2 border-slate-200 rounded-2xl text-center hover:border-orange-300 transition-colors">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
                                <Phone className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="text-slate-600 mb-4">Available Mon-Fri 10am-7pm IST</p>
                            <a href="tel:+917770070762" className="text-orange-600 font-semibold hover:underline">+91 7770070762</a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium mb-2">First Name *</label>
                                    <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" required />
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Last Name *</label>
                                    <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" required />
                                </div>
                            </div>
                            <div>
                                <label className="block font-medium mb-2">Work Email *</label>
                                <input type="email" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block font-medium mb-2">Company</label>
                                <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" />
                            </div>
                            <div>
                                <label className="block font-medium mb-2">How can we help? *</label>
                                <select className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none" required>
                                    <option value="">Select an option</option>
                                    <option value="demo">Request a demo</option>
                                    <option value="pricing">Pricing question</option>
                                    <option value="support">Technical support</option>
                                    <option value="partnership">Partnership inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-medium mb-2">Message *</label>
                                <textarea rows={5} className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none resize-none" required></textarea>
                            </div>
                            <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Office Location */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
                    <div className="max-w-md mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="text-4xl mb-4">🇮🇳</div>
                            <h3 className="text-xl font-bold mb-2">Pune, India</h3>
                            <p className="text-slate-600 mb-4">
                                B31 flat, Aaykar society<br />
                                Kothrud, 411038<br />
                                Pune, Maharashtra
                            </p>
                            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                                <Clock className="w-4 h-4" />
                                Mon-Fri 10am-7pm IST
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Looking for Quick Answers?</h2>
                    <p className="text-xl text-slate-600 mb-8">Check our documentation and FAQ before reaching out</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/documentation" className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                            View Documentation
                        </Link>
                        <Link href="/pricing#faq" className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-900 rounded-full font-semibold hover:border-orange-300 transition-all">
                            Read FAQ
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
