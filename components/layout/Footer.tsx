import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Company */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                            <span className="text-xl font-bold">Veridia AI</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Enterprise AI chatbots that truly understand. Deploy in days, not months.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-slate-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white"><Youtube className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white"><Mail className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="font-bold mb-4">Platform</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/platform" className="hover:text-white">Overview</Link></li>
                            <li><Link href="/features" className="hover:text-white">Features</Link></li>
                            <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
                            <li><Link href="/security" className="hover:text-white">Security</Link></li>
                            <li><Link href="/deployment" className="hover:text-white">Deployment</Link></li>
                            <li><Link href="/api" className="hover:text-white">API & Developers</Link></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="font-bold mb-4">Solutions</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/solutions" className="hover:text-white">Overview</Link></li>
                            <li><Link href="/solutions/customer-service" className="hover:text-white">Customer Service</Link></li>
                            <li><Link href="/solutions/employee-experience" className="hover:text-white">Employee Experience</Link></li>
                            <li><Link href="/solutions/it-helpdesk" className="hover:text-white">IT Helpdesk</Link></li>
                            <li><Link href="/solutions/banking" className="hover:text-white">Banking</Link></li>
                            <li><Link href="/solutions/healthcare" className="hover:text-white">Healthcare</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
                            <li><Link href="/documentation" className="hover:text-white">Documentation</Link></li>
                            <li><Link href="/whitepapers" className="hover:text-white">Whitepapers</Link></li>
                            <li><Link href="/webinars" className="hover:text-white">Webinars</Link></li>
                            <li><Link href="/roi-calculator" className="hover:text-white">ROI Calculator</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/leadership" className="hover:text-white">Leadership</Link></li>
                            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                            <li><Link href="/partners" className="hover:text-white">Partners</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-400">
                        © 2024 Veridia AI. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-400">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
