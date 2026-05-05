"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Mic, MessageSquare, TrendingUp, IndianRupee, ArrowRight, Phone, Globe } from 'lucide-react';

/* ────────────────────────────────────────────
   Formatting helper
   ──────────────────────────────────────────── */
const fmt = (n: number) =>
    n >= 100000
        ? `₹${(n / 100000).toFixed(2)}L`
        : `₹${n.toLocaleString('en-IN')}`;

/* ────────────────────────────────────────────
   Animated counter hook
   ──────────────────────────────────────────── */
function useAnimatedNumber(target: number, duration = 400) {
    const [display, setDisplay] = useState(target);
    const rafRef = useRef<number>();
    const startRef = useRef(display);
    const startTimeRef = useRef<number>();

    useEffect(() => {
        startRef.current = display;
        startTimeRef.current = performance.now();

        const animate = (now: number) => {
            const elapsed = now - (startTimeRef.current || now);
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(startRef.current + (target - startRef.current) * eased);
            setDisplay(current);
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target, duration]);

    return display;
}

/* ────────────────────────────────────────────
   Component
   ──────────────────────────────────────────── */
export default function PricingCalculator() {
    const [tab, setTab] = useState<'voice' | 'chatbot'>('voice');
    const [isTransitioning, setIsTransitioning] = useState(false);

    /* Voice AI state */
    const [callsPerDay, setCallsPerDay] = useState(20);
    const [avgDuration, setAvgDuration] = useState(3);
    const [language, setLanguage] = useState('hindi');

    /* Chatbot state */
    const [dailyVisitors, setDailyVisitors] = useState(500);
    const [contactRate, setContactRate] = useState(8);
    const [channel, setChannel] = useState<'web' | 'whatsapp' | 'both'>('both');

    /* Contact number */
    const [contactPhone, setContactPhone] = useState('');

    /* Scroll-triggered entrance animation */
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    /* Tab switch with fade */
    const switchTab = (newTab: 'voice' | 'chatbot') => {
        if (newTab === tab) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setTab(newTab);
            setIsTransitioning(false);
        }, 200);
    };

    /* ── Voice AI calculations ── */
    const monthlyMinutes = callsPerDay * avgDuration * 30;
    const voiceRate = monthlyMinutes <= 1000 ? 18 : monthlyMinutes <= 5000 ? 15 : 12;
    const voicePlan = monthlyMinutes <= 1000 ? 'Growth' : monthlyMinutes <= 5000 ? 'Professional' : 'Enterprise';
    const voicePlatformFee = voicePlan === 'Growth' ? 12000 : voicePlan === 'Professional' ? 28000 : 0;
    const voiceUsageCost = monthlyMinutes * voiceRate;
    const voiceTotalMonthly = voicePlan === 'Enterprise' ? voiceUsageCost : voicePlatformFee + voiceUsageCost;
    const voiceROI = monthlyMinutes * 0.7 * 250;
    const voiceROIx = voiceTotalMonthly > 0 ? (voiceROI / voiceTotalMonthly).toFixed(1) : '0';

    /* ── Chatbot calculations ── */
    const monthlyConversations = Math.round(dailyVisitors * (contactRate / 100) * 30);
    const convRate = monthlyConversations <= 10000 ? 1.20 : monthlyConversations <= 30000 ? 1.00 : 0.80;
    const chatPlan = monthlyConversations <= 10000 ? 'Growth' : monthlyConversations <= 30000 ? 'Professional' : 'Enterprise';
    const chatPlatformFee = chatPlan === 'Growth' ? 12000 : chatPlan === 'Professional' ? 28000 : 0;
    const whatsappMetaFee = (channel === 'whatsapp' || channel === 'both') ? Math.round(monthlyConversations * 0.70) : 0;
    const chatUsageCost = Math.round(monthlyConversations * convRate);
    const chatTotalMonthly = chatPlan === 'Enterprise' ? chatUsageCost + whatsappMetaFee : chatPlatformFee + chatUsageCost + whatsappMetaFee;
    const agentSaved = Math.round(monthlyConversations * 0.65 * 8);

    /* Animated display values */
    const animatedTotal = useAnimatedNumber(tab === 'voice' ? voiceTotalMonthly : chatTotalMonthly);
    const animatedSavings = useAnimatedNumber(tab === 'voice' ? voiceROI : agentSaved);
    const animatedMinutes = useAnimatedNumber(monthlyMinutes);
    const animatedConversations = useAnimatedNumber(monthlyConversations);

    /* ── Plan badge color ── */
    const planColor = (plan: string) =>
        plan === 'Growth' ? 'bg-blue-100 text-blue-700' : plan === 'Professional' ? 'bg-orange-100 text-orange-700' : 'bg-purple-100 text-purple-700';

    const currentPlan = tab === 'voice' ? voicePlan : chatPlan;
    const isEnterprise = currentPlan === 'Enterprise';

    return (
        <section
            ref={sectionRef}
            id="pricing-calculator"
            aria-label="AI Voicebot and Chatbot Pricing Calculator India"
            className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-slate-50 relative overflow-hidden"
        >
            {/* Decorative blobs */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-200/30 to-pink-200/30 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

            <div className={`max-w-7xl mx-auto px-6 lg:px-8 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* SEO heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        AI Voicebot &amp; Chatbot Pricing Calculator for Indian Businesses
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Calculate your exact monthly cost for Voice AI or WhatsApp chatbot.
                        Transparent INR pricing — no hidden fees.
                    </p>
                </div>

                {/* ── Tabs ── */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-slate-100 rounded-2xl p-1.5 gap-1 shadow-inner">
                        <button
                            type="button"
                            onClick={() => switchTab('voice')}
                            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer select-none ${tab === 'voice' ? 'bg-white text-slate-900 shadow-lg shadow-slate-200/60 scale-[1.02]' : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'}`}
                        >
                            <Mic className="w-4 h-4" />
                            🎙️ Voice AI
                        </button>
                        <button
                            type="button"
                            onClick={() => switchTab('chatbot')}
                            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer select-none ${tab === 'chatbot' ? 'bg-white text-slate-900 shadow-lg shadow-slate-200/60 scale-[1.02]' : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'}`}
                        >
                            <MessageSquare className="w-4 h-4" />
                            💬 Chatbot
                        </button>
                    </div>
                </div>

                {/* ── Calculator body ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* ── Left: Controls ── */}
                    <div className={`lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10 space-y-8 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                        {tab === 'voice' ? (
                            <>
                                {/* Calls per day */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-sm font-semibold text-slate-700">
                                            Calls per Day
                                        </label>
                                        <span className="text-lg font-bold text-orange-600 tabular-nums transition-all duration-200">{callsPerDay}</span>
                                    </div>
                                    <input
                                        type="range" min={1} max={500} value={callsPerDay}
                                        onChange={e => setCallsPerDay(+e.target.value)}
                                        className="w-full h-2 rounded-full appearance-none bg-slate-200 accent-orange-500 cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span>250</span><span>500</span></div>
                                </div>

                                {/* Avg duration */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-sm font-semibold text-slate-700">
                                            Avg Call Duration (mins)
                                        </label>
                                        <span className="text-lg font-bold text-orange-600 tabular-nums transition-all duration-200">{avgDuration} min</span>
                                    </div>
                                    <input
                                        type="range" min={1} max={10} value={avgDuration}
                                        onChange={e => setAvgDuration(+e.target.value)}
                                        className="w-full h-2 rounded-full appearance-none bg-slate-200 accent-orange-500 cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1 min</span><span>5 min</span><span>10 min</span></div>
                                </div>

                                {/* Language */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 block mb-3">Language</label>
                                    <div className="flex flex-wrap gap-3">
                                        {(['english', 'hindi', 'bilingual'] as const).map(lang => (
                                            <button
                                                type="button"
                                                key={lang}
                                                onClick={() => setLanguage(lang)}
                                                className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer select-none active:scale-95 ${language === lang ? 'bg-orange-50 border-orange-300 text-orange-700 shadow-sm shadow-orange-100' : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'}`}
                                            >
                                                {lang === 'english' ? '🇬🇧 English' : lang === 'hindi' ? '🇮🇳 Hindi' : '🌐 Bilingual'}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick stat */}
                                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-5 flex items-center gap-4 border border-orange-100">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0 shadow-sm">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">You need approximately</p>
                                        <p className="text-xl font-bold text-slate-900 tabular-nums">{animatedMinutes.toLocaleString('en-IN')} minutes/month</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Daily visitors */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-sm font-semibold text-slate-700">
                                            Daily Website Visitors
                                        </label>
                                        <span className="text-lg font-bold text-orange-600 tabular-nums transition-all duration-200">{dailyVisitors.toLocaleString('en-IN')}</span>
                                    </div>
                                    <input
                                        type="range" min={100} max={100000} step={100} value={dailyVisitors}
                                        onChange={e => setDailyVisitors(+e.target.value)}
                                        className="w-full h-2 rounded-full appearance-none bg-slate-200 accent-orange-500 cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 mt-1"><span>100</span><span>50k</span><span>1L</span></div>
                                </div>

                                {/* Contact rate */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-sm font-semibold text-slate-700">
                                            Contact / Engagement Rate
                                        </label>
                                        <span className="text-lg font-bold text-orange-600 tabular-nums transition-all duration-200">{contactRate}%</span>
                                    </div>
                                    <input
                                        type="range" min={1} max={20} value={contactRate}
                                        onChange={e => setContactRate(+e.target.value)}
                                        className="w-full h-2 rounded-full appearance-none bg-slate-200 accent-orange-500 cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1%</span><span>10%</span><span>20%</span></div>
                                </div>

                                {/* Channel */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 block mb-3">Channel</label>
                                    <div className="flex flex-wrap gap-3">
                                        {([
                                            { key: 'web' as const, icon: <Globe className="w-4 h-4 mr-1.5" />, label: 'Web Chat' },
                                            { key: 'whatsapp' as const, icon: <MessageSquare className="w-4 h-4 mr-1.5" />, label: 'WhatsApp' },
                                            { key: 'both' as const, icon: <TrendingUp className="w-4 h-4 mr-1.5" />, label: 'Both' },
                                        ]).map(ch => (
                                            <button
                                                type="button"
                                                key={ch.key}
                                                onClick={() => setChannel(ch.key)}
                                                className={`flex items-center px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer select-none active:scale-95 ${channel === ch.key ? 'bg-orange-50 border-orange-300 text-orange-700 shadow-sm shadow-orange-100' : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'}`}
                                            >
                                                {ch.icon}{ch.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick stat */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 flex items-center gap-4 border border-blue-100">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Estimated monthly conversations</p>
                                        <p className="text-xl font-bold text-slate-900 tabular-nums">{animatedConversations.toLocaleString('en-IN')}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* ── Right: Results card ── */}
                    <div className={`lg:col-span-5 space-y-6 lg:sticky lg:top-24 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 p-8 md:p-10 relative overflow-hidden">
                            {/* Subtle gradient accent line at top */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500" />

                            {/* Plan badge */}
                            <div className="flex items-center justify-between mb-6 mt-2">
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Recommended Plan</p>
                                    <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full transition-all duration-300 ${planColor(currentPlan)}`}>
                                        {currentPlan}
                                    </span>
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                                    <IndianRupee className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Cost breakdown */}
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Platform Fee</span>
                                    <span className="font-semibold text-slate-800 tabular-nums">
                                        {isEnterprise ? 'Custom' : fmt(tab === 'voice' ? voicePlatformFee : chatPlatformFee)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">
                                        Usage Cost
                                        <span className="text-xs text-slate-400 ml-1">
                                            ({tab === 'voice'
                                                ? `${animatedMinutes.toLocaleString('en-IN')} min × ₹${voiceRate}`
                                                : `${animatedConversations.toLocaleString('en-IN')} conv × ₹${convRate.toFixed(2)}`
                                            })
                                        </span>
                                    </span>
                                    <span className="font-semibold text-slate-800 tabular-nums">{fmt(tab === 'voice' ? voiceUsageCost : chatUsageCost)}</span>
                                </div>
                                {tab === 'chatbot' && whatsappMetaFee > 0 && (
                                    <div className="flex justify-between text-sm animate-fadeIn">
                                        <span className="text-slate-500">WhatsApp (Meta) Fee</span>
                                        <span className="font-semibold text-slate-800 tabular-nums">{fmt(whatsappMetaFee)}</span>
                                    </div>
                                )}
                                <hr className="border-slate-100" />
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-700 font-semibold">Estimated Monthly Cost</span>
                                    <span className="text-2xl font-extrabold text-slate-900 tabular-nums transition-all duration-300">
                                        {isEnterprise ? 'Custom' : fmt(animatedTotal)}
                                    </span>
                                </div>
                            </div>

                            {/* ROI / Savings badge */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 mb-6 relative overflow-hidden">
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-green-200/30 blur-xl pointer-events-none" />
                                <div className="flex items-center gap-3 mb-2 relative">
                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-sm shadow-green-500/20">
                                        <TrendingUp className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-sm font-bold text-green-800">Estimated Monthly Savings</p>
                                </div>
                                <p className="text-2xl font-extrabold text-green-700 mb-1 tabular-nums relative">
                                    {fmt(animatedSavings)}
                                </p>
                                {tab === 'voice' && (
                                    <p className="text-xs text-green-600 relative">
                                        ROI: <strong>{voiceROIx}x</strong> return on investment (70% deflection rate)
                                    </p>
                                )}
                                {tab === 'chatbot' && (
                                    <p className="text-xs text-green-600 relative">
                                        Based on 65% AI deflection rate &amp; ₹8 avg agent cost per conversation
                                    </p>
                                )}
                            </div>

                            {/* Contact Number */}
                            <div className="mb-4">
                                <label className="text-sm font-semibold text-slate-700 block mb-2">Your Contact Number</label>
                                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition-all duration-200">
                                    <span className="px-3 py-3 bg-slate-50 text-slate-500 text-sm border-r border-slate-200 select-none">+91</span>
                                    <input
                                        type="tel"
                                        value={contactPhone}
                                        onChange={e => setContactPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                        placeholder="Enter your phone number"
                                        className="flex-1 px-4 py-3 text-sm outline-none bg-transparent text-slate-800 placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            {/* CTA */}
                            <Link
                                href={`/contact${contactPhone ? `?phone=${contactPhone}` : ''}`}
                                className="group flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-base hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 active:scale-[0.98]"
                            >
                                Get Exact Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <p className="text-center text-xs text-slate-400 mt-3">
                                Free consultation · No obligation
                            </p>
                        </div>

                        {/* Trust badge */}
                        <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
                            No credit card required · Secure & private
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


