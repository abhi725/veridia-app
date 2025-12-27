"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { useState } from 'react';

export default function IntegrationsPage() {
    const [filter, setFilter] = useState('all');

    const integrations = [
        // Support
        { name: 'Zendesk', logo: '🎫', category: 'support', desc: 'Sync tickets and agents' },
        { name: 'Freshdesk', logo: '🟢', category: 'support', desc: 'Two-way ticket integration' },
        { name: 'Intercom', logo: '💬', category: 'support', desc: 'Live chat handoff' },
        { name: 'ServiceNow', logo: '🔧', category: 'support', desc: 'ITSM integration' },
        // CRM
        { name: 'Salesforce', logo: '☁️', category: 'crm', desc: 'Lead and contact sync' },
        { name: 'HubSpot', logo: '🔶', category: 'crm', desc: 'Marketing automation' },
        { name: 'Pipedrive', logo: '📈', category: 'crm', desc: 'Sales pipeline' },
        { name: 'Zoho', logo: '📊', category: 'crm', desc: 'Full CRM suite' },
        // Messaging
        { name: 'WhatsApp', logo: '📱', category: 'messaging', desc: 'Business API' },
        { name: 'Slack', logo: '💼', category: 'messaging', desc: 'Workspace bot' },
        { name: 'Microsoft Teams', logo: '🟦', category: 'messaging', desc: 'Channel integration' },
        { name: 'Telegram', logo: '✈️', category: 'messaging', desc: 'Bot API' },
        { name: 'Facebook Messenger', logo: '💙', category: 'messaging', desc: 'Page integration' },
        { name: 'Instagram', logo: '📸', category: 'messaging', desc: 'DM automation' },
        // E-commerce
        { name: 'Shopify', logo: '🛒', category: 'ecommerce', desc: 'Order tracking' },
        { name: 'WooCommerce', logo: '🟣', category: 'ecommerce', desc: 'WordPress integration' },
        { name: 'Magento', logo: '🔵', category: 'ecommerce', desc: 'Enterprise commerce' },
        { name: 'BigCommerce', logo: '🛍️', category: 'ecommerce', desc: 'Storefront connect' },
        // Analytics
        { name: 'Google Analytics', logo: '📊', category: 'analytics', desc: 'Track conversations' },
        { name: 'Mixpanel', logo: '📈', category: 'analytics', desc: 'Event tracking' },
        { name: 'Segment', logo: '🟩', category: 'analytics', desc: 'Data pipeline' },
        { name: 'Amplitude', logo: '📉', category: 'analytics', desc: 'Product analytics' },
        // Payments
        { name: 'Stripe', logo: '💳', category: 'payments', desc: 'In-chat payments' },
        { name: 'PayPal', logo: '🔵', category: 'payments', desc: 'Payment links' },
    ];

    const categories = [
        { id: 'all', label: 'All Integrations' },
        { id: 'support', label: 'Support' },
        { id: 'crm', label: 'CRM' },
        { id: 'messaging', label: 'Messaging' },
        { id: 'ecommerce', label: 'E-commerce' },
        { id: 'analytics', label: 'Analytics' },
        { id: 'payments', label: 'Payments' }
    ];

    const filtered = filter === 'all' ? integrations : integrations.filter(i => i.category === filter);

    return (
        <SiteLayout>
            <Hero
                badge="🔌 75+ Integrations"
                title="Connect With Your Favorite Tools"
                subtitle="Pre-built integrations with leading support, CRM, messaging, and analytics platforms. Like Yellow.ai's integration ecosystem, but with faster setup."
                primaryCTA={{ text: "See All Integrations", href: "#integrations" }}
                secondaryCTA={{ text: "Request Integration", href: "/contact" }}
            />

            {/* Integration Stats */}
            <section className="py-12 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">75+</div>
                            <div className="text-slate-600">Integrations</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">1 hour</div>
                            <div className="text-slate-600">Average Setup</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                            <div className="text-slate-600">API Coverage</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">0</div>
                            <div className="text-slate-600">Code Required</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter & Grid */}
            <section id="integrations" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 mb-12 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-2 rounded-full font-medium transition-all ${filter === cat.id
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-white text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filtered.map((integration, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:border-orange-300 border-2 border-transparent transition-all cursor-pointer"
                            >
                                <div className="text-4xl mb-3">{integration.logo}</div>
                                <div className="font-bold text-slate-900 mb-1">{integration.name}</div>
                                <div className="text-sm text-slate-500">{integration.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <p className="text-lg text-slate-600 mb-4">Don't see your tool? We can build it.</p>
                        <Link href="/contact" className="inline-block px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all">
                            Request Custom Integration
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Integrations */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Integration Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: 'Zendesk', desc: 'Seamlessly hand off conversations to Zendesk agents with full context. Sync tickets bidirectionally and track resolution in one dashboard.', link: '/integrations/zendesk' },
                            { name: 'Salesforce', desc: 'Create leads from conversations, update CRM records, and trigger workflows. Full Sales Cloud and Service Cloud integration.', link: '/integrations/salesforce' },
                            { name: 'WhatsApp Business', desc: 'Deploy AI-powered customer support on WhatsApp with rich media, quick replies, and seamless escalation.', link: '/integrations/whatsapp' },
                            { name: 'Slack', desc: 'Internal IT and HR bots that live where your team works. Approve requests, answer questions, and automate workflows.', link: '/integrations/slack' }
                        ].map((partner, i) => (
                            <div key={i} className="p-6 border-2 border-slate-200 rounded-xl hover:border-orange-300 transition-colors">
                                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                                <p className="text-slate-600 mb-4">{partner.desc}</p>
                                <Link href={partner.link} className="text-orange-600 font-semibold hover:underline">
                                    Learn more →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
