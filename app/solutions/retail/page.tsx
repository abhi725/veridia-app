"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { ShoppingCart, Package, RefreshCw, MessageSquare, TrendingUp, Gift } from 'lucide-react';

export default function RetailPage() {
    const useCases = [
        { icon: <ShoppingCart className="w-6 h-6" />, title: "Product Discovery", desc: "AI recommends products based on preferences and browsing history", stat: "30% higher AOV" },
        { icon: <Package className="w-6 h-6" />, title: "Order Tracking", desc: "Real-time shipping updates, delivery estimates, package location", stat: "80% self-service" },
        { icon: <RefreshCw className="w-6 h-6" />, title: "Returns & Exchanges", desc: "Initiate returns, generate labels, track refund status", stat: "40% faster" },
        { icon: <MessageSquare className="w-6 h-6" />, title: "Size & Fit", desc: "Personalized sizing recommendations to reduce returns", stat: "25% fewer returns" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Inventory Queries", desc: "Stock availability, store pickup options, restock alerts", stat: "Real-time info" },
        { icon: <Gift className="w-6 h-6" />, title: "Promotions", desc: "Personalized offers, loyalty points, discount codes", stat: "3x engagement" }
    ];

    const integrations = ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Salesforce', 'Zendesk', 'Stripe', 'Klaviyo'];

    const faqItems = [
        { question: "Can it handle Black Friday traffic?", answer: "Absolutely. Our platform auto-scales to handle 10M+ conversations per month. RetailPro scaled from 1M to 10M conversations during holiday season without issues." },
        { question: "How do you handle product catalog sync?", answer: "We integrate with major e-commerce platforms (Shopify, Magento, WooCommerce) for real-time product sync. Custom catalog integrations are also available via our API." },
        { question: "Can it provide personalized recommendations?", answer: "Yes. Our AI analyzes browsing history, purchase patterns, and preferences to provide personalized product recommendations that increase average order value by 30%." }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🛒 Retail & E-commerce"
                title="AI That Scales for Peak Season"
                subtitle="Handle 10M+ conversations during Black Friday. Product discovery, order support, and returns automation that grows with your business."
                primaryCTA={{ text: "See Retail Demo", href: "/demo" }}
                secondaryCTA={{ text: "View Case Studies", href: "/case-studies" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">10M+</div><div className="text-white/80">Conversations/Month</div></div>
                        <div><div className="text-4xl font-bold">88%</div><div className="text-white/80">Automation Rate</div></div>
                        <div><div className="text-4xl font-bold">30%</div><div className="text-white/80">Higher AOV</div></div>
                        <div><div className="text-4xl font-bold">$2.1M</div><div className="text-white/80">Annual Savings</div></div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Retail Use Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((uc, i) => (
                            <div key={i} className="p-6 border-2 border-slate-200 rounded-xl hover:border-purple-300 transition-colors">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                                    {uc.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{uc.title}</h3>
                                <p className="text-slate-600 mb-4">{uc.desc}</p>
                                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{uc.stat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Omnichannel */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Omnichannel Support</h2>
                    <p className="text-xl text-slate-600 mb-12">One AI, everywhere your customers are</p>
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                        {['🌐 Web', '📱 Mobile', '📘 Facebook', '📸 Instagram', '📱 WhatsApp', '💬 iMessage', '🐦 Twitter', '📧 Email'].map((channel, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg text-center text-sm">{channel}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12">E-commerce Integrations</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {integrations.map((int, i) => (
                            <span key={i} className="px-6 py-3 bg-slate-100 rounded-full font-medium">{int}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-12 rounded-2xl">
                        <div className="text-sm font-semibold mb-4">CASE STUDY</div>
                        <h3 className="text-3xl font-bold mb-4">RetailPro Handles Holiday Season Like Never Before</h3>
                        <p className="text-xl text-white/90 mb-6">
                            "We scaled from 1M to 10M conversations during Black Friday without adding a single support agent. Veridia paid for itself in the first month."
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-white/20 rounded-full"></div>
                            <div>
                                <div className="font-bold text-lg">Emma Wilson</div>
                                <div className="text-white/80">VP of Support, RetailPro</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div><div className="text-2xl font-bold">10M</div><div className="text-white/80 text-sm">Conversations</div></div>
                            <div><div className="text-2xl font-bold">$2.1M</div><div className="text-white/80 text-sm">Saved</div></div>
                            <div><div className="text-2xl font-bold">2 weeks</div><div className="text-white/80 text-sm">Deployment</div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ items={faqItems} />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Support?</h2>
                    <p className="text-xl text-white/80 mb-8">See how we can help you handle peak season</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get Retail Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
