"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <SiteLayout>
            <Hero
                badge="🔒 Legal"
                title="Privacy Policy"
                subtitle="Last updated: December 17, 2024 | GDPR & EU Compliant"
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">

                    {/* Quick Links */}
                    <div className="bg-slate-50 p-6 rounded-xl mb-12">
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Data We Collect", "How We Use Data", "Your GDPR Rights", "Data Transfers", "Security", "Contact DPO"].map((link, i) => (
                                <a key={i} href={`#section-${i + 1}`} className="text-sm text-purple-600 hover:underline">{link}</a>
                            ))}
                        </div>
                    </div>

                    {/* Section 1 */}
                    <div id="section-1" className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data Controller Information</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                <strong>Veridia AI GmbH</strong> ("Veridia", "we", "us", or "our") is the data controller responsible for your personal data.
                                We are committed to protecting your privacy in accordance with the <strong>General Data Protection Regulation (GDPR) (EU) 2016/679</strong>
                                and applicable national data protection laws.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p><strong>Data Controller:</strong> Veridia AI GmbH</p>
                                <p><strong>Address:</strong> Kurfürstendamm 21, 10719 Berlin, Germany</p>
                                <p><strong>Email:</strong> privacy@veridia.ai</p>
                                <p><strong>Data Protection Officer (DPO):</strong> dpo@veridia.ai</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div id="section-2" className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>We collect the following categories of personal data:</p>

                            <h3 className="text-lg font-semibold mt-6">2.1 Data You Provide Directly</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Account Data:</strong> Name, email address, company name, job title, phone number</li>
                                <li><strong>Billing Data:</strong> Payment information (processed by Stripe Inc., a PCI DSS Level 1 compliant processor)</li>
                                <li><strong>Content Data:</strong> Chatbot configurations, conversation flows, training data you create</li>
                                <li><strong>Communication Data:</strong> Support requests, feedback, correspondence with us</li>
                            </ul>

                            <h3 className="text-lg font-semibold mt-6">2.2 Data Collected Automatically</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Usage Data:</strong> Features accessed, API calls, session duration, interaction patterns</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, operating system, device identifiers</li>
                                <li><strong>Cookies:</strong> Session cookies, analytics cookies (see our <Link href="/cookies" className="text-purple-600 hover:underline">Cookie Policy</Link>)</li>
                            </ul>

                            <h3 className="text-lg font-semibold mt-6">2.3 End-User Conversation Data</h3>
                            <p>
                                When your customers interact with chatbots you create using our platform, we process conversation data
                                as a <strong>Data Processor</strong> on your behalf. For <strong>on-premise deployments</strong>,
                                this data never leaves your infrastructure and Veridia has no access to it.
                            </p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div id="section-3" className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Legal Basis for Processing (GDPR Art. 6)</h2>
                        <div className="text-slate-700 space-y-4">
                            <table className="w-full border border-slate-200 rounded-lg overflow-hidden">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="p-3 text-left">Purpose</th>
                                        <th className="p-3 text-left">Legal Basis</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr><td className="p-3">Providing the Service</td><td className="p-3">Contract performance (Art. 6(1)(b))</td></tr>
                                    <tr><td className="p-3">Processing payments</td><td className="p-3">Contract performance (Art. 6(1)(b))</td></tr>
                                    <tr><td className="p-3">Customer support</td><td className="p-3">Legitimate interest (Art. 6(1)(f))</td></tr>
                                    <tr><td className="p-3">Service improvements</td><td className="p-3">Legitimate interest (Art. 6(1)(f))</td></tr>
                                    <tr><td className="p-3">Marketing communications</td><td className="p-3">Consent (Art. 6(1)(a))</td></tr>
                                    <tr><td className="p-3">Legal compliance</td><td className="p-3">Legal obligation (Art. 6(1)(c))</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div id="section-4" className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Rights Under GDPR</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>As an EU/EEA data subject, you have the following rights:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { right: "Right of Access (Art. 15)", desc: "Request a copy of your personal data" },
                                    { right: "Right to Rectification (Art. 16)", desc: "Correct inaccurate personal data" },
                                    { right: "Right to Erasure (Art. 17)", desc: "Request deletion of your data ('right to be forgotten')" },
                                    { right: "Right to Restriction (Art. 18)", desc: "Limit how we process your data" },
                                    { right: "Right to Portability (Art. 20)", desc: "Receive your data in machine-readable format" },
                                    { right: "Right to Object (Art. 21)", desc: "Object to processing based on legitimate interest" },
                                    { right: "Right to Withdraw Consent (Art. 7)", desc: "Withdraw consent at any time" },
                                    { right: "Right to Lodge Complaint", desc: "File complaint with supervisory authority" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-sm">{item.right}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4">
                                To exercise any of these rights, contact our DPO at <strong>dpo@veridia.ai</strong>.
                                We will respond within <strong>30 days</strong> as required by GDPR.
                            </p>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div id="section-5" className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. International Data Transfers</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                For cloud deployments, your data may be processed outside the EU/EEA. We ensure adequate protection through:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission</li>
                                <li><strong>EU-US Data Privacy Framework</strong> for US-based sub-processors</li>
                                <li><strong>EU Data Centers:</strong> Frankfurt (AWS), Dublin (Azure), Amsterdam (GCP)</li>
                            </ul>
                            <div className="bg-green-50 p-4 rounded-lg mt-4">
                                <p><strong>🇪🇺 EU-Only Option:</strong> Enterprise customers can choose EU-only data residency where all data is processed and stored exclusively within the European Union.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div id="section-6" className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Security</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>We implement appropriate technical and organizational measures:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Encryption:</strong> AES-256 at rest, TLS 1.3 in transit</li>
                                <li><strong>Certifications:</strong> SOC 2 Type II, ISO 27001, GDPR compliant</li>
                                <li><strong>Access Controls:</strong> Role-based access, multi-factor authentication</li>
                                <li><strong>Auditing:</strong> Comprehensive logging, regular security audits</li>
                                <li><strong>Incident Response:</strong> 72-hour breach notification as per GDPR Art. 33</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
                        <div className="text-slate-700 space-y-4">
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Account Data:</strong> Retained while account is active + 30 days after deletion</li>
                                <li><strong>Billing Data:</strong> Retained for 7 years (legal tax requirements)</li>
                                <li><strong>Conversation Logs:</strong> Configurable retention (default: 90 days)</li>
                                <li><strong>Usage Analytics:</strong> Anonymized after 24 months</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 8 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Sub-Processors</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>We use the following sub-processors:</p>
                            <table className="w-full border border-slate-200 rounded-lg overflow-hidden">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="p-3 text-left">Sub-Processor</th>
                                        <th className="p-3 text-left">Purpose</th>
                                        <th className="p-3 text-left">Location</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr><td className="p-3">AWS (Amazon)</td><td className="p-3">Cloud infrastructure</td><td className="p-3">EU (Frankfurt)</td></tr>
                                    <tr><td className="p-3">Stripe Inc.</td><td className="p-3">Payment processing</td><td className="p-3">EU/US</td></tr>
                                    <tr><td className="p-3">Intercom Inc.</td><td className="p-3">Customer support</td><td className="p-3">EU/US</td></tr>
                                    <tr><td className="p-3">Google Analytics</td><td className="p-3">Website analytics</td><td className="p-3">EU</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 9 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Information</h2>
                        <div className="text-slate-700 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-xl">
                                    <h4 className="font-bold mb-2">Data Protection Officer</h4>
                                    <p>Email: dpo@veridia.ai</p>
                                    <p>Phone: +49 30 1234 5678</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl">
                                    <h4 className="font-bold mb-2">Supervisory Authority</h4>
                                    <p>Berliner Beauftragte für Datenschutz</p>
                                    <p>und Informationsfreiheit</p>
                                    <p>Friedrichstr. 219, 10969 Berlin</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Policies */}
                    <div className="bg-slate-100 p-6 rounded-xl">
                        <h3 className="font-bold mb-4">Related Policies</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/terms" className="text-purple-600 hover:underline">Terms of Service</Link>
                            <Link href="/cookies" className="text-purple-600 hover:underline">Cookie Policy</Link>
                            <Link href="/security" className="text-purple-600 hover:underline">Security & Compliance</Link>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
