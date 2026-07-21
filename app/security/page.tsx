import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { 
    Shield, 
    Lock, 
    Server, 
    CheckCircle2, 
    Database, 
    Key, 
    FileCheck, 
    EyeOff, 
    UserCheck, 
    Globe,
    Cpu,
    ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Security & Trust - Your Data, Hosted in India',
    description: 'Straightforward security for Indian SMEs. Your data is hosted in India, built to be DPDP Act 2023 aware, billing secured via Razorpay, and there is no lock-in.',
    keywords: ['DPDP Act chatbot', 'India data hosting', 'small business chatbot security', 'WhatsApp AI security'],
    alternates: {
        canonical: 'https://swandigitals.com/security',
    },
};

export default function SecurityPage() {
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
                name: 'Security & Compliance',
                item: 'https://swandigitals.com/security'
            }
        ]
    };

    const pillars = [
        {
            icon: <Globe className="w-8 h-8 text-orange-600" />,
            title: "Your Data, Hosted in India",
            subtitle: "India-based cloud infrastructure",
            description: "Your conversation logs and account data are hosted on cloud infrastructure based in India. We don't shop your data around to third parties, and there's no long lock-in contract to get it back."
        },
        {
            icon: <FileCheck className="w-8 h-8 text-orange-600" />,
            title: "Built to be DPDP-2023 Aware",
            subtitle: "Designed with Indian data-protection rules in mind",
            description: "SwanDigitals is built with the Digital Personal Data Protection (DPDP) Act 2023 in mind. We support reasonable consent practices and can help you respond to customer requests about their data."
        },
        {
            icon: <Server className="w-8 h-8 text-orange-600" />,
            title: "Secured Billing via Razorpay",
            subtitle: "No card details touch our servers",
            description: "All payments and subscriptions run through Razorpay, one of India's most trusted payment gateways. We never store your card details directly, and you can cancel any time with no lock-in."
        }
    ];

    const securityFeatures = [
        {
            icon: <Key className="w-6 h-6 text-orange-600" />,
            title: "Encrypted in Transit",
            description: "All traffic between your dashboard, our servers, and WhatsApp/Facebook/telephony providers runs over standard TLS encryption."
        },
        {
            icon: <EyeOff className="w-6 h-6 text-orange-600" />,
            title: "Access Controls on Your Account",
            description: "You control who on your team can log in to your SwanDigitals dashboard, view conversations, and change settings."
        },
        {
            icon: <UserCheck className="w-6 h-6 text-orange-600" />,
            title: "No Lock-In",
            description: "Cancel any time. There's no long-term contract — you pay monthly via Razorpay and can export your data or leave whenever you like."
        },
        {
            icon: <Shield className="w-6 h-6 text-orange-600" />,
            title: "Sensible Security Hygiene",
            description: "We follow standard security practices for a modern SaaS product — regular updates, restricted internal access, and monitoring for unusual activity."
        },
        {
            icon: <Database className="w-6 h-6 text-orange-600" />,
            title: "Your Data Stays Yours",
            description: "We don't sell or share your customer conversations. If you leave, you can request an export or deletion of your account data."
        },
        {
            icon: <Cpu className="w-6 h-6 text-orange-600" />,
            title: "No Training on Your Conversations",
            description: "SwanDigitals does not use your customer transcripts or business documents to train public AI models."
        }
    ];

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero
                badge="🛡️ Security & Trust"
                title="Straightforward Security for Indian SMEs"
                subtitle="Your data hosted in India, built to be DPDP-2023 aware, and billing secured via Razorpay — no lock-in, cancel anytime."
                primaryCTA={{ text: "Talk to Us", href: "/contact" }}
                secondaryCTA={{ text: "Deployment Guide", href: "/documentation" }}
            />

            {/* Core Pillars */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built simple and honest, for Indian small businesses
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Indian SMEs across retail, hospitality, services, and D2C trust SwanDigitals to handle their WhatsApp, Facebook, and phone conversations safely.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="flex flex-col p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:shadow-lg transition-all duration-300">
                                <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl w-fit mb-6">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
                                <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">{pillar.subtitle}</p>
                                <p className="text-sm text-slate-600 leading-relaxed flex-1">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 sm:text-4xl">
                                Cloud-Hosted, Kept Simple
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                SwanDigitals runs as a hosted SaaS product — there's nothing for you to install, patch, or maintain.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Your account and conversation data live on cloud infrastructure based in India. You log in, connect your WhatsApp/Facebook/phone number, and we take care of the rest.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium text-sm">No servers or infrastructure for you to manage</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium text-sm">Data hosted on India-based cloud infrastructure</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium text-sm">Cancel any time — export your data and walk away, no lock-in</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-2xl text-slate-400 font-mono text-xs border border-slate-800 shadow-2xl">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-slate-500">account-overview.txt</span>
                            </div>
                            <pre className="text-slate-300 overflow-x-auto space-y-1">
                                {`Plan: Growth Hub
Hosting region: India
Payments: Razorpay (INR)
Channels connected: WhatsApp, Facebook, Voice (+91)
Languages: 10 Indian languages
Contract: Monthly, cancel anytime
Data export: Available on request`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Secured at every level of the infrastructure stack
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Our team implements strict standard security safeguards to protect data from unauthorized access or modification.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {securityFeatures.map((feat, i) => (
                            <div key={i} className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl hover:border-orange-200 hover:bg-white transition-all duration-300">
                                <div className="p-2.5 bg-orange-50 border border-orange-100 rounded-lg w-fit mb-5">
                                    {feat.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">What You Get, In Plain Terms</h2>
                        <p className="text-slate-600 mt-3">No fine print, no hidden clauses — here's exactly what's included.</p>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-5 font-semibold text-sm">WHAT MATTERS TO YOU</th>
                                    <th className="p-5 font-semibold text-sm text-center">WHAT SWANDIGITALS PROVIDES</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm text-slate-700 font-medium">
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Data Hosting</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Hosted in India</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">AI &amp; Languages</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Advanced AI, 10 Indian languages</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Traffic Encryption</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Standard TLS in transit</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Data Protection Approach</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Built to be DPDP-2023 aware</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Billing</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Secured via Razorpay</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Contract</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Monthly, no lock-in, cancel anytime</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Security &amp; Trust FAQ</h2>
                    <div className="space-y-6">
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>Where is my data hosted?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Your account and conversation data are hosted on cloud infrastructure based in India.
                            </p>
                        </details>

                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>How does SwanDigitals approach DPDP Act 2023?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                We built SwanDigitals with the DPDP Act 2023 in mind — reasonable consent practices, and we'll work with you to handle customer requests about their data.
                            </p>
                        </details>

                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>How is billing secured?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                All subscriptions and renewals are processed through Razorpay. We never see or store your full card details, and you can cancel any time — there's no lock-in contract.
                            </p>
                        </details>

                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>Can I leave and take my data with me?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Yes. There's no lock-in — cancel whenever you like, and we'll help you export your conversation history and customer data on request.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Trust CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Have Questions About Your Data?</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Talk to our team about how we host your data, secure billing, and handle cancellations — no jargon, straight answers.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:scale-105 shadow-xl transition-all">
                            Talk to Us
                        </Link>
                        <Link href="/documentation" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900/40 hover:bg-slate-900/60 text-white border border-white/20 rounded-full font-semibold text-lg transition-all">
                            View Deployment Docs <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
