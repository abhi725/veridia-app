import type { Metadata } from 'next';


import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FAQ from '@/components/ui/FAQ';
import Link from 'next/link';
import { ShoppingCart, Package, RefreshCw, MessageSquare, TrendingUp, Gift } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Retail & E-commerce AI Chatbot India | Peak Season Ready',
    description: 'Retail AI chatbot for Indian e-commerce and D2C brands. Automate order tracking, returns, and product recommendations on WhatsApp.',
    keywords: ['Retail AI Chatbot', 'E-commerce Automation India', 'WhatsApp Retail Bot', 'Order Tracking Bot', 'Festive Sale AI Support'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/retail',
    },
}

export default function RetailPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Solutions',
                item: 'https://swandigitals.com/solutions'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Retail & E-commerce',
                item: 'https://swandigitals.com/solutions/retail'
            }
        ]
    };

    const useCases = [
        { icon: <ShoppingCart className="w-6 h-6" />, title: "Product Discovery", desc: "AI recommends products based on preferences and browsing history", stat: "Higher AOV" },
        { icon: <Package className="w-6 h-6" />, title: "Order Tracking", desc: "Real-time shipping updates, delivery estimates, package location", stat: "Mostly self-service" },
        { icon: <RefreshCw className="w-6 h-6" />, title: "Returns & Exchanges", desc: "Initiate returns, generate labels, track refund status", stat: "Faster refunds" },
        { icon: <MessageSquare className="w-6 h-6" />, title: "Size & Fit", desc: "Personalized sizing recommendations to reduce returns", stat: "Fewer returns" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Inventory Queries", desc: "Stock availability, store pickup options, restock alerts", stat: "Real-time info" },
        { icon: <Gift className="w-6 h-6" />, title: "Promotions", desc: "Personalized offers, loyalty points, discount codes", stat: "Higher engagement" }
    ];

    const integrations = ['WhatsApp', 'Facebook Messenger', 'Web Chat', 'HubSpot', 'Calendly', 'Razorpay', 'Mautic', 'n8n'];

    const faqItems = [
        { question: "Can it handle festive sale traffic?", answer: "Yes. Our platform auto-scales to handle spikes in conversations during festive sales. Cloud infrastructure automatically provisions extra resources as request volume grows." },
        { question: "How do you handle product catalog sync?", answer: "Share your product catalog via a spreadsheet, PDF, or website link, and we keep the chatbot's knowledge updated. Custom catalog sync is also available via our API and n8n." },
        { question: "Can it provide personalized recommendations?", answer: "Yes. Our AI uses browsing history, purchase patterns, and preferences to provide personalized product recommendations that help increase average order value." }
    ];

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero
                badge="🛒 Retail & E-commerce"
                title="Retail AI That Scales for Peak Season"
                subtitle="Handle festive-season traffic spikes with ease. Product discovery, order support, and returns automation that grows with your business."
                primaryCTA={{ text: "See Retail Demo", href: "/demo" }}
                secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
            />

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold">High Volume</div><div className="text-white/80">Conversations Handled</div></div>
                        <div><div className="text-4xl font-bold">High</div><div className="text-white/80">Automation Rate</div></div>
                        <div><div className="text-4xl font-bold">Higher</div><div className="text-white/80">AOV</div></div>
                        <div><div className="text-4xl font-bold">Real</div><div className="text-white/80">Cost Savings</div></div>
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
                        {['🌐 Web Chat', '📘 Facebook', '📱 WhatsApp', '💬 HubSpot', '📅 Calendly', '💳 Razorpay', '✉️ Mautic', '🔗 n8n'].map((channel, i) => (
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

            {/* High-Performance Infrastructure */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-12 rounded-2xl">
                        <div className="text-sm font-semibold mb-4">PLATFORM BENCHMARKS</div>
                        <h3 className="text-3xl font-bold mb-4">Built to Handle High-Volume Seasonal Traffic</h3>
                        <p className="text-xl text-white/90 mb-6">
                            Our architecture automatically scales to handle spikes in traffic during festive sales and holiday shopping rushes without latency degradation.
                        </p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div><div className="text-2xl font-bold">High</div><div className="text-white/80 text-sm">Monthly Capacity</div></div>
                            <div><div className="text-2xl font-bold">Fast</div><div className="text-white/80 text-sm">Response Time</div></div>
                            <div><div className="text-2xl font-bold">Reliable</div><div className="text-white/80 text-sm">Uptime</div></div>
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
