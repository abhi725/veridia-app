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
    title: 'Insurance AI Chatbot India - Instant Claims & Quotes',
    description: 'Automate claims submission, policy renewals, and instant quote generation for Indian insurance brands. Secure, compliant, and optimized for high-volume WhatsApp channels.',
    keywords: ['Insurance AI Chatbot', 'FNOL Chatbot India', 'WhatsApp Insurance Quote', 'Aadhaar KYC Chatbot', 'SwanDigitals Insurance'],
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
            title: "Instant Claims / FNOL",
            desc: "Accident photo uploads & details via chat",
            detail: "Policyholders submit claims, upload damage pictures, and log First Notice of Loss (FNOL) inside WhatsApp under 3 minutes.",
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
            title: "Policy Status & KYC",
            desc: "Upload Aadhaar/PAN secure checks",
            detail: "Secure integration allows policyholders to verify their identity, check expiration dates, and update contact information seamlessly.",
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
            title: "Cashless Network Locator",
            desc: "Location-aware search for hospitals",
            detail: "Policyholders pin their current GPS location to locate cashless network hospitals or partner garages in close proximity.",
            color: "from-indigo-50 to-blue-50 border-indigo-200 text-indigo-600"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: " RAG-powered Policy QA",
            desc: "Clear answers on inclusions & exclusions",
            detail: "Ingest hundreds of policy wordings. Customers query coverage rules and receive exact citations without phone support lines.",
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
                title="The Deepest Conversational AI for Indian Insurance"
                subtitle="Scale First Notice of Loss, automate policy renewals on WhatsApp, and instantly generate quotes while retaining 100% data sovereignty."
                primaryCTA={{ text: "Schedule Insurance Demo", href: "/demo" }}
                secondaryCTA={{ text: "View Security Architecture", href: "/security" }}
            />

            {/* Trust Highlights */}
            <section className="bg-orange-600 text-white py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🇮🇳</span>
                            <span>DPDP Act 2023 Compliant Data Residency</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">⚡</span>
                            <span>60% Average Reduction in Claims Cycle</span>
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
                        <div className="text-sm font-semibold text-orange-400 mb-4">PLATFORM TELEMETRY</div>
                        <h2 className="text-3xl font-bold mb-6">Most Common Insurance Flows We Automate</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {[
                                "Claims registration and damage image collection",
                                "Policy quote estimates for health, motor, and life",
                                "Proactive renewal payment links via WhatsApp",
                                "Agent transfer summary for high-value claims",
                                "Endorsement requests (address change, name updates)",
                                "Cashless hospital search based on geographic location"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/90 text-sm">
                                    <Check className="w-5 h-5 text-orange-400 shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-white/70 text-xs mb-6 max-w-3xl">
                            *Typical performance: 80% automated resolution on policy renewals. Auto-claims submission rate grows by up to 3x inside WhatsApp.
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
                                Yes. All media uploaded via WhatsApp or Web Chat is processed over TLS 1.3 and saved directly to secure AWS S3 bucket environments (Mumbai region) with encryption keys held inside our isolated customer tenancy.
                            </p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-2xl group cursor-pointer border border-slate-100">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>Do we need native integrations for our Core Policy engines?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                No, core policy engines are usually secure and air-gapped. SwanDigitals queries them safely via custom webhooks, secure REST API bridges, or secure custom n8n configurations to ensure absolute network protection.
                            </p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-2xl group cursor-pointer border border-slate-100">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>Does SwanDigitals support regional languages for insurance claims?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Yes, our NLU logic supports Hindi, Tamil, Telugu, Kannada, Bengali, and Hinglish out of the box, allowing rural and urban policyholders to explain claims in their native dialect.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Empower Policyholders, Accelerate Claims</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-medium">
                        Consult with our vertical solutions team to design claims forms, quotes estimators, and renewals campaign matrices today.
                    </p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Schedule a Free Insurance Consultation
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
