import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { 
    MessageCircle, 
    TrendingUp, 
    Building2, 
    HeadphonesIcon,
    Code2,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compare SwanDigitals vs Competitors | Alternative to Zendesk, WATI & More',
    description: 'See why scaling Indian enterprises, banks, and D2C brands are migrating from global tools like Zendesk, WATI, and GoHighLevel to SwanDigitals.',
    keywords: ['SwanDigitals alternatives', 'Zendesk alternative India', 'WATI alternative', 'Compare AI Helpdesks'],
    alternates: {
        canonical: 'https://swandigitals.com/compare',
    },
}

const comparisonGroups = [
    {
        title: "WhatsApp Marketing & D2C",
        icon: <MessageCircle className="w-8 h-8 text-green-500" />,
        description: "Upgrade from basic broadcast tools to a true omnichannel AI Helpdesk that actually resolves customer replies.",
        competitors: [
            { name: "WATI", link: "/compare/vs-wati", tag: "WhatsApp API" },
            { name: "AiSensy", link: "/compare/vs-aisensy", tag: "Broadcast Tool" },
            { name: "BiteSpeed", link: "/compare/vs-bitespeed", tag: "Shopify Chat" },
            { name: "Gallabox", link: "/compare/vs-gallabox", tag: "SMB WhatsApp" },
        ]
    },
    {
        title: "Sales CRMs & Mobile Apps",
        icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
        description: "Stop relying on field reps to text back. Use an AI Sales Agent that qualifies leads 24/7.",
        competitors: [
            { name: "DoubleTick", link: "/compare/vs-doubletick", tag: "Mobile CRM" },
            { name: "ManyChat", link: "/compare/vs-manychat", tag: "Social Media Bot" },
        ]
    },
    {
        title: "Live Chat & Shared Inboxes",
        icon: <HeadphonesIcon className="w-8 h-8 text-orange-500" />,
        description: "Move away from free widgets and rigid decision trees. Deploy true Generative AI to automate support.",
        competitors: [
            { name: "Tawk.to", link: "/compare/vs-tawkto", tag: "Free Widget" },
            { name: "Tidio", link: "/compare/vs-tidio", tag: "SMB Live Chat" },
            { name: "Crisp.chat", link: "/compare/vs-crisp", tag: "Shared Inbox" },
        ]
    },
    {
        title: "Agency SaaS & Bot Builders",
        icon: <Building2 className="w-8 h-8 text-purple-500" />,
        description: "Provide your enterprise clients with a secure, out-of-the-box AI Helpdesk rather than bloated marketing CRMs.",
        competitors: [
            { name: "GoHighLevel", link: "/compare/vs-gohighlevel", tag: "Marketing CRM" },
            { name: "WotNot", link: "/compare/vs-wotnot", tag: "Chatbot Builder" },
            { name: "QuickMessage", link: "/compare/vs-quickmessage", tag: "Raw API Tool" },
        ]
    },
    {
        title: "Telecom APIs & Infrastructure",
        icon: <Code2 className="w-8 h-8 text-slate-500" />,
        description: "Stop building custom UIs from scratch. Get the Enterprise frontend and the LLM backend out-of-the-box.",
        competitors: [
            { name: "MSG91 (Hello)", link: "/compare/vs-msg91", tag: "Legacy Telecom" },
            { name: "360dialog", link: "/compare/vs-360dialog", tag: "WhatsApp BSP" },
            { name: "Gupshup", link: "/compare/vs-gupshup", tag: "Messaging API" },
        ]
    },
    {
        title: "Global Enterprise Helpdesks",
        icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
        description: "Ditch the expensive 'Per Seat' licenses. Switch to a platform built natively for the Indian market with flat pricing.",
        competitors: [
            { name: "Zendesk", link: "/compare/vs-zendesk", tag: "Traditional Helpdesk" },
            { name: "Intercom", link: "/compare/vs-intercom", tag: "Global AI Support" },
            { name: "Drift", link: "/compare/vs-drift", tag: "B2B Chatbot" },
            { name: "Yellow.ai", link: "/compare/vs-yellow", tag: "Enterprise AI" },
            { name: "Kore.ai", link: "/compare/vs-kore", tag: "Enterprise AI" },
            { name: "Haptik", link: "/compare/vs-haptik", tag: "Enterprise AI" },
            { name: "IBM Watson", link: "/compare/vs-ibm", tag: "Legacy AI" },
            { name: "Kasisto", link: "/compare/vs-kasisto", tag: "Banking AI" },
            { name: "Pega", link: "/compare/vs-pega", tag: "Enterprise Software" },
            { name: "Personetics", link: "/compare/vs-personetics", tag: "Banking AI" },
            { name: "Verloop", link: "/compare/vs-verloop", tag: "Support AI" },
        ]
    }
];

export default function CompareHubPage() {
    return (
        <SiteLayout>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 font-semibold rounded-full text-sm mb-6">
                        Competitor Analysis
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Compare SwanDigitals vs <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                            Global Alternatives
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Whether you are outgrowing a basic WhatsApp broadcast tool or looking to escape the expensive "per-seat" pricing of Zendesk, find out why Indian enterprises are switching to SwanDigitals.
                    </p>
                </div>
            </section>

            {/* Hub Directory */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="space-y-24">
                        {comparisonGroups.map((group, index) => (
                            <div key={index} className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                        {group.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900">{group.title}</h2>
                                </div>
                                <p className="text-lg text-slate-600 mb-8 max-w-3xl">{group.description}</p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {group.competitors.map((competitor, idx) => (
                                        <Link 
                                            key={idx} 
                                            href={competitor.link}
                                            className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                                    vs {competitor.name}
                                                </h3>
                                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                                                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 group-hover:-rotate-45 transition-all" />
                                                </div>
                                            </div>
                                            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                                                {competitor.tag}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-center border-t border-slate-800">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-6">Didn't find your current tool?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        We offer custom migration plans for almost any legacy helpdesk or CRM. Talk to our engineering team today to see how easily you can port your data.
                    </p>
                    <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300">
                        Book a Migration Consultation
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
