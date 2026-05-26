"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import Script from 'next/script';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <SiteLayout>
            <Hero
                badge="Get in Touch"
                title="We'd Love to Hear From You"
                subtitle="Whether you have a question about features, pricing, or anything else, our team is ready to answer"
                primaryCTA={{ text: "Schedule a Call", href: "/demo" }}
            />

            {/* Contact Layout */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-gradient-to-br from-orange-400/20 to-pink-500/20 blur-3xl mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-500/20 blur-3xl mix-blend-multiply"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Information */}
                        <div className="lg:col-span-5 space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold mb-6 tracking-tight">How can we help?</h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    Whether you need support, want to discuss enterprise features, or just want to say hi, our team is ready to connect.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Sales & Support */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Sales & Support</h3>
                                        <p className="text-slate-600 text-sm mb-2">Talk to our team about anything</p>
                                        <a href="mailto:support@swandigitals.com" className="text-orange-600 font-medium hover:underline">support@swandigitals.com</a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                        <p className="text-slate-600 text-sm mb-2">Mon-Fri from 10am to 7pm IST</p>
                                        <a href="tel:+917770070762" className="text-orange-600 font-medium hover:underline">+91 7770070762</a>
                                    </div>
                                </div>

                                {/* Office */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Office Location</h3>
                                        <p className="text-slate-600 text-sm">
                                            B31 flat, Aaykar society<br />
                                            Kothrud, 411038<br />
                                            Pune, Maharashtra
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 relative">
                                <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
                                <p className="text-slate-500 mb-8">Ready to transform your business? Drop us a line.</p>
                                
                                <div className="engage-hub-form-embed -mx-2" id="eh_form_5903844064886784" style={{ width: '100%' }} data-id="5903844064886784"></div>
                                <Script id="eh-script-contact" strategy="afterInteractive">
                                    {`
                                    (window.EhDynamicRef ||= []).push(() => {
                                        EhForms.create({
                                            "formId": "5903844064886784", // Required: The unique ID of your form
                                            "target": "#eh_form_5903844064886784", // Explicit target container to prevent drifting
                                            "onFormReady": function(el, setValue) { // Optional: Callback function triggered when the form is fully loaded
                                            }
                                        });
                                    });
                                    `}
                                </Script>
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
