import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import IntegrationCard from '@/components/ui/IntegrationCard';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Integrations - WhatsApp, HubSpot, Calendly, Razorpay & More',
    description: 'Connect SwanDigitals with the tools Indian SMEs actually use: WhatsApp, Facebook, HubSpot, Calendly, Razorpay, Mautic, and n8n for everything else.',
    keywords: ['WhatsApp integration', 'HubSpot integration', 'Razorpay integration', 'n8n workflow integration'],
    alternates: {
        canonical: 'https://swandigitals.com/integrations',
    },
};

export default function IntegrationsPage() {
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
                name: 'Integrations',
                item: 'https://swandigitals.com/integrations'
            }
        ]
    };

    const integrationCategories = [
        {
            category: "Messaging Channels",
            icon: "💬",
            color: "indigo",
            integrations: [
                { name: "WhatsApp", image: "/integrations/whatsapp.png", isNative: true },
                { name: "Facebook Messenger", image: "/integrations/messenger.png", isNative: true },
                { name: "Instagram", image: "/integrations/instagram.png", isNative: false },
                { name: "Telegram", image: "/integrations/telegram.png", isNative: false }
            ]
        },
        {
            category: "CRM & Scheduling",
            icon: "📊",
            color: "blue",
            integrations: [
                { name: "HubSpot", image: "/integrations/hubspot.png", isNative: true },
                { name: "Calendly", image: "/integrations/calendly.png", isNative: true },
                { name: "Zoho CRM", image: "/integrations/zoho.png", isNative: false },
                { name: "Salesforce", image: "/integrations/salesforce.png", isNative: false },
                { name: "Pipedrive", image: "/integrations/pipedrive.png", isNative: false },
                { name: "Freshsales", image: "/integrations/freshsales.png", isNative: false }
            ]
        },
        {
            category: "Payments",
            icon: "💳",
            color: "teal",
            integrations: [
                { name: "Razorpay", image: "/integrations/razorpay.png", isNative: true },
                { name: "PayPal", image: "/integrations/paypal.png", isNative: false },
                { name: "Paytm", image: "/integrations/paytm.png", isNative: false },
                { name: "PhonePe", image: "/integrations/phonepe.png", isNative: false },
                { name: "Google Pay", image: "/integrations/google-pay.png", isNative: false }
            ]
        },
        {
            category: "Marketing & Workflow Automation",
            icon: "📧",
            color: "red",
            integrations: [
                { name: "Mautic", image: "/integrations/mautic.png", isNative: true },
                { name: "n8n", image: "/integrations/n8n.png", isNative: true },
                { name: "Mailchimp", image: "/integrations/mailchimp.png", isNative: false },
                { name: "ActiveCampaign", image: "/integrations/activecampaign.png", isNative: false },
                { name: "SendGrid", image: "/integrations/sendgrid.png", isNative: false }
            ]
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { border: string, bg: string, text: string }> = {
            blue: { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-700" },
            green: { border: "border-green-200", bg: "bg-green-50", text: "text-green-700" },
            purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700" },
            pink: { border: "border-pink-200", bg: "bg-pink-50", text: "text-pink-700" },
            orange: { border: "border-orange-200", bg: "bg-orange-50", text: "text-orange-700" },
            indigo: { border: "border-indigo-200", bg: "bg-indigo-50", text: "text-indigo-700" },
            teal: { border: "border-teal-200", bg: "bg-teal-50", text: "text-teal-700" },
            red: { border: "border-red-200", bg: "bg-red-50", text: "text-red-700" },
            yellow: { border: "border-yellow-200", bg: "bg-yellow-50", text: "text-yellow-700" },
            cyan: { border: "border-cyan-200", bg: "bg-cyan-50", text: "text-cyan-700" },
            slate: { border: "border-slate-200", bg: "bg-slate-50", text: "text-slate-700" },
            emerald: { border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-700" },
            violet: { border: "border-violet-200", bg: "bg-violet-50", text: "text-violet-700" },
            lime: { border: "border-lime-200", bg: "bg-lime-50", text: "text-lime-700" }
        };
        return colors[color] || colors.blue;
    };

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero
                badge="🔌 Integrations"
                title="Connect the Tools You Already Use"
                subtitle="Native integrations for WhatsApp, Facebook, HubSpot, Calendly, Razorpay, Mautic, and n8n — with a REST API and n8n workflows to connect anything else."
                primaryCTA={{ text: "Request Integration", href: "/contact" }}
                secondaryCTA={{ text: "View API Docs", href: "/documentation" }}
            />

            {/* Credibility / Trust Banner */}
            <section className="py-8 bg-amber-50/60 border-y border-amber-200/80">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="p-3 bg-amber-100 text-amber-800 rounded-xl text-2xl">
                            🛡️
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-amber-900 mb-1">
                                Native vs. Connected Integrations
                            </h3>
                            <p className="text-sm text-amber-800 leading-relaxed max-w-5xl">
                                We're upfront about what's truly built-in. <strong>Native Integrations</strong> (WhatsApp, Facebook, HubSpot, Calendly, Razorpay, Mautic, n8n) are directly wired into our core engine. Anything else can usually be connected via our <strong>REST API</strong> or an <strong>n8n workflow</strong> — available on request, not pre-built.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">7</div>
                            <div className="text-slate-600">Native Integrations</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">4</div>
                            <div className="text-slate-600">Categories</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">REST</div>
                            <div className="text-slate-600">API Available</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">n8n</div>
                            <div className="text-slate-600">Workflow Connectors</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Categories */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Explore Integrations by Category</h2>
                    <div className="space-y-12">
                        {integrationCategories.map((cat, index) => {
                            const colors = getColorClasses(cat.color);
                            return (
                                <div key={index} className={`p-8 rounded-2xl border ${colors.border} ${colors.bg}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-4xl">{cat.icon}</span>
                                        <h3 className={`text-2xl font-bold ${colors.text}`}>{cat.category}</h3>
                                        <span className="ml-auto text-sm font-semibold text-slate-500">
                                            {cat.integrations.length} integrations
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                        {cat.integrations.map((integration: any, i) => (
                                            <IntegrationCard key={i} integration={integration} />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* API Documentation */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Build Custom Integrations</h2>
                    <p className="text-xl text-slate-600 text-center mb-12">
                        Use our REST API to build custom integrations with any system
                    </p>
                    <div className="bg-white p-10 rounded-2xl shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-4xl mb-3">📚</div>
                                <h3 className="font-bold mb-2">REST API</h3>
                                <p className="text-sm text-slate-600">Full RESTful API with webhooks</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">🔧</div>
                                <h3 className="font-bold mb-2">n8n Workflows</h3>
                                <p className="text-sm text-slate-600">Connect almost anything without custom code</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">⚡</div>
                                <h3 className="font-bold mb-2">Webhooks</h3>
                                <p className="text-sm text-slate-600">Real-time event notifications</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link href="/documentation" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition-all">
                                Browse API Documentation →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Integrations */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Don't See Your Integration?</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Most other tools can be connected through our REST API or an n8n workflow.
                        Tell us what you use and we'll help you set it up.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all">
                        Request Custom Integration
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Integration FAQs</h2>
                    <div className="space-y-6">
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">Are native integrations included in all plans?</summary>
                            <p className="mt-4 text-slate-700">Yes, all native integrations (WhatsApp, Facebook, HubSpot, Calendly, Razorpay, Mautic, n8n) are included at no extra cost.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">How secure are the integrations?</summary>
                            <p className="mt-4 text-slate-700">Connections use encrypted API calls with token-based authentication over standard TLS.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">How long does it take to set up an integration?</summary>
                            <p className="mt-4 text-slate-700">Native integrations can usually be connected in minutes from your dashboard.</p>
                        </details>
                        <details className="bg-white p-6 rounded-xl">
                            <summary className="font-bold text-lg cursor-pointer">What if I use a tool that's not listed?</summary>
                            <p className="mt-4 text-slate-700">Tell us what you use — many tools can be connected via our REST API or an n8n workflow, even if they're not a native integration yet.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Connect Your Stack?</h2>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Book a Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
