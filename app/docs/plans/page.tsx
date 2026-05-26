
export default function SwanPlansPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">SwanPlans</h1>

            {/* Introduction */}
            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed mb-4">
                    SwanDigitals offers flexible pricing plans designed for Indian businesses of all sizes.
                    From startup pilots to enterprise deployments with complete data sovereignty.
                </p>
            </section>

            {/* Plan Comparison */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Plan Comparison</h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="border border-slate-300 px-4 py-3 text-left">Feature</th>
                                <th className="border border-slate-300 px-4 py-3 text-center bg-green-50">PILOT<br/><span className="text-sm font-normal">₹10,000</span></th>
                                <th className="border border-slate-300 px-4 py-3 text-center">GROWTH<br/><span className="text-sm font-normal">₹12,000/mo</span></th>
                                <th className="border border-slate-300 px-4 py-3 text-center">PROFESSIONAL<br/><span className="text-sm font-normal">₹28,000/mo</span></th>
                                <th className="border border-slate-300 px-4 py-3 text-center bg-orange-50">ENTERPRISE<br/><span className="text-sm font-normal">Custom</span></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr>
                                <td className="border border-slate-300 px-4 py-2 font-medium">AI Flows</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">3</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">10</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Unlimited</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Unlimited</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2 font-medium">Agent Seats</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">2</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">5</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Unlimited</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Unlimited</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2 font-medium">Monthly Conversations</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">2,000</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">10,000</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">30,000</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Unlimited</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2 font-medium">Channels</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">WhatsApp + Website</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">+2 integrations</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">All channels</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">All channels</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2 font-medium">Voice AI</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">✅</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">✅</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">✅</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2 font-medium">Knowledge Base</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">5 docs</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">50 docs</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Unlimited</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Unlimited</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2 font-medium">Languages</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">English + Hindi</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">5 languages</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">10+ languages</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">50+ languages</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2 font-medium">Deployment</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Cloud</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Cloud</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Private cloud</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">On-premise</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2 font-medium">DPDP 2023 Compliant</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">✅</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">✅</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2 font-medium">SSO</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">✅</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2 font-medium">Custom AI Training</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">✅</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2 font-medium">Dedicated CSM</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">❌</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">✅</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2 font-medium">Support</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Basic</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Standard</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">Priority</td>
                                <td className="border border-slate-300 px-4 py-2 text-center">24/7 Dedicated</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* PILOT Plan Details */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">PILOT Plan — ₹10,000 (One-time)</h2>
                <p className="text-slate-600 mb-6">
                    Perfect for testing AI chatbot capabilities before committing to monthly plans.
                    One-time payment, no recurring billing.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="font-medium text-slate-900 mb-3">What's Included</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-600">
                        <li>✅ 3 AI conversation flows</li>
                        <li>✅ 2 agent seats</li>
                        <li>✅ 2,000 conversations/month</li>
                        <li>✅ WhatsApp + Website channels</li>
                        <li>✅ Basic email support</li>
                        <li>✅ 5 knowledge base documents</li>
                        <li>✅ English + Hindi language</li>
                        <li>✅ 30-day onboarding support</li>
                    </ul>
                </div>
            </section>

            {/* GROWTH Plan Details */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">GROWTH Plan — ₹12,000/month + ₹20,000 setup</h2>
                <p className="text-slate-600 mb-6">
                    For growing businesses ready to scale customer support with AI automation and voice capabilities.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-medium text-slate-900 mb-3">Everything in PILOT, plus:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-600">
                        <li>✅ 10 AI flows</li>
                        <li>✅ 5 agent seats</li>
                        <li>✅ 10,000 conversations/month</li>
                        <li>✅ Voice AI with premium telephony</li>
                        <li>✅ 2 additional integrations</li>
                        <li>✅ 50 knowledge base documents</li>
                        <li>✅ 5 language support</li>
                        <li>✅ n8n workflow automation</li>
                    </ul>
                </div>
            </section>

            {/* Enterprise Features */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Enterprise — Custom Pricing</h2>
                <p className="text-slate-600 mb-6">
                    For organizations requiring complete data sovereignty, compliance readiness, and white-glove service.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-orange-200 bg-orange-50 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">On-Premise Deployment</h3>
                        <p className="text-sm text-slate-600">
                            Deploy SwanDigitals on your own infrastructure for complete data sovereignty.
                            No data leaves your network — critical for BFSI and healthcare compliance.
                        </p>
                    </div>
                    <div className="border border-orange-200 bg-orange-50 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">Custom AI Training</h3>
                        <p className="text-sm text-slate-600">
                            Fine-tune AI models on your specific domain data for superior accuracy.
                            Domain-specific NLU for banking, healthcare, or e-commerce.
                        </p>
                    </div>
                    <div className="border border-orange-200 bg-orange-50 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">DPDP 2023 Compliance</h3>
                        <p className="text-sm text-slate-600">
                            Ready for India's Digital Personal Data Protection Act compliance.
                            Data audit trails, consent management, and right-to-erasure built-in.
                        </p>
                    </div>
                    <div className="border border-orange-200 bg-orange-50 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-3">SSO & Advanced Security</h3>
                        <p className="text-sm text-slate-600">
                            SAML-based SSO integration with enterprise identity providers.
                            Role-based access control, audit logs, and IP whitelisting.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Ready to Get Started?</h2>
                <p className="text-slate-600 mb-6">
                    Choose the plan that fits your needs. Start with PILOT for ₹10,000 or contact us for enterprise pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors text-center">
                        Start with PILOT — ₹10,000
                    </a>
                    <a href="/contact" className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-medium hover:border-orange-500 transition-colors text-center">
                        Contact Sales
                    </a>
                </div>
            </section>
        </>
    );
}
