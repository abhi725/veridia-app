"use client";

import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl"></div>
                        <span className="text-2xl font-bold text-slate-900">Veridia AI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <div className="relative group">
                            <button className="text-slate-600 hover:text-slate-900 font-medium">Platform</button>
                            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 left-0 top-full pt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 p-4">
                                <Link href="/platform" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Platform Overview</Link>
                                <Link href="/features" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Features</Link>
                                <Link href="/integrations" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Integrations</Link>
                                <Link href="/security" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Security</Link>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="text-slate-600 hover:text-slate-900 font-medium">Solutions</button>
                            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 left-0 top-full pt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 p-4">
                                <Link href="/solutions" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Overview</Link>
                                <Link href="/solutions/customer-service" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Customer Service</Link>
                                <Link href="/solutions/employee-experience" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Employee Experience</Link>
                                <Link href="/solutions/it-helpdesk" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">IT Helpdesk</Link>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="text-slate-600 hover:text-slate-900 font-medium">Resources</button>
                            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 left-0 top-full pt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 p-4">
                                <Link href="/resources" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Resource Center</Link>
                                <Link href="/blog" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Blog</Link>
                                <Link href="/case-studies" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Case Studies</Link>
                                <Link href="/documentation" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Documentation</Link>
                            </div>
                        </div>

                        <Link href="/pricing" className="text-slate-600 hover:text-slate-900 font-medium">Pricing</Link>
                        <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium">Company</Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/contact" className="text-slate-600 hover:text-slate-900 font-medium">Contact</Link>
                        <Link href="/demo" className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all flex items-center gap-2">
                            Book Demo
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-slate-200">
                        <Link href="/platform" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Platform</Link>
                        <Link href="/solutions" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Solutions</Link>
                        <Link href="/resources" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Resources</Link>
                        <Link href="/pricing" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Pricing</Link>
                        <Link href="/about" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Company</Link>
                        <Link href="/contact" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Contact</Link>
                        <Link href="/demo" className="block mx-4 mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-center">Book Demo</Link>
                    </div>
                )}
            </div>
        </header>
    );
}
