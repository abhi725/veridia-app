"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    Book, Zap, Code, HelpCircle, ChevronRight, ArrowLeft, Phone, CreditCard, 
    Brain, Settings, GitBranch, MessageSquare, Users, BarChart, Shield, 
    Briefcase, ShoppingCart, Cloud, Building, Coffee, Store, Calendar, 
    Headphones, HeartPulse, GraduationCap, Home, Truck
} from 'lucide-react';

const navSections = [
    {
        title: 'Getting Started',
        items: [
            { label: 'Quick Start', href: '/docs/quickstart', icon: Zap },
            { label: 'Platform Guide', href: '/docs/platform', icon: Book },
            { label: 'Integrations', href: '/docs/integrations', icon: Code },
        ],
    },
    {
        title: 'Core Features',
        items: [
            { label: 'Omnichannel Inbox', href: '/docs/omnichannel', icon: MessageSquare },
            { label: 'Customer Data (CRM)', href: '/docs/crm', icon: Users },
            { label: 'Team Operations', href: '/docs/team-operations', icon: Settings },
            { label: 'Reporting & Analytics', href: '/docs/analytics', icon: BarChart },
            { label: 'Security & Compliance', href: '/docs/security', icon: Shield },
        ],
    },
    {
        title: 'AI & Automation',
        items: [
            { label: 'Voice AI', href: '/docs/voice', icon: Phone },
            { label: 'AI Training', href: '/docs/ai-training', icon: Brain },
            { label: 'Automation Rules', href: '/docs/automation', icon: Settings },
            { label: 'n8n Workflows', href: '/docs/workflows', icon: GitBranch },
        ],
    },
    {
        title: 'Industry Use Cases',
        items: [
            { label: 'SaaS & Technology', href: '/docs/use-cases/saas', icon: Briefcase },
            { label: 'Banking & Finance', href: '/docs/use-cases/bfsi', icon: Shield },
            { label: 'E-commerce & Retail', href: '/docs/use-cases/ecommerce', icon: ShoppingCart },
            { label: 'Cloud Infrastructure', href: '/docs/use-cases/cloud', icon: Cloud },
            { label: 'Hospitality & Travel', href: '/docs/use-cases/hospitality', icon: Building },
            { label: 'Restaurants & Delivery', href: '/docs/use-cases/restaurants', icon: Coffee },
            { label: 'Franchises & Retail', href: '/docs/use-cases/franchises', icon: Store },
            { label: 'B2C & Appointments', href: '/docs/use-cases/b2c', icon: Calendar },
            { label: 'Customer Support BPO', href: '/docs/use-cases/support', icon: Headphones },
            { label: 'Healthcare & Clinics', href: '/docs/use-cases/healthcare', icon: HeartPulse },
            { label: 'Education & EdTech', href: '/docs/use-cases/education', icon: GraduationCap },
            { label: 'Real Estate & Property', href: '/docs/use-cases/real-estate', icon: Home },
            { label: 'Logistics & Supply Chain', href: '/docs/use-cases/logistics', icon: Truck },
        ],
    },
    {
        title: 'Plans & Attributes',
        items: [
            { label: 'SwanPlans', href: '/docs/plans', icon: CreditCard },
            { label: 'Custom Attributes', href: '/docs/attributes', icon: Code },
        ],
    },
    {
        title: 'Help & Support',
        items: [
            { label: 'Troubleshooting', href: '/docs/troubleshooting', icon: HelpCircle },
        ],
    },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header bar */}
            <div className="sticky top-0 z-50 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
                    <Link
                        href="/documentation"
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-orange-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Documentation
                    </Link>
                    <span className="text-sm font-medium text-slate-900">SwanDigitals Docs</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex gap-8 py-8">
                    {/* Sidebar */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <nav className="sticky top-24 space-y-8">
                            {navSections.map((section) => (
                                <div key={section.title}>
                                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-1">
                                        {section.items.map((item) => {
                                            const isActive = pathname === item.href;
                                            const Icon = item.icon;
                                            return (
                                                <li key={item.href}>
                                                    <Link
                                                        href={item.href}
                                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                                                            isActive
                                                                ? 'bg-orange-50 text-orange-600 font-medium'
                                                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                                        }`}
                                                    >
                                                        <Icon className="w-4 h-4" />
                                                        {item.label}
                                                        {isActive && (
                                                            <ChevronRight className="w-3 h-3 ml-auto" />
                                                        )}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <div className="bg-white rounded-xl border border-slate-200 p-8 lg:p-12">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}