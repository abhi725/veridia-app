import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail, ArrowRight, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5 mb-4">
                            <img src="/logo.png" alt="SwanDigitals" className="h-8 w-auto" />
                            <span className="text-xl font-bold text-slate-900">SwanDigitals</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-xs">
                            AI-powered customer support for Indian businesses. WhatsApp, Voice, Chat — all in one inbox. Built for DPDP 2023 compliance.
                        </p>
                        <div className="flex gap-3 mb-6">
                            <a href="https://linkedin.com/company/swandigitals" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://twitter.com/swandigitals" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://www.facebook.com/Digitalmarketingcompanyswandigitals/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/digital_marketing_swandigitals/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="mailto:support@swandigitals.com" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                        <a
                            href="https://chat.swandigitals.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-5 py-2 bg-orange-500 hover:bg-orange-500 text-white rounded-full text-sm font-semibold transition-all shadow-orange cursor-pointer"
                        >
                            Sign Up Free
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Platform</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Overview', href: '/platform' },
                                { label: 'Features', href: '/features' },
                                { label: 'Voice AI Agent', href: '/build-ai-voice-agent' },
                                { label: 'Integrations', href: '/integrations' },
                                { label: 'Security', href: '/security' },
                                { label: 'Deployment', href: '/deployment' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link href={href} className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Solutions</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Customer Service', href: '/solutions/customer-service' },
                                { label: 'IT Helpdesk', href: '/solutions/it-helpdesk' },
                                { label: 'Banking & BFSI', href: '/solutions/banking' },
                                { label: 'Insurance', href: '/solutions/insurance' },
                                { label: 'Healthcare', href: '/solutions/healthcare' },
                                { label: 'Overview', href: '/solutions' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link href={href} className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Resources</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Documentation', href: '/documentation' },
                                { label: 'Blog', href: 'https://blog.swandigitals.com', external: true },
                                { label: 'OFAC Sanctions Search', href: '/tools/ofac-sanctions-search' },
                                { label: 'ROI Calculator', href: '/roi-calculator' },
                                { label: 'Pricing', href: '/pricing' },
                                { label: 'Demo', href: '/demo' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Contact Us', href: '/contact' },
                            ].map(({ label, href, external }) => (
                                <li key={href}>
                                    {external ? (
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                                            {label}
                                        </a>
                                    ) : (
                                        <Link href={href} className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                                            {label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compare */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Compare</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'vs Kore.ai', href: '/compare/vs-kore' },
                                { label: 'vs Yellow.ai', href: '/compare/vs-yellow' },
                                { label: 'vs Haptik', href: '/compare/vs-haptik' },
                                { label: 'vs Intercom', href: '/compare/vs-intercom' },
                                { label: 'vs Zendesk', href: '/compare/vs-zendesk' },
                                { label: 'View All Comparisons →', href: '/compare' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link 
                                        href={href} 
                                        className={`text-sm transition-colors ${
                                            href === '/compare' 
                                                ? 'text-orange-500 hover:text-orange-600 font-medium' 
                                                : 'text-slate-500 hover:text-orange-600'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        © 2026 SwanDigitals. All rights reserved. Pune, Maharashtra, India.
                    </p>
                    <div className="flex gap-5 text-xs text-slate-400">
                        <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-slate-600 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}


