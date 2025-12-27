"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { useState } from 'react';

export default function CookiesPage() {
    const [preferences, setPreferences] = useState({
        essential: true,
        analytics: true,
        marketing: false,
        preferences: true
    });

    const cookieCategories = [
        {
            name: "Essential Cookies",
            key: "essential",
            required: true,
            description: "These cookies are strictly necessary for the website to function and cannot be disabled.",
            cookies: [
                { name: "__session", purpose: "User session management", duration: "Session", provider: "Veridia" },
                { name: "__csrf", purpose: "Security token for form submissions", duration: "Session", provider: "Veridia" },
                { name: "cookie_consent", purpose: "Stores your cookie preferences", duration: "1 year", provider: "Veridia" }
            ]
        },
        {
            name: "Analytics Cookies",
            key: "analytics",
            required: false,
            description: "These cookies help us understand how visitors interact with our website by collecting anonymous information.",
            cookies: [
                { name: "_ga", purpose: "Google Analytics - distinguishes users", duration: "2 years", provider: "Google" },
                { name: "_gid", purpose: "Google Analytics - distinguishes users", duration: "24 hours", provider: "Google" },
                { name: "_gat", purpose: "Google Analytics - throttle request rate", duration: "1 minute", provider: "Google" }
            ]
        },
        {
            name: "Marketing Cookies",
            key: "marketing",
            required: false,
            description: "These cookies are used to track visitors across websites to display relevant advertisements.",
            cookies: [
                { name: "_fbp", purpose: "Facebook - tracks visits across websites", duration: "3 months", provider: "Facebook" },
                { name: "li_fat_id", purpose: "LinkedIn - identifies members", duration: "30 days", provider: "LinkedIn" },
                { name: "_gcl_au", purpose: "Google Ads - conversion tracking", duration: "3 months", provider: "Google" }
            ]
        },
        {
            name: "Preference Cookies",
            key: "preferences",
            required: false,
            description: "These cookies remember your preferences and settings to enhance your experience.",
            cookies: [
                { name: "theme", purpose: "Stores your theme preference (light/dark)", duration: "1 year", provider: "Veridia" },
                { name: "language", purpose: "Stores your language preference", duration: "1 year", provider: "Veridia" },
                { name: "dismissed_banners", purpose: "Tracks which announcements you've seen", duration: "6 months", provider: "Veridia" }
            ]
        }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🍪 Legal"
                title="Cookie Policy"
                subtitle="Last updated: December 17, 2024 | ePrivacy Directive & GDPR Compliant"
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">

                    {/* Introduction */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                Cookies are small text files that are stored on your device (computer, tablet, or mobile)
                                when you visit a website. They are widely used to make websites work more efficiently,
                                as well as to provide information to the website owners.
                            </p>
                            <p>
                                This Cookie Policy explains how <strong>Veridia AI GmbH</strong> ("Veridia", "we", "us") uses
                                cookies and similar technologies on our website (veridia.ai) and our application, in accordance
                                with the <strong>EU ePrivacy Directive (2002/58/EC)</strong> and the <strong>General Data
                                    Protection Regulation (GDPR)</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Cookie Preferences */}
                    <div className="mb-12 bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">🔧 Manage Your Cookie Preferences</h2>
                        <p className="text-slate-600 mb-6">
                            You can customize which cookies you allow. Essential cookies cannot be disabled as they are
                            necessary for the website to function.
                        </p>
                        <div className="space-y-4">
                            {cookieCategories.map((category, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg">
                                    <div>
                                        <h4 className="font-bold">{category.name}</h4>
                                        <p className="text-sm text-slate-500">{category.cookies.length} cookies</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={preferences[category.key as keyof typeof preferences]}
                                            onChange={(e) => !category.required && setPreferences({
                                                ...preferences,
                                                [category.key]: e.target.checked
                                            })}
                                            disabled={category.required}
                                            className="sr-only peer"
                                        />
                                        <div className={`w-11 h-6 rounded-full peer ${category.required
                                                ? 'bg-green-500'
                                                : preferences[category.key as keyof typeof preferences]
                                                    ? 'bg-green-500'
                                                    : 'bg-slate-300'
                                            } peer-focus:ring-2 peer-focus:ring-purple-300`}>
                                            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${preferences[category.key as keyof typeof preferences] ? 'translate-x-5' : ''
                                                }`}></div>
                                        </div>
                                        {category.required && <span className="ml-2 text-xs text-slate-500">Required</span>}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
                            Save Preferences
                        </button>
                    </div>

                    {/* Types of Cookies */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Cookies We Use</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>We classify cookies based on their purpose and duration:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-800">By Duration</h4>
                                    <ul className="mt-2 text-sm text-blue-700 space-y-1">
                                        <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                                        <li><strong>Persistent cookies:</strong> Remain for a specified period</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-800">By Source</h4>
                                    <ul className="mt-2 text-sm text-purple-700 space-y-1">
                                        <li><strong>First-party:</strong> Set by Veridia</li>
                                        <li><strong>Third-party:</strong> Set by external services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Cookie List */}
                    {cookieCategories.map((category, i) => (
                        <div key={i} className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{3 + i}. {category.name}</h2>
                            <div className="text-slate-700 space-y-4">
                                <p>{category.description}</p>
                                <table className="w-full border border-slate-200 rounded-lg overflow-hidden">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="p-3 text-left text-sm">Cookie Name</th>
                                            <th className="p-3 text-left text-sm">Purpose</th>
                                            <th className="p-3 text-left text-sm">Duration</th>
                                            <th className="p-3 text-left text-sm">Provider</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 text-sm">
                                        {category.cookies.map((cookie, j) => (
                                            <tr key={j}>
                                                <td className="p-3 font-mono text-purple-600">{cookie.name}</td>
                                                <td className="p-3">{cookie.purpose}</td>
                                                <td className="p-3">{cookie.duration}</td>
                                                <td className="p-3">{cookie.provider}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}

                    {/* Legal Basis */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Legal Basis (GDPR)</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>We process cookie data based on:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Consent (Art. 6(1)(a)):</strong> For analytics, marketing, and preference cookies</li>
                                <li><strong>Legitimate Interest (Art. 6(1)(f)):</strong> For essential cookies necessary for the website to function</li>
                            </ul>
                            <p>
                                You can withdraw consent at any time using the cookie preference panel above.
                            </p>
                        </div>
                    </div>

                    {/* Browser Settings */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Managing Cookies via Browser</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                You can also control cookies through your browser settings. Here are links to manage cookies
                                in popular browsers:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { browser: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
                                    { browser: "Firefox", url: "https://support.mozilla.org/kb/cookies" },
                                    { browser: "Safari", url: "https://support.apple.com/guide/safari/sfri11471" },
                                    { browser: "Edge", url: "https://support.microsoft.com/microsoft-edge/cookies" }
                                ].map((item, i) => (
                                    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                                        className="p-4 bg-slate-50 rounded-lg text-center hover:bg-slate-100 transition-colors">
                                        <span className="font-semibold">{item.browser}</span>
                                    </a>
                                ))}
                            </div>
                            <p className="text-sm text-slate-500 mt-4">
                                Note: Disabling cookies may affect the functionality of our website.
                            </p>
                        </div>
                    </div>

                    {/* Your Rights */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Your Rights</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>Under GDPR, you have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access information about cookies we use</li>
                                <li>Withdraw consent at any time</li>
                                <li>Request deletion of cookie data we hold about you</li>
                                <li>Lodge a complaint with a supervisory authority</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>For questions about our use of cookies, contact:</p>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <p><strong>Data Protection Officer</strong></p>
                                <p>Veridia AI GmbH</p>
                                <p>Kurfürstendamm 21, 10719 Berlin, Germany</p>
                                <p>Email: dpo@veridia.ai</p>
                            </div>
                        </div>
                    </div>

                    {/* Related Policies */}
                    <div className="bg-slate-100 p-6 rounded-xl">
                        <h3 className="font-bold mb-4">Related Policies</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link>
                            <Link href="/terms" className="text-purple-600 hover:underline">Terms of Service</Link>
                            <Link href="/security" className="text-purple-600 hover:underline">Security & Compliance</Link>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
