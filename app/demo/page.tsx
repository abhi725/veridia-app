"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import Script from 'next/script';
import { Calendar, Clock, Video, Shield } from 'lucide-react';

export default function DemoPage() {
    return (
        <SiteLayout>
            <Hero
                badge="🎯 Book a Demo"
                title="See SwanDesk in Action"
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
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
                        {/* Left: Details */}
                        <div className="xl:col-span-7 space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold mb-4">Your Personalized Demo</h2>
                                <p className="text-xl text-slate-600">
                                    Every demo is tailored to your specific use case, industry, and challenges. We'll show you exactly how SwanDesk can help your business.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold mb-2">30 Minutes</h3>
                                    <p className="text-slate-600 text-sm">Quick, focused session that respects your time</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold mb-2">Live Demo</h3>
                                    <p className="text-slate-600 text-sm">See real AI conversations, not slideshows</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold mb-2">Flexible Scheduling</h3>
                                    <p className="text-slate-600 text-sm">Choose a time that works for you</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold mb-2">No Commitment</h3>
                                    <p className="text-slate-600 text-sm">Just an informative session, no sales pressure</p>
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl">
                                <p className="italic text-lg mb-6 text-slate-300">
                                    "The demo was exactly what we needed. They showed us how our specific use case would work and gave us a clear ROI projection. We signed up the same week."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold">
                                        SJ
                                    </div>
                                    <div>
                                        <div className="font-bold">Sarah Johnson</div>
                                        <div className="text-slate-400 text-sm">CTO, FinanceOne</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="xl:col-span-5 bg-white border border-slate-200 shadow-xl p-8 rounded-2xl sticky top-24">
                            <h3 className="text-2xl font-bold mb-2">Request Your Demo</h3>
                            <p className="text-slate-500 mb-6 text-sm">Fill out the details below and our team will get back to you shortly.</p>
                            <div className="engage-hub-form-embed" id="eh_form_5903844064886784" style={{ width: '100%' }} data-id="5903844064886784"></div>
                            <Script id="eh-script-demo" strategy="afterInteractive">
                                {`
                            (window.EhDynamicRef ||= []).push(() => {
                                EhForms.create({
                                  "formId": "5903844064886784", // Required: The unique ID of your form
                                  "target": "#eh_form_5903844064886784", // Explicit target container
                                  "onFormReady": function(el, setValue) { // Optional: Callback function triggered when the form is fully loaded
                                  }
                               });
                            });
                            `}
                            </Script>
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
