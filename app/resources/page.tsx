import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { 
    BookOpen, 
    Calculator, 
    FileText, 
    Download, 
    ArrowRight,
    HelpCircle, 
    Terminal, 
    CheckCircle,
    FileSpreadsheet,
    ShieldAlert
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Resources & Knowledge Center - SwanDigitals',
    description: 'Practical guides, ROI spreadsheets, setup playbooks, and developer reference materials for Indian SMEs using SwanDigitals.',
    keywords: ['SwanDigitals guide', 'AI Chatbot ROI', 'DPDP basics for SMEs', 'WhatsApp Marketing Playbook'],
    alternates: {
        canonical: 'https://swandigitals.com/resources',
    },
};

export default function ResourcesPage() {
    const resourceCards = [
        {
            icon: <BookOpen className="w-8 h-8 text-orange-600" />,
            title: "Technical Documentation Hub",
            category: "DEVELOPER RESOURCE",
            description: "Deep dive into API references, SDK implementations, webhooks, and step-by-step custom flow builders for your engineering team.",
            linkText: "Browse Docs",
            linkHref: "/documentation"
        },
        {
            icon: <Calculator className="w-8 h-8 text-orange-600" />,
            title: "AI Helpdesk ROI Calculator",
            category: "BUSINESS TOOL",
            description: "Calculate your estimated savings on monthly support seat taxes, session cap markups, and Meta platform billing.",
            linkText: "Run Calculations",
            linkHref: "/roi-calculator"
        },
        {
            icon: <ShieldAlert className="w-8 h-8 text-orange-600" />,
            title: "Data & Privacy Basics Guide",
            category: "PRIVACY GUIDE",
            description: "A plain-language guide on how SwanDigitals hosts your data in India and stays built with the DPDP Act 2023 in mind.",
            linkText: "Read the Guide",
            linkHref: "/security"
        },
        {
            icon: <FileSpreadsheet className="w-8 h-8 text-orange-600" />,
            title: "WhatsApp Marketing Playbook",
            category: "STRATEGY GUIDE",
            description: "Learn how high-performing Indian D2C brands configure WhatsApp broadlists, configure UTM triggers, and avoid spam caps.",
            linkText: "Download Playbook",
            linkHref: "/contact"
        }
    ];

    const assets = [
        { name: "SwanDigitals Company Overview Deck", type: "PDF Slides", size: "4.8 MB" },
        { name: "DPDP Act 2023 Readiness Checklist", type: "PDF Checklist", size: "1.2 MB" },
        { name: "WATI to SwanDigitals Migration Playbook", type: "Migration Guide", size: "2.1 MB" },
        { name: "API Integration Quickstart Guide", type: "Cheat Sheet", size: "850 KB" }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="📚 Resource Hub"
                title="Whitepapers, Playbooks & Tools"
                subtitle="Equip your support, operations, and compliance teams with detailed blueprints, estimators, and integration frameworks."
                primaryCTA={{ text: "View Documentation", href: "/documentation" }}
                secondaryCTA={{ text: "ROI Calculator", href: "/roi-calculator" }}
            />

            {/* Main Resource Cards Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Knowledge Center & Strategy Material
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Whether you're a developer looking for webhooks or a business owner checking where your data lives, we have the right guide for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {resourceCards.map((card, i) => (
                            <div key={i} className="group relative flex flex-col p-8 bg-slate-50 hover:bg-white border border-slate-100 hover:border-orange-200 rounded-2xl hover:shadow-xl transition-all duration-300">
                                <div className="p-3 bg-white group-hover:bg-orange-50 rounded-xl w-fit mb-6 shadow-sm border border-slate-100 group-hover:border-orange-100 transition-colors">
                                    {card.icon}
                                </div>
                                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-2">{card.category}</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{card.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{card.description}</p>
                                <Link href={card.linkHref} className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                    {card.linkText} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code Sandbox Preview */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-4">
                                <Terminal className="w-3.5 h-3.5" /> For Developers
                            </span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Integrate SwanDigitals API in Minutes
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Our RESTful interface is fully documented and built for modern webhook operations. Push user status updates, trigger transactional WhatsApp flows, and assign agents programmatically.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-1">1</div>
                                    <p className="text-sm text-slate-600">Standard OpenAPI 3.0 specification schemas</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-1">2</div>
                                    <p className="text-sm text-slate-600">Secure SHA256 Webhook signature headers</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-1">3</div>
                                    <p className="text-sm text-slate-600">Dynamic conversation assignment routing triggers</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl font-mono text-xs text-slate-300">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                                <span className="text-slate-500">POST /api/v1/conversations/broadcast</span>
                                <span className="text-green-500 font-semibold">HTTPS</span>
                            </div>
                            <pre className="overflow-x-auto space-y-1">
                                {`curl -X POST "https://api.swandigitals.com/v1/broadcast" \\
  -H "Authorization: Bearer \${SWANDIGITALS_API_KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919876543210",
    "template_name": "otp_verification",
    "language": "en",
    "parameters": [
      {
        "type": "text",
        "value": "847291"
      }
    ]
  }'`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloadable Assets */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                            Downloadable Collaterals
                        </h2>
                        <p className="mt-3 text-slate-600">
                            Save these resource guides offline or share them directly with your system architects and product leads.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {assets.map((asset, i) => (
                            <div key={i} className="flex items-center justify-between p-5 border border-slate-200 hover:border-orange-300 rounded-xl hover:shadow-md transition-all duration-200 group bg-slate-50/30">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white border border-slate-100 rounded-lg text-orange-600 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{asset.name}</h4>
                                        <p className="text-xs text-slate-500 mt-1">{asset.type} • {asset.size}</p>
                                    </div>
                                </div>
                                <Link href="/contact" className="p-2 text-slate-400 hover:text-orange-600 transition-colors">
                                    <Download className="w-5 h-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Resources Help & Support</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-orange-600" />
                                Where do I request custom APIs?
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Our engineering team builds custom integrations regularly. Please submit a request on our contact form with details about your CRM or internal systems.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-orange-600" />
                                Are the whitepapers free to download?
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Yes. All PDF blueprints, templates, and calculators on this page are completely public and do not require email registration to read.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Support Flows?</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Speak directly with our onboarding team. We'll help design your conversation flow, link your channels, and test everything before you go live.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:scale-105 shadow-xl transition-all">
                            Talk to Onboarding Specialist
                        </Link>
                        <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900/40 hover:bg-slate-900/60 text-white border border-white/20 rounded-full font-semibold text-lg transition-all">
                            Book Live Platform Tour
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
