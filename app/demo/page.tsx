"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Calendar, Clock, Video, Shield } from 'lucide-react';

export default function DemoPage() {
    return (
        <SiteLayout>
            <Hero
                badge="🎯 Book a Demo"
                title="See Veridia in Action"
                subtitle="Get a personalized demo of our AI platform. See how we can help you achieve 90% automation in weeks, not months."
                primaryCTA={{ text: "Schedule Now", href: "#form" }}
            />

            {/* What You'll See */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-center mb-8">What You'll See in Your Demo</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-3xl mb-2">🤖</div><div>Live AI Conversation</div></div>
                        <div><div className="text-3xl mb-2">📊</div><div>Analytics Dashboard</div></div>
                        <div><div className="text-3xl mb-2">🔧</div><div>No-Code Builder</div></div>
                        <div><div className="text-3xl mb-2">📈</div><div>Custom ROI Analysis</div></div>
                    </div>
                </div>
            </section>

            {/* Demo Details + Form */}
            <section id="form" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left: Details */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Your Personalized Demo</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Every demo is tailored to your specific use case, industry, and challenges. We'll show you exactly how Veridia can help your business.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">30 Minutes</h3>
                                        <p className="text-slate-600">Quick, focused session that respects your time</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Live Demo</h3>
                                        <p className="text-slate-600">See real AI conversations, not slideshows</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Flexible Scheduling</h3>
                                        <p className="text-slate-600">Choose a time that works for you</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">No Commitment</h3>
                                        <p className="text-slate-600">Just an informative session, no sales pressure</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <p className="text-slate-700 italic mb-4">
                                    "The demo was exactly what we needed. They showed us how our specific use case would work and gave us a clear ROI projection. We signed up the same week."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                                    <div>
                                        <div className="font-bold text-sm">Sarah Johnson</div>
                                        <div className="text-slate-500 text-sm">CTO, FinanceOne</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">Request Your Demo</h3>
                            <form className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium mb-2 text-sm">First Name *</label>
                                        <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none bg-white" required />
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-2 text-sm">Last Name *</label>
                                        <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none bg-white" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium mb-2 text-sm">Work Email *</label>
                                    <input type="email" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none bg-white" required />
                                </div>
                                <div>
                                    <label className="block font-medium mb-2 text-sm">Company *</label>
                                    <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none bg-white" required />
                                </div>
                                <div>
                                    <label className="block font-medium mb-2 text-sm">Job Title</label>
                                    <input type="text" className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none bg-white" />
                                </div>
                                <div>
                                    <label className="block font-medium mb-2 text-sm">Industry *</label>
                                    <select className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none bg-white" required>
                                        <option value="">Select your industry</option>
                                        <option value="banking">Banking & Finance</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="retail">Retail & E-commerce</option>
                                        <option value="technology">Technology</option>
                                        <option value="insurance">Insurance</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-medium mb-2 text-sm">Primary Use Case</label>
                                    <select className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 outline-none bg-white">
                                        <option value="">Select use case</option>
                                        <option value="customer-service">Customer Service</option>
                                        <option value="employee-experience">Employee Experience / HR</option>
                                        <option value="it-helpdesk">IT Helpdesk</option>
                                        <option value="sales">Sales Assistant</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all">
                                    Schedule My Demo
                                </button>
                                <p className="text-xs text-slate-500 text-center">
                                    By submitting, you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prefer Self-Service */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Prefer to Explore on Your Own?</h2>
                    <p className="text-slate-600 mb-8">Start a free trial and build your first chatbot in minutes</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pricing" className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                            Start Free Trial
                        </Link>
                        <Link href="/documentation" className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-900 rounded-full font-semibold hover:border-orange-300 transition-all">
                            Read Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
