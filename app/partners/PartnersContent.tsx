'use client';

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import Script from 'next/script';
import { Users, Zap, Award, Shield, Check, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import FAQ from '@/components/ui/FAQ';

function useReveal() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 80);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return ref;
}

export default function PartnersContent() {
    const section1Ref = useReveal();
    const section2Ref = useReveal();
    const section3Ref = useReveal();
    const formRef = useReveal();

    const partnerBenefits = [
        {
            icon: <Award className="w-7 h-7 text-orange-600" />,
            title: "Flat 30% Lifetime Recurring Commission",
            desc: "Earn a flat 30% commission on the monthly recurring revenue (MRR) of all chatbot subscriptions you refer. Paid monthly for the lifetime of the client."
        },
        {
            icon: <Zap className="w-7 h-7 text-orange-600" />,
            title: "No Referral Minimums",
            desc: "Start earning from your very first referral. There are no minimum payout thresholds or active customer quotas to maintain your status."
        },
        {
            icon: <Shield className="w-7 h-7 text-orange-600" />,
            title: "An Easy, Honest Pitch",
            desc: "SwanDigitals is built to be DPDP-2023 aware, with data hosted in India and billing secured via Razorpay — a straightforward pitch for Indian SME owners, no jargon required."
        },
        {
            icon: <Users className="w-7 h-7 text-orange-600" />,
            title: "Dedicated Partner Support",
            desc: "Direct access to our support team to assist you with client onboarding, integration setup, and custom pricing scopes."
        }
    ];

    const partnerFAQs = [
        {
            question: "How does the referral commission work?",
            answer: "Affiliates earn a flat 30% monthly recurring commission (MRR) on all chatbot subscriptions referred. This is paid monthly for the lifetime of the client, as long as they remain active."
        },
        {
            question: "Is there a referral bonus or credit for the referred customer?",
            answer: "No. We do not offer setup credits, signup discounts, or other financial credits for referred customers. The program is strictly a flat 30% lifetime recurring commission paid directly to the partner, while referred clients pay standard pricing."
        },
        {
            question: "Does the commission apply to Voice AI call minutes?",
            answer: "No. Because Voice AI call minutes incur direct telephony transit and carrier fees, the referral commission is strictly limited to our high-margin AI Chatbot SaaS plans."
        },
        {
            question: "When are affiliate payments processed?",
            answer: "Commissions are processed and paid out monthly, within 15 days of the referred client's payment clearing. There are no minimum threshold barriers to receive your payout."
        }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🤝 Partner & Affiliate Program"
                title="Partner With SwanDigitals. Earn Flat 30% Recurring."
                subtitle="Help your network automate support, eliminate seat penalties, and offer AI chat hosted in India. Recommend our AI Chatbot and earn flat 30% MRR."
                primaryCTA={{ text: "Apply as Partner", href: "#apply" }}
                secondaryCTA={{ text: "Contact Support", href: "/contact" }}
            />

            {/* Note about Chatbot vs Voicebot Referral */}
            <div className="bg-slate-900 text-white py-4 border-y border-slate-800">
                <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center text-xs md:text-sm font-semibold text-slate-300">
                    💡 <span className="text-orange-400">Important Note:</span> The flat 30% referral commission applies to all **AI Chatbot** SaaS plans. We currently do not offer a referral program for **Voice AI** call-minute bundles.
                </div>
            </div>

            {/* How It Works */}
            <section ref={section1Ref} className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
                    <span className="reveal inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                        Affiliate Process
                    </span>
                    <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900 mb-4">How the Program Works</h2>
                    <p className="reveal text-lg text-slate-500 max-w-xl mx-auto mb-16">Three simple steps to build a predictable recurring revenue stream.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative stagger">
                        <div className="reveal flex flex-col items-center">
                            <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center text-orange-600 font-extrabold text-xl mb-6 shadow-sm">1</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Apply Online</h3>
                            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">Fill out the partner registration form below to set up your referral account.</p>
                        </div>
                        <div className="reveal flex flex-col items-center">
                            <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center text-orange-600 font-extrabold text-xl mb-6 shadow-sm">2</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Refer Chatbot Clients</h3>
                            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">Recommend SwanDigitals AI Chatbots to Indian SMEs, D2C brands, and service businesses in your network.</p>
                        </div>
                        <div className="reveal flex flex-col items-center">
                            <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center text-orange-600 font-extrabold text-xl mb-6 shadow-sm">3</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Earn 30% Lifetime MRR</h3>
                            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">Receive flat 30% monthly recurring commissions as long as the referred client is active.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Benefits */}
            <section ref={section2Ref} className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Why Agencies & Consultants Partner With Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger">
                        {partnerBenefits.map((benefit, i) => (
                            <div key={i} className="reveal bg-white border border-slate-200/80 p-8 rounded-2xl hover:border-orange-300 hover:shadow-md transition-all flex gap-5">
                                <div className="p-3 bg-orange-50 rounded-xl h-fit shrink-0">
                                    {benefit.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Flat Rate beats Per-Conversation for clients */}
            <section ref={section3Ref} className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
                    <h2 className="reveal text-3xl font-bold mb-6">Easy Pitch: Flat-Rate vs Per-Conversation Costs</h2>
                    <p className="reveal text-lg text-slate-600 leading-relaxed mb-8">
                        Most platforms charge clients for every single customer conversation, leading to unpredictable monthly bills that punish business growth. SwanDigitals' flat-rate chatbot plans charge one fixed monthly fee for unlimited conversations. 
                    </p>

                </div>
            </section>

            {/* Partnership FAQs */}
            <FAQ
                items={partnerFAQs}
                heading="Partner Program FAQs"
                className="py-20 bg-slate-50 border-t border-slate-100"
            />

            {/* Apply Form Section with HubSpot Form */}
            <section id="apply" ref={formRef} className="py-20 lg:py-28 bg-white border-t border-slate-100">
                <div className="max-w-2xl mx-auto px-5 lg:px-8">
                    <h2 className="reveal text-3xl font-bold text-center mb-4">Partner Application</h2>
                    <p className="reveal text-center text-slate-500 mb-10 text-sm">
                        Fill out the application below. Our partnership solutions team will review your application and generate your unique 30% referral links in 48 hours.
                    </p>
                    
                    {/* HubSpot Form Embed */}
                    <div className="reveal bg-white border border-slate-200 rounded-3xl p-8 shadow-card">
                        <div className="hubspot-form-container">
                            <div className="hs-form-frame" data-region="na2" data-form-id="da5a21b7-d98a-4209-b00a-dbcf125ec20d" data-portal-id="246308247"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Script to load HubSpot embed */}
            <Script src="https://js-na2.hsforms.net/forms/embed/246308247.js" strategy="afterInteractive" />
        </SiteLayout>
    );
}
