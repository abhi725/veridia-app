import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { 
    FileText, 
    ShieldCheck, 
    Camera, 
    Calculator, 
    MapPin, 
    Percent, 
    Check, 
    HelpCircle 
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Insurance Agent AI Chatbot India - Leads, Renewals & Support',
    description: 'Help your insurance agency or brokerage capture leads, send renewal reminders, and answer policy questions on WhatsApp. Built for Indian SME insurance agents.',
    keywords: ['Insurance Agent Chatbot', 'Insurance Broker WhatsApp Bot', 'WhatsApp Insurance Renewal Reminders', 'Policy Lead Capture Chatbot', 'SwanDigitals Insurance'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/insurance',
    },
};

export default function InsurancePage() {
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
                name: 'Insurance',
                item: 'https://swandigitals.com/solutions/insurance'
            }
        ]
    };

    const useCases = [
        {
            icon: <Camera className="w-6 h-6" />,
            title: "Claim Assistance & Documents",
            desc: "Photo & document uploads via chat",
            detail: "Guide clients to share claim photos and documents over WhatsApp, then forward everything to your back office or insurer in minutes.",
            color: "from-orange-50 to-pink-50 border-orange-200 text-orange-600"
        },
        {
            icon: <Calculator className="w-6 h-6" />,
            title: "Premium Quote Estimator",
            desc: "Calculations directly mid-conversation",
            detail: "Customers input age, vehicle model, or medical background and receive instant premium estimates for auto, life, or health covers.",
            color: "from-blue-50 to-purple-50 border-blue-200 text-blue-600"
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Policy Status Lookup",
            desc: "Check status & update details on chat",
            detail: "Policyholders can check their policy status, expiry date, and update their contact information seamlessly on WhatsApp.",
            color: "from-green-50 to-emerald-50 border-green-200 text-green-600"
        },
        {
            icon: <Percent className="w-6 h-6" />,
            title: "Auto-Renewal Campaigns",
            desc: "WhatsApp broadcasts with direct checkout",
            detail: "Trigger proactive WhatsApp notifications when renewals are due. Users click a button, pay via secure Razorpay, and receive policy PDFs.",
            color: "from-yellow-50 to-amber-50 border-yellow-200 text-yellow-600"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Nearby Hospital & Garage Info",
            desc: "Quick lookup for network locations",
            detail: "Share your empanelled hospital or garage list so clients can quickly find the nearest option to them, right inside chat.",
            color: "from-indigo-50 to-blue-50 border-indigo-200 text-indigo-600"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Policy Document Q&A",
            desc: "Clear answers on inclusions & exclusions",
            detail: "Upload your policy wordings and brochures so the chatbot answers coverage questions instantly, without your team repeating themselves on calls.",
            color: "from-purple-50 to-pink-50 border-purple-200 text-purple-600"
        }
    ];

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Hero Section */}
            <Hero
                badge="🛡️ Insurance Automation"
                title="AI Chatbot for Indian Insurance Agents & Brokers"
                subtitle="Capture leads, send renewal reminders on WhatsApp, and answer policy questions instantly — built for Indian insurance agencies and brokers."
                primaryCTA={{ text: "Schedule Insurance Demo", href: "/demo" }}
                secondaryCTA={{ text: "How Your Data Is Protected", href: "/security" }}
            />

            {/* Trust Highlights */}
            <section className="bg-orange-600 text-white py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🇮🇳</span>
                            <span>DPDP Act 2023 Aware · Data Hosted in India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">⚡</span>
                            <span>Faster Renewal Follow-Ups</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">📱</span>
                            <span>0% Meta Fee Markup on Renewals</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Automate Complex Insurance Lifecycles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((uc, i) => (
                            <div key={i} className={`bg-gradient-to-br ${uc.color} p-8 rounded-2xl border-2 hover:shadow-xl transition-all flex flex-col justify-between`}>
                                <div>
                                    <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 font-semibold">
                                        {uc.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{uc.title}</h3>
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">{uc.desc}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{uc.detail}</p>
                                </div>
                                <Link href="/demo" className="text-xs font-bold text-slate-900 hover:text-orange-600 transition-colors">
                                    Configure Workflow →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Insurance Brands Typically Automate */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-slate-900 to-orange-950 text-white p-12 rounded-3xl border border-orange-900/50 shadow-2xl">
                        <div className="text-sm font-semibold text-orange-400 mb-4">COMMON WORKFLOWS</div>
                        <h2 className="text-3xl font-bold mb-6">Most Common Insurance Flows We Automate</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {[
                                "Claim document collection and forwarding to your insurer",
                                "Policy quote estimates for health, motor, and life",
                                "Proactive renewal payment links via WhatsApp",
                                "Handoff to your team for high-value or complex cases",
                                "Endorsement requests (address change, name updates)",
                                "Nearby network hospital or garage lookup"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/90 text-sm">
                                    <Check className="w-5 h-5 text-orange-400 shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-white/70 text-xs mb-6 max-w-3xl">
                            *Typical outcome: faster renewal follow-ups and more claims started directly inside WhatsApp.
                        </p>
                        <Link href="/demo" className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all">
                            Configure Your Workflow Now →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Insurance specific FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Insurance Automation FAQs</h2>
                    <div className="space-y-6">
                        <details className="bg-slate-50 p-6 rounded-2xl group cursor-pointer border border-slate-100">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>Can users upload vehicle photos or medical records safely?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Yes. Photos and documents shared over WhatsApp or Web Chat are encrypted in transit and stored securely on servers hosted in India. Only you and your team can access them.
                            </p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-2xl group cursor-pointer border border-slate-100">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>Can this connect to the tools I already use?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Yes — SwanDigitals connects to your CRM or spreadsheets through n8n webhooks, so leads, renewals, and claim details flow wherever you need them, without any complex setup.
                            </p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-2xl group cursor-pointer border border-slate-100">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>Does SwanDigitals support regional languages for insurance conversations?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Yes, we support Hindi, Tamil, Telugu, Kannada, Bengali, and Hinglish out of the box, so your clients can explain their needs in their own language.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Grow Your Insurance Book, Faster</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-medium">
                        Talk to our team about setting up lead capture, quote estimates, and renewal reminders for your agency today.
                    </p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Schedule a Free Insurance Consultation
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
