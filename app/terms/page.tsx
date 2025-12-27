"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <SiteLayout>
            <Hero
                badge="📋 Legal"
                title="Terms of Service"
                subtitle="Last updated: December 17, 2024 | Governed by European Union Law"
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">

                    {/* Important Notice */}
                    <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl mb-12">
                        <h3 className="font-bold text-yellow-800 mb-2">⚠️ Important</h3>
                        <p className="text-yellow-700">
                            Please read these Terms carefully before using our Service. By accessing or using Veridia,
                            you agree to be bound by these Terms. If you do not agree, do not use our Service.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Parties and Definitions</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                These Terms of Service ("Terms") constitute a legally binding agreement between you
                                ("Customer", "you", or "your") and <strong>Veridia AI GmbH</strong>, a company incorporated
                                under the laws of Germany, with its registered office at Kurfürstendamm 21, 10719 Berlin,
                                Germany ("Veridia", "we", "us", or "our").
                            </p>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Key Definitions:</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><strong>"Service"</strong> - The Veridia AI chatbot platform, APIs, and related services</li>
                                    <li><strong>"Customer Data"</strong> - Data you upload or create within the Service</li>
                                    <li><strong>"End Users"</strong> - Individuals who interact with chatbots you create</li>
                                    <li><strong>"Subscription"</strong> - Your paid access to the Service</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service Description</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                Veridia provides an enterprise AI-powered chatbot platform that enables customers to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Build and deploy conversational AI chatbots</li>
                                <li>Integrate with third-party systems (CRM, helpdesk, etc.)</li>
                                <li>Analyze conversation data and performance metrics</li>
                                <li>Deploy on cloud or on-premise infrastructure</li>
                            </ul>
                            <p>
                                Service tiers, features, and limitations are described in our <Link href="/pricing" className="text-purple-600 hover:underline">Pricing Page</Link>.
                            </p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Account Registration</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>To use the Service, you must:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate and complete registration information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                                <li>Have authority to bind your organization if registering on behalf of a company</li>
                                <li>Notify us immediately of any unauthorized access</li>
                            </ul>
                            <p>
                                You are responsible for all activities that occur under your account.
                            </p>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use Policy</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>You agree NOT to use the Service to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Violate any applicable laws, regulations, or third-party rights</li>
                                <li>Transmit harmful, offensive, defamatory, or illegal content</li>
                                <li>Infringe intellectual property rights of others</li>
                                <li>Attempt to gain unauthorized access to systems or data</li>
                                <li>Interfere with or disrupt the Service or servers</li>
                                <li>Resell, redistribute, or sublicense the Service without authorization</li>
                                <li>Use the Service for fraud, phishing, or deceptive practices</li>
                                <li>Process special category data (GDPR Art. 9) without appropriate safeguards</li>
                                <li>Build competing products using our technology</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property Rights</h2>
                        <div className="text-slate-700 space-y-4">
                            <h3 className="text-lg font-semibold">5.1 Our Intellectual Property</h3>
                            <p>
                                The Service, including all software, algorithms, user interfaces, documentation, and
                                branding, is owned by Veridia and protected by copyright, trademark, and other
                                intellectual property laws. We grant you a limited, non-exclusive, non-transferable
                                license to use the Service during your Subscription.
                            </p>

                            <h3 className="text-lg font-semibold mt-6">5.2 Your Intellectual Property</h3>
                            <p>
                                You retain all rights to Customer Data you upload or create. You grant Veridia a
                                limited license to process Customer Data solely to provide the Service.
                            </p>

                            <h3 className="text-lg font-semibold mt-6">5.3 Feedback</h3>
                            <p>
                                If you provide suggestions or feedback, you grant us a royalty-free, perpetual license
                                to use such feedback for any purpose.
                            </p>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Payment Terms</h2>
                        <div className="text-slate-700 space-y-4">
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Billing:</strong> Fees are billed in advance on a monthly or annual basis</li>
                                <li><strong>Currency:</strong> All prices are in EUR unless otherwise specified</li>
                                <li><strong>VAT:</strong> Prices exclude VAT, which will be added where applicable</li>
                                <li><strong>Payment Methods:</strong> Credit card, SEPA direct debit, or wire transfer</li>
                                <li><strong>Refunds:</strong> No refunds for partial periods except as required by law</li>
                                <li><strong>Price Changes:</strong> 30 days notice for price increases</li>
                                <li><strong>Late Payments:</strong> Interest at 9% above ECB base rate</li>
                            </ul>
                            <div className="bg-blue-50 p-4 rounded-lg mt-4">
                                <p><strong>EU Consumer Rights:</strong> If you are a consumer within the EU, you have a 14-day
                                    right of withdrawal from the date of purchase, unless you have begun using the Service.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Service Level Agreement (SLA)</h2>
                        <div className="text-slate-700 space-y-4">
                            <table className="w-full border border-slate-200 rounded-lg overflow-hidden">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="p-3 text-left">Plan</th>
                                        <th className="p-3 text-left">Uptime SLA</th>
                                        <th className="p-3 text-left">Credit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr><td className="p-3">Starter</td><td className="p-3">99.0%</td><td className="p-3">5% per 1% below SLA</td></tr>
                                    <tr><td className="p-3">Professional</td><td className="p-3">99.9%</td><td className="p-3">10% per 0.1% below SLA</td></tr>
                                    <tr><td className="p-3">Enterprise</td><td className="p-3">99.99%</td><td className="p-3">Custom</td></tr>
                                </tbody>
                            </table>
                            <p className="text-sm text-slate-500">
                                SLA excludes scheduled maintenance (with 48h notice) and force majeure events.
                            </p>
                        </div>
                    </div>

                    {/* Section 8 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Protection</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                Data processing is governed by our <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link> and,
                                where applicable, a Data Processing Agreement (DPA) in accordance with GDPR Article 28.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Veridia acts as Data Processor for Customer Data</li>
                                <li>You remain Data Controller for End User data</li>
                                <li>Enterprise customers may request a signed DPA</li>
                                <li>HIPAA customers require a Business Associate Agreement (BAA)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 9 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Warranties and Disclaimers</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                <strong>Service Warranty:</strong> We warrant that the Service will perform substantially
                                in accordance with the documentation.
                            </p>
                            <div className="bg-orange-50 border-2 border-orange-200 p-4 rounded-lg">
                                <p className="font-semibold text-orange-800">AI Output Disclaimer</p>
                                <p className="text-orange-700 text-sm">
                                    AI-generated responses may contain inaccuracies. The Service is a tool to assist,
                                    not replace, human judgment. You are responsible for reviewing AI outputs before
                                    using them in critical applications.
                                </p>
                            </div>
                            <p>
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED "AS IS"
                                WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
                            </p>
                        </div>
                    </div>

                    {/* Section 10 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Limitation of Liability</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Our total liability shall not exceed the fees paid in the 12 months preceding the claim</li>
                                <li>We are not liable for indirect, incidental, special, or consequential damages</li>
                                <li>We are not liable for loss of profits, data, or business opportunities</li>
                            </ul>
                            <p className="text-sm text-slate-500">
                                These limitations do not apply to liability for fraud, gross negligence, or personal injury.
                            </p>
                        </div>
                    </div>

                    {/* Section 11 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Termination</h2>
                        <div className="text-slate-700 space-y-4">
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>By You:</strong> Cancel anytime with 30 days notice</li>
                                <li><strong>By Veridia:</strong> We may terminate for material breach with 30 days notice to cure</li>
                                <li><strong>Immediate Termination:</strong> For illegal use or non-payment after 30 days</li>
                                <li><strong>Data Export:</strong> You may export Customer Data within 30 days of termination</li>
                                <li><strong>Data Deletion:</strong> Customer Data deleted within 60 days of termination</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 12 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Governing Law and Disputes</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                These Terms are governed by the laws of the <strong>Federal Republic of Germany</strong>,
                                excluding its conflict of laws principles.
                            </p>
                            <p>
                                <strong>Dispute Resolution:</strong> Any disputes shall be resolved by the courts of Berlin, Germany.
                                For business customers, we offer mediation before litigation.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg mt-4">
                                <p><strong>EU Consumer Rights:</strong> If you are a consumer in the EU, you may also
                                    bring proceedings in your country of residence and access the EU Online Dispute
                                    Resolution platform at <a href="https://ec.europa.eu/odr" className="text-purple-600 hover:underline">ec.europa.eu/odr</a>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 13 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to Terms</h2>
                        <div className="text-slate-700 space-y-4">
                            <p>
                                We may modify these Terms with 30 days notice. Material changes will be communicated
                                via email and/or notice within the Service. Continued use after changes take effect
                                constitutes acceptance.
                            </p>
                        </div>
                    </div>

                    {/* Section 14 */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Information</h2>
                        <div className="text-slate-700 space-y-4">
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <p><strong>Veridia AI GmbH</strong></p>
                                <p>Kurfürstendamm 21, 10719 Berlin, Germany</p>
                                <p>Email: legal@veridia.ai</p>
                                <p>Phone: +49 30 1234 5678</p>
                                <p>VAT ID: DE123456789</p>
                                <p>Commercial Register: HRB 12345 B (Amtsgericht Berlin-Charlottenburg)</p>
                            </div>
                        </div>
                    </div>

                    {/* Related Policies */}
                    <div className="bg-slate-100 p-6 rounded-xl">
                        <h3 className="font-bold mb-4">Related Policies</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link>
                            <Link href="/cookies" className="text-purple-600 hover:underline">Cookie Policy</Link>
                            <Link href="/security" className="text-purple-600 hover:underline">Security & Compliance</Link>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
